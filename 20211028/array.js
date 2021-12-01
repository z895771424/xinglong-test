// let user = [{ name: 'longlong' }, { name: 'longlong1' }]
// user.pop()
// console.log(user)

// let price = '99,78,68'
// // console.log(price.split(','))
// const str = 'longlong.com'
// // console.log(str.includes('long'))
// const arr = ['lon', 'xuxu', 1]
// console.log(arr.includes(item => {
//   console.log()
// }))
// 实现一个已经有的includes函数，加深对includes方法的了解
// function includes(arr, item) {
//   for (const value of arr) {
//     if (item === value) {
//       return true
//     }
//   }
//   return false
// }
// console.log(includes([1, 2, 3, 4, 5], 4))

// find 方法会把值返回出来
// 如果 方法找到后会把值返回出来
// 如果找不到就喊会underfined

// let arr1 = ['long', 'longlong.com', 'dfkffs']

// let find = arr1.find(item => {
//   return item === 'lon'
// })
// console.log(find)

// 使用i
// ludes等不能查找引用类型，因为他们的内存地址不是相等的
// const user1 = [{name:'里斯'},{name:'旭旭'},{name:'ruirui'}]
// const find = user1.includes({ name: '里斯' })
// /console.log(find)

// find 可以方便的查找引用类型
// const user = [
//   {name:'xuxu'},
//   {name:'xuxu'},
//   {name:'ruirui'},
// ]
// const find = user.findIndex(user => user.name === 'ruirui')
// console.log(find)

// find 原理 自定义函数
// Array.prototype.findValue = function (arr, callBack) {
//   for (const item of arr) {
//     if (callBack(item.name) === true) {
//       return item.name
//     }
//   }
//   return undefined
// }
// const res = user.findValue(user, (value) => value === 'xduxu')
// console.log(res)

// const arr = [1, 3, 4, 6]
// console.log(arr.sort((v1, v2) => v2 - v1))

// 排序原理
// let arr = [1, 2, 3, 4, 5, 6]
// let arr = [
//   {name:'longlong',age:1},
//   {name:'xuxu',age:2},
//   {name:'ruirui',age:3},
//   {name:'baobao',age:4},
//   {name:'yiyi',age:5},
// ]
// Array.prototype.toSort = ((array, callBack) => {
//   for (const m in array) {
//     for (const n in array) {
//       if (callBack(array[m], array[n]) < 0) {
//         let temp = array[m]
//         array[m] = array[n]
//         array[n] = temp
//       }
//     }
//   }
//   return array
// })

// const arr1 = arr.toSort(arr, (a, b) => b.age-a.age)
// console.log(arr1)

// let arr = [
//   {name:'longlong',age:1},
//   {name:'xuxu',age:2},
//   {name:'ruirui',age:3},
//   {name:'baobao',age:4},
//   {name:'yiyi',age:5},
// ]

// let arr = [1,2,3,4,5]

// Array.prototype.toSort = ((array, callBack) => {
//   for (const m in array) {
//     // 判断是对象还是，数字类型
//     for (const n in array) {
//       if (typeof array[m] === 'object' && typeof array[n] === 'object') {
//         callBack((array[m]-array[n]>0))
//       }
//     }
//   }
// })

// arr.toSort(arr,(a,b)=>a.age-b.age)

// forEach 使函数作用在每个数组元素上，但是没有返回值
// 下面例子是截取标签的五个字符

// let lessons = [
// 	{title: '媒体查询响应式布局',category: 'css'},
//   {title: 'FLEX 弹性盒模型',category: 'css'},
// 	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
// ];
// // 会改变数组对象中的内容
// lessons.forEach((item, index, array) => {
//   item.title = item.title.slice(2,3)
// })
// console.log(lessons)

// 返回数组所有键值对

// const hd = ['longlong', 'dhcms']

// // for (const [key, value] of hd.entries()) {
// //   console.log(key,value)
// // }

// console.log(hd.entries())

// const user = [
//   { name: '李四', js: 89 },
//   { name: '马六', js: 55 },
//   { name: '张三', js: 78 }
// ]

// const result = user.every(user => user.js >= 60)
// console.log(result)
// let words = ['后盾', '北京', '培训']
// let title = '后盾人不断分享技术教程'

// const state = words.every((item, index, array) => {
//   return title.includes(item)
// })

// console.log(state)
// if (state === false) {
//   console.log('标题必须所有关键词')
// }

// const state = words.some((item, index, array) => {
//   return title.includes(item)
// })
// if (state) {
//   console.log('标题含有违规关键词')
// }

// 使用 filter 可以过滤数据中的元素

let lessons = [
  {title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
  {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

lessons= lessons.filter((item, index, array) => {
  return item.category.toLowerCase() === 'css'
})
console.log(cssLessons)

