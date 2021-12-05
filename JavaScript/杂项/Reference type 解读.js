const user = {
  name: 'John',
  hi() {
    console.log(this.name);
  },
};
let hi = user.hi;
hi()
  // 这里 hi = user.hi 把函数赋值给了一个变量，接下来在最后一行它是完全独立的，所以这里没有this

  // 为了确保user.hi()调用正常运行，javascript 玩了一个小把戏， .返回的不是一个函数，而是一个特殊的Referene Type 的值

  // Reference Type 是ECMA 中的一个规范类型，我们不能直接使用它，但它被用在JavaScript语言内部

  // Reference Type 的值是一个三个值的组合(base,name,strict)
  // base 是对象
  // name 是属性名
  // strict在user strict 模式下为true

  // 对属性user.hi访问的结果不是一个函数，而是一个Reference Type 的值。对于user.hi,在严格模式下是

  (user, 'hi', true);