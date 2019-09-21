(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{290:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"javascript-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Javascript Event")]),s("h2",{attrs:{id:"이벤트-종류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-종류","aria-hidden":"true"}},[t._v("#")]),t._v(" 이벤트 종류")]),s("p",[t._v("웹을 탐색하는 동안 브라우저에서 발생할 수 있는 이벤트")]),s("h3",{attrs:{id:"ui-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui-event","aria-hidden":"true"}},[t._v("#")]),t._v(" UI Event")]),s("p",[t._v("사용자가 웹 페이지가 아닌 브라우저의 UI와 상호작용할 때 발생")]),s("ul",[s("li",[t._v("load: 페이지가 가지고 있는 모든 요소(이미지, 스크립트 및 광고)가 전부 로드되었을때만 발생. script요소를 html밑에 정의하면, DOM은 스크립트를 실행하기에 앞서 폼 요소를 먼저 로드하므로 이 경우 load이벤트의 발생을 기다릴 필요가 없다."),s("code",[t._v("window.addEventListener('load', setup, false);")])]),s("li",[t._v("unload: 웹 페이지가 언로드될 때 (주로 새로운 페이지를 요청한 경우)")]),s("li",[t._v("error: 브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 존재하지 않는 경우")]),s("li",[t._v("resize")]),s("li",[t._v("scroll: 전체 페이지 뿐만 아니라 특정 요소(스크롤바 가진 textarea)에서도 적용")])]),s("h3",{attrs:{id:"keyboard-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Keyboard Event")]),s("ul",[s("li",[t._v("input: input/textarea요소 값이 변경될 때")]),s("li",[t._v("keydown: 사용자가 키를 처음 눌렀을 때 (키가 눌린 동안은 계속해서 발생)")]),s("li",[t._v("keypress: 사용자가 눌렀던 키의 문자가 입력되었을 때")]),s("li",[t._v("keyup: 키보드 키 눌렀다 뗄 때. 화면에 문자가 나타난 이후에 발생")])]),s("h4",{attrs:{id:"이벤트-순서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-순서","aria-hidden":"true"}},[t._v("#")]),t._v(" 이벤트 순서")]),s("ol",[s("li",[t._v("keydown - 키 누름")]),s("li",[t._v("keypress - 키 눌렀거나/누르고 있는중이라 페이지에 문자 입력되고있다.")]),s("li",[t._v("keyup - 키 뗌")])]),s("h3",{attrs:{id:"mouse-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mouse-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Mouse Event")]),s("ul",[s("li",[t._v("click: 마우스 버튼을 눌렀다 뗄 때")]),s("li",[t._v("dblclick")]),s("li",[t._v("mousedown: 마우스 버튼을 누르고 있을 때")]),s("li",[t._v("mouseup: 눌렀던 마우스 버튼을 뗄 때")]),s("li",[t._v("mousemove: 마우스를 움직일 때(터치스크린X)")]),s("li",[t._v("mouseover: 요소 위로 마우스를 움직였을 때(터치스크린X)")]),s("li",[t._v("mouseout: 요소 바깥으로 마우스를 움직였을 때(터치스크린X)")]),s("li",[t._v("mouseenter: 특정영역 안으로")]),s("li",[t._v("mouseleave: 특정영역 밖으로 (마우스오버랑 아웃은 엘리먼트 기준인 것이랑 차이가 난다)")])]),s("h3",{attrs:{id:"focus-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#focus-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Focus Event")]),s("ul",[s("li",[t._v("focus / focusin: 포커스를 얻었을 때")]),s("li",[t._v("blur / focusout: 포커스를 잃었을 때")])]),s("h3",{attrs:{id:"form-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Form Event")]),s("ul",[s("li",[t._v("input: "),s("code",[t._v("<input>")]),t._v("또는 "),s("code",[t._v("<textarea>")]),t._v("요소 값이나 contenteditable특성을 가진 요소 값이 변경되었을 때")]),s("li",[t._v("change: 선택 상자, 체크박스, 라디오 버튼의 상태가 변경되었을 때")]),s("li",[t._v("submit: 사용자가 (버튼이나 키를 이용하여) 폼을 제출할 때 - 사용자가 폼에 입력한 값을 서버로 전달하기에 앞서, 입력한 값이 올바른 것인지 검사할 때 주로 사용됨.")]),s("li",[t._v("reset")]),s("li",[t._v("cut: 사용자가 폼 필드의 콘텐츠를 잘라내기 했을 때")]),s("li",[t._v("copy")]),s("li",[t._v("paste")]),s("li",[t._v("select: 사용자가 폼 필드에서 텍스트를 선택했을 때")])]),s("h2",{attrs:{id:"요소에-이벤트를-바인딩하는-세-가지-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#요소에-이벤트를-바인딩하는-세-가지-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" 요소에 이벤트를 바인딩하는 세 가지 방법")]),s("ol",[s("li",[t._v("HTML 이벤트 핸들러\n"),s("ul",[s("li",[t._v("그다지 권장하진 않음. 예전 코드에서 종종 사용.")]),s("li",[s("code",[t._v('<a onclick="hide()">')])]),s("li",[t._v("HTML 이벤트 핸들러 특성은 저 위 이벤트 이름과 동일하며, 앞에 on을 붙여 사용.\n"),s("ul",[s("li",[t._v("a요소는 onclick, onmouseover..., form요소는 onsubmit, input은 onkeypress, onfocus 등등")])])])])]),s("li",[t._v("전통적인 DOM 이벤트 핸들러\n"),s("ul",[s("li",[t._v("장점: 모든 주요 브라우저에서 지원.")]),s("li",[t._v("단점: 이벤트별로 단 하나의 함수만 바인딩 가능")])])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" el "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'username'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelement"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onblur "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" checkUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token comment"}},[t._v("//(함수이름 괄호는 생략)")]),t._v("\n")])])]),s("pre",[s("code",[t._v('- (함수를 호출할 때, 함수 이름 뒤에 괄호를 지정하면 JS해석기는 "이 코드를 지금 실행하라"란 의미로 해석.)\n')])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("이벤트 리스너\n"),s("ul",[s("li",[t._v("현재는 이 방법을 제일 많이 사용.")]),s("li",[t._v("하나의 이벤트로 여러 개의 함수를 실행할 수 있다.")]),s("li",[t._v("IE8에선 지원 안함. attachEvent로 구현한다.")])])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" el "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'blur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("//버블링:false, 캡쳐링:true")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("//매개변수를 가진 이벤트 핸들러")]),t._v("\nel2"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'blur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("//이벤트핸들러나 리스너를 지정할 때, 함수 이름 다음에 괄호를 사용할 수 없으므로 인수를 전달해야 하는 경우엔 우회 방법이 필요. - 익명함수")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"이벤트-객체"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-객체","aria-hidden":"true"}},[t._v("#")]),t._v(" 이벤트 객체")]),s("ul",[s("li",[t._v("이벤트 객체는 이벤트가 발생할 떄마다 해당 이벤트에 대한 유용한 정보를 제공.\n"),s("ul",[s("li",[t._v("이벤트를 발생시킨 요소")]),s("li",[t._v("keypress 이벤트가 어떤 키에 의해 발생했느지에 대한 정보")]),s("li",[t._v("사용자가 뷰포트 내의 어떤 요소를 클릭해서 click이벤트가 발생했는지에 대한 정보")])])]),s("li",[t._v("이벤트 객체는 이벤트 핸들러나 리스너로 지정된 함수에 전달된다. 전달받기 위한 함수의 매개변수 이름은 보통 e를 사용한다. (일부 개발자들은 error객체 참조할때도 e라 한다. 헷갈 ㄴㄴ)")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//이벤트가 발생한 요소를 가져옴.")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nel"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'blur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minLength"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("//매개변수 가짐")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nel2"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'blur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("//IE 5~8 대응하기")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minLength"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" el"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    el "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    elMsg "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextSibling"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("minLength"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'이름은'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" minLength "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'글자 이상이어야 합니다'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elUsername "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'username'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    elUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'blur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("checkLength")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    elUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("attachEvent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'onblur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("checkLength")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"이벤트-위임"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-위임","aria-hidden":"true"}},[t._v("#")]),t._v(" 이벤트 위임")]),s("blockquote",[s("p",[t._v("이벤트 리스너를 지정하는 요소가 많을수록->페이지의 실행속도 느려짐\n그러나 이벤트의 흐름을 이용하면 부모 요소를 이용해 이벤트 발생 대기 가능.")])]),s("ul",[s("li",[t._v("이벤트는 이벤트를 포함하고 있는 부모요소에도 영향을 미치기 때문에 자식 요소를 포함할 수 있는 요소에 이벤트 핸들러를 지정하고 event객체의 target속성을 이용해 정확히 어떤 요소에서 이벤트가 발생하였는지를 판단하면 된다.")]),s("li",[t._v("즉, 이벤트 리스너가 실행할 작업을 요소의 부모 요소에게 위임(Delegation)할 수 있다. (li위의 ul에!)")])]),s("h2",{attrs:{id:"기본-동작-변경하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본-동작-변경하기","aria-hidden":"true"}},[t._v("#")]),t._v(" 기본 동작 변경하기")]),s("h3",{attrs:{id:"preventdefault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preventdefault","aria-hidden":"true"}},[t._v("#")]),t._v(" preventDefault()")]),s("ul",[s("li",[t._v("링크 클릭이나 폼 제출같은 이벤트들은 사용자에게 다른 페이지 보여줌")]),s("li",[t._v("이런 요소들의 기본 동작을 중단하기 위해선(ex. 사용자가 링크를 클릭하거나 폼을 제출해도 계속 같은 페이지) 이벤트 객체의 이 메서드를 사용하면 된다.")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preventDefault"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"stoppropagation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stoppropagation","aria-hidden":"true"}},[t._v("#")]),t._v(" stopPropagation()")]),s("ul",[s("li",[t._v("어느 한 요소를 이용하여 이벤트를 처리하고 나면, 이벤트가 부모 요소로 버블링되는 것을(특히 부모 요소가 동일한 이벤트에 대해 개별적인 이벤트 핸들러를 가지고 있는 경우라면 더욱) 중단하고 싶을 수 있다.")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stopPropagation"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelBubble "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"두-메서드-모두-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#두-메서드-모두-사용","aria-hidden":"true"}},[t._v("#")]),t._v(" 두 메서드 모두 사용")]),s("p",[s("code",[t._v("return false;")]),t._v("\n하면 요소의 기본 동작 중단함과 동시에 이벤트가 버블링/캡쳐링되는 것도 중단할 수 있다.\n근데 js해석기가 위 구문을 만나게 되면 이후 코드 실행을 중단하고 함수를 호출한 문장의 다음 문장을 실행.")]),s("h3",{attrs:{id:"fallroot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallroot","aria-hidden":"true"}},[t._v("#")]),t._v(" @fallroot")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://github.com/lezhin/til/blob/master/JavaScript/event.md\n\n유림님 올린 문서 마지막에 return false에 대한 얘기가 있는데 이건 jQuery에만 있는 내용이고 일반 자바스크립트에 해당하지 않아요. jQuery를 쓰더라도 사실 안 썼으면 하는 ㅎㅎ\n\nhttp://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false\n")])])]),s("h2",{attrs:{id:"어떤-요소에서-이벤트가-발생했을까"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#어떤-요소에서-이벤트가-발생했을까","aria-hidden":"true"}},[t._v("#")]),t._v(" 어떤 요소에서 이벤트가 발생했을까?")]),s("blockquote",[s("p",[t._v("이벤트 핸들러 함수 호출될때 어떤 요소에서 이벤트 발생했는지 알아내는 최고의 방법은 event객체의 target속성 참조하는 방법이다. 근데 this로도 참조 가능.")])]),s("ul",[s("li",[s("code",[t._v("this.value.length")]),t._v(" 처럼 받아올 수 있다.")]),s("li",[t._v("근데 함수에 매개변수를 전달하지 않는(그래서 익명 함수에 의해 호출되는 것이 아닌) 경우에만 제대로 동작.")])]),s("h1",{attrs:{id:"focus-blur"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#focus-blur","aria-hidden":"true"}},[t._v("#")]),t._v(" focus, blur")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("checkUsername")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" username "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'warning'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"이름이 너무 짧습니다."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("tipUsername")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'tip'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    elMsg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'이름은 다섯 글자 이상이어야 합니다.'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("//username입력 필드가 포커스를 받거나 잃으면 위의 함수를 호출하도록 한다.")]),t._v("\nel"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'focus'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tipUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'blur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkUsername"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"이벤트가-발생한-지점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트가-발생한-지점","aria-hidden":"true"}},[t._v("#")]),t._v(" 이벤트가 발생한 지점")]),s("ol",[s("li",[t._v("스크린\n"),s("ul",[s("li",[t._v("screenX, screenY")]),s("li",[t._v("모니터 화면 전체를 대상")]),s("li",[t._v("(브라우저가 아닌)화면의 왼쪽 상단 모서리를 기준으로 현재 커서 위치 알려줌")])])]),s("li",[t._v("페이지\n"),s("ul",[s("li",[t._v("pageX, pageY")]),s("li",[t._v("전체 페이지를 기준으로 현재 커서 위치")]),s("li",[t._v("페이지 최상단은 viewport를 벗어나 있을 수 있기 때문에 커서가 같은 위치에 있다 하더라도 페이지 좌표와 클라이언트 좌표가 다를 수 있다.")])])]),s("li",[t._v("클라이언트\n"),s("ul",[s("li",[t._v("clientX, clientY")]),s("li",[t._v("브라우저 뷰포트 기준으로 커서 위치 알려줌")]),s("li",[t._v("스크롤 해서 상단 안보이더라도 클라 좌표는 영향 안받음")])])])]),s("h2",{attrs:{id:"변형-이벤트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#변형-이벤트","aria-hidden":"true"}},[t._v("#")]),t._v(" 변형 이벤트")]),s("ul",[s("li",[t._v("DOMNodeInserted: 돔트리에 노드 추가될때. (appendChild(), replaeChild(), insertBefore()메서드를 호출하면 발생한다.)")]),s("li",[t._v("DOMNodeRemoved: 제거될때")]),s("li",[t._v("DOMSubtreeModified: 변경되면")]),s("li",[t._v("DOMNodeInsertedIntoDocument")]),s("li",[t._v("DOMNodeRemovedFromDocument")])]),s("h2",{attrs:{id:"html5-이벤트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html5-이벤트","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML5 이벤트")]),s("ul",[s("li",[t._v("DOMContentLoaded: 돔트리가 형성될때.더 빠르게 로드되는 것처럼 보일 수 있다. 그러나 스크립트 로딩이 완료되기를 기다리지 않아 미처 로딩되지 않은 스크립트에 의해 생성되는 요소들이 DOM트리에 반영되지 않을 수 있다(window나 document객체 통해 처리)")]),s("li",[t._v("hashchange: URL의 해시가 변경될 때(전체 창이 새로 고쳐지는 것이 아니라)발생. ajax이용해 콘텐츠 로드하는 경우에도 사용.")]),s("li",[t._v("beforeunload: window객체에서 발생. 페이지가 언로드 되기 전에 발생.(ex. 사용자가 폼 데이터를 변경한 상태에서 저장 않고 다른 페이지로 이동하려는 경우에 알림)")])])])}],!1,null,null,null);a.default=e.exports}}]);