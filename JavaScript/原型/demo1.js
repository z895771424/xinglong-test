/**
 * 在编程中,我们经常想获取并扩展一些东西
 * 例如，我们有一个user对象及其和属性和方法，并希望admin和guest作为user稍加修改的变体
 * 我们想重新使用user的内容，而不是复制来实现它的方法
 * [[prototype]] 要么为null，要么就是另一个对象的引用
 */

/* const animal = {
  eats: true,
};
const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.jumps); */

// 在这儿我们可以说 animal 是 rabbit 的原型 或者说rabbit的原型是从animal 继承而来的

// 因此，如果animal有许多有用的属性和方法，那么他们将自动地变为rabbit中可用，这种属性被称为继承

/* const animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  },
};
const rabbit = {
  jumps: true,
  __proto__: animal,
};
rabbit.walk() */

// 原型链可以很长

// let animal = {
//   eats: true,
//   walk() {
//     console.log('Animal walk');
//   }
// }
// let rabbit = {
//   jumps: true,
//   __proto__:animal,
// }
// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// }

// longEar.walk();
// console.log(longEar.jumps)

/**
 * 这里有两个限制
 * 1 应用不能形成闭环。如果我们试图在一个闭环中分配
 * 2 __proto__ 的值可以是对象，也可以是null。而其他的类型都会被忽略
 * 3 只有一个 __proto__,一个对象不能从其他两个对象获得继承
 */

// /* const animal = {
//   eats: true,
//   walk() {
//     /* rabbit不会使用此方法 */
//   }
// }

// const rabbit = {
//   __proto__:animal
// }

// rabbit.walk = function () {
//   console.log('Rabbit')
// }

// rabbit.walk() */

// const user = {
//   name: 'John',
//   sumName: 'Smith',

//   set fullName(value) {
//     // console.log(this)
//     [this.name, this.sumName] = value.split(' ');
//   },
//   get fullName() {
//     return `${this.name} ${this.sumName}`;
//   },
// };

// const admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// // console.log(admin.fullName);
// admin.fullName = 'admin FullName';
// console.log(admin)
// console.log(admin.fullName);
// console.log(user.fullName);

/* const animal = {
  walk() {
    if (!this.isSleeping);
    console.log('I Walk');
  },
  sleep() {
    // 此时的这个方法是rabbit调用的，所以 this 是rabbit
    console.log(this);
    this.isSleeping = true;
  },
};

const rabbit = {
  name: 'White Rabbit',
  __proto__: animal,
};

rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping); // undefined 原型中没有此属性
 */

// for in 循环也会迭代继承的属性

// const animal = {
//   eats: true
// }
// const rabbit = {
//   jumps: true,
//   __proto__:animal
// }

// console.log(Object.keys(rabbit));
// for(let prop in rabbit) console.log(prop)

// 如果这不是我们想要的，并且我们想排除继承的属性，那么这儿有一个内建方法 obj.hasOwnProerry(key)
// 如果 obj 具有自己沸即成名为key的属性，则返回true

// 因此我们可以过滤掉继承的属性（或对他们进行其他操作）

// let animal = {
//   eats: true
// }

// let rabbit = {
//   jumps: true,
//   __proto__:animal
// }

// for (let prop in rabbit) {
//   // 排除继承的属性
//   let isOwn = rabbit.hasOwnProperty(prop);
//   if (isOwn) {
//     console.log(`Our ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
// }

// for in 指挥列出可枚举属性，这就是为什么它和其余的Object.prototype 属性都未被列出
// 几乎其他键/值获取方法都忽略继承的属性

// 从性能角度来看，我们是从对象还是从原型链中获取属性都是没啥区别的。他们会记住在哪里找到该属性，并下次重用它
