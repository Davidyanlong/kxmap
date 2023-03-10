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
  
export function clamp(value:number, min:number, max:number) {
    return value < min ? min : value > max ? max : value;
}
