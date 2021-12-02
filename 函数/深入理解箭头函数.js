/**
 * 箭头函数不仅仅是编写简洁代码的‘捷径’。他还具有非常特殊且有用的特性
 */

// let group = {
//   title: 'Our Group',
//   student: ['John', 'Pete', 'Alice'],
//   showList() {
//     this.student.forEach(student => console.log(this.title + ':' + student));
//   }
// }

// group.showList();

// 不能对箭头函数进行 new 操作
// 不具有 this 自然也就意味这领一个限制，箭头哈桑农户不能用作构造器，不能用new调用他们

// 箭头函数没有arguments
/**
 * 当我们需要使用当前的this和arguments转发一个调用时，这对装饰器来说非常有用。
 * defer(f,ms)获得了一个函数，并返回了一个包装器，该包装器将调用延迟ms毫秒
 * @param {*} f
 * @param {*} ms
 * @returns
 */

// function defer(f, ms) {

//   return function () {
//     setTimeout(() => {
//       f.apply(this, arguments);
//     }, ms);
//   };
// }

// function sayHi(who) {
//   console.log('Hello  ' + who)
// }

// const sayHiDefferred = defer(sayHi, 2000);
// sayHiDefferred('John');

// setTimeout

// 新手开发者有时候会误将一对括号（）加在函数后面
// setTimeout(show(), 1000); // 错的

// 这样不行，setTimeout 期望得到一个函数的引用，而这里是在执行函数
// 所以传入setTimeout的是函数的执行结果

// const timer = setTimeout(() => {
//   console.log('running')
// }, 1000);
// console.log(timer)
// clearInterval(timer);
// console.log(timer)

// 嵌套的setTimeout

let timer = setTimeout(() => {
  console.log('tick');
  timer = setTimeout(() => {
    console.log('123')
  }, 1000);
}, 1000);

show() {
  console.log(123)
}
// 箭头函数

