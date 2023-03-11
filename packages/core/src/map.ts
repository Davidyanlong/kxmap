import { DEBUG } from './libs/constant';
import Interaction from './libs/interaction';
import GLPainter from './libs/painter';
import { parse_style, zoom_style, z_order } from './libs/style';
import Tile from './libs/tile';
import Transform from './libs/transform';
import MRUCache from './utils/MRUCache';
import { clamp } from './utils/common';
import { _ } from './utils/underscore';

interface IMapConfig {
  canvas: HTMLCanvasElement;
  labels: HTMLElement;
  urls: string[]; // 可用的瓦片请请求地址池
  zooms: number[]; // 缩放的等级列表
  minZoom: number; // 最小等级
  maxZoom: number; // 最大等级
  minTileZoom: number; // 瓦片的最小等级
  maxTileZoom: number; // 瓦片的最大等级
  style: Record<string, any>;
  zoom: number;
  lat: number;
  lon: number;
  container: HTMLDivElement;
}

interface IExtent {
  left: number; // 屏幕坐标的左边界
  top: number; // 屏幕坐标的上边界
  right: number; // 屏幕左边的右边界
  bottom: number; // 屏幕坐标的下边界
}

/**
 * 地图类
 */
class Map {
  tiles: Record<number, Tile>;
  canvas: {
    dom: HTMLCanvasElement;
    scaled: boolean;
  };
  labels: HTMLElement;
  cache: MRUCache;
  urls: string[];
  zooms: number[];
  minZoom: number;
  maxZoom: number;
  minTileZoom: number;
  maxTileZoom: number;
  pixelRatio: number;
  width: number;
  height: number;
  transform: Transform;
  painter: GLPainter;
  interaction: Interaction;
  dirty: boolean;
  style: Record<string, any>;
  tileSize: number;
  lastHash: string;
  container: HTMLDivElement;
  previousScale: number;
  minScale: number;
  maxScale: number;
  private _updateHashTimeout: NodeJS.Timeout | null;

  constructor(config: IMapConfig) {
    this.tileSize = 512;

    // 初始化瓦片数据集
    this.tiles = Object.create(null);
    this.transform = new Transform(this.tileSize);

    this.setupContainer(config.container);
    this.setupPosition(config);

    // 初始化瓦片缓存
    // TODO: Rework MRU cache handling (flickering!)
    this.cache = new MRUCache(0);

    // 初始化瓦片请求地址列表
    this.urls = config.urls || [];

    // 初始化瓦片的等级列表
    this.zooms = config.zooms || [0];
    this.minZoom = config.minZoom || 0;
    this.maxZoom = config.maxZoom || 18;
    this.minScale = Math.pow(2, this.minZoom);
    this.maxScale = Math.pow(2, this.maxZoom);
    this.minTileZoom = _.first(this.zooms) as number;
    this.maxTileZoom = _.last(this.zooms) as number;

    this.setupStyle(config.style);

    this.setupStyle(config.style);
    this.setupPainter();
    this.setupEvents();

    this.dirty = false;
    this.updateStyle();

    this.resize();
    this.update();
  }

  url(id: number) {
    var pos = Tile.fromID(id);
    // x|0 对x向下取整
    return this.urls[(Math.random() * this.urls.length) | 0]
      .replace('{z}', pos.z.toFixed(0))
      .replace('{x}', pos.x.toFixed(0))
      .replace('{y}', pos.y.toFixed(0));
  }
  setupStyle(style: any) {
    this.style = style;
    this.style.layers = parse_style(this.style.layers, this.style.constants);
  }

  setupContainer(container: HTMLDivElement) {
    this.pixelRatio = 1;
    // Scales the canvas for high-resolution displays.
    if ('devicePixelRatio' in window && devicePixelRatio > 1) {
      this.pixelRatio = devicePixelRatio;
    }

    // Setup size
    var rect = container.getBoundingClientRect();
    this.transform.width = rect.width;
    this.transform.height = rect.height;

    // Setup WebGL canvas
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    container.appendChild(canvas);
    this.canvas = {
      dom: canvas,
      scaled: false,
    };

    // Setup SVG overlay
    // TODO

    this.container = container;
  }
  setupPosition(pos: IMapConfig) {
    if (!this.parseHash()) {
      this.setPosition(pos.zoom, pos.lat, pos.lon);
    }

    window.addEventListener(
      'hashchange',
      (ev) => {
        if (location.hash !== this.lastHash) {
          this.parseHash();
          this.updateStyle();
          this.update();
        }
      },
      false,
    );
  }

  setupTransform(pos: IMapConfig) {
    this.transform.width = this.canvas.dom.offsetWidth;
    this.transform.height = this.canvas.dom.offsetHeight;

    if (!this.parseHash()) {
      this.setPosition(pos.zoom, pos.lat, pos.lon);
    }

    window.addEventListener(
      'hashchange',
      (ev) => {
        if (location.hash !== this.lastHash) {
          this.parseHash();
          this.updateStyle();
          this.updateTiles();
          this.rerender();
        }
      },
      false,
    );
  }

  setupPainter() {
    // WebGL 上下文
    const gl = this.canvas.dom.getContext('webgl', { antialias: true, alpha: false, stencil: false });
    if (!gl) {
      alert('Failed to initialize WebGL');
      return;
    }
    // 实例化绘制对象
    this.painter = new GLPainter(gl);
  }
  setupEvents() {
    // 实例化事件对象
    this.interaction = new Interaction(this.container)
      .on('resize', () => {
        this.resize();
        this.update();
      })
      .on('pan', (x: number, y: number) => {
        this.translate(x, y);
        this.update();
      })
      .on('zoom', (delta: number, x: number, y: number) => {
        // Scale by sigmoid of scroll wheel delta.
        var scale = 2 / (1 + Math.exp(-Math.abs(delta / 100) / 4));
        if (delta < 0 && scale !== 0) scale = 1 / scale;
        this.zoom(scale, x, y);
        this.update();
      });
    // .on('click', function(x, y) {
    //     map.click(x, y);
    // });
  }
  // 平移
  translate(x: number, y: number) {
    this.transform.x += x;
    this.transform.y += y;
    console.log('translate', this.transform.x, this.transform.y);
    this.updateHash();
  }
  // 更新瓦片
  updateTiles() {
    // if (DEBUG) console.warn('Map#updateTiles');

    // 当前的地图等级
    let zoom = this.transform.zoom;
    // TODO: Increase maxcoveringzoom. To do this, we have to clip the gl viewport
    // to the actual visible canvas and shift the projection matrix
    // 存在的最大等级
    let maxCoveringZoom = Math.min(this.maxTileZoom, zoom + 3);
    // 存在的最小等级
    let minCoveringZoom = Math.max(this.minTileZoom, zoom - 3);

    // if (DEBUG) console.log('updateTiles=>', zoom,this.transform.scale);

    // 当前屏幕需要获得的所有瓦片Id[]
    let required = this.getCoveringTiles();

    let missing: number[] = [];

    // Add every tile, and add parent/child tiles if they are not yet loaded.
    for (let i = 0; i < required.length; i++) {
      let id = required[i];
      // 创建或加载新的瓦片
      let tile = this.addTile(id);

      if (!tile.loaded) {
        // We need either parent or child tiles that are available immediately
        // 创建了，但还没有下载完成的，存放在missing中
        missing.push(id);
      }
    }

    // console.warn('missing', missing.map(Tile.asString));

    for (let i = 0; i < missing.length; i++) {
      let id = missing[i];
      // 根据id计算z值，zoom等级
      let missingZoom = Tile.zoom(id);
      let z = missingZoom;

      // Climb up all the way to zero
      // 从当前zoom及向上一级爬取，一直到minCoveringZoom，一遍是三层
      while (z > minCoveringZoom) {
        // 上一级的zoom
        z = this.parentZoomLevel(z) as number;
        // 返回父级瓦片的ID
        var parent = Tile.parentWithZoom(id, z);

        // Potentially add items from the MRU cache.
        // 判断瓦片是否在缓存中
        if (this.cache.has(parent)) {
          // 创建或下载瓦片
          this.addTile(parent);
        }
        // 如果瓦片已经下载，并解析完成
        if (this.tiles[parent] && this.tiles[parent].loaded) {
          // Retain the existing parent tile
          // 如果瓦片不在必需要的瓦片数据集中
          if (required.indexOf(parent) < 0) {
            // 存放到必需瓦片数据集中
            required.push(parent);
          }
          break;
        }
      }

      // Go down for max 4 zoom levels to find child tiles.
      z = missingZoom;
      // 向上查找下一个zoom等级的瓦片，
      while (z < maxCoveringZoom) {
        // 获取到下一级的zoom
        z = this.childZoomLevel(z) as number;

        // Go through the MRU cache and try to find existing tiles that are
        // children of this tile.
        // cache 中存放的所有Tile ID 数组
        const keys = this.cache.keys();

        for (let j = 0, len = keys.length; j < len; j++) {
          let childID = keys[j] as number;
          // 计算这个Tile ID 的父级ID是否与当前的父级ID一致
          let parentID = Tile.parentWithZoom(childID, missingZoom);
          // 如果是就是这个瓦片的子集
          if (parentID == id) {
            // 创建 或 解析瓦片
            this.addTile(childID);
          }
        }

        // Go through all existing tiles and retain those that are children
        // of the current missing tile.
        // 遍历所有已有瓦片集中的瓦片
        for (let childID in this.tiles) {
          let _childID = +childID;
          // 计算这个Tile ID 的父级ID是否与当前的父级ID一致
          let parentID = Tile.parentWithZoom(_childID as number, missingZoom);
          // 如果是就是这个瓦片的子集 并且加载完成
          if (parentID == id && this.tiles[_childID].loaded) {
            // Retain the existing child tile
            if (required.indexOf(_childID) < 0) {
              // 存放到必需的瓦片列表中
              required.push(_childID);
            }
          }
        }
      }
    }

    // TODO: only retain tiles thare are close enough to the current zoom levle
    // 返回所有的瓦片ID，并转换为数字
    let existing = Object.keys(this.tiles).map(parseFloat);
    // 对比需要请求的瓦片与已经存在的瓦片，哪些是不需要的
    let remove = _.difference(existing, required);
    // 移除不需要的瓦片
    _.each(remove, (id) => {
      // 根据 Tile  Id 移除瓦片
      this.removeTile(id);
    });
  }
  // 根据当前等级获取父级的zoom
  parentZoomLevel(zoom: number) {
    for (var i = this.zooms.length - 1; i >= 0; i--) {
      if (this.zooms[i] < zoom) {
        return this.zooms[i];
      }
    }
    return null;
  }
  // 根据当前等级获取下一级的room
  childZoomLevel(zoom: number) {
    // 这里的zooms一定是一个从小到大的序列
    for (var i = 0; i < this.zooms.length; i++) {
      if (this.zooms[i] > zoom) {
        return this.zooms[i];
      }
    }
    return null;
  }
  // 获取当前等级下的瓦片
  getCoveringTiles() {
    var extent = this.getPixelExtent();
    var z = this.coveringZoomLevel();
    if (DEBUG) console.log('Map#z', z);
    // 该等级下的纬度
    var dim = 1 << z;
    // 横向 与纵向 的瓦片 范围
    var bounds = {
      minX: clamp(Math.floor(extent.left / this.transform.size), 0, dim - 1),
      minY: clamp(Math.floor(extent.bottom / this.transform.size), 0, dim - 1),
      maxX: clamp(Math.floor(extent.right / this.transform.size), 0, dim - 1),
      maxY: clamp(Math.floor(extent.top / this.transform.size), 0, dim - 1),
    };
    // if (DEBUG) console.log('Map#bounds', bounds);

    var tiles: number[] = [];
    // 根据横向与纵向的范围，获取瓦片ID
    for (var x = bounds.minX; x <= bounds.maxX; x++) {
      for (var y = bounds.minY; y <= bounds.maxY; y++) {
        tiles.push(Tile.toID(z, x, y));
      }
    }

    return tiles;
  }
  getPixelExtent(): IExtent {
    // Convert the pixel values to the next higher zoom level's tiles.
    const zoom = this.coveringZoomLevel();
    const factor = Math.pow(2, zoom) / this.transform.scale;
    return {
      left: -this.transform.x * factor,
      top: -(this.transform.y - this.transform.height) * factor,
      right: -(this.transform.x - this.transform.width) * factor,
      bottom: -this.transform.y * factor,
    };
  }
  // 当前可用的zoom等级
  coveringZoomLevel() {
    const zoom = this.transform.zoom;
    for (let i = this.zooms.length - 1; i >= 0; i--) {
      if (this.zooms[i] <= zoom) {
        return this.zooms[i];
      }
    }
    return 0;
  }
  // 创建或获取一个瓦片
  addTile(id: number) {
    // tiles数据集中是否存在，存在直接返回
    if (this.tiles[id]) return this.tiles[id];

    // 从缓存中获取
    let tile = this.cache.get<Tile>(id);
    if (tile) {
      //TODO: add log system
      console.warn('adding from mru', Tile.asString(id));
      // 将瓦片的相关数据转换为渲染数据
      tile.addToMap(this);
    } else {
      // 创建新的tiles
      tile = this.tiles[id] = new Tile(this.url(id), (err) => {
        if (err) {
          console.warn(err.stack);
        } else {
          // 将瓦片的相关数据转换为渲染数据
          tile!.addToMap(this);
          // 更新瓦片，这里可以判断瓦片的loaded 情况，并加入到必需的瓦片列表中
          this.update();
        }
      });
    }

    return tile;
  }
  // 根据ID移除瓦片
  removeTile(id: number) {
    var tile = this.tiles[id];
    if (tile) {
      tile.removeFromMap(this);

      // Only add it to the MRU cache if it's already available.
      // Otherwise, there's no point in retaining it.
      // 如果已经解析完成，存放到缓存中保留
      if (tile.loaded) {
        this.cache.add(id, tile);
      } else {
        // TODO: cancel tile loading
      }

      delete this.tiles[id];
    }
  }
  render = () => {
    // if (DEBUG) console.time('Map#render');

    // 清屏
    this.painter.clear();

    // TODO: 渲染中不应该加入排序，这个顺序应该在初始化的时候就排列，每次发生变更再排列
    // Iteratively paint every tile.
    var order = Object.keys(this.tiles) as unknown as number[];
    // 瓦片根据zoom层级排序
    order.sort(z_order);
    for (var i = 0; i < order.length; i++) {
      var id = order[i];
      var tile = this.tiles[id];
      // 如果瓦片已经解析完成，渲染瓦片
      if (tile.loaded) {
        this.renderTile(tile, id);
      }
    }

    this.dirty = false;
  };
  renderTile(tile: Tile, id: number, style?: any) {
    // 通过Tile ID 计算 z y x 值
    var pos = Tile.fromID(id);
    var z = pos.z,
      x = pos.x,
      y = pos.y;

    this.painter.viewport(z, x, y, this.transform, this.transform.size, this.pixelRatio);
    // 绘制瓦片
    this.painter.draw(tile, this.style.zoomed_layers);
  }
  zoom(scale: number, x: number, y: number) {
    var posX = x - this.transform.x;
    var posY = y - this.transform.y;

    let oldScale = this.transform.scale;

    this.transform.scale = Math.min(this.maxScale, Math.max(0.5, this.transform.scale * scale));

    if (this.transform.scale !== oldScale) {
      scale = this.transform.scale / oldScale;
      this.transform.x -= posX * scale - posX;
      this.transform.y -= posY * scale - posY;

      // Only enable zooming mode when using a mode that is more granular than
      // the coarse scroll wheel intervals.
      // Wait 6 frames (== 100ms) until we disable zoom mode again
      // this.animating = 15;
      //zooming = (scale != oldScale && !wheel) ? 6 : 0;
      this.updateStyle();
      this.updateHash();
    }
  }
  rerender() {
    if (!this.dirty) {
      this.dirty = true;
      (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame)(
        this.render,
      );
    }
  }
  updateStyle() {
    this.style.zoomed_layers = zoom_style(this.style.layers, this.style.constants, this.transform.zoom);
  }
  updateHash() {
    if (this._updateHashTimeout) {
      clearTimeout(this._updateHashTimeout);
    }

    this._updateHashTimeout = setTimeout(() => {
      var hash = '#' + (this.transform.z + 1).toFixed(2) + '/' + this.transform.lat.toFixed(6) + '/' + this.transform.lon.toFixed(6);
      this.lastHash = hash;
      location.replace(hash);
      this._updateHashTimeout = null;
    }, 100);
  }
  setPosition(zoom: number, lat: number, lon: number) {
    this.transform.zoom = zoom - 1;
    this.transform.lat = lat;
    this.transform.lon = lon;
  }
  parseHash() {
    var match = location.hash.match(/^#(\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (match) {
      this.setPosition(+match[1], +match[2], +match[3]);
      return true;
    }
  }
  update() {
    this.updateTiles();
    this.rerender();
    this.previousScale = this.transform.scale;
  }
  resize() {
    this.pixelRatio = window.devicePixelRatio || 1;

    var width = this.container.offsetWidth;
    var height = this.container.offsetHeight;

    // Request the required canvas size taking the pixelratio into account.
    this.canvas.dom.width = this.pixelRatio * width;
    this.canvas.dom.height = this.pixelRatio * height;

    // Maintain the same canvas size, potentially downscaling it for HiDPI displays
    this.canvas.dom.style.width = width + 'px';
    this.canvas.dom.style.height = height + 'px';

    // Move the x/y transform so that the center of the map stays the same when
    // resizing the viewport.
    if (this.transform.width !== null && this.transform.height !== null) {
      this.transform.x += (width - this.transform.width) / 2;
      this.transform.y += (height - this.transform.height) / 2;
    }

    this.transform.width = width;
    this.transform.height = height;

    this.painter.resize(width, height);
  }
}

export default Map;
