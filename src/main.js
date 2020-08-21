const div = dom.find('#test>.red')[0]
// 获取对应的元素,封装时不用两个参数也可以实现
console.log(div)
const divList = dom.find('.red') // 获取多个 div.red 元素
console.log(divList)
const div2 = dom.find('.red', test2)[0]
console.log(div2)

dom.style(div, 'color', 'red') // 设置 div.style.color
console.log(dom.style(div, 'color'))
dom.style(div2,{color:'blue',border:'1px solid red'})


dom.each(divList, (n)=> console.log(n))
// 遍历 divList 里的所有元素
