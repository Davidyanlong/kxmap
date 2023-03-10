import { ITransform } from "../map";
import fragment from "../shaders/fragment";
import vertex from "../shaders/vertex";
import { DEBUG } from "./constant";
import type Tile from "./tile";
import { mat4 } from "gl-matrix";
import { webglBufferType } from './geometry'

type shaderType = "fragment" | "vertex";

const worldSize = 256;

class GLPainter {
  gl: WebGLRenderingContext;
  width: number;
  height: number;
  mvMatrix: mat4;
  pMatrix: mat4;
  shader: WebGLProgram;
  position: number;
  color: WebGLUniformLocation;
  pointSize:WebGLUniformLocation;
  projection: WebGLUniformLocation;
  modelView: WebGLUniformLocation;
  backgroundBuffer: webglBufferType;
  debugBuffer: webglBufferType
  constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
    this.width = (this.gl.canvas as HTMLCanvasElement).offsetWidth;
    this.height = (this.gl.canvas as HTMLCanvasElement).offsetHeight;
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

    // Initialize model view matrix
    this.mvMatrix = mat4.create();
    mat4.identity(this.mvMatrix);
    mat4.translate(this.mvMatrix, this.mvMatrix, [0, 0, -1]);

    // Initialize projection matrix
    this.pMatrix = mat4.create();
    mat4.ortho(this.pMatrix, 0, 4095, 4095, 0, 1, 10);

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

    this.color = gl.getUniformLocation(
      shader,
      "uColor"
    ) as WebGLUniformLocation;
    this.pointSize = gl.getUniformLocation(shader, "uPointSize") as WebGLUniformLocation;;
    this.projection = gl.getUniformLocation(
      shader,
      "uPMatrix"
    ) as WebGLUniformLocation;
    this.modelView = gl.getUniformLocation(
      shader,
      "uMVMatrix"
    ) as WebGLUniformLocation;

    gl.uniformMatrix4fv(this.projection, false, this.pMatrix);
    gl.uniformMatrix4fv(this.modelView, false, this.mvMatrix);

    var background = [ -32768, -32768, 32767, -32768, -32768, 32767, 32767, 32767];
    var backgroundArray = new Int16Array(background);
    this.backgroundBuffer = {
      data: gl.createBuffer() as WebGLBuffer,
      itemSize: 2,
      numItems: background.length / 3,
    };
    gl.bindBuffer(gl.ARRAY_BUFFER, this.backgroundBuffer.data);
    gl.bufferData(gl.ARRAY_BUFFER, backgroundArray, gl.STATIC_DRAW);

    // 测试
    var debug = [ 0, 0, /**/ 4095, 0, /**/ 4095, 4095, /**/ 0, 4095, /**/ 0, 0];
    var debugArray = new Int16Array(debug);

    this.debugBuffer = {
      data:gl.createBuffer() as WebGLBuffer,
      itemSize:2,
      numItems:debug.length / 2
    } 
    gl.bindBuffer(gl.ARRAY_BUFFER, this.debugBuffer.data);
    gl.bufferData(gl.ARRAY_BUFFER, debugArray, gl.STATIC_DRAW);


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
    // 清除颜色与深度
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
  viewport(
    z: number,
    x: number,
    y: number,
    transform: ITransform,
    size:number,
    pixelRatio: number
  ) {
    const dim = 1 << z;

    // Flip y coordinate; WebGL origin is bottom left.
    y = dim - y - 1;

    // 当前缩放比例下，瓦片的相对大小 size >=256 && size < 512
    var scale = transform.scale * size / dim;

    // Calculate viewport
    // viewport X
    var vpX = (transform.x + scale * x) * pixelRatio;
    // viewport Y
    var vpY = (transform.y + scale * y) * pixelRatio;
    // viewport width
    var vpWidth = scale * pixelRatio;
    // viewport height
    var vpHeight = scale * pixelRatio;
    // viewport X 小数部分
    var vpDXBegin = vpX - Math.floor(vpX);
    // viewport Y 小数部分
    var vpDYBegin = vpY - Math.floor(vpY);
    // 向上取整后 X 补差小数部分
    var vpDXEnd = Math.ceil(vpWidth + vpDXBegin) - (vpWidth + vpDXBegin);
    // 向上取整后 Y 补差小数部分
    var vpDYEnd = Math.ceil(vpHeight + vpDYBegin) - (vpHeight + vpDYBegin);

    this.gl.viewport(
      Math.round(vpX - vpDXBegin),
      Math.round(vpY - vpDYBegin),
      Math.round(vpWidth + vpDXBegin + vpDXEnd),
      Math.round(vpHeight + vpDYBegin + vpDYEnd)
    );
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

    style.forEach(function(info) {
      var layer = tile.layers[info.data];
      if (layer) {
          gl.uniform4fv(painter.color, info.color);
          if (info.type === 'fill') {
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.geometry.fillElementBuffer.data);
              gl.drawElements(gl.TRIANGLE_STRIP, layer.fillEnd - layer.fill, gl.UNSIGNED_SHORT, layer.fill * 2);
          } else {
              var width = Math.min(10, info.width || 1);
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.geometry.lineElementBuffer.data);

              if (width > 2) {
                  gl.uniform1f(painter.pointSize, width - 2);
                  gl.drawElements(gl.POINTS, layer.lineEnd - layer.line, gl.UNSIGNED_SHORT, layer.line * 2);
              }

              gl.lineWidth(width);
              gl.drawElements(gl.LINE_STRIP, layer.lineEnd - layer.line, gl.UNSIGNED_SHORT, layer.line * 2);
          }
      }
  });

    

  }
}

export default GLPainter;
