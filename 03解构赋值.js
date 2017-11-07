// const arr = [10, 20, 30]

// // let num1 = arr[0],
// //   num2 = arr[1],
// //   num3 = arr[2]

// // 数组的解构赋值
// let [num1, num2, num3, num4] = arr

// console.log(num1, num2, num3, num4)

// const user = {
//   name: 'Jack',
//   gender: '男',
//   age: 18
// }

// // 对象的解构赋值是按照对象的 key 来解构的
// // 当解构不成功的时候，会默认赋值为 undefined
// const { age: nianling, gender, name: username, foo } = user

// console.log(username, nianling, gender, foo)

// 解构赋值，只拿 readFile 其他不要
// const { readFile } =  require('fs')

// readFile('./README.md', 'utf8', function (err, data) {
//   if (err) {
//     throw err
//   }
//   console.log(data)
// })

// const fs = require('fs')

// const readFile = fs.readFile

// const { readFile, writeFile: wFile } = require('fs')

// 函数参数也可以使用解构赋值
// function add([x, y]){
//   return x + y;
// }

// console.log(add([1, 2])) // 3


// function f({name, age}) {
//   console.log(name, age)
// }

// f({
//   name: '张三',
//   age: 18
// })

// [[1, 2], [3, 4]].map(([a, b]) => a + b);

// const arr = [[1, 2], [3, 4]]

// const newArr = arr.map(function ([a, b]) {
//   return a + b
// })

// console.log(newArr)

// const [num1, num2 = 20] = [10]
// console.log(num1, num2)

// const { name, age = 18 } = {
//   name: '真三'
// }

// console.log(name, age)

// $.ajax({
//   url: '',
//   type: 'get',
//   async: true,
//   dataType: 'json'
// })

// function ajax(options) {
//   options.type = options.type || 'get'
//   options.async = options.async || true
// }

// function ajax({
//   url,
//   type = 'get',
//   async = true
// }) {
//   console.log(type, async)
// }

// ajax({
//   url: '/aa'
// })

let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x, y)
