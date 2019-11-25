(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{217:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("code",[t._v("express-api-bootstrap")]),t._v(" is a controller-based framework that supports springMVC flavor decorators, "),a("code",[t._v("@RestController")]),t._v(", "),a("code",[t._v("@GetMapping")]),t._v(". A dead simple plugin system that covers core lifecycles while from launching to application running.")]),t._v(" "),a("p",[a("code",[t._v("express-api-bootstrap")]),t._v(" is a "),a("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("express.js"),a("OutboundLink")],1),t._v(" based node framework. It should be used in small/medium-sized projects.")]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[t._v("Convention over configuration")]),t._v(" "),a("li",[t._v("Type system coding experience based on "),a("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("typescript"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Damn easy plugin system")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring MVC"),a("OutboundLink")],1),t._v(" like API interface")]),t._v(" "),a("li",[t._v("Debug is easy via vscode")]),t._v(" "),a("li",[t._v("Write/Execute unit-test is easy")])]),t._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),a("p",[t._v("TBD")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("h3",{attrs:{id:"environmental-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environmental-preparation"}},[t._v("#")]),t._v(" Environmental preparation")]),t._v(" "),a("p",[t._v("First you should have "),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js"),a("OutboundLink")],1),t._v(" installed, and make sure the version >= "),a("code",[t._v("10")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"boilerplate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boilerplate"}},[t._v("#")]),t._v(" Boilerplate")]),t._v(" "),a("p",[t._v("Create an empty directory for your application:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" your-app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" your-app\n")])])]),a("p",[t._v("Init npm env:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n")])])]),a("p",[t._v("Add required dependencies:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" express-api-bootstrap\n")])])]),a("p",[t._v("Init "),a("code",[t._v("express-api-bootstrap")]),t._v(" required env:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx boot init\n")])])]),a("p",[t._v("Add "),a("code",[t._v("express-api-bootstrap")]),t._v(" provided scripts to your "),a("code",[t._v("package.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot serve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot test"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Create your first controller at "),a("code",[t._v("src/controllers/helloController.ts")]),t._v(" with following code:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RestController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GetMapping "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap'")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RestController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloControler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hi, ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" HelloControler\n")])])]),a("p",[t._v("Run "),a("code",[t._v("yarn start")]),t._v(" to, and you will see the first API at "),a("a",{attrs:{href:"http://localhost:8080/apis/hello",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/apis/hello"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);