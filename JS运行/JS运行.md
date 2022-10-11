- [执行上下文](#执行上下文)
    - [global execution context](#global-execution-context)
- [词法环境](#词法环境)
- [闭包](#闭包)
  - [arguments对象](#arguments对象)
- [IIFE](#iife)

## 执行上下文

>**一个内部数据结构，它包含有关函数执行时的详细细节：当前控制流所在的位置，当前的变量，this 的值，以及其它的一些内部细节**
>一个函数调用仅具有一个与其相关联的执行上下文

#### global execution context

- call stack 最底层,所有代码都在这个上下文中运行
- 包含global object和this

## 词法环境

**一个内部的对象，由环境记录和对外部词法环境的引用组成**

一个变量只是环境记录这个对象的一个属性，操作修改变量其实是在改变该属性的值

函数和变量的不同之处在于**不同之处在于函数声明的初始化会被立即完成**（*可以在函数声明之前调用函数*）

> 函数，代码块，整个脚本拥有
>
>**在javascript中，词法作用域（where function was defined）决定了可用的变量，而不是动态作用域（where the function is called）！！**

## 闭包

**所有的函数在“诞生”时都会记住创建它们的词法环境**

闭包sum（curry化）

```
function sum(x){
    return function(y){
        return x+y
    }
    }
```

死区

```
let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
//输出ReferenceError: Cannot access 'x' before initialization

```

>var和let，const的区别
>1.没有块作用域，在全局环境中可见，或者函数内
>2.var有变量提升

---

### arguments对象

类数组（使用array.from创建数组）

## IIFE
