import { ITransform } from "../map";
import fragment from "../shaders/fragment";
import vertex from "../shaders/vertex";
import { DEBUG } from "./constant";
import type Tile from "./tile";
import { mat4 } from "gl-matrix";

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
  projection: WebGLUniformLocation;
  modelView: WebGLUniformLocation;
  backgroundBuffer: {
    data: WebGLBuffer;
    itemSize: number;
    numItems: number;
  };
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

    //     // Setup debug buffers
    //     this.debugOverlay = gl.createBuffer();
    //     this.debugOverlay.itemSize = 3;
    //     this.debugOverlay.numItems = 5;
    var background = [
      -32768, -32768, 0, 32767, -32768, 0, -32768, 32767, 0, 32767, 32767, 0,
    ];
    var backgroundArray = new Int16Array(background);
    this.backgroundBuffer = {
      data: gl.createBuffer() as WebGLBuffer,
      itemSize: 3,
      numItems: background.length / 3,
    };
    gl.bindBuffer(gl.ARRAY_BUFFER, this.backgroundBuffer.data);
    gl.bufferData(gl.ARRAY_BUFFER, backgroundArray, gl.STATIC_DRAW);

    if (DEBUG) console.timeEnd("GLPainter#setup");
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
    pixelRatio: number
  ) {
    var dim = 1 << z;

    // Flip y coordinate; WebGL origin is bottom left.
    y = dim - y - 1;

    // 当前缩放比例下，瓦片的相对大小 size >=256 && size < 512
    var size = (transform.scale * worldSize) / dim;
    var center = (transform.scale * worldSize * pixelRatio) / 2;

    // Calculate viewport
    // viewport X
    var vpX = (transform.x + size * x) * pixelRatio;
    // viewport Y
    var vpY = (transform.y + size * y) * pixelRatio;
    // viewport width
    var vpWidth = size * pixelRatio;
    // viewport height
    var vpHeight = size * pixelRatio;
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

    // if(DEBUG) console.log('viewport', Math.round(vpX - vpDXBegin),
    // Math.round(vpY - vpDYBegin),
    // Math.round(vpWidth + vpDXBegin + vpDXEnd),
    // Math.round(vpHeight + vpDYBegin + vpDYEnd))

    //     var gl = this.gl;
    //     gl.viewport(x * devicePixelRatio, y * devicePixelRatio, size * devicePixelRatio, size * devicePixelRatio);

    //     var dx = box.factor * box.width / (2 * box.factor + 1);
    //     var dy = box.factor * box.height / (2 * box.factor + 1);
    //     mat4.ortho(
    //         dx,
    //         box.width - dx,
    //         box.height - dy,
    //         dy,
    //         1, 10,
    //         this.pMatrix
    //     );

    //     // Modify debug buffer to correspond to current crop factor.
    //     // var vertices = [
    //     //     dx + 1, dy + 1, 1,
    //     //     box.width - dx, dy + 1, 1,
    //     //     box.width - dx, box.height - dy, 1,
    //     //     dx + 1, box.height - dy, 1,
    //     //     dx + 1, dy + 1, 1
    //     // ];
    //     // gl.bindBuffer(gl.ARRAY_BUFFER, this.debugOverlay);
    //     // gl.bufferData(gl.ARRAY_BUFFER, new Uint16Array(vertices), gl.STATIC_DRAW);

    //     // var border = [];
    //     // border.push(0, 0);
    //     // border.push(32768-8192, 32768);
    //     // border.push(32768, 32768-8192);

    //     // border.push(65535, 0);
    //     // border.push(32768, 32768-8192);
    //     // border.push(32786+8192, 32768);

    //     // border.push(0, 65535);
    //     // border.push(32768-8192, 32768);
    //     // border.push(32768, 32768+8192);

    //     // border.push(65535, 65535);
    //     // border.push(32768, 32768+8192);
    //     // border.push(32768+8192, 32768);

    //     // var borderBuffer = gl.createBuffer();
    //     // borderBuffer.itemSize = 2;
    //     // borderBuffer.numItems = border.length / borderBuffer.itemSize;
    //     // gl.bindBuffer(gl.ARRAY_BUFFER, borderBuffer);
    //     // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(border), gl.STATIC_DRAW);
    //     // gl.vertexAttribPointer(this.position, borderBuffer.itemSize, gl.FLOAT, false, 0, 0);
    //     // gl.uniform4f(this.color, 0, 0, 0, 0.2);
    //     // gl.drawArrays(gl.TRIANGLES, 0, borderBuffer.numItems);
  }

  draw(tile: Tile, zoom: number) {
    var gl = this.gl;

    // register the tile's geometry with the gl context, if it isn't bound yet.
    var buffer = tile.geometry.bind(gl);
    if (!buffer) return;

    //     // TODO: respect the buffer in the data
    //     // TODO: just paint the actual lines.
    //     // TODO: just

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
    // 不同等级颜色不同
    gl.uniform4f(this.color, 1 - zoom / 18, zoom / 18, 1, 1);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.backgroundBuffer.numItems);

    //     var start = Date.now();
    //     // Draw vertex buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer.data);
    gl.uniform4f(this.color, 0, 0, 0, 1);
    gl.lineWidth(1);
    gl.vertexAttribPointer(
      this.position,
      buffer.itemSize,
      gl.SHORT,
      false,
      0,
      0
    );
    gl.drawArrays(gl.LINE_STRIP, 0, buffer.numItems);

    //     // Draw debug overlay
    //     // gl.bindBuffer(gl.ARRAY_BUFFER, this.debugOverlay);
    //     // gl.uniform4f(this.color, 1, 0, 0, 1);
    //     // gl.lineWidth(1);
    //     // gl.vertexAttribPointer(this.position, this.debugOverlay.itemSize, gl.UNSIGNED_SHORT, false, 0, 0);
    //     // gl.drawArrays(gl.LINE_STRIP, 0, this.debugOverlay.numItems);

    //     // console.warn('draw', Date.now() - start);
  }
}

export default GLPainter;
