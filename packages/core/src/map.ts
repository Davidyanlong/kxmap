import { DEBUG } from "./libs/constant";
import Interaction from "./libs/interaction";
import GLPainter from "./libs/painter";
import Tile from "./libs/tile";
import MRUCache from "./utils/MRUCache";
import { clamp } from "./utils/common";
import { _ } from "./utils/underscore";

interface IMapConfig {
  urls: string[]; // 可用的瓦片请请求地址池
  zooms: number[]; // 缩放的等级列表
  minZoom: number; // 最小等级
  maxZoom: number; // 最大等级
  minTileZoom: number; // 瓦片的最小等级
  maxTileZoom: number; // 瓦片的最大等级
}

export interface ITransform {
  x: number; // 屏幕坐标x
  y: number; // 屏幕坐标Y
  scale: number; // 缩放比例
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
  transform: ITransform;
  painter: GLPainter;
  interaction: Interaction;
  dirty: boolean;

  constructor(canvas: HTMLCanvasElement, config: IMapConfig) {
    // 初始化瓦片数据集
    this.tiles = Object.create(null);

    // 初始化画布
    this.canvas = {
      dom: canvas,
      scaled: false,
    };

    // 初始化瓦片缓存
    this.cache = new MRUCache(32);

    // 初始化瓦片请求地址列表
    this.urls = config.urls || [];

    // 初始化瓦片的等级列表
    this.zooms = config.zooms || [0];
    this.minZoom = config.minZoom || 0;
    this.maxZoom = config.maxZoom || 19;
    this.minTileZoom = _.first(this.zooms) as number;
    this.maxTileZoom = _.last(this.zooms) as number;
    // this.zoom = config.zoom || 0;
    // this.lat = config.lat || 0;
    // this.lon = config.lon || 0;

    // 初始化画布
    this.setupCanvas();
    // 初始化transform
    this.setupTransform();
    // 初始化WebGL上下文，绘制类
    this.setupPainter();
    // 初始化相关事件，移动，缩放等
    this.setupEvents();

    this.dirty = false;
    this.updateTiles();
  }

  url(id: number) {
    var pos = Tile.fromID(id);
    // x|0 对x向下取整
    return this.urls[(Math.random() * this.urls.length) | 0]
      .replace("{z}", pos.z.toFixed(0))
      .replace("{x}", pos.x.toFixed(0))
      .replace("{y}", pos.y.toFixed(0));
  }

  setupCanvas() {
    if (DEBUG) console.time("Map#setupCanvas");

    // Scales the canvas for high-resolution displays.
    this.pixelRatio = 1;
    if (
      "devicePixelRatio" in window &&
      devicePixelRatio > 1 &&
      !this.canvas.scaled
    ) {
      const pixelRatio = (this.pixelRatio = window.devicePixelRatio);
      // canvas对象
      let canvas = this.canvas.dom;

      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      // 乘以屏幕像素率就不模糊
      canvas.width = canvas.offsetWidth * pixelRatio;
      canvas.height = canvas.offsetHeight * pixelRatio;

      this.canvas.scaled = true;
    }

    if (DEBUG) console.timeEnd("Map#setupCanvas");
  }

  setupTransform() {
    if (DEBUG) console.time("Map#setupTransform");

    // 地图大小
    this.width = this.canvas.dom.offsetWidth;
    this.height = this.canvas.dom.offsetHeight;
    // this.transform = {
    //     x: (this.width - 512) / 2,
    //     y: (this.height - 512) / 2,
    //     scale: 2
    // };

    // 初始化
    this.transform = {
      x: 0,
      y: 0,
      scale: 1,
    };

    if (DEBUG) console.timeEnd("Map#setupTransform");
  }

  setupPainter() {
    if (DEBUG) console.time("Map#setupPainter");
    // WebGL 上下文
    const gl = this.canvas.dom.getContext("webgl", { antialias: true });
    if (!gl) {
      alert("Failed to initialize WebGL");
      return;
    }
    // 实例化绘制对象
    this.painter = new GLPainter(gl);
    if (DEBUG) console.timeEnd("Map#setupPainter");
  }
  setupEvents() {
    // 实例化事件对象
    this.interaction = new Interaction(this.canvas.dom)
      .on("pan", (x: number, y: number) => {
        this.translate(x, y);
        this.updateTiles();
        this.rerender();
      })
      .on("zoom", (delta: number, x: number, y: number) => {
        // Scale by sigmoid of scroll wheel delta.
        var scale = 2 / (1 + Math.exp(-Math.abs(delta / 100) / 4));
        if (delta < 0 && scale !== 0) scale = 1 / scale;
        this.zoom(scale, x, y);
        this.updateTiles();
        this.rerender();
      });
    // .on('click', function(x, y) {
    //     map.click(x, y);
    // });
    // console.warn('setupEvents');
  }
  // 平移
  translate(x: number, y: number) {
    this.transform.x += x;
    this.transform.y -= y;
  }
  // 更新瓦片
  updateTiles() {
    const map = this;
    // if (DEBUG) console.warn('Map#updateTiles');
    
    // 当前的地图等级
    let zoom = Math.log(this.transform.scale) / Math.log(2);
    // 存在的最大等级
    let maxCoveringZoom = Math.min(this.maxTileZoom, zoom + 3);
    // 存在的最小等级
    let minCoveringZoom = Math.max(this.minTileZoom, zoom - 3);

    // if (DEBUG) console.log('updateTiles=>', zoom,this.transform.scale);

    // 当前屏幕需要获得的所有瓦片Id[]
    let required = this.getCoveringTiles(this.transform.scale);
    if (DEBUG) console.log('required=>', zoom, required);

     let missing:number[] = [];

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
        
        for (let j = 0,len =keys.length ; j < len ; j++) {
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
          let _childID= +childID;
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
    _.each(remove, function (id) {
      // 根据 Tile  Id 移除瓦片
      map.removeTile(id);
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
  getCoveringTiles(scale: number) {
    // 单个瓦片的大小
    var size = 256;
    // 瓦片可绘制的范围
    var extent = this.getPixelExtent(this.transform);
    // if (DEBUG) console.log('Map#extent',extent);

    // 地图的缩放等级
    var z = this.coveringZoomLevelWithScale(scale);
    if (DEBUG) console.log('Map#z', z);
    // 该等级下的纬度
    var dim = 1 << z;
    // 横向 与纵向 的瓦片 范围
    var bounds = {
      minX: clamp(Math.floor(extent.left / size), 0, dim - 1),
      minY: clamp(Math.floor(extent.bottom / size), 0, dim - 1),
      maxX: clamp(Math.floor(extent.right / size), 0, dim - 1),
      maxY: clamp(Math.floor(extent.top / size), 0, dim - 1),
    };
    // if (DEBUG) console.log('Map#bounds', bounds);

    var tiles: number[] = [];
    // 根据横向与纵向的范围，获取瓦片ID
    for (var x = bounds.minX; x <= bounds.maxX; x++) {
      for (var y = bounds.minY; y <= bounds.maxY; y++) {
        tiles.push(Tile.toID(z, x, dim - y - 1));
      }
    }

    return tiles;
  }
  getPixelExtent(transform: ITransform): IExtent {
    // Convert the pixel values to the next higher zoom level's tiles.
    var zoom = this.coveringZoomLevelWithScale(transform.scale);
    var factor = (1 << zoom) / transform.scale;
    return {
      left: -transform.x * factor,                     // 瓦片绘制区域左边的位置，最左边是0， 向右一定 -偏移量   向左移动  +偏移量
      top: -(transform.y - this.height) * factor,      // 瓦片绘制区域上面的位置，最下面是屏幕高度， 向上移动 +偏移量   向下移动  -偏移量
      right: -(transform.x - this.width) * factor,     // 瓦片绘制区域右面的位置，最右面是屏幕宽度， 向右移动 -偏移量   向左移动  +偏移量
      bottom: -transform.y * factor,                   // 瓦片绘制区域下面的位置，最下面是0， 向上移动 -偏移量   向下移动  +偏移量
    };
  }
  // scale 计算 zoom
  coveringZoomLevelWithScale(scale: number) {
    var zoom = Math.floor(Math.log(scale) / Math.log(2));
    return this.coveringZoomLevel(zoom);
  }
  // 当前可用的zoom等级
  coveringZoomLevel(zoom: number) {
    for (let i = this.zooms.length - 1; i >= 0; i--) {
      if (this.zooms[i] <= zoom) {
        return this.zooms[i];
      }
    }
    return 0;
  }
  // 创建或获取一个瓦片
  addTile(id: number) {
    // console.warn('add', Tile.asString(id));
    // if (DEBUG) console.time('Map#addTile', Tile.asString(id));
    // tiles数据集中是否存在，存在直接返回
    if (this.tiles[id]) return this.tiles[id];

    // 从缓存中获取
    let tile = this.cache.get<Tile>(id);
    if (tile) {
      //TODO: add log system
      console.warn("adding from mru", Tile.asString(id));
      // 将瓦片的相关数据转换为渲染数据
      tile.addToMap(this);
    } else {
      // 创建新的tiles 
      tile = this.tiles[id] = new Tile(this.url(id),  (err)=> {
        if (err) {
          console.warn(err.stack);
        } else {
          // 将瓦片的相关数据转换为渲染数据
          tile!.addToMap(this);
          // 更新瓦片，这里可以判断瓦片的loaded 情况，并加入到必需的瓦片列表中
          this.updateTiles();
          // 执行渲染
          this.rerender();
        }
      });
    }

    return tile;
  }
  // 根据ID移除瓦片
  removeTile(id: number) {
    // console.warn('remove', Tile.asString(id));
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

    this.dirty = false;
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

    //     // TODO: Add subpixel positioning (slightly offset ortho projection to accomodate)
    //     // TODO: Draw parent tile where no child tiles exist
    //     // TODO: Check whether offsetting a tile by the current zoom level's map width
    //     //       is still within the viewport. If it is, draw it again at that position.

    // if (DEBUG) console.timeEnd('Map#render');
  };
  renderTile(tile: Tile, id: number) {
    // 通过Tile ID 计算 z y x 值
    var pos = Tile.fromID(id);
    var z = pos.z,
      x = pos.x,
      y = pos.y;

    // console.warn(tile);

    // Find out what position we should paint this at.

    // var zoom = Math.floor(Math.log(this.transform.scale) / Math.log(2));
    // var zoom = z;

    // Get pixel offset of top left corner of viewport
    // var left = 256 * this.transform.scale * this.transform.x - this.width / 2;
    // var top = 256 * this.transform.scale * this.transform.y - this.height / 2;
    // var size = this.transform.scale * 256 / (1 << zoom);

    // Get pixel offset of the tile to render in global canvas.
    // var viewX = x * size - left;
    // var viewY = ((1 << z) - 1 - y) * size - top;

    // var viewX = this.transform.x + size * x;
    // var viewY = this.transform.y + size * y;

    // console.warn(viewX, viewY, size);
    // 根据瓦片zxy,以及transform, 屏幕像素比，确实视口的大小
    this.painter.viewport(z, x, y, this.transform, this.pixelRatio);
    // 绘制瓦片
    this.painter.draw(tile, z);

    //     // Go through the stylesheet, for each layer, render all loaded tiles.
    //     for (var i = 0; i < style.length; i++) {
    //         if (style[i].source in tile.layers) {
    //             var layer = tile.layers[style[i].source];
    //             this.painter.draw(layer);
    //         } else {
    //             console.warn('Tile ' + id + ' is missing layer ' + style[i].source);
    //         }
    //     }
  }
  zoom(scale: number, anchorX: number, anchorY: number) {
    anchorY = this.height - anchorY - 1;

    var posX = anchorX - this.transform.x;
    var posY = anchorY - this.transform.y;

    var oldScale = this.transform.scale;
    this.transform.scale = Math.min(
      1 << this.maxZoom,
      Math.max(1 << this.minZoom, this.transform.scale * scale)
    );

    scale = this.transform.scale / oldScale;
    this.transform.x -= posX * scale - posX;
    this.transform.y -= posY * scale - posY;
  }
  rerender() {
    if (!this.dirty) {
      this.dirty = true;
      (
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      )(this.render);
    }
  }
}

function z_order(a: number, b: number) {
  return (a % 32) - (b % 32);
}

export default Map;
