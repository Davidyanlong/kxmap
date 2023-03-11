
export default `
attribute vec2 a_position;

uniform float uPointSize;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
    vec4 pos = uMVMatrix * vec4(a_position, step(32767.0, a_position.x), 1.);
    gl_Position = uPMatrix * pos;
    gl_PointSize = uPointSize;
}
`