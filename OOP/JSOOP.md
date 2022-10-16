- [](#)

## 函数对象

**函数是使用了call方法的对象**

定义和调用函数的方式

- function sth(){}，NFE(函数表达式)
- 作为一个对象的method
- 使用call和apply方法

- ```
  const for= new Function ('return 4')//该申明方法没有闭包
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

## 闭包

 function+词法环境

- memory efficient
  
  ```
  function heavyduty(index){
    const arr= new Array.fill('3')
    return arr[index]
  }

  function heavyduty2(){
    const arr = new Array.fill('3')
    return function(index){
      return arr[index]
    }
  }//相比较第一个函数，在多次调用时只用执行一次heavyduty函数，节约时间和空间
  ```

- 封装

## 原型继承

原型链

使用__proto__属性调用，返回某变量的原型，__proto__属性(reference)指向原型链上一层的prototype属性值(，一个对象，内有方法，属性等等)

>e.g.定义一个函数func(),func./_/_proto__==Function.prototype

isprototypeof

hasOwnProperty():**判断是否是自身定义的属性（继承的不算）**

构造原型的方法

- Object.create()



### 构造函数

！！！typeof(Object/Array)=function

每个函数都有一个prototype属性，reference一个对象，这个对象用来存放那些会被继承的属性

only functions(构造函数) have the portotype property

# OOP vs FP

## OOP

对现实生活programming

factory functions:functions that create objects

object.create(),从哪个对象建立对象（pure原型继承）

## constructor function

obj= new Obj()

new 关键词会改变this的指向

增加方法：Obj.prototype.attack=function(){}

不足：添加函数通过prototype，**否则占据大量内存空间**

## class

语法糖

```
class Obj{
  constructor(){
    //varibles
  }
  func1(){}
}
```

class创造instance(instanceof语法)

### this的四种控制方式

- new可以绑定this
- 显式和隐式绑定
- 使用箭头函数

### extend class

super class and sub class,links the prototype chain

```
class Obj2 extends Obj{
  constructor(sth1,sth2,sth3){
    super(sth1,sth2)//父类
    this.sth3=sth3
  }
  func2(){

  }//等同于Obj2.prototype.func2()...
}
```

polymorphism:the ability to call the same function on different object ,and each of those responding in different way

overload:add features,parameters

OOP的四大原则

- 封装
- 抽象
- 继承
- 多态性
