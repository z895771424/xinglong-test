function deepCopy(newObj, oldObj) {
  for (const k in oldObj) {
    // 判断我们的属性值属于那种数据包类型
    let item = oldObj[k];
    if (item instanceof Array) {
      newObj[k] = [];
      deepCopy(newObj[k], item);
    } else if (item instanceof Object) {
      // 判断这个值是否是对象
      newObj[k] = {};
      deepCopy(newObj[k], item);
    } else {
      // 属于简单数据类型
      newObj[k] = item;
    }
  }
}

let obj = {
  name: {
    name1: 'longlong',
    age: 'xuxu',
  },
  school: 'nankai',
};

let deepObj = {};

deepCopy(deepObj, obj);
console.log(deepObj)