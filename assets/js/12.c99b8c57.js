(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(t,a,e){"use strict";e.r(a);var r=e(1),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("本篇博客主要是对 CSS 中 z-index 属性在使用 opacity 后失效")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("当父盒子背景需要修改透明度 和 子盒子使用 z-index 提高层级的时候，会出现以下情况,会被阻挡")]),t._v(" "),e("h2",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),e("p",[t._v("父盒子的 opacity 会导致 子盒子在使用 z-index 的失效")]),t._v(" "),e("h2",{attrs:{id:"解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),e("p",[t._v("比如 父盒子背景需要设置颜色为白色， opacity 为 0.8 的时候，可以将背景颜色修改为 rgba 写法 通过第四个值，alpha 值，制定了色彩的透明度/不透明度，它的范围为 0.0 到 1.0 之间,0.5 为半透明。可以解决子元素 z-index 失效，这样就能避免使用 opacity.")])])}),[],!1,null,null,null);a.default=s.exports}}]);