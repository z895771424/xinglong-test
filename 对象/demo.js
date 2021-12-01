/**
 * 一个函数被使用 new 操作符执行时，他按照一下步骤
 * 1 一个空空的对象被创建分配给this
 * 2 函数体执行。通常他会修改this，为其添加新的属性
 * 3 返回this的值
 */

// function User() {
//   // this = {} （隐式创建）
//   this.name = name;
//   this.isAdmin = false;
//   // return this (隐式返回)
// }

// 所以 new User('Jack')的结果是相同的对象：
// let user = {
//   name: 'Jack',
//   isAdmin: false,
// };

// 现在我们想创建其他用户，我们可以调用 new User("Ann") new User("Alice") 比每次都使用字面量要短的多，而且易于阅读

// 这是构造器的主要目的----实现可重用的对象创建代码

// 从技术上讲，任何函数，除了箭头函数，他没有自己的this 都可以用作构造器，即可通过new来运行，他会执行上面的算法，首字母大写是一个共同的约定

// 如果我们有许多用于创建单个复杂对象的代码，我们可以将他们封装在一个立即调用的构造函数中

// let user = new (function () {
//   (this.name = 'Join'), (this.isAdmin = false);
// })();

// 这个构造函数不能被再次调用，因为它不保存在任何地方，只是被创建和调用。

// 构造器模式测试：new.target

// 在一个函数内部我们可以使用new.target 属性来检查他是否被new进行调用了
// 对于常规调用，他为空，对于使用new的地啊哟用，则等于该函数

// function User() {
//   console.log(new.target);
// }

// User()
// new User();

// 它可以被用在函数内部，来判断该函数是否被通过new调用的构造器模式，还是被没通过new调用的常规模式

// 我们也可以昂new调用和常规调用做相同的工作，像这样

// function User(name) {
//   if (!new.target) {
//     // 如果没有 new 通过 new 运行我
//     return new User(name);
//   }
//   this.name = name;
// }

// let john = User('John');
// console.log(john.name)

// 构造器的return

/**
 * 构造器的return
 * 通常构造器没有return语句。他们的任务是将所有必要的东西写入this，并自动转换为结果
 * 但是如果这里有一个return语句，那么规则就简单了
 * 如果return返回的是对象，则返回这个对象，而不是this
 * 如果return返回的是一个原始类型，则忽略
 * 换句话说，带有对象的return返回该对象，在所有情况下返回this
 */

// function BigUser() {
//   this.name = "John";
//   return {name:'龙龙'}
// }
// const json = new BigUser().name;
// console.log(json)
// weiruanyahei
// 这里有个return为空的例子

// function SmallUser() {
//   this.name = "John";
//   return; // 没什么影响
// }
// const res = new SmallUser()
// console.log(res)

// 通常构造器没有 return 语句 这里我们主要为了完整行而体积返回对象的特殊行为

// 可以省略new后面的括号

/**
 * 构造器中的方法
 * 构造器中的方法来创建对象会带来很大的灵活性。构造函数可能有一些参数，这些参数定义了如何构造对象以及要放入什么
 * 当然，我们不仅可以将属性添加到this中，还可以添加方法
 * 例如下面的new User() 用给定的name 和方法sayHi创建了一个对象
 */
// function User(name) {
//   // this = {} 默认创建出来的
//   this.name = name;
//   this.sayHi = function () {
//     console.log('My name is' + this.name);
//   };
// }

// const john = new User('John');
// john.sayHi();
// 等于
// john = {
//   name: 'John',
//   sayHi:function(){}
// }