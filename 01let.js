// let foo = 'bar'

// console.log(foo)

// foo = 'baz'

// console.log(msg)

// let 的核心就是加入了块级作用域
// 全局块
// let foo = 'bar'

// if (true) {
//   // let 是块级作用域，{ } 就是一个块
//   let foo = 'baz'
//   if (true) {
//     let foo = 'baa'
//     if ('true') {
//       let foo = 'bab'
//       console.log(foo)
//     }
//     console.log(foo)
//   }
//   console.log(foo)
// }

// console.log(foo)

// EcmaScript 6 语言本身就是让 JavaScript 变得更严谨
// 没有变量提升
// console.log(foo)

// let foo = 'bar'

let foo = 'bar'
let foo = 'baz' // SyntaxError: Identifier 'foo' has already been declared
