
class MRUCache{
    max:number
    list:Record<string,unknown>
    order:(string|number)[]
    constructor(length:number){
        this.max = length;
        this.list = Object.create(null);
        this.order = [];
    }
   add<T>(key:string|number, data:T){
    this.list[key] = data;
    this.order.push(key);

    while (this.order.length > this.max) {
        this.get(this.order[0]);
        // do nothing with it and discard/gc
    }
   }

   has(key:string|number) {
    return key in this.list
   }

   keys(){
    return this.order
   }

   get<T>(key:string|number){
    let data:T | null = null;
    if (this.has(key)) {
        data = this.list[key] as T;
        delete this.list[key];
    }

    var pos = this.order.indexOf(key);
    if (pos >= 0) {
        this.order.splice(pos, 1);
    }

    return data;
   }
}
export default MRUCache