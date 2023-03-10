
export default `
attribute vec3 a_position;

uniform float uPointSize;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
    vec4 pos = uPMatrix * uMVMatrix * vec4(a_position.xy, step(32767.0, a_position.x), 1);
    gl_Position = pos;
    gl_PointSize = uPointSize;
}
`