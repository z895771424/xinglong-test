/**
 * new Function 语法
 */

// let func = new Function('a', 'b','return a + b');
// console.log(func(1,3))

// 这里有一个没有参数的函数,只有函数体
// let sayHi = new Function('console.log("Hello World")');
// sayHi()

// 与我们已知的其他方法相比，这种方法最大的不同在于，它实际上是通过运行通过参数传递过来的字符串创建的
// 以前的所有声明方法都我们都需要，在编写函数的代码

// 但是 new Function 允许我们将任意字符串变为函数。例如，我们可以从服务器接收一个新的函数并执行它

// let str = ...动态接收来自服务器的代码

// let func = new Function(str);
// func();

/**
 * 使用 new Function 创建函数的应用场景非常特殊，比如在复杂的Web应用程序中，我们需要从服务器获取代码或者动态地从模板编译函数是才会使用
 */

// function getFunc() {
//   const value = 'test';
//   const func = new Function('console.log(value)');
//   return func
// }

// const res = getFunc();
// console.log(res())

// 与常规的进行比较
// function getFunc() {
//   let value = 'test';
//   let func = function () {
//     console.log(value);
//   };
//   return func;
// }

// const res = getFunc();
// res()

/**
 * new Function 的这种特性看起来有点奇怪，不过在实际中却非常实用
 * 想象一下我们必须通过一个字符串来创建一个函数。在编写脚本时我们不会知道该函数的代码（这也就是为什么我们不用常规方法创建函数）
 * 但在执行过程中我们会知道，我们可能会从服务器或其他来源获取它
 * 我们的新函数需要和主脚本进行交互
 * 如果这个函数能过访问外部outer变量会怎么样
 * 问题在于，我们将JavaScript发布生产环境之前，需要使用压缩程序对齐进行压缩--一个特殊的程序
 * 通过删除多余的舒适和空格等压缩代码--更重要的是，将局部变量命名为较短的变量
 * 
 */