(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{243:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),a("p",[a("a",{attrs:{href:"https://nolboo.github.io/blog/2013/10/22/google-web-font-faster-tip/",target:"_blank",rel:"noopener noreferrer"}},[t._v("보고 공부한 링크"),a("OutboundLink")],1)]),t._m(15),t._m(16),a("p",[a("a",{attrs:{href:"http://blog.coderifleman.com/post/111825720099/%ED%95%9C%EA%B8%80-%EC%9B%B9-%ED%8F%B0%ED%8A%B8-%EA%B2%BD%EB%9F%89%ED%99%94%ED%95%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("보고 공부한 링크"),a("OutboundLink")],1)]),t._m(17),a("p",[a("a",{attrs:{href:"http://naradesign.net/wp/2012/06/19/1830/",target:"_blank",rel:"noopener noreferrer"}},[t._v("웹 폰트 문제 해결. @font-face troubleshooting"),a("OutboundLink")],1),a("a",{attrs:{href:"https://nolboo.github.io/blog/2013/10/22/google-web-font-faster-tip/",target:"_blank",rel:"noopener noreferrer"}},[t._v("구글 웹폰트를 빠르게 로드하는 팁 7가지"),a("OutboundLink")],1),a("a",{attrs:{href:"http://blog.coderifleman.com/post/111825720099/%ED%95%9C%EA%B8%80-%EC%9B%B9-%ED%8F%B0%ED%8A%B8-%EA%B2%BD%EB%9F%89%ED%99%94%ED%95%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("한글 웹 폰트 경량화해 사용하기"),a("OutboundLink")],1),a("a",{attrs:{href:"http://www.freezner.com/archives/215",target:"_blank",rel:"noopener noreferrer"}},[t._v("웹폰트 사용"),a("OutboundLink")],1),t._v("\nhttps://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/\nhttps://www.igvita.com/2012/09/12/web-fonts-performance-making-pretty-fast/\n"),a("a",{attrs:{href:"http://theeluwin.github.io/NotoSansKR-Hestia/",target:"_blank",rel:"noopener noreferrer"}},[t._v("경량화된 한글 노토 산스 폰트를 웹폰트로 사용할 수 있도록 CDN 서비스를 하는 곳."),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"web-font"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-font","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Font")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"font-face"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-face","aria-hidden":"true"}},[this._v("#")]),this._v(" font-face")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("CSS3에 새로 추가된 웹 글꼴 명세")]),a("li",[t._v("표시하려 하는 글꼴이 시스템에 없는 경우 웹 서버에서 글꼴 내려받아 표시")]),a("li",[t._v("지원\n"),a("ul",[a("li",[t._v("W3C 권장형식은 "),a("code",[t._v("*.woff")]),t._v(" 이다.")]),a("li",[t._v("IE 6~8: "),a("code",[t._v("*.eot")]),t._v("(O) "),a("code",[t._v("*.woff")]),t._v("(X)")]),a("li",[t._v("IE9: "),a("code",[t._v("*.eot")]),t._v("(O) "),a("code",[t._v("*.woff")]),t._v("(O)")]),a("li",[t._v("크롬, 사파리, 파폭, 오페라: "),a("code",[t._v("*.eot")]),t._v("(X) "),a("code",[t._v("*.woff")]),t._v(" (O)")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("결국 모든 브라우저를 지원하기 위해 "),s("code",[this._v("*.eot")]),this._v("와 "),s("code",[this._v("*.woff")]),this._v("를 모두 준비해야 한다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("@media구문 안쪽에서 @font-face규칙을 사용하는 경우 IE9 브라우저는 글꼴 요청 X")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"한-글꼴에-font-face는-한번만-선언"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#한-글꼴에-font-face는-한번만-선언","aria-hidden":"true"}},[this._v("#")]),this._v(" 한 글꼴에 @font-face는 한번만 선언")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("표준과 비표준 글꼴을 모두 지원하기 위해 "),s("code",[this._v("@font-face")]),this._v("규칙을 두 번 사용하는 경우 IE 6~9는 두개 형식 모두 내려받아 성능에 좋지 않겠지.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* Not recommended */")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@font-face")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ngwoff"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token url"}},[t._v("url(NanumGothic.woff)")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@font-face")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ngeot"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token url"}},[t._v("url(NanumGothic.eot)")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("나눔고딕, NanumGothic, ngwoff, ngeot"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("위 코드는 더 나은 성능을 위하여 다음과 같이 개선할 수 있습니다. "),s("code",[this._v("Paul Irish")]),this._v("가 제안한 방탄 코드 입니다.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* Recommended */")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@font-face")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ng"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token url"}},[t._v("url(NanumGothic.eot)")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("local")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("※"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{attrs:{class:"token url"}},[t._v("url(NanumGothic.woff)")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘woff’"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("나눔고딕, NanumGothic, ng"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("ng라는 글꼴 이름을 한번만 선언하고 "),a("code",[t._v("eot")]),t._v("형식과 "),a("code",[t._v("woff")]),t._v("를 순차저긍로 참조.\n"),a("ul",[a("li",[t._v("eot가 먼저 나와있으므로 IE 6~8은 eot만 받아온다")]),a("li",[t._v("나머지 브라우저들은 woff를 받아온다.")])])]),a("li",[a("code",[t._v("local(※)")]),a("ul",[a("li",[t._v("외부자원 참조하기 이전에 시스템 글꼴을 우선 참조할 수 있도록 만들어준다.")]),a("li",[t._v("IE 6~8이 local()값을 처리하지 못하는 특성 이용해 woff글꼴 추가로 요청 못하게 함.")]),a("li",[a("code",[t._v("※")]),t._v("는 사용자 시스템에 존재하지 않을만한 글꼴을 임의로 지정")]),a("li",[a("code",[t._v("format(‘woff’)")]),t._v("를 명시적으로 지정하면 이 형식을 지원하는 브라우저만 글꼴 내려받음.\n"),a("ul",[a("li",[t._v("값은 반드시 따옴표 안에 있어야 함.")])])]),a("li",[t._v("나눔고딕 NanumGothic 두번 적은 이유는 영문으로만 작성했을때 제대로 표시하지 못하는 브라우저 있기 때문. 한글 이름이 있으면 이런 식으로 해줘라.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ie9는-media규칙-내부에-font-face-허용-안함"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ie9는-media규칙-내부에-font-face-허용-안함","aria-hidden":"true"}},[this._v("#")]),this._v(" IE9는 @media규칙 내부에 @font-face 허용 안함")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* IE 9 does not support @font-face within @media */")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" all and "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("min-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("768px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@font-face")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ng"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token url"}},[t._v("url(NanumGothic.eot)")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("local")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("※"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{attrs:{class:"token url"}},[t._v("url(NanumGothic.woff)")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘woff’"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token selector"}},[t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("나눔고딕, NanumGothic, ng"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("IE9는 미디어 구문 안쪽에 선언하면 외부 글꼴을 요청하지 않음.")]),s("li",[this._v("@font-face를 @media 밖에 빼면 된다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"웹폰트-빠르게-로딩하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#웹폰트-빠르게-로딩하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 웹폰트 빠르게 로딩하기")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("구글 임포트 코드를 "),a("code",[t._v("HEAD")]),t._v("태그의 가장 첫번째(CSS보다 앞)에 위치")]),a("li",[t._v("link로 로드해라\n"),a("ul",[a("li",[t._v("구글 웹폰트 로딩 방법은 "),a("code",[t._v("@import")]),t._v(", "),a("code",[t._v("참조링크")]),t._v(", "),a("code",[t._v("js")]),t._v("세가지.")]),a("li",[t._v("참조링크 이용해서 HTML최상에 코드넣어라.")]),a("li",[a("code",[t._v("<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>")])])])]),a("li",[t._v("적은 폰트 갯수\n"),a("ul",[a("li",[t._v("표제를 위한 볼드타입 / 가시를 위한 가독성 좋은 폰트 최대2개 폰트 선정")])])]),a("li",[t._v("코드 한줄에 여러 폰트 로드\n"),a("ul",[a("li",[a("code",[t._v("<link href='http://fonts.googleapis.com/css?family=Open+Sans|Oswald' rel='stylesheet' type='text/css'>")])])])]),a("li",[t._v("쓸것만 로드: 폰트 weight옵션 쓸것만 로드한다")]),a("li",[t._v("Load faster fonts: 폰트마다 로딩 시간 다르니 빠른걸로 골라라")]),a("li",[t._v("정말 확실히 로드해야한다면 Web Font Loader를 써라.\n"),a("ul",[a("li",[t._v("사이트 나머지 로드되기 전에 로드하고, 스타일되지 않은 텍스트가 번쩍이는 것을 확실히 피해준다.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"한글-웹-폰트-경량화해-사용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#한글-웹-폰트-경량화해-사용하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 한글 웹 폰트 경량화해 사용하기")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[this._v("#")]),this._v(" Refer")])}],!1,null,null,null);s.default=e.exports}}]);