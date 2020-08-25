let Parent = function (name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.sayName = function () {
  console.log(this.name)
}
let newMethod = function (Parent, ...rest) {
  let child = Object.create(Parent)
  let result = Parent.apply(child, rest)
  return typeof result === 'object' ? result : child
}