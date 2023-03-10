import Geometry, { verticesType ,lineType} from './geometry';
import  Protobuf from './protobuf'
class VectorTile{
    _buffer:Protobuf
    layers:Record<string,VectorTileLayer>
    constructor(buffer:Protobuf, end?:number){
        this._buffer = buffer;
    this.layers = {};

    if (typeof end === 'undefined') {
        end = buffer.length;
    }

    var val, tag;
    while (buffer.pos < end) {
        val = buffer.readVarint();
        tag = val >> 3;
        if (tag == 3) {
            var layer_bytes = buffer.readVarint();
            var layer_end = buffer.pos + layer_bytes;
            var layer = new VectorTileLayer(buffer, layer_end);
            if (layer.length) {
                this.layers[layer.name as string] = layer;
            }
            buffer.pos = layer_end;
        } else {
            buffer.skip(val);
        }
    }
    }
}

class VectorTileLayer{
    _buffer:Protobuf
    version:number
    name:string|null
    extent:number
    length:number
    _keys:string[]
    _values:number[]
    _features:any[]
    vertex_count:number
    constructor(buffer:Protobuf, end?:number){
    this._buffer = buffer;

    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    this._keys = [];
    this._values = [];
    this._features = [];

    if (typeof end === 'undefined') {
        end = buffer.length;
    }

    var val, tag;
    while (buffer.pos < end) {
        val = buffer.readVarint();
        tag = val >> 3;
        if (tag == 15) {
            this.version = buffer.readVarint();
        } else if (tag == 1) {
            this.name = buffer.readString();
        } else if (tag == 5) {
            this.extent = buffer.readVarint();
        } else if (tag == 2) {
            this.length++;
            this._features.push(buffer.pos);
            buffer.skip(val);
        } else if (tag == 3) {
            this._keys.push(buffer.readString());
        } else if (tag == 4) {
            this._values.push(VectorTileFeature.readValue(buffer) as number);
        } else if (tag == 6) {
            this.vertex_count = buffer.readVarint();
              } else {
            console.warn('skipping', tag);
            buffer.skip(val);
        }
    }
    }
}

class VectorTileFeature{
    _buffer:Protobuf
    _type:number
    extent:number
    _geometry:number
    _id:number
    _triangulation:number
    vertex_count:number
    constructor(buffer:Protobuf, end:number, extent:number, keys:(keyof VectorTileFeature)[], values:any[]){
        this._buffer = buffer;
        this._type = 0;
        this._geometry = -1;
         this._triangulation = -1;
        this.extent = extent;
    
        if (typeof end === 'undefined') {
            end = buffer.length;
        }
    
        var val, tag;
        while (buffer.pos < end) {
            val = buffer.readVarint();
            tag = val >> 3;
    
            if (tag == 1) {
                this._id = buffer.readVarint();
            } else if (tag == 2) {
                var tag_end = buffer.pos + buffer.readVarint();
                while (buffer.pos < tag_end) {
                    var key = keys[buffer.readVarint()];
                    var value = values[buffer.readVarint()];
                    this[key] = value;
                }
            } else if (tag == 4) {
                this._geometry = buffer.pos;
                buffer.skip(val);
            }
            else if (tag == 5) {
                this._triangulation = buffer.pos;
                buffer.skip(val);
            } else if (tag == 6) {
                this.vertex_count = buffer.readVarint(); 
            }else {
                buffer.skip(val);
            }
        } 
    }
    drawNative(geometry:Geometry) {
        var buffer = this._buffer;
    
        buffer.pos = this._geometry;
    
        var bytes = buffer.readVarint();
        var end = buffer.pos + bytes;
    
        var cmd = 1;
        var length = 0;
        var x = 0, y = 0;
    
    
        var vertices = geometry.vertices;
        var line = geometry.lineElements;
        var fill = geometry.fillElements;
    
        var start = vertices.pos / 2;
        var begin = 0;
        while (buffer.pos < end) {
            if (!length) {
                var cmd_length = buffer.readVarint();
                cmd = cmd_length & 0x7;
                length = cmd_length >> 3;
            }
    
            length--;
    
            if (cmd == 1 || cmd == 2) {
                x += buffer.readSVarint();
                y += buffer.readSVarint();
    
                if (vertices.pos + 2 >= vertices.data.length) vertices = realloc(vertices) as verticesType;
                vertices.data[vertices.pos++] = x;
                vertices.data[vertices.pos++] = y;
    
                if (cmd == 1) {
                    // moveTo
                    if (line.pos + 2 >= line.data.length) line = realloc(line) as lineType;
                    line.data[line.pos++] = 0;
                    line.data[line.pos++] = vertices.idx;
                    begin = vertices.idx;
                } else {
                    // lineTo
                    if (line.pos + 1 >= line.data.length) line = realloc(line) as lineType;
                    line.data[line.pos++] = vertices.idx;
                }
    
                vertices.idx++;
                if (vertices.idx >= 65536) return;
            } else if (cmd == 7) {
                // closePolygon
                if (line.pos + 2 >= line.data.length) line = realloc(line) as lineType;
                line.data[line.pos++] = begin;
            } else {
                throw new Error('unknown command ' + cmd);
            }
        }
    
        if (this._triangulation >= 0) {
            buffer.pos = this._triangulation;
    
            // Duplicate the last coordinate
            if (fill.pos) {
                if (fill.pos + 1 >= fill.data.length) fill = realloc(fill) as lineType;
                fill.data[fill.pos++] = fill.data[fill.pos - 1];
            }
    
            bytes = buffer.readVarint();
            end = buffer.pos + bytes;
            var prev = 0;
            while (buffer.pos < end) {
                var index = buffer.readSVarint();
                if (fill.pos + 1 >= fill.data.length) fill = realloc(fill) as lineType;
                fill.data[fill.pos++] = start + index + prev;
                prev += index;
            }
        }
    
        geometry.vertices = vertices;
        geometry.lineElements = line;
        geometry.fillElements = fill;
    }
    static readValue(buffer:Protobuf){
        var value = null;

    var bytes = buffer.readVarint();
    var val, tag;
    var end = buffer.pos + bytes;
    while (buffer.pos < end) {
        val = buffer.readVarint();
        tag = val >> 3;

        if (tag == 1) {
            value = buffer.readString();
        } else if (tag == 2) {
            throw new Error('read float');
        } else if (tag == 3) {
            value = buffer.readDouble();
        } else if (tag == 4) {
            value = buffer.readVarint();
        } else if (tag == 5) {
            throw new Error('read uint');
        } else if (tag == 6) {
            value = buffer.readSVarint();
        } else if (tag == 7) {
            value = Boolean(buffer.readVarint());
        } else {
            buffer.skip(val);
        }
    }

    return value;
    }
}


function realloc(buffer:verticesType | lineType, size?:number) {
    if (!size) size = (buffer.data.length + 1024) * 2;
    const newBuffer:unknown= 'idx' in buffer? {
        //@ts-ignore
        data:new buffer.data.constructor(size).set(buffer),
        pos:buffer.pos,
        idx:buffer.idx
    } :{
        //@ts-ignore
        data:new buffer.data.constructor(size).set(buffer),
        pos:buffer.pos,
    }
    return newBuffer;
}

export {
    VectorTile,
    VectorTileLayer
}