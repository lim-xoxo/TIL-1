(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{152:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"introduction-to-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction to Docker")]),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[t._v("#")]),t._v(" Hello world")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 'hello-world'란 컨테이너 돌리기. 로컬에 있으면 그거 돌리고 없으면 Docker hub에서 찾아서 pull받음")]),t._v("\n$ docker run hello-world\nUnable to "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" image "),a("span",{attrs:{class:"token string"}},[t._v("'hello-world:latest'")]),t._v(" locally\nlatest: Pulling from library/hello-world\n9db2ca6ccae0: Pull complete\nDigest: sha256:4b8ff392a12ed9ea17784bd3c9a8b1fa3299cac44aca35a85c90c5e3c7afacdc\nStatus: Downloaded newer image "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" hello-world:latest\n\nHello from Docker"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("\nThis message shows that your installation appears to be working correctly.\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 컨테이너 이미지들 보기")]),t._v("\n$ docker images\nREPOSITORY     TAG      IMAGE ID       CREATED       SIZE\nhello-world    latest   1815c82652c0   6 days ago    1.84 kB\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 돌고 있는 컨테이너 보기. 아까 hello-world는 바로 exit되서 안나온다")]),t._v("\n$ docker "),a("span",{attrs:{class:"token function"}},[t._v("ps")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 끝난 컨테이너도 보기")]),t._v("\n$ docker "),a("span",{attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a\nCONTAINER ID      IMAGE           COMMAND      "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".     NAMES\n6027ecba1c39      hello-world     "),a("span",{attrs:{class:"token string"}},[t._v('"/hello"')]),t._v("     "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".     elated_knuth\n358d709b8341      hello-world     "),a("span",{attrs:{class:"token string"}},[t._v('"/hello"')]),t._v("     "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".     epic_lewin\n")])])]),a("h2",{attrs:{id:"빌드-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빌드-build","aria-hidden":"true"}},[t._v("#")]),t._v(" 빌드(Build)")]),a("p",[t._v("간단한 노드를 베이스로 하는 도커 이미지를 만들어보자!")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("test")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Dockerfile "),a("span",{attrs:{class:"token operator"}},[t._v("<<")]),t._v("EOF\n")])])]),a("p",[t._v("Dockerfile 작성하기")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 노드 버전6을 가리키는 오피셜 도커 이미지를 부모 이미지로 함")]),t._v("\nFROM node:6\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 워킹 디렉토리 설정")]),t._v("\nWORKDIR /app\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 현재 디렉토리의 컨텐츠를 /app에 복사")]),t._v("\nADD "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" /app\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 컨테이너에 80번 포트를 뚫어서 접근 가능하도록")]),t._v("\nEXPOSE 80\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# app.js를 노드로 돌린다")]),t._v("\nCMD "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"node"')]),t._v(", "),a("span",{attrs:{class:"token string"}},[t._v('"app.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nEOF\n")])])]),a("p",[t._v("app.js 만들기. 간단히 80번 포트에 hello world 띄워주는 HTTP Server")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'http'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hostname "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createServer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'text/plain'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Hello World\\n'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hostname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Server running at http://%s:%s/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hostname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprocess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'SIGINT'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Caught interrupt signal and will exit'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("exit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 도커 이미지 빌드하기. -t는 태그달기, node-app이란 이름의 이미지고 tag는 0.1이라는것. 태그는 도커 이미지 빌드할때 꼭 적는게 좋다. 안적으면 latest란 이름으로 만들어지는데 최신껄 구별하기 어려움.")]),t._v("\n$ docker build -t node-app:0.1 "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\nSending build context to Docker daemon  3.072kB\nStep 1/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" FROM node:6\n6: Pulling from library/node\nab1fc7e4bf91: Pull complete\n35fba333ff52: Pull complete\nf0cb1fa13079: Pull complete\n3d1dd648b5ad: Pull complete\n49f7a0920ce1: Pull complete\n1d199f738c5f: Pull complete\n1f5b9192d3e9: Pull complete\n6b45c21448e5: Pull complete\nDigest: sha256:b567cbc706f6d8f498adc0b056f3e904043478a2c814124af62fc9f18ffcb9c2\nStatus: Downloaded newer image "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" node:6\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 554a99f911d9\nStep 2/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" WORKDIR /app\nRemoving intermediate container 613e84f7c38e\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 19526c64979a\nStep 3/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" ADD "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" /app\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 36ec7ba933e7\nStep 4/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" EXPOSE 80\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Running "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 51c2424677d4\nRemoving intermediate container 51c2424677d4\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" a07151f17077\nStep 5/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" CMD "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"node"')]),t._v(", "),a("span",{attrs:{class:"token string"}},[t._v('"app.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Running "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" fd7b7d36c33a\nRemoving intermediate container fd7b7d36c33a\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 1b627525501c\nSuccessfully built 1b627525501c\nSuccessfully tagged node-app:0.1\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 컨테이너 이미지들 보기. node-app은 node를 베이스로 한 이미지다. node를 지우려면 node-app을 먼저 지워야 함. node:slim이나 node:alpine은 용량이 작은 이미지니 잘 골라서 써라.")]),t._v("\n$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nnode-app            0.1                 1b627525501c        2 minutes ago       882MB\nnode                6                   554a99f911d9        3 days ago          882MB\nhello-world         latest              fce289e99eb9        3 weeks ago         1.84kB\n")])])]),a("h2",{attrs:{id:"돌리기-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#돌리기-run","aria-hidden":"true"}},[t._v("#")]),t._v(" 돌리기 (Run)")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# --name 플래그를 붙여 my-app이라고 이름을 지어줄 수 있다. -p 플래그로는 호스트 포트 4000을 컨테이너 포트 80으로 맵해줄 수 있다(아까 node-app을 80으로 띄웠으니까). 이젠 내 로컬에서 localhost:4000 으로 접근 가능. 포트 매핑 안하면 localhost에서 못 본다. -d플래그 붙이면 터미널 세션을 꺼도 백그라운드에서 돌아감")]),t._v("\n$ docker run -p 4000:80 --name my-app node-app:0.1\nServer running at http://0.0.0.0:80/\n")])])]),a("p",[t._v("터미널 하나 더 띄워서 다음 명령어 적는다")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:4000\nHello World\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 원래 터미널로 돌아가 컨테이너를 멈추고 remove 해준다.")]),t._v("\n$ docker stop my-app "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" docker "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" my-app\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 이번엔 -d 플래그를 붙여 백그라운드에서 띄워준다.")]),t._v("\n$ docker run -p 4000:80 --name my-app -d node-app:0.1\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 뭐가 돌아가고 있나 확인")]),t._v("\n$ docker "),a("span",{attrs:{class:"token function"}},[t._v("ps")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 로그는 아래 명령어로 볼 수 있다.")]),t._v("\n$ docker logs "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("container_id"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nServer running at http://0.0.0.0:80/\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# app.js를 조금 수정하고, 태그를 0.2로 달아 새로 빌드를 해본다. step2까지는 캐시에서 불러온 걸 볼 수 있다. 3부터는 새로 써진걸로 다시 빌드함.")]),t._v("\ndocker build -t node-app:0.2 "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\nStep 1/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" FROM node:6\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 67ed1f028e71\nStep 2/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" WORKDIR /app\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Using cache\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" a39c2d73c807\nStep 3/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" ADD "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" /app\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" a7087887091f\nRemoving intermediate container 99bc0526ebb0\nStep 4/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" EXPOSE 80\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Running "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 7882a1e84596\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 80f5220880d9\nRemoving intermediate container 7882a1e84596\nStep 5/5 "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" CMD node app.js\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Running "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" f2646b475210\n ---"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 5c3edbac6421\nRemoving intermediate container f2646b475210\nSuccessfully built 5c3edbac6421\nSuccessfully tagged node-app:0.2\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 다른 컨테이너를 다른 포트(8080)으로 띄워본다")]),t._v("\n\n$ docker run -p 8080:80 --name my-app-2 -d node-app:0.2\n")])])]),a("h2",{attrs:{id:"디버그-debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#디버그-debug","aria-hidden":"true"}},[t._v("#")]),t._v(" 디버그(Debug)")])])}],!1,null,null,null);s.default=e.exports}}]);