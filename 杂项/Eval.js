// 内建eval允许执行一个代码字符串

// const code = 'console.log(123)'
// const result = eval(code)
// 代码字符串可能会比较长，包含换行符，函数声明等变量
// let value = eval('1+1');
// console.log(value);
// let value = eval('let i = 0; ++i');
// console.log(value)

// eval内的代码在当前词法环境中执行，因此它能访问外部变量
// let a = 1;
// function f() {
//   let a = 2;
//   eval('console.log(a)')
// }
// f();

// 它也可以访问外部变量

// let x = 5;
// eval('x = 10');
// console.log(x);

// 如果不是用严格模式，eval 没有属于自己的词法环境，因此我们可以从外部访问变量x和函数f

// eval('let x = 5; function f(){}');
// console.log(typeof x);

// 现代编程中，已经很少人使用eval了。人们经常说eval是魔鬼

/**
 * 原因很简单：很久很久以前，JavaScript是一种非常弱的语言，很多东西只能通过eval来完成。不过那已经是前十年前的事了
 * 如今几乎找不到使用eval的理由了。如果有人在使用它，那这是一个很好的现代语言就饿狗或 JavaScript Module 来替换他们的机会
 * 代码压缩工具将局部变量从命名为短的变量，以使代码体积更小。这通常使安全的，但在使用了eval的情况下就不一样了，因为局部变量可能会被eval中的代码访问到。因此压缩工具不会对所有可能会被从eval中访问的变量进行重命名。这样会导致代码压缩率降低
 * 在eval中使用外部局部变量也被认为使一个坏的编程习惯，因为这会使代码维护变得更加困难
 */

// 总结，调用eval（code）会运行代码字符串，并返回最有一条语句的结果
/**
 * 在
 */