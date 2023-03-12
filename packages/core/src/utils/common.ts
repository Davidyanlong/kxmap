export function loadBuffer(url:string, callback:(...args:any[])=>void) {
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", url, true);
    // xhr.responseType = "arraybuffer";
    // xhr.onload = function (e) {
    //   if (xhr.status >= 200 && xhr.status < 300 && xhr.response) {
    //     callback(null, new Uint8Array(xhr.response));
    //   } else {
    //     callback(new Error(xhr.statusText));
    //   }
    // };
    // xhr.send();

    fetch(url).then(
        (res)=>res.arrayBuffer()
    ).then((data)=>{
        callback(null, new Uint8Array(data));
    }).catch(err=>callback(err))
  }
 
// 二维向量的旋转
export function rotate(a:number, v:number[]) { 
    return [ Math.cos(a)*v[0]-Math.sin(a)*v[1], Math.sin(a)*v[0]+Math.cos(a)*v[1] ]; 
} 
export function vectorSub(a:number[], b:number[]) { return [a[0]-b[0], a[1]-b[1]] }
export function vectorMag(a:number[]) { return Math.sqrt(a[0]*a[0] + a[1]*a[1]) }
// 取一个范围内的值 
export function clamp(value:number, min:number, max:number) {
    return value < min ? min : value > max ? max : value;
}
