// 泛型 generics

// let a: string = 'longlong.com';
// console.log(a);

// 我们做的相同的事情，但是定义了两个函数
// 所以传递不同类型的参数，动态来设置参数

// function dump(arg:string):string {
//   return arg;
// }

// // 返回的值是any类型
// let hd = dump('longlong.com')

// function dumpBoolean(arg: boolean): boolean {
//   return arg;
// }

// const xj = dumpBoolean(true);
// console.log(xj);

function dump<T>(arg: T): T {
  return arg;
}

// let hd = dump<string>('longlong.com')
// console.log(hd);

// const hd = dump<boolean>(true);
// console.log(hd );

let xj = dump(true);