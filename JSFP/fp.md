# Functional programming

## why fp in javascript

> 函数是js中的一等公民
>
> - 函数可以做变量值
> - 函数可以作为参数
> - 函数可以作为一个函数的返回值

## higher order function

> 更加灵活，在调用时，可以定义使用的参数和想要的操作
> 最早的fp：lisp

## pure function

- same input same output
- can not modify anything outside of its own(no side effects)
  
>**side effect**
>- use map,concat
>- referential transparency
>- immutable state,predictable,no shared state,pure

## idempotence

- 多次调用获得相同结果
- 和pure函数不同
  - 比如console.log()同一个数
  - 可以有side effect
  - f(x)=f(f(x))?

## imperative vs declerative(命令式和声明式)

>声明式：“你能把水给我吗”更接近计算机
>```
>for(let i=o;i<100;i++){
>    //....
>}
>```
>命令式：“你能走过去拿起水杯。。。。。”
>```
>[1,2,3].foreach(......)

## immutability

## currying

```
const curriedmulty=(a)=>(b)=>a*b
```

- takes one parameter at a time
- 闭包
- 尽量减少参数个税（arity）
  
## partial application

使用bind绑定某个函数

## caching和memoized

## compose and pipe

```
compose(multipyby3,makeposi){
//将不同函数组合
}
```

## composition VS inheritance

- composition
  - what is has
- ineritance
  - what it is

## OOP VS FP