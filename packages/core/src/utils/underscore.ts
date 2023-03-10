
const ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

// Create quick reference variables for speed access to core prototypes.
const push           = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    nativeFilter     = ArrayProto.filter,
    nativeForEach    = ArrayProto.forEach,
    nativeIndexOf    = ArrayProto.indexOf,
    nativeSome       = ArrayProto.some;

const hasOwnProperty   = ObjProto.hasOwnProperty;
export function first<T>(arr:T[]){
    if (arr == null) return void 0;
    return arr[0];
}

export function last<T>(arr:T[]){
    if (arr == null) return void 0;
      return arr[arr.length - 1];
}
const breaker = {}
export  function each<T,K>(obj:T[], iterator:(value:T,index:number|string,list:T[])=>any, context?:K) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  export function has<T>(obj:T, key:string){
    return hasOwnProperty.call(obj, key);
  }

export function filter<T,K>(obj:T[], iterator:(value:T, index?:number|string, list?:T[])=>boolean, context?:K){
    var results:T[] = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
}

export function difference<T>(array:T[],...rest:T[][]){
    let res = concat.apply(ArrayProto, rest);
    return filter(array, function(value){ return !contains(res, value); });
}
export function contains<T>(obj:T[], target:T){
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
}
export function any<T,K>(obj:T[], iterator:(value:T, index:number|string, list:T[])=>boolean, context?:K){
    iterator || (iterator = identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
}

export function identity<T>(value:T){
    return value;
}

export const _ = {
    first,
    last,
    difference,
    filter,
    has,
    each,
    contains,
    any
}