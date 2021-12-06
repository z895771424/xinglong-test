// let set = new Set();
// set.add(1);
// set.add(asd);
// console.log(set)

// let set = new Set([1, 1, 3, 4]);
// const arr = [1, 1, 2, 3, 4];
// const set = new Set(arr);
// console.log(set);

/**
 * 对键值非严格类型约束
 * set 严格类型约束
 */
const obj = {
  1: 'longlolng',
  1: 'xuxu',
};
// 对象再有同名属性的情况下，后面的属性会覆盖前面的属性
// console.log(obj)

let hd = {
  // obj:'longlong'
  [obj]: '龙',
};
// console.log(hd['[object Object]']);
// 或者
console.log(hd[obj.toString()]);


