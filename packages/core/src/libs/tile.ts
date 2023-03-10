import type Map from "../map";
import { loadBuffer } from "../utils/common";
import Geometry from "./geometry";
import Protobuf from "./protobuf";
import { VectorTile } from "./vectortile";

class Tile {
  loaded: boolean = false;
  data: VectorTile;
  geometry: Geometry;
  layers:any
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
    var geometry = this.geometry = new Geometry();

    var layers = this.layers = {};

    var tile = this.data;
    map.style.mapping.forEach(function(mapping:any) {
      debugger
        var layer = tile.layers[mapping.layer];
        if (layer) {
            var buckets:Record<string,any> = {}; 
            for (var key in mapping.sort) buckets[key] = [];

            for (var i = 0; i < layer.length; i++) {
                var feature = layer.feature(i);
                for (var key in mapping.sort) {
                    if (mapping.sort[key] === true ||
                        mapping.sort[key].indexOf(feature[mapping.field]) >= 0) {
                        buckets[key].push(feature);
                        break;
                    }
                }
            }

            // All features are sorted into buckets now. Add them to the geometry
            // object and remember the position/length
            for (var key in buckets) {
                var layer = layers[key] = {
                    line: geometry.lineOffset(),
                    fill: geometry.fillOffset()
                };

                // Add all the features to the geometry
                var bucket = buckets[key];
                for (var i = 0; i < bucket.length; i++) {
                    bucket[i].drawNative(geometry);
                }

                layer.lineEnd = geometry.lineOffset();
                layer.fillEnd = geometry.fillOffset();
            }
        }
    });
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
