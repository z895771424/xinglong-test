// const animal = {
//   eats: true
// }

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// const rabbit = new Rabbit('White Rabbit');

// console.log(rabbit)

// 默认的 F.prototype 构造器属性
// 每个函数都有 prototype 属性，即使我我们没有提供它
// 默认的prototype是一个属性constructor的对象，属性constructor指向函数自身

// function Rabbit() { };

// Rabbit.prototype = {constructor:Rabbit}

// function Rabbit() { }

// console.log(Rabbit.prototype.constructor === Rabbit)

// 通常，我们什么都不做，constructor属性可以通过[[prototype]]给所有rabbits使用

// function Rabbit() { };
/**
 * by default
 * Rabbit.prototype.constructor
 */
// const rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit)

// 当我们有一个对象，但不知道它使用了那个构造器（例如它来自第三方的库），并且我们需要创建另一个类似的对象时，之中用法就很方便
// Js 自身不能确保正确的constructor函数值

// 或者，也可以手动重新创建constructor属性

// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit,
// };

// const user = {
//   name:'123'
// }
// console.log(user.__proto__)

// 在常规对象上，prototype 没什么区别
// const user = {
//   name: "John",
//   prototype:'BlaBla'
// }

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };
// const rabbit = new Rabbit();
// console.log(rabbit.eats);
// delete Rabbit.prototype.eats;

// const obj = {}
// console.log(obj)

// const arr = [1, 2, 3];

// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__ === Object.prototype);

// console.log(arr.__proto__.__proto__.__proto__);

// function f() { };

// console.log(f.__proto__ === Function.prototype);

// console.log(f.__proto__.__proto__ === Object.prototype)

// 基本数据类型

// 最复杂的事情发生在字符串，数字，布尔上

// 这些对象对我们来说时无形的创建出来的。大多数引擎会对其进行优化，但是在规范中描述的就是通过这种方式。这些对象的方法也驻留在他们的prototype中，
// 也可以通过String.prototype,Number.prototype 和 Boolean.protytype进行获取

/**
 * 值 null 和 undefined 没有对象包装器，所以他们没有方法和属性。并且他们也没有相应的原型
 */

// String.prototype.show = function () {
//   console.log(this)
// }

// 'longlong'.show();

// 在开发过程中，我们可能想要一些新的内建方法，并且想把他们添加到原生原型中。但这通常是一个很不好的想法

/**
 * 原型是全局的，所以很容易造成冲突。如果两个库都添加了 String.prototype.show方法，那么其中的一个方法将被另一个覆盖
 * 所以通常来说，修改原生原型被认为是一个很不好的想法
 */

/**
 * 在现代编程中，只有一种情况下允许修改原生属性。那就是polyfilling
 * polyfilling 是一个术语，表示某个方法在 JavaScript 规范已存在，但是特定的JaveScript引擎尚不支持该方法，
 * 那么我们可以通过手动实现它，并用以填充内建原型
 */

/* if (!String.prototype.repeat) {
  // 如果这儿没有这个方法
  // 那就在prototype中添加它
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  }
}
console.log('La'.repeat(3)) */

// 如果我们要创建类数组对象，则可能需要想其中复制一些Array方法

// const obj = {
//   0: 'Hello',
//   1: 'World',
//   length: 2,
// };

// obj.join = Array.prototype.join;
// // console.log(obj.join(','));
// const str = obj.join(',');
// console.log(typeof str)

/**
 * 上面这段代码有效，是因为内建的方法Join的内部算法只关心正确的索引和length属性。它不会检查这个对象是否是真正的数组。许多内建的方法就是这样。
 * 另一种方式是通过将 obj.__proto__ 设置为 Array.prototype,这样 Array中的所有方法都自动地可以在obj中使用了
 * 我们只能继承一个对象
 */

Function.prototype.defer = function (delay) {
  console.log(this)
  setTimeout(this, delay);
};

function f() {
  console.log('hello')
}
f.defer(1000);
