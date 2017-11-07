console.log(foo) // 变量声明提升

var foo = 'bar'

// var foo = 'baz'

// 没有块级作用域，在同一个作用域中变量的重复声明后者会把前者覆盖
if (true) {
  if (true) {
    if (true) {
      var foo = 'baz'
    }
  }
}

function f() {
  var foo = 'fff'
  console.log(foo)
}

console.log(foo)
f()
