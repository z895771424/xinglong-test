// let a = {};
// let b = a;
// console.log(a === b)

// 对象的克隆
// let user = {
//   name: 'Join',
//   age:30,
// }
// let clone = {};
// for (let key in user) {
//   clone[key] = user[key];
// }
// clone.name = 'Pete';
// console.log(user.name);

// 使用 assign 合并对象
// 不是对象深拷贝，只能拷贝一层
// let user = {};

// let permission1 = {
//   canView: true,
//   content: {
//     name: 'longlong',
//   },
// };
// let permission2 = { canEdit: true };
// 把这两个对象拷贝到user中
// Object.assign(user, permission1, permission2);
// console.log(user);
// user.content.name = 'xuxu'
// console.log(permission1)
// console.log(user)
// console.log(permission1)

// let user = {
//   name: 'John',
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let clone = Object.assign({}, user);
// console.log(user.sizes.height === clone.sizes.height)
// user.sizes.width++;
// console.log(clone.sizes.width)

// 遍历的时候如果值是一个对象，那么也要复制他的结构