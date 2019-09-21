(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{358:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"react-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hook","aria-hidden":"true"}},[t._v("#")]),t._v(" React: Hook")]),s("h2",{attrs:{id:"hook이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook이란","aria-hidden":"true"}},[t._v("#")]),t._v(" Hook이란")]),s("ul",[s("li",[t._v("React 16.8부터 들어옴. State나 다른 피쳐를 클래스 없이 사용하게 해줌.")])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("import React, { useState } from 'react';\n\nfunction Example() {\n  // useState으로 count랑 setCount \n  const [count, setCount] = useState(0);\n\n  return (\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("You clicked {count} times"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  );\n}\n")])])]),s("ul",[s("li",[t._v("점진적으로 적용할 수 있다.")]),s("li",[t._v("클래스를 없애겠다는건 아님")])]),s("h2",{attrs:{id:"hook-만든-동기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook-만든-동기","aria-hidden":"true"}},[t._v("#")]),t._v(" Hook 만든 동기")]),s("h3",{attrs:{id:"_1-stateful한-로직을-컴포넌트간에-재사용하기-힘들다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-stateful한-로직을-컴포넌트간에-재사용하기-힘들다","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. stateful한 로직을 컴포넌트간에 재사용하기 힘들다")]),s("ul",[s("li",[t._v("컴포넌트에 재사용가능한 behavior를 붙이기 힘듦(e.g. store에 연결하기)")]),s("li",[t._v("Render props나 HOC가 이걸 해결하려 했음")]),s("li",[t._v("근디 얘네를 쓰려면 코드 구조를 바꿔야함. 그래서 부담스럽고 읽기도 어려움. React DevTools로 봐도 Wrapper가 엄청 많아서 지옥같음. 온갖 providers, consumers, HOC, render props나 다른 추상적인 애들로 쌓여있음(물론 devtools에서 filter out할순 있지만...).")]),s("li",[t._v("리액트는 stateful한 로직을 share할 방법이 필요함")]),s("li",[t._v("Hooks쓰면 컴포넌트에서 stateful한 로직을 빼내서, 재사용하거나 따로 테스트 가능함. 그리고 컴포넌트 구조를 바꾸지 않고도 쓸 수 있음.")])]),s("h3",{attrs:{id:"_2-복잡한-컴포넌트는-점점-이해하기-어렵다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-복잡한-컴포넌트는-점점-이해하기-어렵다","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 복잡한 컴포넌트는 점점 이해하기 어렵다")]),s("ul",[s("li",[t._v("간단하게 시작했지만 점점 통제 불가능하게 커진 컴퍼넌트.")]),s("li",[t._v("각 라이프사이클 메서드에 stateful한 로직들이 어지럽게 담겨있다.")]),s("li",[t._v("stateful로직이 너무 많아서 컴퍼넌트를 작게 쪼개기도 어렵다. 이래서 redux 등 state management library썼음. 근디 그건 추상화를 심하게 만들고 파일간 엄청 이동하게 하고 컴포넌트를 재사용하는걸 힘들게 만들기도 한다.")]),s("li",[t._v("Hooks는 이걸 해결하기 위해 컴포넌트를 작은 함수들로 쪼개게 한다. 라이프사이클 메서드로 쪼개는 것 대신.")])]),s("h3",{attrs:{id:"_3-classes는-사람도-기계도-헷갈려한다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-classes는-사람도-기계도-헷갈려한다","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Classes는 사람도 기계도 헷갈려한다")]),s("ul",[s("li",[t._v("클래스가 리액트를 배우는데 큰 장벽이라는걸 알았다. this가 동작하는걸 잘 이해해야하는데 다른 언어랑 다르기도 해서 어렵거든.")]),s("li",[t._v("그리구 클래스는 minify도 잘 안되고 hot reloading을 불안정하게 한다.")]),s("li",[t._v("Hooks는 리액트 피쳐를 클래스 없게 쓸 수 있도록 도와준다.")])]),s("h2",{attrs:{id:"조금씩-적용하는-전략"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#조금씩-적용하는-전략","aria-hidden":"true"}},[t._v("#")]),t._v(" 조금씩 적용하는 전략")]),s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[t._v("#")]),t._v(" Refer")]),s("ul",[s("li",[t._v("https://reactjs.org/docs/hooks-intro.html")]),s("li",[t._v("https://velog.io/@velopert/react-hooks")]),s("li",[t._v("RFC: https://github.com/reactjs/rfcs/blob/master/text/0068-react-hooks.md")])])])}],!1,null,null,null);a.default=n.exports}}]);