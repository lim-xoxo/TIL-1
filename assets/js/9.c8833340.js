(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"jquery-attr-vs-prop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jquery-attr-vs-prop","aria-hidden":"true"}},[t._v("#")]),t._v(" jQuery attr() vs prop()")]),s("h2",{attrs:{id:"왜-attr-을-prop-으로-나누었나"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#왜-attr-을-prop-으로-나누었나","aria-hidden":"true"}},[t._v("#")]),t._v(" 왜 .attr()을 .prop()으로 나누었나?")]),s("ul",[s("li",[t._v("원래 따로 사용해야할 문제였는데 버그 많아져버림")]),s("li",[t._v("attr : HTML의 속성을 취급")]),s("li",[t._v("prop : Javascript프로퍼티 취급")])]),s("h2",{attrs:{id:"example-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-1","aria-hidden":"true"}},[t._v("#")]),t._v(" example 1")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("a id"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"to_comments"')]),t._v(" href"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"#comments"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("코멘트 일람"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $link "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'#to_comments'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$link"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("attr")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'href'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//#to_comment")]),t._v("\n$link"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("prop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'href'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//#http://example.com/path/to/page#to_comment")]),t._v("\n")])])]),s("ul",[s("li",[t._v("속성: HTML으로서 기록되어있는 속성의 내용")]),s("li",[t._v("프로퍼티: Javascript가 취급하는 정보.")])]),s("h2",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2","aria-hidden":"true"}},[t._v("#")]),t._v(" example 2")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("checkbox id"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"private"')]),t._v(" type"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"checkbox"')]),t._v(" checked "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $checkbox "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'#private'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$checkbox"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("attr")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('//"checked"')]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$checkbox"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("prop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//체크박스 해제하면?")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$checkbox"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("attr")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('//"checked"')]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$checkbox"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("prop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])])]),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[t._v("#")]),t._v(" Reference")]),s("p",[t._v("http://javascriptandjquerydev.blogspot.kr/2012/07/attr-prop.html")])])}],!1,null,null,null);a.default=e.exports}}]);