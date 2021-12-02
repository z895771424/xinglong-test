// const obj = {
//   get propName() {
//     // 当读取 obj.propName时 getter起作用
//   }
//   set propName(value) {
//     // 当执行 obj.propName = value 操作时 setter起作用
//   }
// }

// 现在我们想添加一个fullName属性，该属性值应该为 "John Smith"。当然，我们不想赋值粘贴自己已有的信息，因此我们可以使用访问器来实现

// let user = {
//   name: 'John',
//   surname: 'Smith',

//   get FullName() {
//     return `${this.name} ${this.surname}`
//   }
// };

// console.log(user.FullName)

/**
 * 从外表看，访问器看起来就像一个普通的属性，这就是访问器属性的实际思想。我们不以函数的方式调用user.fullName,我们正常读取它：getter在幕后运行
 * 有两种类型的对象属性
 * 访问器属性，他们本质上适用于获取和设置值的函数，但从外部代码来看就像常规属性
 */

// let user = {
//   get fullName() {
//     return '123';
//   },
// };
// user.fullName = 'Test';
// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// }
//   user.fullName = 'Alice Cooper';
//   console.log(user.name);

// getter / setter 可以用作真实属性值的包装器，以便对他们进行更多的控制

// const user = {
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     if (value.length <= 4) {
//       console.log('Name is too short,need at least 4 characters');
//       return;
//     }
//     this._name = value;
//   },
// };

// user.name = 'Pete';
// console.log(user.name);

/**
 * 所以，name被存储在_name属性中，并通过getter和setter进行访问
 * 从技术上将，外部代码可以使用user._name直接访问name
 * 但是这儿有一个众所周知的约定，以下 _ 开头的属性是内部的属性，不应该从对象外部进行访问
 * 访问器的一大用途是，他们允许随时通过getter和setter替换正常的数据属性，来控制和调整这些属性的行为
 */

// 想象以下，我们开始使用数据属性name 和 age 来实现user对象
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const John = new User('John', 25);
// console.log(John.age);
// 但迟早情况可能发生变化。我们可能会据欸的那个存储birthday，而不是age，因为它更精确，更方便
// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
// }
// console.log()

// 现在应该如何处理仍使用age属性的旧代码呢？
// 我们可以尝试找到所有这些地方并修改他们，但这会花费很多时间，而且如果其他很多人都在使用该代码，那么可能很难完成所有修改，而且user中有age是一件好事

// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

  // 年龄是根据当前日期和生日计算得出的
//   Object.defineProperty(this, 'age', {
//     get() {
//       let todyYear = new Date().getFullYear();
//       return todyYear - this.birthday.getFullYear();
//     },
//   });
// }

// const John = new User('John', new Date(1992, 6, 1));
// console.log(John.birthday)
// console.log(John)
// console.log(John.age)
// 这几个属性都是可以访问的
