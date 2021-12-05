// function User(name) {
//   this.name = name;
// }

// const hdcms = {
//   age:10
// };

// User.call(hdcms, 'HDCMS');
// console.log(hdcms)

/**
 * 可以改变构造函数中的空对象，即使让构造函数this指向另一个对象
 *
 */

// function show(title) {
//   console.log(`${title + this.name}`);
// }

// const lisi = {
//   name: '李四',
// };
// const wangwu = {
//   name:'王五'
// }
// show.call(lisi, '后盾人');
// show.apply(wangwu,['HDCMS'])

// 属性name

// 函数对象包含一些便于使用的属性

// 比如一个函数的名字可以通过name来访问

// function sayHi() {
//   console.log('Hi');
// }

// console.log(sayHi.name);
// console.log(sayHi());

// 更有趣的是，名称赋值的逻辑很智能。即使函数被创建时也没有名字，名称的赋值的逻辑给他赋予了一个正确的名字
// const sayHi = function () {
//   console.log('Hi')
// }

// console.log(sayHi.name)

// 当以默认的方式完成了赋值时，它也有效

// const user = {
//   sayHi() {},
//   sayBye() {},
// };

// console.log(user.sayHi.name);
// console.log(user.sayBye.name);

// 这没有什么神奇的。有时会出现无法推测的名字的情况。此时，属性name会是空

// const arr = [function () { }];
// console.log(arr[0].name);

// 属性length
// 还有一个内置属性length，他返回函数入参的个数

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// console.log(f1.length);
// console.log(f2.length);
// console.log(many.length);

/**
 * 自定义属性
 * 我们可以添加我们自己的属性
 * 这里我们添加了counter属性，用来跟踪总的调用次数
 */

// function sayHi() {
//   console.log('Hi');
//   sayHi.counter++;
// }

// sayHi.counter = 0; // 初始值

// sayHi();
// sayHi();

// console.log(`Called ${sayHi.counter} times`);

// 被赋值给函数的属性，不会在函数内部定义一个局部变量。换句话说，属性counter和变量let counter 是毫不相关的东西

// 我们可以把函数当作对象，在它里面存储属性，但是这对他的执行没有任何影响。变量不是函数属性

// 函数属性有时会用来代替闭包。例如我们可以使用函数属性变量作用域

// function makeCounter() {
//   // 不需要这个
//   // let count = 0
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;
//   return counter;
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());

// 现在 count 被直接存储在函数里面，而不是外部的词法环境

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;
//   return counter;
// }

// const counter = makeCounter();
// counter.count = 10;
// console.log(counter())

// const sayHi = function func(who) {
//   // func(123)
//   if (who) {
//     console.log(`Hello ${who}`);
//   } else {
//     func('longlong');
//   }
// };
// sayHi();

// // 但这不工作；
// func();

// 我们为什么使用func呢？为什么不直接使用sayHi进行嵌套调用呢 ？

// const sayHi = function (who) {
//   if (who) {
//     console.log(`Hello, ${who}`)
//   } else {
//     console.log('Guest')
//   }
// }

// 上面这段代码的问题在于 sayHi 的值可能会被函数外部的代码改变。如果该函数被赋值给另外一个变量

// const sayHi = function (who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     sayHi('Guest')
//   }
// }

// const welcome = sayHi();
// sayHi = null;
// welcome();

// 发生这种情况是因为该啊哈桑农户从他的外部词法环境获取sayHi.没有局部sayHi了，所以使用外部变量。而当嗲用时，外部的sayHi时null

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello ${who}`);
//   } else {
//     func('Guest');
//   }
// };

// let welcome = sayHi;
// sayHi = null;
// welcome();

// 求 1 + 2 + 3 + n 的和
// function getSum(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * getSum(n - 1);
//   }
// }

// const res = getSum(4);
// console.log(res)

/**
 * 执行上下文和堆栈
 * 现在我们来研究以下递归调用是如何工作的。为此，我们会先看看函数底层的工作原理
 * 执行上下文是一个内部数据结构，它包含函数执行时的详细细节：当前控制流所在的位置，当前的变量
 * this的值以及一些其他的内部细节
 * 一个函数仅仅具有一个与其相关的执行上下文
 * 当一个函数进行嵌套调用时，将发生以下的事儿
 * * 当前函数被暂停
 * * 他与关联的执行上下文被一个叫做执行上下文堆栈的特殊数据结构保存
 * * 执行嵌套调用
 * * 嵌套调用结束后，从堆栈中恢复执勤的执行上下文，并从停止的位置恢复外部函数
 */

/**
 * 递归都可以用循环来重写。通常循环变体更有效
 * 但有时重写很难，尤其是函数根据条件使用不同的子调用，然乎合并它们的结果，或者分支比较复杂时。而且有些优化可能没有必要，完全不值得
 * 递归可以使代码更短，更易于理解和维护。并不是每个地方都需要优化，大多数时候我们需要一个好代码，这就是为什么使用它
 * 递归的另一个重要作用就是递归遍历
 * 假设我们有一家公司。人员结构可以表示为一个对象
 */

// let company = {
//   sales: [
//     {
//       name: 'John',
//       salary: 1000,
//     },
//     {
//       name: 'Alice',
//       salary: 1600,
//     },
//   ],

//   development: {
//     sites: [
//       {
//         name: 'Peter',
//         salary: 2000,
//       },
//       {
//         name: 'Alex',
//         salary: 1800,
//       },
//     ],

//     internals: [
//       {
//         name: 'Jack',
//         salary: 1300,
//       },
//     ],
//   },
// };

// 求薪资任务的函数

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       console.log(subdep)
//       sum += sumSalaries(subdep);
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company))

// 求阶乘

// function factorial(n) {
//   // if (n === 1) {
//   //   return n;
//   // } else {
//   //   return n * factorial(n - 1);
//   // }
//   return n != 1 ? n * factorial(n - 1) : 1;
// }
// const res = factorial(5);
// console.log(res);

// JavaScript , 很多内建函数都支持传入任意数量的参数

// function sumAll(...args) {
//   // console.log(args)
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// const res = sumAll(1, 2, 3);
// console.log(res)

// function showName(firstName, lastName, ...titles) {
//   console.log(firstName + ' ' + lastName);
//   console.log(titles[0]);
//   console.log(titles[1]);
//   console.log(titles.length);
// }

// showName('Jhom', 'xuxu', 'yiyi','ruirui')

// 有一个名字为 argument 的特殊的类数组对象，该对象按照参数索引包含所有参数

/* function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

// showName('longlong', 'xuxu', 'ruiuri');
showName('itme') */

/**
 * 在过去 JavaScript 中没有rest参数，而是用arguments是获取所有参数的唯一方法，。但是它不支持数组方法，因此我们不能调用 arguments.map方法
 * 此外，它始终包含所有参数，我们不能像使用rest参数那样只截取入参的一部分
 * 因此，我们需要这些功能时，最好使用rest参数
 */

// let str = 'hello';
// console.log([...str])

// let str = 'Hello';

// console.log(Array.from(str));

// let arr = [1, 2, 3];
// let arrCopy = [...arr];

// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));

// console.log(arr === arrCopy); // 他们的引用是不相同的；

// arr.push(4);
// console.log(arr);
// console.log(arrCopy)

// 并且，也可以通过相同的方式来复制一个对象
let obj = { a: 1, b: 2, c: 3 };
// 对象浅拷贝
let objCopy = { ...obj };

// console.log(JSON.stringify(obj) === JSON.stringify(objCopy));

// console.log(obj === objCopy);

// // obj.d = 4;
// obj.d = 4;
// console.log()

// let user = {
//   name: 'John',
//   age:30
// }

// let clone = Object.assign({}, user);
// clone.gender = 'nan';
// console.log(user)

let user = {
  name: 'John',
  age: 12,
  size: {
    height: 182,
    width: 30,
  },
};
// console.log(user.sizes.height);
let clone = Object.assign({}, user);

console.log(user.size === clone.size);

user.size.width++;
console.log(clone.size.width);

