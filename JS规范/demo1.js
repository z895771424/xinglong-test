// var foo = [1, 2],
//     bar = foo;
// bar[0] = 9;
// console.log(foo[0], bar[0]);

// 数组拷贝(深拷贝)
// let arr = [1, 2, 3, 4, 5];
// let arrCopy = arr.slice();
// arrCopy[0] = 'longong'
// console.log(arrCopy)
// console.log(arr)

// 编程时使用join而不是字符串来构建字符串
// 绝对不要再一个非函数块里面声明一个函数，把那个函数赋值给一个变量。浏览器允许你那么做，但是他们解析不同

// good
// if (true) {
//   var test = function test() {
//     console.log('longlong');
//   };
// }
// test();

// 当使用变量访问属性时使用中括号
// const luke = {
//   jedi: true,
//   age: 28,
// };

// function getProp(prop) {
//   return luke[prop];
// }

// let isJedi = getProp('jedi');
// console.log(isJedi)

// 空值合并运算符 ？？
// 本文中我们将值既不是null也不是undefined的表达式称为已定义的(defined)

// a ?? b
// 如果a是已经定义的，则结果为a
// 如果a不是已定义的 则结果为b
// 换句话说，如果第一个参数不是 null，undefined 则??返回第一个参数。否则，返回第二个参数。

// let user = '123';
// console.log(user ?? 'Anonynous');
// console.log(user ?? 'good')

// let firstName = null;
// let lastName = null;
// let nickName = 'Supercoder';

// 与 || 比较，运算符使用的方式相同。

// console.log(firstName || lastName || nickName ||"Anoymous")

// || 运算符子Javescript 诞生就存在，因此开发者长期将其用户这种目的

// 他们之间的区别是 || 返回第一个真值 ？？ 返回一个已经定义的值

// let height = 0;
// console.log(height || 100)

//  || 无法区分false、0、空字符串、"",和null/undefined
// let height = '';
// console.log(height || 100)

// 在 js 中 对象是所有复杂结构的基础，因此，我们可能有一个自家创建的对象，比如data，
// 并实现了自己的data.values()方法

// let user = {
//   name: 'Json',
//   age: 30,
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.entries(user)[0])

// for (const value of Object.values(user)) {
//   console.log(value);
// }

// console.log(Object.values(user))
// for (const i of user) {
//     console.log(user[i])
// }

// for (const i of Object.values(user)) {
//   console.log(i)
// }

/**
 * 对象缺陷好数组存在的许多方法
 * 如果我们想应用他们
 */

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map(([key,value])=>[key,value] * 2)
// )
// console.log(doublePrice.meat)

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (const value of Object.values(salaries)) {
//     sum += value;
//   }
//   return sum
// }

// const res = sumSalaries(salaries);
// console.log(res);

// 最终解决方案
// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a,b)=>a+b,0)
// }
// const res = sumSalaries(salaries);
// console.log(res)

let user = {
  name: 'join',
  age: 30,
};

function count(user) {
   return Object.keys(user).length
}

const res = count(user);
console.log(res);