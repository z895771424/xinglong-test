// JavaScript 引擎中有个被称作垃圾回收器的东西在后台执行。他监控这所有对象的状态，并删除掉那些已经不可达的。

// let user = { name: 'longlong' };
// user = '123'
// let admin = user;
// user = null;
// console.log(admin)

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;
//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry({ name: 'John' }, { name: 'Ann' });
// console.log(family);
// delete family.father;
// delete family.mother.husband;
// console.log(family)

// function makeUser() {
//   return {
//     name: 'John',
//     ref:this,
//   }
// }

// let user = makeUser();

// // console.log(user.ref.name);
// console.log(user)

// if (0) {
//   console.log('进来')
// } else {
//   console.log('没进来')
// }

// 数字0 空字符串 null undefined NaN 都会被转换为false，因为他们被称为假的值

// const year = 2015;
// let cond = (year === 2015)
// console.log(cond)
// if (cond) {
//   console.log(123)
// }

// let user = {};
// console.log(user.address.street)
// console.log(user.address)

// let user = {};
// console.log(user.address ? user.address.street : undefined);

// let user = {};
// console.log(
//   user.address ? (user.address.street ? user.address.street.name : null) : null,
// );

// 这样就太扯淡了，并且这有可能导致写出来的代码很难让人丽姐

// let user = {};
// console.log(user.address && user.address.street && user.address.streetname);
// const user = {
//   name:'longlong'
// }
// if (user && user.age === 123) {
//   console.log('success');
// } else {
//   console.log('fail')
// }

// 如果一个属性既不是null也不是undefined，那么他就存在
// let user = {
//   address: {
//     street:'123'
//   }
// };
// console.log(user?.address?.street);

// let user = null;
// let x = 0;
// user ?.sayHi(x++);
// console.log(x)

// let userAdmin = {
//   admin() {
//     console.log('I am admin');
//   },
// };

// let userGust = {};

// userAdmin.admin?.();
// // 不会报错
// URLSearchParams.admin?.();

// let user1 = {
//   firstName: 'Join',
// };

// let user2 = null;

// let key = 'firstName';

// console.log(user1?.[key]);
// console.log(user2?.[key]);
// console.log(user1?.[key]?.something?.not?.exiting)
// delete user1.firstName;

// let user = {
//   age:12
// }
// console.log(user?.age?.)
