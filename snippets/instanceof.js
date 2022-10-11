//instanceof用于检查一个对象是否属于某个class

function myInstanceOf(left,right) {
    const proto=Object.getPrototypeOf(left)
    const prototype=right.prototype
    //判断构造函数的prototype是否在对象原型链上
}