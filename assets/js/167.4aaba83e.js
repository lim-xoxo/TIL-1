(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{158:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"django-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-cache","aria-hidden":"true"}},[a._v("#")]),a._v(" Django Cache")]),s("h2",{attrs:{id:"캐시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#캐시","aria-hidden":"true"}},[a._v("#")]),a._v(" 캐시")]),s("ul",[s("li",[a._v("캐시: 고비용의 계산 결과를 저장해둠으로써 다음 번에는 실행하지 않아도 되도록.")]),s("li",[a._v("순서\n"),s("ul",[s("li",[s("ol",[s("li",[a._v("URL이 오면, 그 페이지를 먼저 캐시에서 찾는다.")])])]),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[a._v("캐시에 있다 -> 캐시된 페이지를 보여준다")])])]),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[a._v("캐시에 없다 -> 페이지를 가져오고 캐시에 저장하고, 보여준다.")])])])])])]),s("h2",{attrs:{id:"장고의-캐시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장고의-캐시","aria-hidden":"true"}},[a._v("#")]),a._v(" 장고의 캐시")]),s("ul",[s("li",[a._v("설정은 settings > CACHES에서 한다.")])]),s("h3",{attrs:{id:"memcached"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memcached","aria-hidden":"true"}},[a._v("#")]),a._v(" Memcached")]),s("ul",[s("li",[a._v("메모리 기반 캐시 프레임웍(메모리-캐시: 멤캐시).")]),s("li",[a._v("Facebook, 위키피디아에서 디비 접근 줄이기 위해 사용.")]),s("li",[a._v("'키-값'쌍으로 메모리에 저장하고 가져온다.")]),s("li",[a._v("데몬(백그라운드로 실행되며, 사용자 인터페이스가 없는 프로그램)으로서 동작, RAM의 특정 용량을 차지.")]),s("li",[a._v("모든 데이터는 메모리에 직접 저장되므로, 데이터베이스 또는 파일 시스템 사용에 오버해드가 없다.")]),s("li",[a._v("memcached 바인딩으로는 "),s("code",[a._v("python-memcached")]),a._v(", "),s("code",[a._v("pylibmc")]),a._v("가 많이 쓰임.")]),s("li",[a._v("장점: 여러 서버에서 캐시를 공유할 수 있다. (Memcached 데몬을 여러 머신에서 실행시킬 수 있다.)")]),s("li",[a._v("단점: 캐시된 데이터는 메모리에 저장되기 때문에, 만약 서버에 장애가 발생하면 데이터를 잃게 된다. (임시적으로만 사용해야 함)")])]),s("h3",{attrs:{id:"데이터베이스-캐싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터베이스-캐싱","aria-hidden":"true"}},[a._v("#")]),a._v(" 데이터베이스 캐싱")]),s("ul",[s("li",[a._v("캐시 백엔드로 데이터베이스 테이블 사용하기")])]),s("h3",{attrs:{id:"파일-시스템-캐싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파일-시스템-캐싱","aria-hidden":"true"}},[a._v("#")]),a._v(" 파일 시스템 캐싱")]),s("ul",[s("li",[a._v("캐시된 아이템을 파일 시스템에 저장")])]),s("h3",{attrs:{id:"지역-메모리-캐싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지역-메모리-캐싱","aria-hidden":"true"}},[a._v("#")]),a._v(" 지역 메모리 캐싱")]),s("ul",[s("li",[a._v("LocMemcache\nRefer: https://docs.djangoproject.com/ja/1.9/topics/cache/#local-memory-caching")])]),s("h3",{attrs:{id:"캐시-인자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#캐시-인자","aria-hidden":"true"}},[a._v("#")]),a._v(" 캐시 인자")]),s("ul",[s("li",[s("code",[a._v("TIMEOUT")]),a._v(": 기본은 300초(5분). None으로 하면 캐시 키가 절대 만료되지 않는다.")]),s("li",[a._v("OPTIONS: 캐시 백엔드에 전달할 선택사항들. 각 백엔드에 따라 다름.\n"),s("ul",[s("li",[a._v("MAX_ENTRIES")]),s("li",[a._v("CULL_FREQUENCY")])])]),s("li",[a._v("KEY_PREFIX: 장고 서버에서 사용되는 모든 캐시 기본 접두어")]),s("li",[a._v("VERSION: 장고 서버에 의해 생성된 캐시 키들의 기본 버전 번호")])]),s("hr"),s("h3",{attrs:{id:"사이트별-캐시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사이트별-캐시","aria-hidden":"true"}},[a._v("#")]),a._v(" 사이트별 캐시")]),s("p",[a._v("settings의 middleware에 아래를 넣어준다.")]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("MIDDLEWARE "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{attrs:{class:"token string"}},[a._v("'django.middleware.cache.UpdateCacheMiddleware'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{attrs:{class:"token string"}},[a._v("'django.middleware.common.CommonMiddleware'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{attrs:{class:"token string"}},[a._v("'django.middleware.cache.FetchFromCacheMiddleware'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"뷰-별-캐시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#뷰-별-캐시","aria-hidden":"true"}},[a._v("#")]),a._v(" 뷰 별 캐시")]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" django"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("views"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("decorators"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache "),s("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" cache_page\n\n@cache_page"),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token number"}},[a._v("60")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{attrs:{class:"token number"}},[a._v("15")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("my_view")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])])]),s("p",[a._v("이 데코레이터를 쓰면 view의 response를 자동으로 캐시해준다.")]),s("h3",{attrs:{id:"urlconf에서-뷰별로-캐시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urlconf에서-뷰별로-캐시","aria-hidden":"true"}},[a._v("#")]),a._v(" URLconf에서 뷰별로 캐시")]),s("p",[a._v("위 데코레이터 방식보다 이게 더 선호")]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" django"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("views"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("decorators"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cache "),s("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" cache_page\n\nurlpatterns "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    url"),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("r"),s("span",{attrs:{class:"token string"}},[a._v("'^foo/([0-9]{1,2})/$'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" cache_page"),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token number"}},[a._v("60")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{attrs:{class:"token number"}},[a._v("15")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("my_view"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"template-fragment-caching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-fragment-caching","aria-hidden":"true"}},[a._v("#")]),a._v(" Template fragment caching")]),s("p",[a._v("캐시 템플릿 태그를 쓰고 싶으면, 템플릿 코드 위에 "),s("code",[a._v("{% load cache %}")]),a._v("를 넣어줘라.")]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{attrs:{class:"token operator"}},[a._v("%")]),a._v(" load cache "),s("span",{attrs:{class:"token operator"}},[a._v("%")]),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{attrs:{class:"token operator"}},[a._v("%")]),a._v(" cache "),s("span",{attrs:{class:"token number"}},[a._v("500")]),a._v(" sidebar "),s("span",{attrs:{class:"token operator"}},[a._v("%")]),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("# 캐시 / 타임아웃시간 / 이름 / 동적이름(object.id)같은거 더 넣을 수 있음.")]),a._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" sidebar "),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{attrs:{class:"token operator"}},[a._v("%")]),a._v(" endcache "),s("span",{attrs:{class:"token operator"}},[a._v("%")]),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[a._v("#")]),a._v(" Refer")]),s("p",[a._v("https://django-document-korean.readthedocs.io/en/django_15_i18n/topics/cache.html\nhttps://docs.djangoproject.com/en/1.10/topics/cache/")])])}],!1,null,null,null);t.default=e.exports}}]);