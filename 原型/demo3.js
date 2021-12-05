/* let animal = {
  eats: true
}

// 创建一个以animal为原型的新对象

let rabbit = Object.create(animal);

console.log(rabbit);

console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit,{}) */

// Object.create 有一个可选的第二个参数：属性描述器。我们可以在此处为新对象提供额外的属性，就这样：

let animal = {
  eats: true,
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

// 我们可以使用Object.create来实现比复制 for in 循环中属性更强大的对象克隆：

let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

// 此调用可以对obj进行真正准确的拷贝，包括所有的属性：可枚举和不可枚举的，
