export type webglBufferType = {
  data: WebGLBuffer;
  itemSize: number;
  numItems: number;
};
export type verticesType = {
  data: Int16Array;
  pos: number;
  idx: number;
};
export type lineType = {
  data: Uint16Array;
  pos: number;
};
class Geometry {
  vertices: verticesType;
  lineElements: lineType;
  fillElements: lineType;
  vertexBuffer: webglBufferType;
  lineElementBuffer: webglBufferType;
  fillElementBuffer: webglBufferType;
  constructor() {
    this.vertices = {
      data: new Int16Array(10000),
      pos: 0,
      idx: 0,
    };

    this.lineElements = {
      data: new Uint16Array(10000),
      pos: 0,
    };

    this.fillElements = {
      data: new Uint16Array(10000),
      pos: 0,
    };

    // Add the culled mvp vertex
    this.vertices.data[this.vertices.pos++] = 32767;
    this.vertices.data[this.vertices.pos++] = 32767;
    this.vertices.idx++;
  }

  lineOffset() {
    return this.lineElements.pos;
  }

  fillOffset() {
    return this.fillElements.pos;
  }

  bind(gl: WebGLRenderingContext) {
    if (!this.vertexBuffer) {
      var vertexBuffer = gl.createBuffer() as WebGLBuffer;
      let itemSize = 2;
      let numItems = this.vertices.pos / itemSize;
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, this.vertices.data, gl.STATIC_DRAW);
      this.vertexBuffer = {
        data: vertexBuffer,
        itemSize,
        numItems,
      };
    }

    if (!this.lineElementBuffer) {
      var lineElementBuffer = gl.createBuffer() as WebGLBuffer;
      let itemSize = 1;
      let numItems = this.lineElements.pos / itemSize;
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lineElementBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.lineElements.data, gl.STATIC_DRAW);
      this.lineElementBuffer = {
        data: lineElementBuffer,
        itemSize,
        numItems,
      };
    }

    if (!this.fillElementBuffer) {
      var fillElementBuffer = gl.createBuffer() as WebGLBuffer;
      let itemSize = 1;
      let numItems = this.fillElements.pos / itemSize;
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillElementBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.fillElements.data, gl.STATIC_DRAW);
      this.fillElementBuffer = {
        data: fillElementBuffer,
        itemSize,
        numItems,
      };
    }

    return true;
  }
}

export default Geometry;
