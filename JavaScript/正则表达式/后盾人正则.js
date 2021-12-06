// 下面使用获取字符串中的所有数字来比较函数与正则的差异

// const hd = 'longlnong2233xxux992';
// // 将字符串中的数字筛选出来
// const newHd = [...hd].filter((a) => !Number.isNaN(parseInt(a)));
// console.log(newHd.join(''));

// 使用正则表达式简单的多
// const hd = 'longlong.com 234234jsifsd13  990112';
// console.log(hd.match(/\d/g).join(''));

// let hd = 'longlong.com';
// console.log(/o/.test(hd));

// let hd = 'longlong.com';
// let web = 'longlong.com';
// let reg = new RegExp(web);
// console.log(reg.test(hd));

// 选择符号
// | 这个符号待选择选择修饰符，也就是 | 左右两侧有一个匹配到就可以
// 检测电话是否式上海或北京的座机

// 字符转义
// const url = 'https://www.houdunren.com';
// console.log(/https:\/\//.test(url))

// let price = 12.23;
// console.log(/\d+/.\d+)

// const hd = 'www.longlong.com';
// console.log(/^www/.test(hd))

// 匹配内容必须以.com结束
// const hd = 'www.houdunren.com';
// console.log(/\.com$/.test(hd));

// 匹配任意数字
// const hd = 'l2saosw3nglong.com';
// // console.log(hd.match(/\d/g));
// const num = hd.match(/\d/g);
// console.log(num)

// 匹配任意非数字 
// console.log(/\D/.test('22d'));

// 匹配数字下划线
// const hd = 'hdcms@__';
// console.log(hd.match(/\w/g));

// 匹配除了字母数字下划线与任何字符匹配
// console.log(/\W/.test('@'))

// 匹配与任意一个空白字符匹配(字符串包含空白字符)
// console.log(/\s/.test(' ddf'));
// console.log(/\s/.test('\n'))

// 匹配除了空白符外任意一个字符匹配

const hd = 'hdcms@';
console.log(hd.match(/\S/g));