// const str = '北京晨报讯(记者 姜樊)在最严调控政策下，中国楼市已经出现了拐点。' +
//   '\n' + '央行发布《2017 年上半年金融机构贷款投向统计报告》显示，房地产贷款增速继续回落。' +
//   '\n' + '行数据显示， 今年上半年， 人民币房地产贷款增加3 .04 万亿元， 占同期各项贷款的38 .1 % ，比一季度占比低2 .3 个百分点。'

// console.log(str)

// const str = `
//     北京晨报讯(记者 姜樊)在最严调控政策下，中国楼市已经出现了拐点。
// 央行发布《2017 年上半年金融机构贷款投向统计报告》显示，房地产贷款增速继续回落。
// 行数据显示， 今年上半年， 人民币房地产贷款增加3 .04 万亿元， 占同期各项贷款的38 .1 % ，比一季度占比低2 .3 个百分点。
// `

// console.log(str)

// const tplStr = `
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// `

const list = [
  { id: 1, name: 'a', age: 18 },
  { id: 2, name: 'a', age: 18 },
  { id: 3, name: 'a', age: 18 },
  { id: 4, name: 'a', age: 18 }
]

var tbody = ''
list.forEach(function(item) {
  // tbody += `
  //   <tr>
  //     <td>`+ item.id +`</td>
  //     <td>`+ item.name +`</td>
  //     <td>`+ item.age +`</td>
  //   </tr>
  //   `

  tbody += `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
    </tr>
    `
})

console.log(tbody)

// 使用建议：
//  当需要拼接字符串的时候使用模板字符串，哪怕只有一次
//  如果既没有换行也没有拼接字符换还是建议使用单引号

var name = 'Jack'
var str = 'hello' + name + ' world'
var str = `hello${name}world`
