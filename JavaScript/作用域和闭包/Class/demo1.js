/**
 * 在我们日常开发中，我们进场需要相同类型的对象，例如用户（users）商品（goods） 或者任何其他东西
 * 正如我们在构造器和操作符new 一章节中已经学到，new Function 可以帮助我们实现这种需求
 * 但在现代JaveScript中，还有更高级的类（class）构造方式，它引入非常棒的新功能，这些功能对于面向对象编程很有用
 */

// class MyClass {
//   constructor() {}
//   method1() {}
//   method2() {}
// }

// new 会自动调用constructor()方法，因此我们可以在constructor中初始化对象

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }

// const user = new User('John');
// user.sayHi()

/**
 * 当 new User('John') 被调用
 * 1 一个对象被创建
 * 2 constructor 使用给定的参数运行，并为其分配this.name
 * 然后我们就可以调用对象方法了
 * 类的方法之间没有逗号
 */

/* class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
} */
// console.log(typeof User)
// console.log(User === User.prototype.constructor);
// console.log(User.prototype.sayHi())
// console.log(Object.getOwnPropertyNames(User.prototype));

// 用纯函数重写 class User
// 1 创建构造器函数
/* function User(name) {
  // this = {} 默认形式
  this.name = name;
  // return this 默认形式
}

User.prototype.sayHi = function () {
  console.log(this.name);
};

const John = new User('longlong');
John.sayHi() */
// console.log(John)
// User.prototype.sayHi

// class User {
//   constructor() {}
// }

// console.log(typeof User);
// User();

/**
 * 1 通过class创建的函数就v有特殊的内部属性[[IsClassConstructor]]：true 因此，它与手动创建不完全相同
 *
 * 2 类方法不可枚举。类定义将 prototype 中的所有方法的enumerable标志为false。
 *   这很好，因为如果我们对一个对象调用for..in 方法，我们不希望class方法出现
 *
 * 3 类 总是使用use strict 在类构造中所有代码都将自动进入严格模式
 */

/* const User = class {
  sayHi() {
    console.log('Hello');
  }
};
 */

// 类似于命名表达式，类表达式可能也应该有一个名字
// 如果表达式有名字，那么该名字仅仅在类内部可见

/* const User = class MyClass {
  sayHi() {
    console.log(MyClass);
  }
}
new User().sayHi(); */
// console.log(123)

// 在外部不可见
// console.log(MyClass)

// 我们甚至可以按需动态地创建类，就像这样

/* function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  }
}

const User = makeClass('Hello');
new User().sayHi() */

/**
 * 使用类字段制作绑定方法
 * 正如 函数绑定一章中所讲的，JavaScript 中的函数具有动态的this。它取决于调用撒谎那个小爱问
 * 因此如果一个对象被传递到某处，或者在另一个上下文中被调用，则this将不再是对其对象的引用
 */

/* class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}

const button = new Button('Hello'); */
// button.click();
// setTimeout(() => {
//   button.click
// }, 1000);
// setTimeout(button.click, 1000);

// 一个对象方法被床底到某处，或者在另一个上下文中被调用，则this将不再是对其对象的引用

/**
 * 在函数绑定一章中所讲过，有两种可以修复它的方式
 * 1 传递一个包装函数，例如 setTimeout(()=>button.click(),1000)
 * 2 将方法绑定到对象
 */

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     console.log(this.value);
//   }
// }

// const button = new Button('Hello');

// setTimeout(button.click, 1000);

// 类字段 click = () => {...} 是基于每个对象被创建的，在这里每个Button对象都有一个独立的方法，在内部都有一个指向此对象的this
// 我们可以把button.click 传递到任何地方，而且this的值总是正确的。
// 在浏览器环境中，它对于事件监听尤为有用

// 类继承是一个类扩展另一个类的一种方式
// 因此我们可以在现有功能现有功能之上创建新的功能

// 假设我们有
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} run widht speed ${this.speed}`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name}  stands still`);
//   }
// }

// const animal = new Animal('My animal');

/* class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }
  // 让我们停下来的时候自动hide
  // stop() {
  //   super.stop();
  //   this.hide()
  // }
  stop() {
    // setTimeout(function () {
    //   super.stop();
    // }, 1000);
    setTimeout(() => {
      super.stop();
    }, 1000);
  }
}

const rabbit = new Rabbit('White Rabbit');

rabbit.run(5);
rabbit.stop(); */

/**
 * 1 查找对象 rabbit(没有run)
 * 2 查找它的原型
 * 3 箭头函数没有super
 */

// 重写constructor

// 到目前为止，rabbit还没有自己的constructor
// 如果一个类扩展了另一个类且没有constructor,那么将生成下面的空constructor

// class Rabbit extends Animal {
//   // 为没有自己的constructor 的扩展类生成的
//   constructor(...args) {
//     super(...args)
//   }
// }

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name + ' father';
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     this.speed = 0;
//     this.name = name;
//     this.earLength = earLength;
//   }
// }

// const rabbit = new Rabbit('white Rabbit', 10);

/**
 * 当通过new执行一个常规函数是，它将创建一个空对象，并将这个空对象赋值给this
 * 但是当继承的constructor执行时,它不会执行此操作，它期望父类的constructor来完成这项工作
 * 因此，派生的constructor必须调用super才执行父类的constructor，否则this指向的那个对象将不会创建，并且我们会收到一个报错
 */

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
// }
// // 现在可以了
// const rabbit = new Rabbit('White Rabbit', 10);
// console.log(rabbit.name)

// 我们不仅可以重写方法，还可以重写字段
// 不过，当问哦们访问在父类构造器中的一个被重写的字段时，这里会有一个诡异的行为，与绝大多数其他编程语言都很不一样

// class Animal {
//   name = 'animal';
//   constructor() {
//     console.log(this.name);
//   }
// }

// class Rabbit extends Animal {
//   name = 'rabbit';
// }
// new Animal();
// new Rabbit();

// 换句话说，父类构造器总是会使用它自己字段的值，而不是被重写的那一个

class Animal {
  showName() {
    console.log('animal');
  }
  constructor() {
    this.showName();
  }
}

class Rabbit extends Animal {
  showName() {
    console.log('rabbit');
  }
}

new Animal();
new Rabbit();

/**
 * 实际上 原因在于字段初始化的顺序，类字段时这样初始化的：
 * 对于基类（还未继承任何东西的那种）。类字段是这样初始化的
 * 对于派生类，在super() 后立即初始化
 */