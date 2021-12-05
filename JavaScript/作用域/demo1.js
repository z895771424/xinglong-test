/**
 * 当一个函数是在另一个函数中创建的时，那么该函数就是被称为嵌套的
 * 尽管我们很想避免编程语言的一些底层细节，但是如果没有他们，我们就无法完整地理解词法作用域，所以，我们这就开始吧
 */

// function sayHiBye(firstName,lastName) {
//   function getFullName() {
//     return firstName + ' ' + lastName;
//   }
// }

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

/**
 * 词法环境对象由两部分组成
 * 1 环境记录，一个存储所有局部变量作为其属性
 * 2 外部词法环境的引用，与外部代码关联
 *
 * 一个变量只是记录这个特殊的内部对象的一个属性。获取或修改变量意味着获取或修改词法环境中的属性
 * 全局词法环境没有外部引用，所以箭头指向了null
 * 随着代码继续执行，词法环境发生了变化
 */

/**
 * 当脚本考试运行，词法环境预先填充了所有声明的变量
 * 最初他们处于未初始化的状态，这是一种的内部状态，这意味着引擎知道变量，但是，在用let声明前，不能应用他，几乎就像变量不存在一样
 */

/**
 * 词法环境是一个规范对象
 * 词法环境是一个回访对象：他仅仅时在于编程语言规范的理论上存在的，用于描述事物如何运作的对象。我们无法在代码中获取该对象并直接对其进行操作
 * 但JavaScript引擎可以优化它，比如清楚未使用的变量以节省内存和执行其他内部技巧等，但显性行为应该时和上述无差
 * 当创建了一个词法环境时，函数声明会立即变为即用行哈桑农户（不像let那样知道声明处才可用）
 * 这为什么我们可以在（函数声明）的定义治安调用函数声明
 * 例如，这是添加一个函数时全局语法环境的初始状态
 * 正常来说，这种行为仅仅适用于函数声明，而不适用于我们将函数分配给变量的函数表达式，例如 let say = function(name);
 */

/**
 * 内部和外部的词法环境
 * 在一个函数运行时，在调用刚开始时，会自动创建一个新的词法环境以存储这个调用的局部变量和参数
 * 在函数调用期间，我们有两个词法环境，内部一个（用于函数调用）和外部一个（全局）
 */

// const phrash = 'Hello';
// function say(name) {
//   console.log(phrase, name);
// }

// 词法内部与say的当前执行相对应。它具有一个单独的属性：name

// 外部词法环境时全局词法环境。它具有phrash变量和函数本身

// 当代码要访问一个变量时-首先会搜索词法内部环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境

// 如果在任何地方都找不到这个变量，那么在严格模式下就会报错，在非严格模式下，为了向下兼容，给未定义的变量赋值会创建一个全局变量

// 所有的函数在诞生时都会记住创建他们的词法环境。从技术上将，这里没有什么魔法：所有函数名都有名为[[Environment]]的隐藏属性，该属性保存了对该创建该函数的词法环境的引用

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());

// 当counter() 在代码中查找count变量时，它首先搜索自己的词法环境（w）

/**
 * 闭包
 * 开发者通常应该都知道闭包这个通用的编程术语
 *
 * 闭包 是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在外部函数被返回（寿命终结之后），
 * 在某些编程语言中，这是不可能的，或者应该以特殊的方式变现函数来实现，但是如上所述
 * 在JS中，所有函数都是天生闭包的（只有一个例外 new Function）
 * 也就是说：Javescript 中的函数会自动通过隐藏的[[Environment]]属性记住创建他们的位置，所以他们都可以访问外部变量
 */

/**
 * 垃圾搜集
 * 通常，函数调用完成后，会将词法环境和其中的所有变量从内存中删除。因为现在没有任何对他们的引用了。
 * 与JS中的任何其他对象一样，词法环境仅在可达时才会被保留在内存中
 * 但是，如果有一个嵌套的函数在函数结束后仍可达，则它将是具有引用词法环境的[[Environment]]属性
 * 在下面这个例子中，即使在函数执行完成后，词法环境任然可达。因此，此嵌套函数任然有效
 */

// function f() {
//   const value = 123;

//   return function () {
//     console.log(value)
//   }
// }

// const g = f(); // g.[[Environment]]存储了对应f()调用词法环境的引用
// g()

// 请注意，如果多次调用f(),并且返回的函数被保存，那么所有相应的词法环境也会保留在内存中

// function f() {
//   const value = Math.random();

//   return function () {
//     console.log(value);
//   }
// }

// const arr = [f(), f(), f()];
// console.log(arr)
// 现在的词法环境对象变得不可达时，他就会想死去（就像任何对象一样）。换句话说，它仅在至少有一个嵌套函数引用时才存在

// 在下面代码中，嵌套函数被删除后，其封闭的词法环境（以及其中的vanle）也会从内存中被删除

// function f() {
//   let value = 123;
//   return function () {
//     console.log(value);
//   };
// }

// let g = f(); // 当g函数存在时，该值会被保留在内存中
// g = null; // 现在内存被清理了

// 理论上当函数可达时，他外部的所有变量都将存在

// 但在实际中，JavaScript 引擎试图优化它。它会分析变量的使用情况，如果从代码中可以明显看出来有未使用的外部变量，那么就会将其删除

// 在 V8 中有个重要的副作用，此类变量在调试中将不可用

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const res = sum(1)(2);
// console.log(res);

// 下面这段代码的结果会是什么

// let x = 1;
// let x = 123
// function func() {
//   // 它一直处于未初始化状态，知道let结束
//   console.log(x);
//   let x = 2;
// }

// func();

// function func() {
//   // 引擎从函数开始就是知道局部变量 x
//   // 但是变量 x 一直处于未初始化 无法使用的状态，直到结束let('死区')

//   console.log(x)
// }

// console.log(x)
// let x = 123

// 你可能已经存在变量作用域，从程序进入代码块或函数的那一刻起，变量就开始进入’未初始化状态‘ 它一直保持未初始化状态，直至程序执行响应的let语句

// function inBetween(a,b) {
//   return function (item) {
//     return item >= a && item <= b;
//   }
// }

// function inArray(array) {
//   return function (item) {
//     return array.includes(item)
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // const res = arr.filter(inBetween(2,8));
// const res = arr.filter(inArray([1,2,3,9]))
// console.log(res)

function byField(par) {
  return (a, b) => (a[par] > b[par] ? 1 : -1);
}

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];
