(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{415:function(n,t,e){"use strict";e.r(t);var a=e(6),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"以下位运算均总结语32位有符号位语言。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以下位运算均总结语32位有符号位语言。"}},[n._v("#")]),n._v(" "),e("strong",[n._v("以下位运算均总结语32位有符号位语言")]),n._v("。")]),n._v(" "),e("h3",{attrs:{id:"按位否-bitwise-not"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按位否-bitwise-not"}},[n._v("#")]),n._v(" 按位否 Bitwise Not (~)")]),n._v(" "),e("ul",[e("li",[n._v("按位取反 ~N 相当于 -(N + 1)，~55 => -(55 + 1) => -56")]),n._v(" "),e("li",[n._v("应用："),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("   ~(-1) = 0\n\n   function boolIndex(index){\n       return Boolean(~index)\n   }\n\n   boolIndex([1,2,3].indexOf(1)) //true\n")])])])])]),n._v(" "),e("h3",{attrs:{id:"按位与-bitwise-and"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按位与-bitwise-and"}},[n._v("#")]),n._v(" 按位与 Bitwise And (&)")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("按位 N1 & N2, 同位为1才为1")])]),n._v(" "),e("li",[e("p",[n._v("应用：")]),n._v(" "),e("ol",[e("li",[n._v("N & 0 = 0")]),n._v(" "),e("li",[n._v("N & 1 = N")]),n._v(" "),e("li",[n._v("bit mask 位掩码"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("   const mask = 0b11110000;  //js二进制数字表示\n   mask & 22 // 16  确保了22的低四位为0，高四位不变\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" /**\n  *  判定奇偶\n  */\n\n  function isOdd(int){\n      return int & 1 === 1;\n  }\n\n  function isEvent(int){\n      return int & 1 === 0;\n  }\n")])])])])])])]),n._v(" "),e("h3",{attrs:{id:"按位或（-）、按位异或（-）just-like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按位或（-）、按位异或（-）just-like"}},[n._v("#")]),n._v(" 按位或（|）、按位异或（^）just like (&)")]),n._v(" "),e("h3",{attrs:{id:"左移（-）-n1-n2-n1-math-pow-2-n2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#左移（-）-n1-n2-n1-math-pow-2-n2"}},[n._v("#")]),n._v(" 左移（<<） N1 << N2  => N1 * Math.pow( 2 , N2)")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("        ```\n             130 << 3 === 130 * Math.pow(2,3) //true\n        ```\n        ```\n             /**\n             * color rgb值转Hex16进制数\n             */   \n\n             function rgb2Hex([red = 0,green = 0, blue = 0] = []){\n                 return `#${ red << 16 | green << 8 | blue.toString(16)}`;\n             }\n        ``` \n")])])]),e("h3",{attrs:{id:"右移（-）-n1-n2-math-floor-n1-math-pow-2-n2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#右移（-）-n1-n2-math-floor-n1-math-pow-2-n2"}},[n._v("#")]),n._v(" 右移（>>） N1 >> N2  => Math.floor(N1 / Math.pow( 2, N2))")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("        ```\n           // 向下取整\n           Math.floor(1.1) === 1.1 >> 0 //true\n        ```\n            /**\n             *  color hex16进制转rgb\n             */  \n\n             function hex2Rgb(hex){\n                 const mask = 0xff;\n                 let re = /^#?([0-9a-f]{6})$/i\n                 hex = hex.replace(re,'$1');\n                 hex = Number(`0x${hex}`);\n\n                 return [\n                     (hex >> 16) & mask,  // red\n                     (hex >> 8) & mask,   // green\n                     hex & mask         // blue\n                 ]\n             }\n        ```\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);