- [执行上下文](#执行上下文)
    - [global execution context](#global-execution-context)
- [词法环境](#词法环境)


## 执行上下文
>**一个内部数据结构，它包含有关函数执行时的详细细节：当前控制流所在的位置，当前的变量，this 的值，以及其它的一些内部细节**
>一个函数调用仅具有一个与其相关联的执行上下文
#### global execution context

- call stack 最底层,所有代码都在这个上下文中运行
- 包含global object和this



## 词法环境

代码写在哪里；

>**在javascript中，词法作用域（where function was defined）决定了可用的变量，而不是动态作用域（where the function is called）！！**