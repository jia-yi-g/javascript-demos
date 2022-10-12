
- [有哪些数据类型](#有哪些数据类型)
  - [值引用和引用reference](#值引用和引用reference)
- [Type coercion(隐式类型转换)](#type-coercion隐式类型转换)
- [TypeScript](#typescript)

## 有哪些数据类型

- number
- Boolean
- string
- undefined(no defination)
- null(no value)
- symbol
- bigint?
- object
  
### 值引用和引用reference

如何建立一个对象副本

浅拷贝（内层对象pass by reference）

- 数组：concat方法，‘...’
- 对象:‘...’,object.assign()

深拷贝

- JSON.parse(JSON.stringify())
- etc

## Type coercion(隐式类型转换)

[检查网站](https://dorey.github.io/JavaScript-Equality-Table/)

> Object.is()相当于‘===’，但是它可以相等NaN！

- ‘==’
- if语句

## TypeScript

![Image](../typed.png)

strong vs weak typed : **能否自动转换**