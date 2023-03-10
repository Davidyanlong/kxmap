

class  Protobuf{
    buf:number[]
    length:number
    pos:number
    constructor(buf:number[]){
        this.buf = buf;
        this.length = buf.length;
        this.pos = 0;
    }

    readVarint() {
        // TODO: bounds checking
        let pos = this.pos;
        if (this.buf[pos] <= 0x7f) {
            this.pos++;
            return this.buf[pos];
        } else if (this.buf[pos + 1] <= 0x7f) {
            this.pos += 2;
            return (this.buf[pos] & 0x7f) | (this.buf[pos + 1] << 7);
        } else if (this.buf[pos + 2] <= 0x7f) {
            this.pos += 3;
            return (this.buf[pos] & 0x7f) | (this.buf[pos + 1] & 0x7f) << 7 | (this.buf[pos + 2]) << 14;
        } else if (this.buf[pos + 3] <= 0x7f) {
            this.pos += 4;
            return (this.buf[pos] & 0x7f) | (this.buf[pos + 1] & 0x7f) << 7 | (this.buf[pos + 2] & 0x7f) << 14 | (this.buf[pos + 3]) << 21;
        } else if (this.buf[pos + 4] <= 0x7f) {
            this.pos += 5;
            return ((this.buf[pos] & 0x7f) | (this.buf[pos + 1] & 0x7f) << 7 | (this.buf[pos + 2] & 0x7f) << 14 | (this.buf[pos + 3]) << 21) + (this.buf[pos + 4] * 268435456);
        } else {
            this.skip(0);
            return 0;
            // throw new Error("TODO: Handle 6+ byte varints");
        }
    };
    readDouble(){
        // TODO: Read double
        // var val = this.buf.readDoubleLE(this.pos);
        var val = 42;
        this.pos += 8;
        return val;
    }

    readSVarint(){
        var num = this.readVarint();
        if (num > 2147483647) throw new Error('TODO: Handle numbers >= 2^30');
        // zigzag encoding
        return ((num >> 1) ^ -(num & 1));
    }

    readString(){
        let bytes = this.readVarint();
        // TODO: bounds checking
        let chr = String.fromCharCode;
        let b = this.buf;
        let p = this.pos;
        let end = this.pos + bytes;
        let str = '';
        while (p < end) {
            if (b[p] <= 0x7F) str += chr(b[p++]);
            else if (b[p] <= 0xBF) throw new Error('Invalid UTF-8 codepoint: ' + b[p]);
            else if (b[p] <= 0xDF) str += chr((b[p++] & 0x1F) << 6 | (b[p++] & 0x3F));
            else if (b[p] <= 0xEF) str += chr((b[p++] & 0x1F) << 12 | (b[p++] & 0x3F) << 6 | (b[p++] & 0x3F));
            else if (b[p] <= 0xF7) p += 4; // We can't handle these codepoints in JS, so skip.
            else if (b[p] <= 0xFB) p += 5;
            else if (b[p] <= 0xFD) p += 6;
            else throw new Error('Invalid UTF-8 codepoint: ' + b[p]);
        }
        this.pos += bytes;
        return str;
    }

    skip(val:number) {
        // TODO: bounds checking
        var type = val & 0x7;
        switch (type) {
            /* varint */ case 0: while (this.buf[this.pos++] > 0x7f); break;
            /* 64 bit */ case 1: this.pos += 8; break;
            /* length */ case 2: var bytes = this.readVarint(); this.pos += bytes; break;
            /* 32 bit */ case 5: this.pos += 4; break;
            default: throw new Error('Unimplemented type: ' + type);
        }
    };
    
}

export default Protobuf