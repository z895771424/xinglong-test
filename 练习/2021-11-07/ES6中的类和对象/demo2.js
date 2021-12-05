class Father {
  say() {
    return '我是爸爸';
  }
}
class Son extends Father {
  say() {
    // console.log('我是儿子');
    console.log(super.say() + '的儿子')
  }
}
let son = new Son();
son.say()
// 1 继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就执行子类的
// 2 继承中，如果子类里面没有，就去查早类有没有这个方法，如果有，就执行父类的这个方法(就近原则)
