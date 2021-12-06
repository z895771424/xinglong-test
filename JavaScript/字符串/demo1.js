// 转义符号

// const content = 'longlong \'longlong.com\'';
// console.log(content)

// 大小写转换
// 将字符转换成大写格式
// console.log('houdunren.com'.toUpperCase());
// 将字符串转换为小写格式
// console.log('LONGLONG.COM'.toLowerCase());

// 使用 trim 删除字符串左右的空白字符

// const str = '   longlong   ';
// console.log(str.length);
// console.log(str.trim().length);

// 获取单个字符
// console.log('houdunren'.charAt(3));
// 使用索引获取字符串
// console.log('longlong.com'[3])

// 字符串截取slice,ssubstr,substring 函数都可以汲取字符串

// const hd = 'longlong.com';
// console.log(hd.slice(3));

// 查找字符串，从开始获取字符串位置，检测不到时返回 -1
// console.log('longlong.com'.indexOf('o'));
// 从 第三个字符向后搜索
// console.log('longlong.com'.indexOf('o', 3));

// 从结尾开始搜索字符串位置
// console.log('houdurnen.com'.lastIndexOf('o'));
// console.log('houdrnren.con'.lastIndexOf('o',7)) // 从第7个字符前开始搜索

// search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索

// const str = 'longlong.com';
// console.log(str.search('com'));
// console.log(str.search(/\.com/i))

// includex 字符串中是否包含指定的值，第二个参数指开始查找的位置

// console.log('houdunren.com'.includes('o'));
// // 第二个参数指开始查找的位置
// console.log('houdunren.com'.includes('o'));
// console.log('houdunren.com'.includes('h', 11));

// replace 方法用于字符串的替换操作

// let name = 'longlong.com';
// const web = name.replace('longlong', 'xuxu');
// console.log(web)
// 默认只能替换一次，如果想全局替换需要正则表达式

// 下面式模糊后面三位电话号码
// let phone = '13722127154';
// console.log(phone.slice(1, -3) + '*'.repeat(3));

let str = 'longlong.com';
// console.log(str.slice(3, 6));
// 不包括前面，包括后面
// console.log(str.substr(3,5));
// 从末尾开始截取
// console.log(str.slice(-2));
// console.log(str.slice(1, -1));
// 从后面三个开始取两个
console.log(str.substr(-3, 2));
