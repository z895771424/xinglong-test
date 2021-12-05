// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(2,3))

// 如果在函数内部使用了同名变量，那么函数会遮蔽外部变量
// let userName = 'John';
// function showMessage() {
//   let userName = 'Bob';
//   return userName;
// }

// const res = showMessage();
// console.log(res)

// function show() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('cuowu');
//     }, 1000);
//   });
// }

// async function access() {
//   try {
//     await show();
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(123);
// }
// access();

// function showMessage(text) {
//   if (text === undefined) {
//     text = 'empty message';
//   }
//   console.log(text);
// }
// showMessage();

// function showMessage(text) {
//   text = text || 'empty';
//   console.log(text)
// }
// showMessage(123);

// function showMessage(text) {
//   text = text || 'empty';
//   console.log(text);
// }
// showMessage(0)

// function showCount(count) {
//   console.log(count ?? 'unknow');
// }
// showCount('12');

// 如果函数无返回值，他就会想返回undefined一样
// function doNothing() { }
// console.log(doNothing() === undefined)
// console.log(doNothing())

// 一个函数应该只包括函数名所指定的功能，而不是更多与函数名无关的功能

// function checkAge(age) {
//   // if (age > 18) {
//   //   reutnr
//   // }

//   debugger
//   console.log(123)
// }
// checkAge()

// let arr = [{ name: 'lonlong' }, { name: 'xuxu' }];

// let newArr = []
// for (let item of arr) {
//   newArr.push(JSON.parse(JSON.stringify(item)))
// }
// newArr[0].name = '我修改了';
// // console.log(newArr)
// console.log(arr);

// let str = ' '
// console.log(str.length)

// console.log(undefined.trim())
// console.log(typeof '123'.length);

// confirm('loe')

// function checkAge(age) {
//   return (age > 18) ? true : 'allow you?';
// }
// const res = checkAge(8);
// console.log(res)

function checkAge(age) {
  return age > 18 || 'allow you ?';
}
const res = checkAge('20');
console.log(res)
