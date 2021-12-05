/**
 * 装饰器模式和转化，call apply
 * JavaScript 在处理函数是提供了非凡地灵活性。他们可以被传递，用作对象，现在我们将如何看到他们之间转发
 *
 * 透明缓存
 * 假设我们有一个CPU负载的函数 slow(x) 但他的结果是稳定的。换句话说，对于相同的x，他总是返回相同的结果
 *
 * 如果经常调用该函数，我们希望将结果缓存（记住）下来，以避免在重新计算上花费时间
 *
 * 但我们不是将这个功能添加到 slow() 中，而是创建一个包装器函数，该函数增加了缓存功能。正如我们要看到的，这样有很多好处
 *
 */
/* 
function slow(x) {
  console.log(`Called width ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    // 如果缓存中有对应结果
    if (cache.has(x)) {
      // 从缓存中读取结果
      return cache.get(x);
    }
    let result = func(x);

    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);
console.log(slow(1)); // slow(1) 被缓存下来了
console.log('Again' + slow(1));
console.log(slow(2))
console.log(slow(2))
console.log(slow(2)) */

/**
 * 在上面的代码中，cachingDecorator是一个装饰器：一个特殊函数，他接受另一个函数并改变它的行为。
 *
 * 其思想是，我们可以为任何函数调用cachingDecorator ,它将返回缓存包装器。这很棒，因为我们有很多函数可以使用这样特性，而我们需要做的就是
 * 将 cachingDecorator应用于他们
 * 通过将缓存于主函数代码分开，我们还可以使用主函数代码变得更简单
 * cachingDecorator(func)的结果是一个包装器
 */

// function sayHi() {
//   console.log(this)
//   // console.log(this.name);
// }

// const user = { name: 'John' };
// const admin = { name: 'admi' };

// // sayHi.call(user);
// sayHi()

// Function.prototype.call()
// call() 方法使用一个指定的this值给单独给出的一个或者多个参数来调用一个函数

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
console.log(new Food('cheese', 5).name);
