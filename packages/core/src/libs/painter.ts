import fragment from "../shaders/fragment";
import vertex from "../shaders/vertex";
import { DEBUG } from "./constant";
import type Tile from "./tile";
import { mat4 } from "gl-matrix";
import { webglBufferType } from './geometry'
import type Transform from "./transform";

type shaderType = "fragment" | "vertex";


class GLPainter {
  gl: WebGLRenderingContext;
  mvMatrix: mat4;
  pMatrix: mat4;
  shader: WebGLProgram;
  position: number;
  color: WebGLUniformLocation;
  pointSize:WebGLUniformLocation;
  projection: WebGLUniformLocation;
  modelView: WebGLUniformLocation;
  backgroundBuffer: webglBufferType;
  tileStencilBuffer:webglBufferType
  debugBuffer: webglBufferType
  constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
    this.setup();
  }

  setup() {
    var gl = this.gl;
    if (DEBUG) console.time("GLPainter#setup");

    // @ts-ignore
    gl.verbose = true;

    gl.clearColor(0, 0, 0, 0);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);

    // Initialize shaders
    var fragmentShader = this.getShader("fragment", fragment) as WebGLShader;
    var vertexShader = this.getShader("vertex", vertex) as WebGLShader;

    var shader = (this.shader = gl.createProgram() as WebGLProgram);
    if (!shader) {
      throw new Error("createProgram error");
    }
    gl.attachShader(shader, vertexShader);
    gl.attachShader(shader, fragmentShader);
    gl.linkProgram(shader);
    if (!gl.getProgramParameter(shader, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(shader));
      alert("Could not initialize shaders");
    }

    gl.useProgram(shader);

    // Shader attributes
    this.position = gl.getAttribLocation(shader, "a_position");
    gl.enableVertexAttribArray(this.position);

    this.color = gl.getUniformLocation(shader,"uColor") as WebGLUniformLocation;
    this.pointSize = gl.getUniformLocation(shader, "uPointSize") as WebGLUniformLocation;;
    this.projection = gl.getUniformLocation(shader,"uPMatrix") as WebGLUniformLocation;
    this.modelView = gl.getUniformLocation(shader,"uMVMatrix") as WebGLUniformLocation;


    var background = [ -32768, -32768, 32766, -32768, -32768, 32766, 32766, 32766 ];
    var backgroundArray = new Int16Array(background);
    const itemSize = 2
    this.backgroundBuffer = {
      data: gl.createBuffer() as WebGLBuffer,
      itemSize,
      numItems: background.length / itemSize,
    };
    gl.bindBuffer(gl.ARRAY_BUFFER, this.backgroundBuffer.data);
    gl.bufferData(gl.ARRAY_BUFFER, backgroundArray, gl.STATIC_DRAW);

    // 测试
    var debug = [0, 0, /**/ 4095, 0, /**/ 4095, 4095, /**/ 0, 4095, /**/ 0, 0];
    var debugArray = new Int16Array(debug);
    this.debugBuffer = {
      data:gl.createBuffer() as WebGLBuffer,
      itemSize,
      numItems:debug.length / itemSize
    } 
    gl.bindBuffer(gl.ARRAY_BUFFER, this.debugBuffer.data);
    gl.bufferData(gl.ARRAY_BUFFER, debugArray, gl.STATIC_DRAW);

      // tile stencil buffer
      var tileStencilBuffer =  gl.createBuffer() as WebGLBuffer;
      this.tileStencilBuffer ={
        data:tileStencilBuffer,
        itemSize:2,
        numItems:4
      }
  
  
      gl.enable(gl.DEPTH_TEST);

    if (DEBUG) console.timeEnd('GLPainter#setup');
  }

  getShader(type: shaderType, shaderCode: string) {
    let shader: WebGLShader;
    let gl = this.gl;
    switch (type) {
      case "fragment":
        shader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
        break;
      case "vertex":
        shader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
        break;
      default:
        return null;
    }

    gl.shaderSource(shader, shaderCode);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    } else {
      return shader;
    }
  }
  // 清屏
  clear() {
    const gl = this.gl;
    // 清屏颜色
    gl.clearColor(0.9, 0.9, 0.9, 1);
    gl.clearDepth(1);
    // 清除颜色与深度
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
  }
  viewport(
    z: number,
    x: number,
    y: number,
    transform: Transform,
    tileSize:number,
    pixelRatio: number
  ) {
    var gl = this.gl;
    var tileExtent = 4096;

    // Initialize model-view matrix that converts from the tile coordinates
    // to screen coordinates.
    var tileScale = Math.pow(2, z);
    var scale = transform.scale * tileSize / tileScale;
    var viewMatrix = mat4.create();
    mat4.identity(viewMatrix);
    mat4.translate(viewMatrix, viewMatrix,[ transform.x + scale * x, transform.y + scale * y, 0 ]);
    mat4.translate(viewMatrix, viewMatrix,[ transform.x, transform.y, 0 ]);
    mat4.rotateZ(viewMatrix,viewMatrix, transform.rotation);
    mat4.translate(viewMatrix, viewMatrix,[ scale * x, scale * y, 0 ]);
    mat4.scale(viewMatrix, viewMatrix, [ scale / tileExtent, scale / tileExtent, 1 ]);
    gl.uniformMatrix4fv(this.modelView, false, viewMatrix);

    // console.warn(viewMatrix);

    // Update tile stencil buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, this.tileStencilBuffer.data);
    gl.bufferData(gl.ARRAY_BUFFER, new Int16Array([ 0, 0, tileExtent, 0, 0, tileExtent, tileExtent, tileExtent ]), gl.STREAM_DRAW);

    // draw depth mask
    gl.depthFunc(gl.ALWAYS);
    gl.depthMask(true);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.colorMask(false, false, false, false);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.tileStencilBuffer.data);
    gl.vertexAttribPointer(this.position, 2, gl.SHORT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.tileStencilBuffer.numItems);


    mat4.translate(viewMatrix, viewMatrix,[ 0, 0, 1 ]);
    gl.uniformMatrix4fv(this.modelView, false, viewMatrix);


    // draw actual tile
    gl.depthFunc(gl.GREATER);
    gl.depthMask(false);
    gl.colorMask(true, true, true, true);
  }

  draw(tile: Tile, style: any[]) {
    var painter = this;
    var gl = this.gl;


    // register the tile's geometry with the gl context, if it isn't bound yet.
    if (!tile.geometry.bind(gl)) {
      return;
    }


    // Draw background
    gl.bindBuffer(gl.ARRAY_BUFFER, this.backgroundBuffer.data);
    gl.vertexAttribPointer(
      this.position,
      this.backgroundBuffer.itemSize,
      gl.SHORT,
      false,
      0,
      0
    );
    gl.uniform4f(this.color, 0.9098, 0.8784, 0.8471, 1);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.backgroundBuffer.numItems);

   


    // Vertex Buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, tile.geometry.vertexBuffer.data);
    gl.vertexAttribPointer(this.position, tile.geometry.vertexBuffer.itemSize, gl.SHORT, false, 0, 0);

    style.forEach(applyStyle);

    function applyStyle(info:any) {
      var layer = tile.layers[info.data];
      if (layer) {
          gl.uniform4fv(painter.color, info.color);
          if (info.type === 'fill') {
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.geometry.fillElementBuffer);
              gl.drawElements(gl.TRIANGLE_STRIP, layer.fillEnd - layer.fill, gl.UNSIGNED_SHORT, layer.fill * 2);
          } else {
              var width = Math.min(10, info.width || 1);
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.geometry.lineElementBuffer);

              if (width > 2) {
                  gl.uniform1f(painter.pointSize, width - 2);
                  gl.drawElements(gl.POINTS, layer.lineEnd - layer.line, gl.UNSIGNED_SHORT, layer.line * 2);
              }

              gl.lineWidth(width);
              gl.drawElements(gl.LINE_STRIP, layer.lineEnd - layer.line, gl.UNSIGNED_SHORT, layer.line * 2);
          }
      }
  }

     //debug
     gl.bindBuffer(gl.ARRAY_BUFFER, this.debugBuffer.data);
     gl.vertexAttribPointer(this.position, this.debugBuffer.itemSize, gl.SHORT, false, 0, 0);
     gl.uniform4f(this.color, 1, 0, 1, 1);
     gl.lineWidth(4);
     gl.drawArrays(gl.LINE_STRIP, 0, this.debugBuffer.numItems);

  }
  resize(width:number, height:number) {
    var gl = this.gl;
    // Initialize projection matrix
    var pMatrix = mat4.create();
    mat4.ortho(pMatrix, 0, width, height, 0, 0, -1);
    gl.uniformMatrix4fv(this.projection, false, pMatrix);
    gl.viewport(0, 0, width, height);
};
}

export default GLPainter;
