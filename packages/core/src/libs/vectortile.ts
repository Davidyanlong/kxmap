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
    constructor(buffer:Protobuf, end:number, extent:number, keys:(keyof VectorTileFeature)[], values:any[]){
        this._buffer = buffer;
        this._type = 0;
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
            } else {
                buffer.skip(val);
            }
        } 
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



export {
    VectorTile,
    VectorTileLayer
}