//循环和闭包！！！
for(var i=1;i<=5;i++){
    setTimeout(function timer(){
    console.log(i);
    },i*1000)    
}
//输出五个6，所有的函数都在一个封闭的全局作用域中，共享同一个i的引用
//修改方法1使用IIFE
for (var i = 1; i <= 5; i++) {
  (function(j){setTimeout(function timer() {
    console.log(j);
  }, j * 1000);})()
}
//IIFE形成一个封闭作用域，并且有自己的变量
//修改方法2使用块作用域（推荐）
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
//每次都会生成一个块作用域加闭包
//let命令使每次循环的内部变量和外部变量区分开来:
for (let i = 0; i < 3; i++) {
  let i = "abc";
  console.log(i);
}
//输出三个abc
for (var i = 0; i < 3; i++) {
  var i = "abc";
  console.log(i);
}
//输出一个abc，因为三次循环每次都指向同一个i？？？？？