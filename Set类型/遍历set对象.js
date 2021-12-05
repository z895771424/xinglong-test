let set = new Set(['hdcms', 'houdunren']);
// console.log(set.values());
// console.log(set.keys())
// 键名和值是一样的
// console.log(set.entries());

// set.forEach((value, key) => {
//   console.log(value, key);
// });

// for (const value of set) {
//   console.log(value)
// }

// const arr = [1,2,3,4]

const arr = [
  {
    name: 'longlong',
    age: 12,
  },
  {
    name: 'longlong',
    age: 12,
  },
  {
    name: 'longlong',
    age: 12,
  },
  {
    name: 'longlong',
    age: 12,
  },
];

for (const value in arr) {
  console.log(value);
}
