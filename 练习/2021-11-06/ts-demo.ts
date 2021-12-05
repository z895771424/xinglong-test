// 枚举在程序语言及mysql等数据库中广泛使用
// 不设置值是，值以0开始递增
// 下面是使用枚举设置心别
// enum SexType {
//   BOY,GIRL
// }

// const hd = {
//   name: 'longlong',
//   sex: SexType.GIRL
// }
// console.log(hd);

// 当某个字段设置数值类型的值后，后面的在他基础上递增
// enum SexType {
//   BOY = 1,GIRL
// }
// const hd = {
//   name: 'longlong',
//   sex: SexType.GIRL
// }
// console.log(hd);

// 可以将值设置为其他类型
// enum SexType {
//   BOY = '男',GIRL='女'
// }
// const hd = {
//   name: 'longlong',
//   sex: SexType.GIRL
// }
// console.log(hd);

// as 断言的意思就是用户断定这是什么类型，不适用系统推断的类型，说白了就是，我说什么，就是什么
// function hd(arg: number) {
//   return arg ? 'longlong' : 2030;
// }
// let f = hd(2);
// console.log(f);

// 我们可以有开发者来断定这就是字符串，这就是断言
// function hd(arg: number) {
//   return arg ? 'longlong.com':2020
// }
// const f = hd(1) as string
// console.log(typeof f);

// 也可以使用下面的断言语法
// function hd(arg: number) {
//   return arg ? 'longlong' : 2030
// }

// let f = <string>hd(1)

// const 断言
// const hd = 'longlong'
// let xj = 'longlong1'

// let user = 'houdunren' as const
// user = 'longlong.com'

// 当为变量转换为变量类型，具体的值是转为值类型
// let user = { age: '旭旭' } as const
// console.log(user);

// let a = 'lonlong.com'
// let b = 2030
// let hd = [a, b] // let hd:(string | number)[]
// let f = hd[1]
// f = 123
// console.log(f);

// 也可以使用一下语法
// let a = 'longlong.com'
// let b = 2021

// let hd = <const>[a, b] //let hd:readonly [string,number]
// let f = hd[1]
// f = 99
// console.log(f);

// function hd() {
//   let a = 'longlong.com';
//   let b = (x: number, y: number): number => x + y;
//   return [a, b];
// }
// let [n, m] = hd(); // 报错，因为变量m的类型为 string|(()=>void)

// 可以断言m为函数后调用
// function hd() {
//   let a = 'longlong.com'
//   let b = (x: number, y: number): number => x + y;
//   return [a,b]
// }
// let [n, m] = hd()
// console.log((m as Function)(1,2));

// 可以在调用时对返回值断言类型
// function hd() {
//   let a = 'longlong.com';
//   let b = (x: number, y: number): number => x + y;
//   return [a,b]
// }

// let [n, m] = hd() as [string, (x: number, y: number) => number]
// console.log(m(9, 19));
// console.log(typeof m(9,19));

// 也可以在函数体内部声明返回类型
// function hd() {
//   let a = 'longlong.com';
//   let b = (x: number, y: number): number => x + y;
//   return [a, b] as [typeof a, typeof b];
// }
// let [n, m] = hd()
// console.log(m(9,19));

// 使用as const就可以很高效的解决上面的问题，可以得到具体的类型，来得到更安全的代码，同事会有更好的代码提示
// function hd() {
//   let a = 'longlong'
//   let b = (): void => { }
//   return [a,b] as const
// }
// const [x,y] = hd() // 变量y的类型为 ()=>void

// 默认情况下null与undefined可以复制给其他类型
// let hd: string = 'longlong.com'
// // hd = null
// // hd = undefined
// console.log(hd);

// 除非向下面一样明确指定类型
// let hd: string | undefined | null = 'longlong.com'
// hd = null
// hd = undefined
// console.log(hd);

// 泛型指使用才定义类型，即类型可以向参数一样定义，主要解决类，接口，函数的复用性，让他们处理多种类型

// 下面实例返回的是any，这不是我们想要的，因为我们具体想要返回类型
// function dump(arg: any) {
//   return arg
// }
// let hd = dump('longlong')
// let xj = dump(true)
// console.log(hd);
// console.log(xj);

// 使用了泛型之后，返回值即为明确的类型
// function dump<T>(arg: T) {
//   return arg
// }
// let hd = dump<string>('132')
// console.log(hd);
// 如果调用时不指定类型，系统会自动推断类型
// let hd = dump(123)
// console.log(hd);

// 下面的代码是不严谨的，我们不需要处理数字，因为数字没有length属性
// 同时我们希望返回类型不是any
// function getLength(arg: any) {
//   return arg.length
// }
// console.log(getLength('longlong.com'));
// console.log(getLength(123));

// 泛型是不确定的类型，所以下面读取length属性将博爱错
// function getLength<T>(arg: T): string{
//   return arg.length;
// }

// 我们通过继承来解决这个问题
// function getLength<T extends string>(arg: T): number {
//   return arg.length;
// }
// console.log(getLength('lnglong'));

// 上例只能处理字符串，不能处理数组等数组包含length的数据，我们可以通过继承extend继承，让泛型定义包含length属性
// function getLength<T extends { length: number }>(arg: T): number{
//   return arg.length
// }
// 或使用 interface 或 type
type LengthType = { length: number }
function getLengtAttribute<T extends LengthType>(arg: T):number {
  return arg.length
}
let arr = [12, 33]
arr.filter