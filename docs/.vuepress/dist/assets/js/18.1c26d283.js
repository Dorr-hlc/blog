(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{583:function(t,a,e){"use strict";e.r(a);var s=e(5),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("本篇博客主要是对 js解决浮点数运算精度丢失\n")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("计算机的二进制实现和位数限制有些数无法有限表示。就像一些无理数不能有限表示，如 圆周率 3.1415926...，1.3333... 等。JS 遵循 IEEE 754 规范，采用双精度存储（double precision），占用 64 bit。此时只能模仿十进制进行四舍五入了，但是二进制只有 0 和 1 两个，于是变为 0 舍 1 入。这即是计算机中部分浮点数运算时出现误差，丢失精度的根本原因。\n浮点数精度问题，比如 0.1 + 0.2 !== 0.3\n大数精度问题，比如 9999 9999 9999 9999 == 1000 0000 0000 0000 1\ntoFixed 四舍五入结果不准确，比如 1.335.toFixed(2) == 1.33\n四舍五入 toFixed()方法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let a = 2.446242342;a = a.toFixed(2);  // 输出结果为 2.45\nlet b = 2.335;b = b.toFixed(2);  // 输出结果为 2.33\n")])])]),e("h2",{attrs:{id:"解决思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路")]),t._v(" "),e("p",[t._v("本质上在处理这类问题的时候，基本的思路就是通过将浮点数转换成整数进行计算，然后再将整数的小数点位调整，转回正确的浮点数结果。\n定义一个自定义的转换和处理函数，然后就可以使用了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Math.formatFloat = function (f, digit) {\n    var m = Math.pow(10, digit);\n    return Math.round(f * m, 10) / m;\n}\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);