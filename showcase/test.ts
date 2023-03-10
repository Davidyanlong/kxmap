
import { KXMap } from '@kxmap/core'
console.log('test showcase')
// export function printInfo(){
//     const sum = add(100,200)+55
//    return sum
// }
export function main(){

    let canvas = document.createElement('canvas');
    let map = document.getElementById('map');
    canvas.style.background='blue';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    
    map?.appendChild(canvas);
    const globalMap = new KXMap(canvas, {
        urls: ['/tiles2/{z}/{x}/{y}.vector.pbf'],
        zooms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        zoom: 0,
        lat: 0,
        lon: 0
    });
}
