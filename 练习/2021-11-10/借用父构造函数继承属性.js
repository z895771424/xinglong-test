function Father(uname, age) {
  // this 指向父构造函数的实例
  this.uname = uname;
  this.age = age;
}

// 子构造函数
function Son(uname, age) {
  // this 指向构造函数的对象实例
  Father.call(this, uname, age);
}
let son = new Son('刘德华', 18)
console.log(son)
