// function getLength(arg:string):string {
//   return arg.length
// }

// console.log(getLength('longlong.com'));
// console.log(getLength([1, 2, 3, 4]));
// console.log(getLength(18));

// T = {
  // length:number
// }
// type t ={} & {length:number}

function getLength<T extends {length:number}>(arg:T):number {
  return arg.length;
}
const res = getLength('123');
console.log(res);

