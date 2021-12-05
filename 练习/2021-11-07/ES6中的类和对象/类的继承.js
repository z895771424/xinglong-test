// class Father {
//   constructor() {}
//   money() {
//     console.log(100);
//   }
// }

// class Son extends Father {

// }
// const son = new Son();
// son.money();

class Father{
  constructor(x, y) {
    this.x = x;
    this.y = y
  }
  sum() {
    console.log(this.x + this.y)
  }
  
}
class Son extends Father {
  // 这个constructor里面的this是指向子类的constructor
  constructor(x, y) {
    // this.x = x;
    // this.y = y;
    super(x,y); // 调用了父类中的构造函数
  }
}
const son = new Son(1, 2)
son.sum()