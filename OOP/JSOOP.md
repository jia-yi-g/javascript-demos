- [函数对象](#函数对象)

## 函数对象

**函数是使用了call方法的对象**

定义和调用函数的方式

- function sth(){}，NFE(函数表达式)
- 作为一个对象的method
- 使用call和apply方法

- ```
  const for= new Function ('return 4')
  ```

```
function woo(){
    console.log(4)
}
woo.yell=5
//woo其实是这样的
 const objwoo={
    yell:5,//自定义对象，相当于闭包
    name:woo,
    ():console.log(4),
    length:0,//参数的个数
}
```