// 除了解构赋值的默认值
// 函数参数也支持默认值
// function f(name = 'Jack', age = 10) {
//   console.log(name, age)
// }

// f('张三')

// 一般情况下，如果函数需要默认值，则也是函数的尾参数
// function f(name, age = 10) {
//   console.log(name, age)
// }

// f('aaa')

// 当你的函数只需要一个参数具有默认值的时候，则可以把该参数定位为尾参数
// 当你的函数需要多个参数具有默认值的时候，则可以使用解构赋值的方式


// 在函数的参数中的 ...变量名 的语法叫做 rest 参数
// rest 表示剩余的意思，意思是将用户传递过来的剩余参数解析放到一个数组中
// 如果没有剩余参数， ...a 也是一个空数组
// rest 参数必须是最后一个，后面不能继续跟参数了，因为它已经都拿到了
function sum(...args) {
  // arguments 很奇怪，只有才函数调用的时候才有用
  // console.log(arguments)
  let count = 0
  args.forEach(function (num) {
    count += num
  })
  return count
}

const result = sum(1, 2, 3, 4, 5, 6, 7)

console.log(result)
