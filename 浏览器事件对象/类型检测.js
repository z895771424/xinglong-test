/**
 * typeof 判断数据的类型
 */

// var hd
// console.log(typeof hd)

// function run() { }

// console.log(typeof run)

// let c = [1, 2, 3, 4]
// // console.log(typeof c)

// /**
//  * instanceof 运算符用于检测构造函数的prototype 属性是否出现在某个实例对象的原型链上
//  * 也可以理解为某个对象的实例，typeof不能区分数组，但instanceof则可以
//  */

// let hd = []
// let houdunren = {}

// console.log(hd instanceof Array)// true
// console.log(houdunren instanceof Object)// true

// let arr = [1, 2, 3]
// console.log(arr instanceof Array)

// function User() { }
// const hd = new User()
// // hd 的构造函数是User
// console.log(hd instanceof User)//true

// let hd = 'houdunren'
// let cms = new String('hdcms')
// console.log(typeof hd, typeof cms) // string object
// if (typeof hd === 'string') {
//   console.log('%c hd是字符串', 'color:blue')
// }

// 只有对象才有方法使用，但在JS中也可以使用值类型调用方法，应为它会在执行时将值类型转换为对象
// JS中也可以使用值类型调用方法，因为他会在执行时将值类型转化为对象

// let hd = 'longlong'
// let cms = new String('longlong')

// console.log(hd.length)
// console.log(cms.length)

// 以对象形式创建字符串
// 获取字符串长度
// let hd = new String('longlong')
// console.log(hd.length)
// // 获取字符串
// console.log(hd)
// console.log(hd.toString())

// 转义符号
// const con = '\"longlong.com\"'
// console.log(con)
// // 制表符相当于字符前面的空格
// const con2 = '\tlonglong.com\\ \n旭旭3'
// console.log(con2)

// 标签模板
// 标签模板时提取出普通字符串与变量，交由标签函数处理
// const lesson = 'css'
// let web = '后盾人'
// // 这是一个标签函数
// tag`访问${web}学习${lesson}前端知识`
// function tag(strings, ...values) {
//   console.log(strings)
//   console.log(values)
// }

// 大小写转换
// console.log('houdunren.com'.toUpperCase())
// console.log('longlong.com'.toLowerCase())

// 从字符串中获取单字符
// console.log('houdunren'.charAt(2))

//使用trimeLift删除左边空白，使用trimRight删除右边空白
// let ss = 'houdunren'
// console.log(ss)
// 删除左边空白
// console.log(ss.trimLeft())

// 截取字符串 slice substr substring

// let hd = 'longlong.com'
// 使用slice 不会改变原字符串
// 第一个参数是截取开始前的位置，第二个参数是截取结束的位置
// console.log(hd.slice(2))
// 算尾不算头
// console.log(hd.slice(0,2))
// console.log(hd)

// console.log(hd.slice(3,-2))

// 查找字符串
// 从开始获取字符串位置，检测不到是返回
// console.log('lonlong'.indexOf('o'))

// search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索

// let str = 'longlong.com'
// console.log(str.search('com'))
// console.log(str.search(/\.com/i))

// includes 字符串中是否包含指定的值，第二个参数值指查找开始位置
// console.log('longlong.com'.includes('o'))
// console.log('longlng.com'.includes('c',1))

// startWidth 是否是指位置开始，第二个参数为查找的开始位置
// console.log('longlong.com'.startsWith('l'))// true
// console.log('longlong')

// 下面是查找关键词的示例

// const words = ['php', 'css']

// const title = '我爱后盾人嘘唏php与css知识'

// const status1 = words.some(item => title.includes(item))

// console.log(status1)

// // 替换字符串
// let name1 = 'longlong.com'

// const web = name1.replace('longlong', '旭旭')
// // 这种替换方式不会改变原数组
// console.log(web)
// console.log(name1)

// 使用字符串替换来生成关键词链接
// const word = ['php', 'css']
// const string = '我喜欢在后盾人学习php和css知识'
// const title = word.reduce((pre, word) => {
//   return pre.replace(word,`<a href=""></a>`)
// })

// const reg = /ab+c/
// 正则表达式也是一个对象
// console.log(typeof reg)

// 使用正则表达式来来完成替换
// let res = 'longlong.com'.replace(/u/g, str => {
//   return '@'
// })
// console.log(res)
// 字符串重复
// console.log('*'.repeat(3))
// 将字符串转换为数组
// console.log('1,2,3'.split(','))
// let hd = 900
// 这是使用构造函数的方式转化
// console.log(typeof String(hd))
// toString 转化为字符串

// let arr = ['xuxu', 'longlong']
// console.log(typeof arr.toString()) // string

// console.log(new Boolean(true))
// console.log(new Boolean(false))

// 隐式转换
// 基本上所有类型都可以隐式转换为Boolean类型
// 非空字符串true 空字符串 false
// if (' '.trim()) {
//   console.log(11)
// }

// 非0的数值 true 0、NaN false

// if (NaN) {
//   console.log(11)
// }

// if ([].length>=0) {
//   console.log(123)
// }
// 所有对象为true
// if ({}) {
//   console.log(123)
// }

// undefined 为false
// if (undefined) {
//   console.log(123)
// }

// if (null) {
//   console.log(123)
// }
// if (NaN) {
//   console.log(123)
// }

// 只要是数组就打印true
// if ([]) {
//   console.log(123)
// }

// 下面一个经典的例子，字符串在与Boolean比较时，两边都转换为数值类型后再比较
// console.log(Number('asd'))

// 应用类型的boolean值为真

// 使用 !! 转换为波尔类型

// let hd = "1"
// console.log(!!hd)

// const hd1 = 1
// console.log(!!hd1)

// const hd = null
// console.log(!!hd)

// const hd2 = new Date('2021-01-22 10:22')
// const hd2 = {}
// console.log(!!hd2)

// 使用Boolean 函数 显式转换为布尔类型
// let hd = '123'
// console.log(Boolean(hd))

// let hd = 0
// console.log(Boolean(0))

// const hd = null
// console.log(Boolean(hd))

// const hd = new Date('2021-10-10 10:11')
// console.log(Boolean(hd))

// 使用对象方式声明
// let hd = new Number(2n)

// console.log(hd + 3)

// 判断一个数是否为整数
// console.log(Number.isInteger(1))
// 四舍五入
// const num = 2.22
// console.log(num.toFixed(3))

// console.log(Number('houdunren')) // NaN
// console.log(2 / 'lognlong') // NaN

// const res = 2 / 'xux'
// if (Number.isNaN(res)) {
//   console.log('Error')
// }

// 也可以使用Object.is 判断两个值是否完全相同

// const res = 2 / 'longlgon'
// console.log(Object.is(res,NaN))

// 使用Number函数基本上可以转换所有类型

// console.log(Number('longlong'))

// console.log(Number(1))

// console.log(Number(true))
// console.log(Number(false))

// parseInt 提取字符串空白后的数字转换为整数
// console.log(parseInt('  1312321'))

// parseFloat() 转换字符串为浮点数，忽略字符串前面的空白字符

// console.log(parseFloat('  99longlon'))
// console.log(parseFloat('10.33'))

// const str = '15.02'

// console.log(typeof (str * 1))
// console.log(str * 1 + 6)
// console.log(Number(str)+10)


// const hd = 0.1 + 0.2
// console.log(hd)

// 因为计算机以二进制处理数值类型，上面的转换为是无穷的

// console.log((0.1).toString(2))

// console.log((0.1+0.2).toFixed(2))
// console.log(11.226.toFixed(2))
// 向上取整
// console.log(Math.ceil(1.111))
// // 向下取整
// console.log(Math.floor(1.5555))
// // 四舍五入
// console.log(Math.round(1.54))

// 在控制台中测试
// console.time('testFor')
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
// console.time('testFor')

// console.log(Array.isArray([1,2]))

// 大部分数据数据类型都可以使用.toString函数转换为字符串
// 也可以使用函数String转换为字符串
// console.log(String([1,2,3]))

// console.log([1,2,3,4].join('-'))

// 使用Array.from可将类数组转化为数组，类数组指包含length属性或可迭代对象

// 类数组对象 
// let user = {
//   0: 'longlong',
//   '1': 'sdf',
//   length:2
// }
// console.log(Array.from(user))

// 用于接收部分参数

function hd(site, ...args) {
  console.log(site,args)
}
hd('lodn','asldf','asd','fasd','fasd','fasd','fasd','fasdf')