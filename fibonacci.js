
//生成长度为n的斐波那契数列
const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
//生成一个长度为n的斐波那契数列
console.log(fibonacci(7))
//array.from方法从有length的对象/可迭代对象返回一个数组，可以选择输入mapfunction
//reduce方法的参数1：一个函数（参数为总和，当前值，当前索引）
//concat的参数可以是数组对象也可以是具体的值