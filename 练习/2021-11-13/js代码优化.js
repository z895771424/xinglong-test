// 对于求值变量，做好兜底

// const arr = ['name', 'age', 'school'];
// const name = arr[0] || 0;
// console.log(name);

// const a = 2; // 因为有底了，所以不需要兜底

// 函数从命名无法知道返回值类型
// function showFriendList(){}

// 对于返回true or false 的函数，最好以should is has 开头
// function shouldShowFriendList() { };
// function isEmpty(){}
// function canCreateDocuments() { };
// function hasLicense() { };

// 功能函数最好为纯函数 不要让功能函数的输出变化无常
// 这个函数的输出变化无常，因为api返回的值一旦改变，同样输入函数的a,b,c的值，但函数返回的结果却不一定相同

// function plusAbc(a, b, c) {
//   var c = fetch('../api');
//   return a + b + c;
// }

// 功能函数使用纯函数，输入一致，输出结果永远唯一

// 函数中过多的采用 if else 

// 可以采用 switch 代替或使用数组代替
// let a = 3;
// switch (a) {
//   case 1:
//     console.log('haha');
//     break;
//   case 2:
//     console.log(123);
//     break;
//   default:
//     console.log('default')
// }

// 或者

// const handler = {
//   1: () => {console.log(1111)},
//   2: () => {console.log(2222)},
// }

// console.log(handle.a())

// 最为开发人员，我们必须了解这些，以使让我们的工作变得更轻松，下面就是2021年你必须知道的javascript编码技巧，包含普通写法和简写方法供大家借鉴

// 1 多个条件判断
// if (x === 'abc' || x === 'def' || x === 'ghi' || x === 'mnq') {

// }

// 简写写法 

const x = 'abc'
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
  console.log(true)
}


