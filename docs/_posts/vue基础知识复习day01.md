---
title: 2022-06-26-vue基础知识点复习
date: 2022-06-26
tags:
  - vue.js
  - JavaScript
---

本篇博客主要是对vue基础知识点的复习巩固
<!-- more -->

## 数据绑定
vue中有两种数据绑定的方式：

 1. 单向数据绑定：数据只能从data中流向页面。
 2. 双向数据绑定：数据不仅能从data流向页面，还可以从页面流向data。


**备注：**

 1. 双向数据绑定一般都应用在表单元素，比如input,select等元素中。
 2. v-model:value可以默认携程v-model,因为v-model默认收集的就是value的值。
 
``` stylus
<input :value=“name”>
<input v-model="name">
```
## el与data的写法

``` stylus
const vm=new Vue({
 el:"#root",//第一种写法
 //对象式的写法
 data:{name:"hlc"}
})
//第二种写法，函数式的写法，组件写法必须使用函数式的写法，并且这里不能使用箭头函数，因为箭头函数没有自己的this，因此this会指向window,不会再指向vue的实例。
data:function(){
return:{
}
}

vm.$mount("#root")//第二种写法
```

## 数据代理

``` stylus
        let person={
            name:"zs",
            sex:"男"
        }
        Object.defineProperty(person,'age',{
            value:18,
            enumerable:true,//控制属性是否可以被枚举，默认值是false
            writable:true,//控制属性是否可以被修改
            configurable:true,//控制属性是否可以额被删除
        })
        console.log(person);
```


