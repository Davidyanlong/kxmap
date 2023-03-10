class Geometry {
  vertices: {
    data: Int16Array;
    pos: number;
  };
  buffer: {
    data: WebGLBuffer;
    itemSize: number;
    numItems: number;
  };
  constructor() {
    this.vertices = {
      data: new Int16Array(250000),
      pos: 0,
    };
  }
  addLines(layer: any) {
    console.time('Geometry#addLines');
    for (var i = 0; i < layer.length; i++) {
      var feature = layer.feature(i);
      feature.drawNative(this.vertices);
    }

    // array[array.pos++] = 1000;
    // array[array.pos++] = 1000;
    // array[array.pos++] = 0; // invisible
    // array[array.pos++] = 1000;
    // array[array.pos++] = 1000;
    // array[array.pos++] = 0; // invisible
    // console.warn(this.vertices.pos);
    // console.timeEnd('Geometry#addLines');
  }
  bind(gl: WebGLRenderingContext) {
    if (!this.buffer) {
      // console.time('Geometry#bind');
      var buffer = gl.createBuffer() as WebGLBuffer;
      const itemSize = 3;
      const numItems = this.vertices.pos / itemSize;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, this.vertices.data, gl.STATIC_DRAW);
      this.buffer = {
        data:buffer,
        itemSize,
        numItems,
      };
      // console.timeEnd('Geometry#bind');
    }

    return this.buffer;
  }
}

export default Geometry
