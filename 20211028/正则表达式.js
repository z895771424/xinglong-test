// 利用 RegExp 对象类型来创建正则表达式

// let regexp = new RegExp(/123/)
// console.log(regexp)

//通过字面量创建 正则表达式

// let rg = /1,2,3/

// console.log(rg.test('1,2,3'))

// 正则表达式里面不需要加引号 不管是数字型还是字符串型
// let rg = /abc/
// 只要包含abc 就可以
// console.log(rg.test('asadadasdsabckkkk'))

// 必须以 abc 开头
// const rg = /^abc/
// console.log(rg.test('abc2c1k2'))

// const rg = /^abc$/
// console.log(rg.test('abcabc'))

// 字符类: [] 表示有一系列字符可供选择，只要匹配其中一个就可以了
// 只要匹配其中一个就可以了
// const rg = /[abc]/
// console.log(rg.test('c'))

// 开头必须是 abc 字符其中的一个
// const rg = /^[abc]/
// console.log(rg.test('daa'))

// 开头或结尾必须是这三个字母的其中一个
// const rg = /^[abc]$/
// console.log(rg.test('c'))

// 如果中括号中有^表示取反的意思
// const rg = /^[^a-z1-9A-Z- _]$/
// console.log(rg.test('!'))

// 量词符
// a出现0次或者很多次
// const reg = /^a*$/ 
// console.log(reg.test(''))

// // + 表示 >=1
// const reg = /^a+$/
// console.log(reg.test(''))

// 相当于 1 || 0
// const reg = /^a?$/
// console.log(reg.test(''))

// const reg = /^a{3,}$/
// console.log(reg.test('aaa'))

// const reg = /^a{3,6}$/
// console.log(reg.test('aaaa'))

// {3,6} 中间不要有空格
const reg = /^[a-zA-z]{6,16}$/
console.log(reg.test('sdfsssssssssdfs'))