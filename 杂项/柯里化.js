/**
 * 柯里化
 */

function curry(f) {
  // curry(f) 执行柯里化转换
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
// 用法
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2));

// 柯里化让我们能够更容易地获取取偏函数。就像我们在日志记录示例中看到的那样