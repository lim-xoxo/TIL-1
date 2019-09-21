(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{178:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),e("p",[t._v("(my_view1과 my_view2는 동일한 코드)")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),e("h2",{attrs:{id:"django-core-urlresolvers-utility-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#django-core-urlresolvers-utility-functions","aria-hidden":"true"}},[t._v("#")]),e("a",{attrs:{href:"https://docs.djangoproject.com/en/1.9/ref/urlresolvers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("django.core.urlresolvers utility functions"),e("OutboundLink")],1)]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),e("p",[e("a",{attrs:{href:"http://stackoverflow.com/questions/1921523/django-what-is-the-difference-b-w-httpresponse-vs-httpresponseredirect-vs-rende",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)]),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),e("p",[t._v("...여전히 헷갈린다.")]),t._m(32),e("p",[t._v("http://makerj.tistory.com/220\nhttp://stackoverflow.com/questions/9488874/django-redirect-with-parameters")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"django-url-redirections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-url-redirections","aria-hidden":"true"}},[this._v("#")]),this._v(" Django URL redirections")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"django-shortcut-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-shortcut-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Django shortcut functions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[this._v("#")]),this._v(" render()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("render(request, template_name, context=None, context_instance=_context_instance_undefined, content_type=None, status=None, current_app=_current_app_undefined, dirs=_dirs_undefined, using=None)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("템플릿과 컨텍스트를 합쳐서 "),s("code",[this._v("HttpResponse")]),this._v(" 오브젝트를 리턴함.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortcuts "),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" render\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("my_view1")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("# View code here...")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'myapp/index.html'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token string"}},[t._v('"foo"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"bar"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content_type"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"application/xhtml+xml"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("my_view2")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("# View code here...")]),t._v("\n    t "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" loader"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_template"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'myapp/index.html'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token string"}},[t._v("'foo'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HttpResponse"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content_type"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"application/xhtml+xml"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"render-to-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render-to-response","aria-hidden":"true"}},[this._v("#")]),this._v(" render_to_response()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("render_to_response(template_name, context=None, context_instance=_context_instance_undefined, content_type=None, status=None, dirs=_dirs_undefined, using=None)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("별로 권장하지 않음. render()이랑 비슷한데 "),s("code",[this._v("response")]),this._v("에서 "),s("code",[this._v("request")]),this._v("가 불가능한 차이가 있다.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render_to_response"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'my_template.html'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          my_context"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          context_instance"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("RequestContext"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"redirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirect","aria-hidden":"true"}},[this._v("#")]),this._v(" redirect()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("redirect(to, permanent=False, *args, **kwargs)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("패스된 인자를 가지고 "),s("code",[this._v("HttpResponseRedirect")]),this._v("를 리턴한다")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("my_view")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("# return redirect('/some/url/') # 요렇게 하드코드 URL로 써도 됨.")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" redirect"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'some-view-name'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"get-object-or-404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-object-or-404","aria-hidden":"true"}},[this._v("#")]),this._v(" get_object_or_404()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("get_object_or_404(klass, *args, **kwargs)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("준 모델을 get()해오지만, 모델이 "),s("code",[this._v("DoesNotExist")]),this._v("익셉션 되면 "),s("code",[this._v("Http404")]),this._v("를 raise한다.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortcuts "),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" get_object_or_404\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("my_view")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    my_object "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_object_or_404"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyModel"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pk"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token number"}},[t._v("1")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"reverse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reverse","aria-hidden":"true"}},[this._v("#")]),this._v(" reverse()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("reverse(viewname, urlconf=None, args=None, kwargs=None, current_app=None)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("urls.py에서 만든 url name 사용할 수 있음")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("reverse"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'news-archive'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("myview")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("# url이 argument를 받는 경우")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HttpResponseRedirect"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reverse"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'arch-summary'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token number"}},[t._v("1945")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# kwargs를 쓰는 방법. '/admin/auth/'로 간다.")]),t._v("\nreverse"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'admin:app_list'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kwargs"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token string"}},[t._v("'app_label'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'auth'")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"httprespose-vs-httpresponseredirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httprespose-vs-httpresponseredirect","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpRespose VS HttpResponseRedirect")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"httpresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpresponse","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpResponse")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('response = HttpResponse("Here\'s the text of the Web page.")')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("HTTP코드가 200(ok)이고 생성자로 전달된 컨텐츠를 포함한 "),s("code",[this._v("HttpResponse")]),this._v("오브젝트를 만든다.")]),s("li",[this._v("보통 작은 response에서만 쓴다. (ajax로 받은 데이터나, 작은 number 등)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"httpresponseredirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpresponseredirect","aria-hidden":"true"}},[this._v("#")]),this._v(" HttpResponseRedirect")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('HttpResponseRedirect("http://example.com/")')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("HTTP코드가 302(Found/Moved temporarily)인 "),s("code",[this._v("HttpResponse")]),this._v("오브젝트를 만든다.")]),s("li",[this._v("다른 페이지로 redirect할때만 써야한다(e.g. 폼 POST전송 성공 이후)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"결론"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#결론","aria-hidden":"true"}},[this._v("#")]),this._v(" 결론")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("redirect")]),this._v("는 URL을 만들고 리다이렉트시키기 위해 "),s("code",[this._v("reverse")]),this._v("를 자동으로 호출하는 "),s("code",[this._v("HttpResponseRedirect")]),this._v("의 wrapper이다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("redirect is merely a wrapper around HttpResponseRedirect that automatically calls reverse for you to create the URL to redirect to. As a result, the parameters you pass to it, aren't arbitrary, they must be same you would pass to reverse and, specifically, only those required to create the URL.\n\nMany people seem to have troubles understanding that data can't just be arbitrarily passed to a view. HTTP is a stateless protocol: each request exists on it's own, as if user had never been to any other page of the site. The concept of a session was created to provide a sense of \"state\" to a cohesive unit such as a site. With sessions, data is stored in some form of persistent storage and a \"key\" to look up that data is given to the client (typically the user's browser). On the next page load, the client sends the key back to the server, and the server uses it to look up the data to give the appearance of state.\n\nAs a result, if you need data from one view available in another, you need to add it to the session, do your redirect, and look up the data in the session from the next view.\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[this._v("#")]),this._v(" refer")])}],!1,null,null,null);s.default=n.exports}}]);