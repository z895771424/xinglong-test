// 创建类
class Star {
  constructor(uname, age) {
    this.uname = uname;
    this.age = age;
  }
  // 在类中添加方法
  sing(par) {
    console.log('我唱歌'+par);
  }
}

const ldh = new Star('刘德华', 18);
const zxy = new Star('张学友', 19);
console.log(ldh);
console.log(ldh.uname);
console.log(zxy);
// 多个方法之间不需要添加逗号分隔
ldh.sing('旭旭')
zxy.sing('睿睿')
