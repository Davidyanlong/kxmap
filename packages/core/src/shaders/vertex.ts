
export default `
attribute vec3 a_position;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
    vec4 pos = uPMatrix * uMVMatrix * vec4(a_position.xyz, 1);
    gl_Position = pos;
}
`