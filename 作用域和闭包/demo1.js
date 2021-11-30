// Js 是一种非常面向函数的语言。他给了我们很大的自由度，在js中，我们可以随时创建函数，可以以函数作为参数传递给另一个函数

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + ' ' + lastName
//   }
//   console.log(getFullName())
// }
// sayHiBye('lognlong', 'xuxu');

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let name = 'John';

// function sayHi() {
//   console.log(name)
// }
// name = 'Pete';
// sayHi();

// 函数从内到外依次在对应的词法环境中寻找目标变量，它使用最新的值
// 旧变量不会保存在任何地方。当一个函数想要一个变量时，他会从自己的词法环境或外部词法环境中获取当前的值

let user = 'Hello';
if (true) {
  let user = "John";
  function sayHi() {
    console.log(user)
  }
}
 sayHi()