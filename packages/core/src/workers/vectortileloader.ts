import Protobuf from '../libs/protobuf'
import { loadBuffer } from '../utils/common'

class VectorTileLayerLoader{
    _buffer:Protobuf
    version:number
    name:any
    extent:number
    length:number
    _keys:any[]
    _values:any[]
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
            this._values.push(VectorTileLayerLoader.readFeatureValue(buffer));
        } else if (tag == 6) {
            this.vertex_count = buffer.readVarint();
        } else {
            console.warn('skipping', tag);
            buffer.skip(val);
        }
    }
    }
    static readFeatureValue(buffer:Protobuf){
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

class VectorTileLoader{
    _buffer:Protobuf
    layers:any
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
                var layer = new VectorTileLayerLoader(buffer, layer_end);
                if (layer.length) {
                    this.layers[layer.name] = layer;
                }
                buffer.pos = layer_end;
            } else {
                buffer.skip(val);
            }
        }
    }
}


self.addEventListener('message', function(e) {
    // data = e.data.url;
    loadBuffer(e.data.url, function(err, buffer) {
        if (err) {
            self.postMessage({id: e.data.id, err: err });
        }
        else {
            try {
                var tile = new VectorTileLoader(new Protobuf(buffer));
                self.postMessage({id: e.data.id, data: tile }, [ buffer.buffer ]);
            }
            catch (err) {
                self.postMessage({id: e.data.id, err: err }, [ buffer.buffer ]);
            }
        }
    });
}, false);