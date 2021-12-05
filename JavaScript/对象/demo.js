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

/**
 * 对象-原始值转换
 * 1 所有的对象在布尔上下文中均为true 所以对于对象，不存在to-boolean转换，只有字符串和数值转换
 * 2 数值转换发生在对象相减或应用函数时。例如Date对象 可以相减，date1-date2 的结果是两个日期之间的差值
 * 3 至于字符串转换--通常发生在console.log(obj) 这样输出一个对象和类似的上下文中
 */
// let obj1 = {
//   age: 1,
//   name: 'longlong'
// };
// let obj2 = {
//   age: 2,
//   name:'xuxu',
// }
// console.log(obj1 + obj2)

/**
 * JSON 是语言无关的纯数据规范，因此一些特定于JavaScript的对象属性会被JSON.stringify跳过
 * 函数属性（方法）
 * Symbol 类型的属性
 * 存储undefined的属性
 */

// let user = {
//   // 被忽略
//   sayHi() {
//     console.log('Hello');
//   },
//   // 被忽略
//   [Symbol('id')]: 123,
//   // 被忽略
//   somethind: undefined,
// };

// console.log(JSON.stringify(user))

/**
 * 通常这很好，如果这不是我们想要的方式，那么我们很快就会看到如何自定义转换方式
 * 最棒的是支持嵌套对象转换，并且可以自动对其进行转换
 */

// let meetup = {
//   title: 'Conference',
//   room: {
//     number: 23,
//     participants: ['john', 'ann'],
//   },
// };
// console.log(JSON.stringify(meetup));

// 重要的限制：不得有循环引用

// let room = {
//   number: 23,
// };

// meetup.place = room;
// room.occupiedBy = meetup;
// JSON.stringify(meetup);

// 这里转换失败了，因为循环引用

// 排除和转换 replacer
// console.log(JSON.stringify(meetup, ['title', 'participants']));

// 我们这里可能过于严格了。属性列表应用于整个对象结构。所以participants是空的，因为name不在列表中
// 让我们包含除了会导致循环应用的room.occupiedBy之外的所有属性

/**
 * 序列化：就是将对象的状态信息转换为可以存储或传输的形式的过程，基本上所有的语言都有序列化对象的方法
 */

/**
 * 幸运的是，我们可以使用一个函数代替数组作为replacer
 * 该函数会为每个(key,value) 对调用并返回已替换的值，该值将替换原有的值。如果该值被跳过了，则为undefined
 *
 *
 */
//   let room = {
//     number: 23
//   };

//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup 引用了 room
//   };

// room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//   console.log(`${key}:${value}`);
//   return (key === 'occupiedBy') ? undefined : value;
// }));

/**
 * 格式化：space
 * 第三个参数是用于优化格式的空格数量
 * 以前，所有字符串化的独享都没有缩进和额外的空格。如果我们想通过网络发送一个对象，那就没什么问题
 * space 参数专门用于调整出美观的输出
 */
// let user = {
//   name: 'John',
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };
// 这里 space = 2 告诉Javescript 在多行中显示嵌套对象，对象内部缩进了2个空格
// console.log(JSON.stringify(user, null, 2));

// 自定义 toJSON
// toString 进行字符串转换，对象也可以提供toJSON方法来进行JSON转换，如果可用，JSON.stringigy会自动调用它

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };

// console.log(JSON.stringify(meetup))
// 在这儿，我们看到了date(1)变成了一个字符串。这是因为所有日期都有一个内置的toJSON方法来返回这种类型的字符串

// 现在让我们为对象room添加一个自定义的toJSON
// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   },
// };

// let meetup = {
//   title: 'Conference',
//   ...room,
// };

// console.log(JSON.stringify(typeof room));

// let user = {
//   name: 'longlong',
//   age:12
// }
// console.log(user.toJSON())

/**
 * toJSON() 方法可以将Date对象转化为字符串，并格式化为JSON数据格式
 */

// const date = new Date();
// const n = date.toJSON();
// console.log(typeof date);
// console.log(typeof n)

// 想象一下，我们从服务器上获得了一个字符串化的meetup对象
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str);
// console.log(meetup);
// meetup.date.getDate的值是一个字符串，而不是Date对象。JSON.parse怎么知道将该字符串转换为Date呢？
// 让我们将reviver函数传递给JSON.parse作为第二个参数，该函数按照原样返回所有值，但是date会变成Date

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, function (key, value) {
//   // console.log(value)
//   if (key === 'date') {
//     console.log(value)
//     return new Date(value);
//   }
//   return value;
// });
// console.log(meetup.date.getDate());

/**
 * JSON 是一种数据格式，具有自己的独立标准和大多数变成语言的库
 * JSON支持object,array,string,number,boolean,null
 * JavaScript 提供序列化方法
 * 这两种方法都支持用于只能读取/写转换函数
 * 如果一个对象具有toJSON 那么他会被JSON.stringify 调用
 */
// JSON.parse