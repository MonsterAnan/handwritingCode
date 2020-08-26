Function.prototype.myCall = function (context) {
  var context = context || window
  // 给 context 添加⼀个属性   
  // getValue.call(a, 'yck', '24') => a.fn = getValue   
  context.fn = this
  // 将 context 后⾯的参数取出来  
  var args = [...arguments].slice(1)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')   
  var result = context.fn(...args)
  // 删除 fn   
  delete context.fn
  return result
}