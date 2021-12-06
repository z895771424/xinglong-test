// let set = new WeakSet(['longlong','lonlgong']);

// let set = new WeakSet();
// set.add(['longlong', 'xuxu']);
// console.log(set)


// let a = 1;
// let b = a;
// a = 2
// console.log(b)

let hd = { name: 'longlong', age: 12 };
let hd1 = { name: 'longlong', age: 12 };
let edu = hd;
// let arr = [hd,hd1];
let arr = new Array(hd,hd1);
console.log(arr)
// hd = null;
// hd.name = 'xuxu'
hd = null;
edu = null;
console.log(edu)
arr[0] = null
console.log(arr)
console.log(edu)