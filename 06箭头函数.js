// function f(x, y) {
//   console.log(x, y)
//   return x + y
// }

// goes to
// var f = (x, y) => {
//   console.log(x, y)
//   return x + y
// }

// console.log(f(10, 30))

// function f(x) {
//   return x
// }

// var f = x => {
//   // 在大括号里必须显示的 return
//   return x
// }

// 报错，语法不支持
// var f = x => return x

// 这样才可以，默认就是 return x
// var f = x => x

// console.log(f(10))

// 箭头函数不能用作函数声明，也就是说如果需要函数声明，则还是以前的方式
// f () => {

// }

// 只有函数表达式和匿名函数可以使用箭头函数
// 建议：所有需要匿名函数的地方都使用箭头函数
//       因为函数表达式用的很少，所以说箭头函数使用的最大场景就是匿名函数

// setTimeout(() => {
//   console.log('aaa')
// }, 1000)

// var arr = [10, 20, 30, 5, 1, 100]
// arr.forEach(n => console.log(n))

// console.log(arr.map(n => n + 1))

// console.log(arr.map(function (n) {
//   return n + 1
// }))

// console.log(arr.filter(function (n) {
//   return n % 2 === 0
// }))

// console.log(arr.filter(n => n % 2 === 0))

// var Person = (name, age) => {
//   this.name = name
//   this.age = age
// }

// TypeError: Person is not a constructor
// new Person('张三', 19)

// var f = function (name, age) {
//   console.log(arguments)
// }

// f('张三', 18)

// var f = (...args) => {
//   // 在箭头函数内部不要使用 arguments 有问题
//   // console.log(arguments)
//   console.log(args)
// }

// f('张三', 18)


function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function () {
  setTimeout(function () {
    console.log(this.name)
  }, 1000)
}

new Person('张三', 18)
