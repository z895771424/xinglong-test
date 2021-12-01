// const format = (n) => {
//   let num = n.toString();
//   let len = num.length;
//   if (len <= 3) {
//     return num;
//   } else {
//     let temp = '';
//     let remainder = len % 3;
//     if (remainder > 0) {
//       // 不是3的整数倍
//       return (
//         num.slice(0, remainder) +
//         ',' +
//         num.slice(remainder, len).match(/\d{3}/g).join(',') +
//         temp
//       );
//     } else {
//       // 3的整数倍
//       return num.slice(0, len).match(/\d{3}/g).join(',') + temp;
//     }
//   }
// };

// const res = format(123123123131);
// console.log(typeof res)

// 随机生成字符串
// const randomString = (len) => {
//   let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
//   let strLen = chars.length;
//   let randomStr = '';
//   for (let i = 0; i < len; i++) {
//     randomStr += chars.charAt(Math.floor(Math.random() * strLen));
//   }
//   return randomStr;
// };
// const res = randomString(4);
// console.log(res);

// 字符串首字母大写
// const fistLetterUpper = (str) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

// const res = fistLetterUpper('12sdfsdf');
// console.log(res)

// 手机号中间四位变成 *
// const telFormat = (tel) => {
//   tel = String(tel);
//     return tel.substr(0,3) + "****" + tel.substr(7);
// };

// console.log(telFormat(13333332222))

// 驼峰命名转换成短横线命名
// const getKebabCase = (str) => {
//   return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase());
// };
// const res = getKebabCase('userName');
// console.log(res)

// 全角转换为半角
// const toCDB = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     code = str.charCodeAt(i);
//     if (code >= 65281 && code <= 65374) {
//       result += String.fromCharCode(str.charCodeAt(i) - 65248);
//     } else if (code == 12288) {
//       result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
//     } else {
//       result += str.charAt(i);
//     }
//   }
//   return result;
// };
// const res = toCDB('‘dsd大苏打’');
// console.log(res)

// 数字转换为大写金额
// const digitUppercase = (n) => {
//   const fraction = ['角', '分'];
//   const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
//   const unit = [
//     ['元', '万', '亿'],
//     ['', '拾', '佰', '仟'],
//   ];
//   n = Math.abs(n);
//   let s = '';
//   for (let i = 0; i < fraction.length; i++) {
//     s += (
//       digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
//     ).replace(/零./, '');
//   }
//   s = s || '整';
//   n = Math.floor(n);
//   for (let i = 0; i < unit[0].length && n > 0; i++) {
//     let p = '';
//     for (let j = 0; j < unit[1].length && n > 0; j++) {
//       p = digit[n % 10] + unit[1][j] + p;
//       n = Math.floor(n / 10);
//     }
//     s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
//   }
//   return s
//     .replace(/(零.)*零元/, '元')
//     .replace(/(零.)+/g, '零')
//     .replace(/^整$/, '零元整');
// };
// const res = digitUppercase(221313123);
// console.log(res)

// const isIPv6 = (str) => {
//   return Boolean(
//     str.match(/:/g)
//       ? str.match(/:/g).length <= 7
//       : false && /::/.test(str)
//       ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str)
//       : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str),
//   );
// };

// const res = isIPv6('httpssssssssssadads://1www.baidu.com');
// console.log(res)

// 校验是否包含emoji表情
//  const isEmojiCharacter = (value) => {
//   value = String(value);
//   for (let i = 0; i < value.length; i++) {
//     const hs = value.charCodeAt(i);
//     if (0xd800 <= hs && hs <= 0xdbff) {
//       if (value.length > 1) {
//         const ls = value.charCodeAt(i + 1);
//         const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
//         if (0x1d000 <= uc && uc <= 0x1f77f) {
//           return true;
//         }
//       }
//     } else if (value.length > 1) {
//       const ls = value.charCodeAt(i + 1);
//       if (ls == 0x20e3) {
//         return true;
//       }
//     } else {
//       if (0x2100 <= hs && hs <= 0x27ff) {
//         return true;
//       } else if (0x2b05 <= hs && hs <= 0x2b07) {
//         return true;
//       } else if (0x2934 <= hs && hs <= 0x2935) {
//         return true;
//       } else if (0x3297 <= hs && hs <= 0x3299) {
//         return true;
//       } else if (
//         hs == 0xa9 ||
//         hs == 0xae ||
//         hs == 0x303d ||
//         hs == 0x3030 ||
//         hs == 0x2b55 ||
//         hs == 0x2b1c ||
//         hs == 0x2b1b ||
//         hs == 0x2b50
//       ) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// const res = isEmojiCharacter('佧ix(*/ω＼*)');
// console.log(res)

// const getRequest = () => {
//   let url = location.search;
//   const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
//   const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
//   let paramsObj = {}; // 将 params 存到对象中
//   paramsArr.forEach((param) => {
//     if (/=/.test(param)) {
//       // 处理有 value 的参数
//       let [key, val] = param.split('='); // 分割 key 和 value        val = decodeURIComponent(val); // 解码
//       val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
//       if (paramsObj.hasOwnProperty(key)) {
//         // 如果对象有 key，则添加一个值
//         paramsObj[key] = [].concat(paramsObj[key], val);
//       } else {
//         // 如果对象没有这个 key，创建 key 并设置值
//         paramsObj[key] = val;
//       }
//     } else {
//       // 处理没有 value 的参数
//       paramsObj[param] = true;
//     }
//   });
//   return paramsObj;
// };

// const res = getRequest();
// console.log(res)

// 获取浏览器型号和版本
// const getExplorerInfo = () => {
//   let t = navigator.userAgent.toLowerCase();
//   return 0 <= t.indexOf('msie')
//     ? {
//         //ie < 11
//         type: 'IE',
//         version: Number(t.match(/msie ([\d]+)/)[1]),
//       }
//     : !!t.match(/trident\/.+?rv:(([\d.]+))/)
//     ? {
//         // ie 11
//         type: 'IE',
//         version: 11,
//       }
//     : 0 <= t.indexOf('edge')
//     ? {
//         type: 'Edge',
//         version: Number(t.match(/edge\/([\d]+)/)[1]),
//       }
//     : 0 <= t.indexOf('firefox')
//     ? {
//         type: 'Firefox',
//         version: Number(t.match(/firefox\/([\d]+)/)[1]),
//       }
//     : 0 <= t.indexOf('chrome')
//     ? {
//         type: 'Chrome',
//         version: Number(t.match(/chrome\/([\d]+)/)[1]),
//       }
//     : 0 <= t.indexOf('opera')
//     ? {
//         type: 'Opera',
//         version: Number(t.match(/opera.([\d]+)/)[1]),
//       }
//     : 0 <= t.indexOf('Safari')
//     ? {
//         type: 'Safari',
//         version: Number(t.match(/version\/([\d]+)/)[1]),
//       }
//     : {
//         type: t,
//         version: -1,
//       };
// };

// const res = getExplorerInfo();
// console.log(res)

// 当前时间
const nowTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate() >= 10 ? now.getDate() : '0' + now.getDate();
  const hour = now.getHours() >= 10 ? now.getHours() : '0' + now.getHours();
  const miu = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes();
  const sec = now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds();
  return +year + '年' + (month + 1) + '月' + date + '日 ' + hour + ':' + miu + ':' + sec;
};
