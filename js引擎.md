
- [JavaScript引擎](#javascript引擎)
- [为了提高执行速度可以怎么写代码？](#为了提高执行速度可以怎么写代码)
- [另一种可以在浏览器内运行的语言](#另一种可以在浏览器内运行的语言)
- [memory heap 和 call stack](#memory-heap-和-call-stack)
  - [垃圾回收](#垃圾回收)
- [单线程](#单线程)
- [js runtime](#js-runtime)

## JavaScript引擎

>- 解释器和编译器
>解释器前期较快，编译器可以做optimizing，执行时比较快
> - V8引擎内部**JIT compiler**
>   - 解释器生成bytecode，编译器对其中片段optimize
>   - 提高执行速度

## 为了提高执行速度可以怎么写代码？

- 写可预测的代码
- inline caching
- hidden class

## 另一种可以在浏览器内运行的语言

*webassambly*

## memory heap 和 call stack

stackoverflow:无限嵌套的函数（递归）

### 垃圾回收

防止内存泄漏

- 事件监听器没有remove
- setinterval

mark and sweep 机制

## 单线程

## js runtime

![title](Images/runtime.png)

[runtime模拟](http://latentflip.com/loupe)

nodejs:**javascript runtime**脱离了沙盒环境
![Images](Images/nodejs.jpg)
