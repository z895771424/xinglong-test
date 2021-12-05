// let user = {
//   firstName: 'John',
//   sayHi() {
//     console.log('hello world');
//     console.log(this.firstName)
//   },
// };

// setTimeout(() => {
//   user.sayHi();
// }, 1000);

// function fun() {
//   setTimeout(() => {
//     console.log('fun');
//     return 'fun';
//   }, 1000);
// }

// async function show() {
//   const res = await promistFn();
//   console.log(res)
//   if (res) {
//     return true;
//   }
// }

// function promistFn() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log('123');
//       resolve('promiseFn')
//     }, 1000);
//   });
// }
// (async function () {
//   const res = await show();
//   // console.log(res);
//   // console.log(Boolean(res))
//   res && fun();
// })();

// let arr = ['i', 'go', 'home'];

// delete arr[1];
// // console.log(arr);
// // console.log(arr.length)

// console.log(arr[1])`

// console.log(null == undefined);

// let arr = ['i', 'go', 'home'];
// 从索引 1 开始删除 1 个元素
// arr.splice(1, 1);
// console.log(arr);
// 从索引 1 开始删除 2 个元素
// arr.splice(1, 2);
// console.log(arr)

// let arr = ["I", "study", "JavaScript", "right", "now"];
// 删除数组的前三项，并使用其他内容代替他们
// arr.splice(0, 3, '龙龙', '旭旭', '贝贝', '喜喜', '大宝贝','xuxu');
// console.table(arr)

// splice 返回了已删除元素的数组

// let arr = ["I", "study", "JavaScript", "right", "now"];
// let removed = arr.splice(0, 2);
// console.log(removed);

// 我们可以将deleteCount 设置为0，splice 方法就能够插入元素而不用删除任何元素

// let arr = ['I', 'study', 'javascript'];

// // 从索引2开始

// arr.splice(2, 0, 'longlong', 'xuxu')
// console.log(arr)

// 允许负向索引

// let arr = [1, 2, 4]
// arr.splice(-1, 0, 3, 4);
// console.log(arr)

// let str = 'longlong'
// slice 通常用于获取副本，以不应影响原始数组的进一步转换
// let arr = ['1', 's', 't', 'e'];
// const newArr = arr.slice(1, 3);
// console.log(newArr);
// console.log(arr)

// let arr = [1, 2];

// const res =  arr.concat([4, 5, 6])
// console.log(res)
// const res  = arr.concat([1,2,3,4,45],[5,6,7])
// console.log(res)

// 通常，他只复制数组中的元素。其他对象，即使他们看起来向数组一样，但仍然会被作为一个整体添加

// let arr = [1, 2];
// let arrLike = {
//   0: 'something',
//   length:1
// }
// console.log(arr.concat(arrLike));

// 但是，如果类似的数组对象具有Symbol.isConcatSpreadable属性,那么它就会被concat当作一个数组来处理

// let arr = [1, 2];
// let arrLike = {
//   0: 'something',
//   1: 'else',
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// console.log(arr.concat(arrLike));

// forEach 方法为数组的每个元素都运行一个函数
// 该函数的结果（如果他又返回）他会被抛弃和忽略

// 在数组中搜索
// indexOf/lastIndexOf includes

// const arr = [1, 0, false];
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false))
// console.log(arr.indexOf(null))
// console.log(arr.includes(1))

// includes 的非常小的差别是它能正确处理 NaN 而不像 indexOf/lastIndexOf
// const arr = [NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN))

// 想象一下，我们有一个对象数组，我们该如何找到特定条件的对象
// let users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];
// const user = users.find((item) => item.id === 1);
// console.log(user)
// const user = users.findIndex((item) => item.id === 1);
// console.log(user)
// 在现实生活中，对象数组是很常见的，所以find方法非常有用

// find 方法搜索额是使函数返回true的第一个（单个）元素
// 如果需要匹配的有很多，我们可以使用arr.filter
// let users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];
// const someUsers = users.filter((item) => item.id < 3);
// console.log(someUsers);

// arr.map 方法是最有用的经常使用的方法之一
// 他对数组的每个元素都调用函数，并返回数组
// let lengths = ["Bilbo", "Gandalf", "Nazgul"]
// let result = lengths.map((item, index, array) => {
//   return item.length
// })
// console.log(result)

// let names = 'Bilbo, Gandalf, Nazgul';
// let arr = names.split(', ');
// console.log(arr);
// for (let name of arr) {
//   console.log(name)
// }
// split 方法有一个可选购的第二个数字参数
// let arr =  names.split(', ', 2);
// console.log(arr)

// 调用带有空参数s的split(s)，会将字符串拆分为字母数组

// let str = 'test';
// console.log(str.split(''));

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current)
// console.log(result)

// 数组是基于对象的，不构成单独的语言类型

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

