// const foo = 'bar' // 一旦声明，不可改变，否则报错

// console.log(foo)

// // TypeError: Assignment to constant variable.
// // 常量：一旦声明，不可改变
// foo = 'baz'

// const obj = {
//   foo: 'bar'
// }

// // 赋值语句，这里全称叫做为 obj 重新赋值
// // obj = 123

// // 修改对象的属性
// obj.foo = 'baz'

// console.log(obj)

// 普通数据类型不运行修改
// const num = 10
// num = 100 // 报错
// const bo = true
// bo = false

// let foo
// var foo
// const foo // SyntaxError: Missing initializer in const declaration

const foo = 'bar'

if (true) {
  const foo = 'baz'
}

console.log(foo)
