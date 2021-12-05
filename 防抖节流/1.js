// const site = 'lognlong'

// 函数每次调用都会创建一个新的作用域
// function a() {
//   const hd = 'longlong.com'
//   function b() {
//     let cms = 'longlong'
//     console.log(hd)
//   }
//   b()
// }
// a()

// 如果子函数被使用时父级环境将被保留

// function hd() {
//   let n = 1
//   return function () {
//     let b = 1
//     return function () {
//       console.log(++n)
//       console.log(++b)
//     }
//   }
// }
// let a = hd()()
// a()
// a()

// 函数被执行后其环境变量将从内存中删除

// function count() {
//   const total = 0
// }
// count()  // 函数被执行后其环境变量从内存中删除
// console.log(count())

// let site = '后盾人';

// function a() {
//   let hd = 'houdunren.com';

//   function b() {
//       let cms = 'hdcms.com';
//       console.log(hd);
//       console.log(site);
//   }
//   b();
// }
// a();

// 构造函数也是很好的例子，子函数被外部使用父级环境将被保留

// function User() {
//   let a = 1
//   this.show = function () {
//     console.log(a++)
//   }
// }
// let a = new User()
// a.show()
// a.show()
// let b = new User()
// b.show()

// false && console.log(123)

// if (true) {
//   var i = 1
// }
// console.log(i)

// 也可以通过下面的定时器函数来体验
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 500);
// }

// let arr = [];
// for (let i = 0; i < 10; i++) {
// 	arr.push((() => i));
// }
// console.log(arr[3]()); //3 如果使用var声明将是10

// 如果没有闭包，处理事件绑定，异步请求时都会变得困难
// JS 中的所有函数都是闭包 闭包一般在子函数本身作用域意外执行，即延申作用域

// function hd() {
//   let name = 'long'
//   return function () {
//     return name
//   }
// }
// const res = hd()
// console.log(res())

// 使用闭包返回数组区间元素
// let arr = [3, 4, 5, 6, 7, 2, 34, 3, 6, 1]

// function between(a, b) {
//   return function (v) {
//     return v >=a && v<= b
//   }
// }
// console.log(arr.filter(between(3,6)))

// 只做一件事情

// 在Javescript 中，永远不雅污染全局，会在生产中难以预料的bug。

// 数组排序方法
// Array.prototype.toSort = (array, callBack) => {
//   for (let m = 0; m <= array.length; m++) {
//     for (let n = 0; n <= array.length; n++) {
//       if (callBack(array[m], array[n]) < 0) {
//         const temp = array[m]
//         array[m] = array[n]
//         array[n] = temp
//       }
//     }
//   }
//   return array
// }
// let arr = [1, 2, 3, 4, 5, 6]
// const res = arr.toSort(arr, (a,b) => b-a)
// console.log(res)

// 下面是对以上方法的good写法

// class SuperArray extends Array {
//   toSort(array, callBack) {
//     for (let m = 0; m <= array.length; m++) {
//       for (let n = 0; n <= array.length; n++) {
//         if (callBack(array[m], array[n]) < 0) {
//           const temp = array[m]
//           array[m] = array[n]
//           array[n] = temp
//         }
//       }
//     }
//     return array
//   }
// }
// let arr = new SuperArray()
//  let arr1 = [1, 2, 3, 4, 5, 6, 7]
// const res = arr.toSort(arr1, (a, b) => b - a)
// console.log(res)

// 封装条件语句

// Bad

// if (FileSystem.state === 'fetching' && isEmpty(listNode)) {

// }

// Good

// function shouldShowSpinner(fsm, listNode) {
//   return fsm.state === 'fetching' && isEmpty(listNode)
// }

// if(shouldShowSpinner(fsmInstance,listNodeInstance))

// 尽量别用条件非语句
// 避免使用条件语句
// 不用条件语句写代码是不可能的
// 用多态可行，但为什么就不能用条件语句呢
// 为了让代码更简洁易读，如果你的函数中出现了条件判断，说明你的函数不知干了一件事情，违反了函数单一原则

// 避免类型检查 ，js是无类型的，这种自由度很容易让人困扰，不自觉地就会去检查类型。仔细想想是你真的需要检查类型，还是你的API设计有问题

// 如果你需要左静态类型检查，比如字符串，整数等，推荐使用TS 不然你的代码会变得又臭又长

// 不要做过度优化
// 现代浏览器已经做了很多优化，过去的很多优化方案都是无效的，会浪费你的时间

// 面向过程编程
// let name = '隆隆'
// let grade = [
//   { lesson: 'js', score: 99 },
//   { lesson: 'myaql', score: 99 },
//   { lesson: 'css', score: 99 }
// ]
// function average(grage, name) {
//   const total = grade.reduce((t, a) => t + a.score, 0)
//   return name +':'+total / grade.length +'分'
// }
// console.log(average(grade, name))

// 面向对象编程
// 下面使用了对象编程的代码结构清晰，减少了函数函数的参数传递，也不用担心函数名的覆盖

// let user = {
//   name: '隆隆',
//   grade: [
//     { lesson: 'js', score: 99 },
//     { lesson: 'myaql', score: 99 },
//     { lesson: 'css', score: 99 }
//   ],
//   average() {
//     const total = this.grade.reduce((t, a) => t + a.score, 0)
//     return this.name + ':' + total / grade.length + '分'
//   }
// }
// console.log(user.average())

// 其实对象字面量形式在系统内部也是使用构造函数 new Object 创建的

// 使用 jQuery.extend等方法设置属性，现在可以使用object.assign

// 从一个或多个对象复制属性

// 'use strict'
// let hd = { a: 1, b: 2 }
// hd = Object.assign(hd, { f: 1 }, { m: 9 })
// console.log(hd)

// let id = 0
// let id = 0
// const user = {
//   [`id-${id++}`]: id,
//   [`id-${id++}`]: id,
//   [`id-${id++}`]: id,
// }
// console.log(user)

// 使用系统提供的API可以方便获取对象属性与值

const hd = {
  name: '后盾人',
  age:10
}
// console.log(Object.keys(hd))
// console.log(Object.values(hd))

console.table(Object.entries(hd))