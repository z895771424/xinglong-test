// [1, 2].forEach(item => {
//   console.log(item)
// })

// 简捷是智慧的灵魂
// let user = {
//   name: 'Join',
//   age: 30,
// };

// user.isAdamin = true;
// console.log(user);
// delete user.age;
// console.log(user);
// let user = {
//   name: 'join',
//   age: 30,
//   'likes birds': true,
// };
// console.log(user)

// const 声明的对象是可以被修改的

// const user = {
//   name: 'Join',
// };

// user = 1;
// console.log(user)
// let fruit = 'xuxu'
// let bag = {
//   // [fruit]含义是属性名应该从fruit变量中获取
//   [fruit]:5
// }

// console.log(bag)

// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// const res = makeUser('longlong', 12);
// console.log(res);

// let user = {
//   name,
//   age: 30,
// };
// console.log(user)

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__)

// let user = { name: 'Join', age: 30 };
// console.log('age' in user);

let obj = {
  test: undefined
}
console.log(obj.test)

console.log('test' in obj)