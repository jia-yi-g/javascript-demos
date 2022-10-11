function weird(){
    height =50
    return height
}
weird()
//返回50
//全局变量泄露，height 在函数作用域内没有被定义，于是沿着作用域链向上时在全局变量中自动创建
//use strict时报错