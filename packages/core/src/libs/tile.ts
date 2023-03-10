import type Map from "../map";
import { loadBuffer } from "../utils/common";
import Geometry from "./geometry";
import Protobuf from "./protobuf";
import { VectorTile } from "./vectortile";

class Tile {
  loaded: boolean = false;
  data: VectorTile;
  geometry: Geometry;
  constructor(url: string, callback: (...args: any[]) => void) {
    loadBuffer(url, (err: any, data: number[]) => {
      if (!err) {
        this.load(data);
      }
      callback(err);
    });
  }
  load(buffer: number[]) {
    this.data = new VectorTile(new Protobuf(buffer));
    this.loaded = true;
  }
  // 将瓦片添加的地图中
  addToMap(map: Map) {
    // Transfer the geometries to the map's painter.
    this.geometry = new Geometry();

    // 读取获取到的数据，并转换为渲染数据
    var layer = this.data.layers.water;
    if (layer) {
      this.geometry.addLines(layer);
    }

    var layer = this.data.layers.road;
    if (layer) {
      this.geometry.addLines(layer);
    }

    var layer = this.data.layers.building;
    if (layer) {
      this.geometry.addLines(layer);
    }

    // Initialize vertex buffers
    // if (!this.geometry.buffer) {
    //     this.geometry.buffer = geometry.bind(gl);
    // }

    // map.painter
  }

  removeFromMap(map: Map) {
    // todo 这里可以清除瓦片对于的渲染数据
  }
  static fromID(id: number) {
    var z = id % 32,
      dim = 1 << z;
    var xy = (id - z) / 32;
    var x = xy % dim,
      y = (xy - x) / dim;
    return { z: z, x: x, y: y };
  }
  static toID(z: number, x: number, y: number) {
    return ((1 << z) * y + x) * 32 + z;
  }
  static asString = function (id: number) {
    const pos = Tile.fromID(id);
    return pos.z + "/" + pos.x + "/" + pos.y;
  };
  // 获取z值
  static zoom(id: number) {
    return id % 32;
  }
  // 向上 N 级，直到大于传入的zoom，计算父级的瓦片ID 
  static parentWithZoom(id: number, zoom: number) {
    var pos = Tile.fromID(id);
    // 循环查找
    while (pos.z > zoom) {
      pos.z--;
      pos.x = Math.floor(pos.x / 2);
      pos.y = Math.floor(pos.y / 2);
    }
    return Tile.toID(pos.z, pos.x, pos.y);
  }
}

export default Tile;
