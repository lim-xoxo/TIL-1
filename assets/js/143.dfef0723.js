(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{194:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"chrome-extensions-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-extensions-만들기","aria-hidden":"true"}},[t._v("#")]),t._v(" Chrome Extensions 만들기")]),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),a("ul",[a("li",[t._v("HTML, CSS, JS, Images등 필요한 것을 모아놓은 압축된 번들.")]),a("li",[t._v("구글 크롬 브라우저에 기능 추가")]),a("li",[t._v("브라우저가 웹 페이지에 제공하는 모든 API 사용가능. (XMLHttpRequest, JSON, HTML 등...)")]),a("li",[t._v("웹페이지나 서버랑 "),a("code",[t._v("content script")]),t._v("나 "),a("code",[t._v("cross-origin XMLHttpRequests")]),t._v("로 통신가능.")]),a("li",[t._v("브라우저 기능들이랑 상호작용할 수도 있다(e.g. 북마크, 탭)")])]),a("h2",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files","aria-hidden":"true"}},[t._v("#")]),t._v(" Files")]),a("p",[a("code",[t._v("manifest.json")]),t._v(". 익스텐션의 정보.")]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"name"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"My Extension"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"version"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2.1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"description"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Gets information from Google."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"icons"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"128"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"icon_128.png"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"background"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"persistent"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"bg.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"permissions"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"http://*.google.com/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://*.google.com/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"browser_action"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"default_title"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"default_icon"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"icon_19.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"default_popup"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"popup.html"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" Architecture")]),a("p",[t._v("다수의 extensions들은 "),a("code",[t._v("background page")]),t._v("를 가진다. 이는 익스텐션의 메인 로직을 담는 보이지 않는 페이지다.\n혹은 익스텐션의 UI를 보여주는 다른 페이지를 가질 수도 있다.")]),a("ul",[a("li",[t._v("Background page\n"),a("ul",[a("li",[a("code",[t._v("background.html")]),t._v(". 익스텐션을 컨트롤 할 수 있는 js를 넣을 수 있다. 두가지 종류가 있다.")]),a("li",[a("ol",[a("li",[t._v("persistent background pages: 항상 열려있다.")])])]),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("event pages: 필요할 때 열리고 닫힌다.")])])])])]),a("li",[t._v("UI pages\n"),a("ul",[a("li",[a("code",[t._v("tabs.create")]),t._v("이나 "),a("code",[t._v("window.open()")]),t._v("으로 다른 HTML파일을 보여줄 수 있다.")]),a("li",[t._v("익스텐션 내부의 HTML페이지는 다른 DOM들을 완벽히 접근할 수 있다.")])])]),a("li",[t._v("Content scripts\n"),a("ul",[a("li",[t._v("익스텐션이 웹 페이지랑 인터랙트하기 위해 필요. content script는 loaded page의 일부지, 익스텐션의 일부가 아니다.")]),a("li",[t._v("브라우저가 방문한 웹페이지의 디테일 정보를 읽을 수 있다. DOM을 읽을 수 있고 수정도 할 수 있다.")]),a("li",[t._v("하지만 부모 익스텐션의 백그라우드 페이지 돔은 수정하지 못한다.")])])])]),a("h2",{attrs:{id:"chrome-api들-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-api들-사용하기","aria-hidden":"true"}},[t._v("#")]),t._v(" chrome.* API들 사용하기")]),a("ul",[a("li",[t._v("Chrome-only API들을 사용할 수 있다. (e.g. window.open()말고 tabs.create메서드를 사용 가능)")]),a("li",[t._v("보통 비동기다. 끝나기 전까지 기다리지 않음. 결과를 알고싶다면 콜백 함수를 넘겨야 한다.\n"),a("ul",[a("li",[a("code",[t._v("chrome.tabs.create(object createProperties, function callback)")])])])]),a("li",[t._v("동기 메서들은 콜백이 없다. 보통 return type이 있다.\n"),a("ul",[a("li",[a("code",[t._v("string chrome.runtime.getURL()")])])])])]),a("h3",{attrs:{id:"예제-콜백-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예제-콜백-사용하기","aria-hidden":"true"}},[t._v("#")]),t._v(" 예제 - 콜백 사용하기")]),a("p",[t._v("현재 선택된 탭을 새로운 URL로 가고 싶을 때, 현재 탭의 아이디를 알아내고("),a("code",[t._v("tabs.query")]),t._v("사용), 새로운 URL로 가야할텐데("),a("code",[t._v("tabs.update")]),t._v("사용), 비동기라서 아래 함수는 작동하지 않는다.")]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 잘못된 코드")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tab "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" chrome"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'active'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//WRONG!!!")]),t._v("\nchrome"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("newUrl"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("someOtherFunction")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 맞는 코드")]),t._v("\nchrome"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'active'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tabs"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chrome"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tabs"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" newUrl"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("someOtherFunction")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"데이터-저장하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터-저장하기","aria-hidden":"true"}},[t._v("#")]),t._v(" 데이터 저장하기")]),a("p",[a("code",[t._v("storage API")]),t._v("나 HTML5 "),a("code",[t._v("web storage API")]),t._v("(로컬스토리지 등...)에 데이터를 저장할 수 있다. 혹은 서버에 저장할 수도 있다.")]),a("p",[t._v("익명 모드 브라우저로 하면 저장할 수 없다. 고려해야 함.")]),a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[t._v("#")]),t._v(" Refer")]),a("p",[t._v("https://developer.chrome.com/extensions/overview\nhttps://developer.chrome.com/extensions/samples#email-this-page-(by-google)")])])}],!1,null,null,null);s.default=e.exports}}]);