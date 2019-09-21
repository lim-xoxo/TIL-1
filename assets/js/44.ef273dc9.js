(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{332:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"casper-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#casper-js","aria-hidden":"true"}},[t._v("#")]),t._v(" Casper.js")]),s("h3",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" Quick Start")]),s("p",[t._v("start, then, evaluate, fill,")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 기본 구조.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" casper "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'casper'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncasper"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("start")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncasper"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncasper"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncasper"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("run")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncasper"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("exit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("test 코드를 짤 때는 casper instance를 만들 필요 없다. global variable로 이미 선언되어있음.")]),s("h3",{attrs:{id:"using-the-command-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-command-line","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the command line")]),s("ul",[s("li",[s("p",[t._v("cli argumnet를 대응하는 "),s("code",[t._v("casper.cli")]),t._v(" 모듈이 있다.")])]),s("li",[s("p",[s("code",[t._v("cli.args")]),t._v(", "),s("code",[t._v("cli.options")]),t._v(" 가 있다.")])]),s("li",[s("p",[s("code",[t._v("cli.has()")]),t._v(", "),s("code",[t._v("cli.get()")]),t._v(", 'cli.drop()`으로 제어.")])]),s("li",[s("p",[t._v("utils_dump()로 json을 stdout.")])]),s("li",[s("p",[t._v("1.1부터 엔진을 slimerjs로 교체할 수 있음.")])])]),s("h3",{attrs:{id:"selectors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectors","aria-hidden":"true"}},[t._v("#")]),t._v(" Selectors")]),s("p",[t._v("CSS3 select 지원 끝.")]),s("h3",{attrs:{id:"writing-casperjs-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-casperjs-modules","aria-hidden":"true"}},[t._v("#")]),t._v(" Writing CasperJS modules")]),s("ul",[s("li",[t._v("1.1 부터 npm 모듈 지원.")])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),s("h3",{attrs:{id:"casper-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#casper-class","aria-hidden":"true"}},[t._v("#")]),t._v(" Casper class")]),s("p",[s("code",[t._v("require('casper').create(options)")]),t._v(" 로 생성.")]),s("h3",{attrs:{id:"casper-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#casper-options","aria-hidden":"true"}},[t._v("#")]),t._v(" casper.options")]),s("p",[t._v("열라 많은 옵션들이 있음.")]),s("h3",{attrs:{id:"쓸만한-casper-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쓸만한-casper-prototype","aria-hidden":"true"}},[t._v("#")]),t._v(" 쓸만한 casper.prototype.")]),s("ul",[s("li",[t._v("back(), forward()")]),s("li",[t._v("click()x")]),s("li",[t._v("cpatuerSelector()")]),s("li",[t._v("debugHTML()")]),s("li",[t._v("download()")]),s("li",[t._v("each")]),s("li",[t._v("echo()")]),s("li",[t._v("evaluate()")]),s("li",[t._v("run(), exit()")]),s("li",[t._v("exists()")]),s("li",[t._v("fillSelectors()")]),s("li",[t._v("fetchText()")]),s("li",[t._v("getElementAttribute(), getElementBounds(), getElementInfo()")]),s("li",[t._v("getFormValues(), getHTML(), getTitle()")]),s("li",[t._v("mouseEvent()")]),s("li",[t._v("open()")]),s("li",[t._v("resourceExists()")]),s("li",[t._v("scrollTo(), scrollToBottom()")]),s("li",[t._v("sendKeys()")]),s("li",[t._v("then(), thenClick(), thenEvaluate(), thenOpen(), thenOpenAndEvaluate()")]),s("li",[t._v("wait(), waitFor(), waitForResource(), waitForUrl(), waitForSelector()")])])])}],!1,null,null,null);a.default=e.exports}}]);