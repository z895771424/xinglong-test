// try {
//   console.log('first');
//   name;
//   console.log('second')
// } catch (error) {
//   console.log('err')
//   // console.log(error)
// }

/**
 * JavaScript 引擎首先会读取代码，然后运行他，在读取阶段发生的错误被称为计息时间
 * 因为引擎无法理解该代码
 */

// try {
//   setTimeout(() => {
//     noSuchVariable // 脚本将在这里停止运行
//   }, 1000);
// } catch(e) {
//   console.log('停止运行')
// }

// try ... catch 包裹了计划要执行的函数，该函数本身稍后才执行，这是引擎已经离开了try ... catch 必须在这个函数内

// setTimeout(() => {
//   try {
//     noSuchVariable;
//   } catch (err) {
//     // console.log('err')
//     // console.log(err)
//     // console.log(err.message)
//     console.log(err.stack)
//   }
// }, 1000);

// let json = '{"name":"John","age":30}';
// let user = JSON.parse(json);
// console.log(user);

// let json = "{ bad json }";
// try {
//   let user = JSON.parse(json);
//   console.log(user);
// } catch (err) {
//   console.log('JSON parse err');
//   console.log(err.name);
//   console.log(err.message)
// }
// let json = "{ bad json }";
// try {
//   let user = JSON.parse(json);
//   console.log(user.name);
// } catch (err) {
//   console.log('err')
// }

// let json = "{ bad json }";

// try {
//   let user = JSON.parse(json);
//   console.log(user.name); // 不工作
// } catch (e) {
//   console.log(e.massage);
// }
// console.log(123)

// let json = '{ "age": 30 }';

// try {
//   let user = JSON.parse(json);
//   console.log(user.name); // 没有 name
// } catch (error) {
//   console.log('err')
// }

// throw 操作符会生成一个error对象

// JS 中有很多内建的标准error的构造器：Error，SyntaxError

// let error = new Error('message');
// let error = new SyntaxError('err')
// let error = new ReferenceError('err');
// console.log(error)

// let error1 = new Error('Things happen');
// console.log(error1.name);
// console.log(error.message);

// let json = '{ "age":30 }';

// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new SyntaxError('Incomplete data: no name');
//   }
//   console.log(user.name);
// } catch (err) {
//   console.log('JSON Error:' + err.message)
// }

// let json = '{ "age":30 }';

// try {
//   user = JSON.parse(json);
// } catch (error) {
//   console.log(error)
// }

// catch 应该只能处理它知道的error，并抛出所有其他error

// 一切皆有可能 程序员也会犯错。即使是被数百万神使用了几十年的开源项目 也可能突然被发现了一个漏洞，并导致可怕的黑客入侵

/**
 * Catch 捕获所有的error
 * 在 catch(err) {...} 块中，我们对error对象的err进行分析
 * 如果我们不知道如何处理他，那我们就throw err
 */

/**
 * 通常，我们可以使用instanceof操作符判断错误类型
 */

// try {
//   user = {};
// } catch (err) {
//   console.log(123)
//   if (err instanceof ReferenceError) {
//     // 访问一个未定义（undefined）的变量产生了
//     console.log('ReferenceError');
//   }
// }

'use strict';
// try {
//   user = { /*...*/ };
// } catch(err) {
//   if (err instanceof ReferenceError) {
//     console.log('ReferenceError'); // 访问一个未定义（undefined）的变量产生了 "ReferenceError"
//   }
// }

// let json = '{ "age":30 }';
// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new SyntaxError('Incomplete data: no name');
//   }
//   blabla(); // 预料之外的error
//   console.log(user.name);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log("JSON Error" + err.message);
//   } else {
//     // 再次抛出*
//     throw err;
//   }
// }

/**
 * 如果外部不存在这种结构，那么脚本就会被杀死
 * 所以，catch块实际上只处理他知道如何处理的error，并跳过所有其他的error
 * 下面这个实例演示了这种类型的error是如何被另外一级try..catch 捕获的
 */

// function readData() {
//   let json = '{"age":30}';

//   try {
//     blabla();
//   } catch (error) {
//     if (!(error instanceof SyntaxError)) {
//       console.log(112233)
//       // 他是被另外一级try...catch捕获的
//       throw error;
//     }
//   }
// }

// try {
//   readData();
// } catch (error) {
//   console.log('External catch got' + error);
// }

// try {
//   console.log('try');
//   if()
// }

// function func() {
//   try {
//     return 1;
//   } catch (error) {

//   } finally {
//     console.log('finally')
//   }
// }
// console.log(func());

// this.saleInfoMain = 你sessionStorate中的数据

// window.sessionStorage.setItem('名字', this.对象)
// window.sessionStorage.getItem('名字')
// window.sessionStorage.removeItem('名字')
// window.sessionStorage.clear();

// // 存的格式是JSON，取出来给转化为对象
// 存
// JSON.stringify(对象)
// 取
// JSON.parse(名字)

// let user = {
//   name: 'longlong',
//   age: 12,
// };
// // let res = user.name;
// // res = 'xuxu'
// // res = res + 'longlong'
// // console.log(user);

// function show(par) {
//   par  = par  + '123'
// }
// show(user.name);
// // console.log(res)
// console.log(user);
// let ss = null;
// // console.log(!!ss && ss.age);
// const res = JSON.stringify(null)
// console.log(typeof res)
// const str = '/h5/login'
// console.log(str.includes('/h5'))
// const arr = [1, 23, 'item', 4, 5]
// console.log(arr.includes('ite'))

const arr = [
  {name:'longlong',age:12},
  {name:'longlong',age:12},
  {name:'longlong',age:12},
]
// const newArr = JSON.parse(JSON.stringify(arr));
const newArr = arr;
// const newArr = JSON.stringify(arr)
// console.log(newArr);
newArr[0].name = 'xuxu'
console.log(arr)