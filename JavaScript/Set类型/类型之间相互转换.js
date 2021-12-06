// let set = new Set(['hdcms', 'houdunren']);

// // 转化数组的方法
// // console.log(Array.from(set));
// // console.log([...set])

// let hd = new Set('1234567');
// // console.log(hd)
// let arr = [...hd].filter(item => item < 5);
// hd = new Set(arr);
// console.log(hd);

let array = [1, 2, 1, 1, 4, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 数组去重 相互帮助

array = [...new Set(array)]
console.log(array)