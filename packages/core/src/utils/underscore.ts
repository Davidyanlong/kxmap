
const ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

// Create quick reference variables for speed access to core prototypes.
const push           = ArrayProto.push,
    slice            = ArrayProto.slice,
    nativeReduce     = ArrayProto.reduce,
    concat           = ArrayProto.concat,
    nativeFilter     = ArrayProto.filter,
    nativeForEach    = ArrayProto.forEach,
    nativeIndexOf    = ArrayProto.indexOf,
    nativeSome       = ArrayProto.some;

const hasOwnProperty   = ObjProto.hasOwnProperty,
    nativeBind         = FuncProto.bind;
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

export function bind<K>(func:Function, context?:K){
  if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
}


var reduceError = 'Reduce of empty array with no initial value';
export function reduce<T,K>(obj:T[], iterator:(previousValue: T, currentValue: T, currentIndex: number, array: T[])=>T, memo:T, context?:K){
  var initial = arguments.length > 2;
  if (obj == null) obj = [];
  if (nativeReduce && obj.reduce === nativeReduce) {
    if (context) iterator = bind(iterator, context);
    return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
  }
  each(obj, function(value, index, list) {
    if (!initial) {
      memo = value;
      initial = true;
    } else {
      memo = iterator.call(context, memo, value, index as number, list);
    }
  });
  if (!initial) throw new TypeError(reduceError);
  return memo;
}

export function size<T>(obj:T[]){
  if (obj == null) return 0;
  return (obj.length === +obj.length) ? obj.length : keys(obj).length;
}

export function keys<T>(obj:T[]) {
  if (obj !== Object(obj)) throw new TypeError('Invalid object');
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
  return keys;
};


export const _ = {
    first,
    last,
    difference,
    filter,
    has,
    each,
    contains,
    any,
    reduce,
    bind,
    size,
    keys,
}