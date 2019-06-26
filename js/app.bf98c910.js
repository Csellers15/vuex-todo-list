(function(t){function e(e){for(var o,i,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)i=c[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"21cc":function(t,e,n){"use strict";var o=n("e577"),r=n.n(o);r.a},"3e78":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("AddTodo"),n("FilterTodos"),n("Todos")],1)])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(" Todos")]),t._m(0),n("div",{staticClass:"todos"},t._l(t.allTodos,function(e){return n("div",{key:e.id,staticClass:"todo",class:{"is-complete":e.completed},on:{dblclick:function(n){return t.onDblClick(e)}}},[t._v(" \n        "+t._s(e.title)+"\n        "),n("i",{staticClass:"fas fa-trash-alt",on:{click:function(n){return t.deleteTodo(e.id)}}})])}),0)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legend"},[n("span",[t._v(" Double Click to mark as complete ")]),n("span",[n("span",{staticClass:"incomplete-box"}),t._v(" = Incomplete\n    ")]),n("span",[n("span",{staticClass:"complete-box"}),t._v(" = Complete \n    ")])])}],s=n("cebc"),u=n("2f62"),d={name:"Todos",methods:Object(s["a"])({},Object(u["b"])(["fetchTodos","deleteTodo","updateTodo"]),{onDblClick:function(t){var e={id:t.id,title:t.title,completed:!t.completed};this.updateTodo(e)}}),computed:Object(u["c"])(["allTodos"]),created:function(){this.fetchTodos()}},l=d,p=(n("21cc"),n("2877")),f=Object(p["a"])(l,i,c,!1,null,"cf872466",null),v=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(" Add Todo ")]),n("div",{staticClass:"add"},[n("form",{on:{submit:t.onSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Add Todo"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])])},h=[],b={name:"AddTodo",data:function(){return{title:""}},methods:Object(s["a"])({},Object(u["b"])(["addTodo"]),{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title)}})},T=b,_=(n("5900"),Object(p["a"])(T,m,h,!1,null,"31b0ba28",null)),g=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Tilter Todos:\n  "),n("select",{on:{change:function(e){return t.filterTodos(e)}}},[n("option",{attrs:{value:"200"}},[t._v(" 200 ")]),n("option",{attrs:{value:"100"}},[t._v(" 100 ")]),n("option",{attrs:{value:"50"}},[t._v(" 50 ")]),n("option",{attrs:{value:"20"}},[t._v(" 20 ")]),n("option",{attrs:{value:"10"}},[t._v(" 10 ")]),n("option",{attrs:{value:"5"}},[t._v(" 5 ")])])])},j=[],y={name:"filterTodos",methods:Object(u["b"])(["filterTodos"])},x=y,O=(n("f39b"),Object(p["a"])(x,w,j,!1,null,"361edaae",null)),k=O.exports,C={name:"app",components:{Todos:v,AddTodo:g,FilterTodos:k}},R=C,S=(n("034f"),Object(p["a"])(R,r,a,!1,null,null,null)),P=S.exports,$=(n("20d6"),n("96cf"),n("3b8d")),A=n("bc3a"),E=n.n(A),D={todos:[]},I={allTodos:function(t){return t.todos}},M={fetchTodos:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,E.a.get("https://jsonplaceholder.typicode.com/todos");case 3:o=t.sent,n("setTodos",o.data);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),addTodo:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(e,n){var o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,E.a.post("https://jsonplaceholder.typicode.com/todos",{title:n,completed:!1});case 3:r=t.sent,o("newTodo",r.data);case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),deleteTodo:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(e,n){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,E.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(n));case 3:o("removeTodo",n);case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),filterTodos:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(e,n){var o,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,r=parseInt(n.target.options[n.target.options.selectedIndex].innerText),t.next=4,E.a.get("https://jsonplaceholder.typicode.com/todos?_limit=".concat(r));case 4:a=t.sent,o("setTodos",a.data);case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),updateTodo:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(e,n){var o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,E.a.put("https://jsonplaceholder.typicode.com/todos/".concat(n.id),n);case 3:r=t.sent,o("updateTodo",r.data);case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},F={setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter(function(t){return t.id!==e})},updateTodo:function(t,e){var n=t.todos.findIndex(function(t){return t.id===e.id});-1!==n&&t.todos.splice(n,1,e)}},J={state:D,getters:I,actions:M,mutations:F};o["a"].use(u["a"]);var N=new u["a"].Store({modules:{todos:J}});o["a"].config.productionTip=!1,new o["a"]({store:N,render:function(t){return t(P)}}).$mount("#app")},5900:function(t,e,n){"use strict";var o=n("3e78"),r=n.n(o);r.a},"64a9":function(t,e,n){},"8f84":function(t,e,n){},e577:function(t,e,n){},f39b:function(t,e,n){"use strict";var o=n("8f84"),r=n.n(o);r.a}});
//# sourceMappingURL=app.bf98c910.js.map