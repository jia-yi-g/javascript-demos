- [函数对象](#函数对象)
- [原型继承](#原型继承)
  - [构造函数](#构造函数)

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