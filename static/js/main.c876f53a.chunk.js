(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(6),r=c.n(n),s=c(4),a=c(3),o=c(2),i=c.n(o),u=c(1),l=(c(12),c(13),c(14),c(0)),d=function(e){var t=e.todos,c=e.onSelect,n=Object(u.useState)(""),r=Object(a.a)(n,2),s=r[0],o=r[1],i=Object(u.useState)(""),d=Object(a.a)(i,2),j=d[0],b=d[1],p=function(){switch(j){case"Active":return t.filter((function(e){return!e.completed}));case"Completed":return t.filter((function(e){return e.completed}));default:return t}}().filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"text",value:s,"data-cy":"filterByTitle",placeholder:"Type search word",onChange:function(e){o(e.target.value)}})}),Object(l.jsxs)("select",{className:"TodoList__select",value:j,onChange:function(e){b(e.target.value)},children:[Object(l.jsx)("option",{value:"All",children:"All"}),Object(l.jsx)("option",{value:"Active",children:"Active"}),Object(l.jsx)("option",{value:"Completed",children:"Completed"})]})]}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:p.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("li",{className:"\n                    TodoList__item\n                    ".concat(e.completed?"TodoList__item--checked":"TodoList__item--unchecked"),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),e.userId&&Object(l.jsx)("button",{type:"button","data-cy":"userButton",className:"TodoList__user-button\n                       ".concat(e.completed&&"TodoList__user-button--selected","\n                        "),onClick:function(){return c(e.userId)},children:"User ".concat(e.userId)})]},e.id)})}))})})]})},j="https://mate.academy/students-api",b=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/users/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=(c(16),function(e){var t=e.userId,c=e.clear,n=Object(u.useState)(null),r=Object(a.a)(n,2),o=r[0],d=r[1],j=Object(u.useCallback)(Object(s.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:c=e.sent,d(c);case 4:case"end":return e.stop()}}),e)}))),[t]);return Object(u.useEffect)((function(){j()}),[t]),Object(l.jsx)(l.Fragment,{children:o&&Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Selected user: ".concat(o.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:o.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:o.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:o.phone}),Object(l.jsx)("button",{type:"button",className:"CurrentUser__button",onClick:function(){return c(0)},children:"Clear"})]})})}),O=function(){var e=Object(u.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(u.useState)([]),o=Object(a.a)(r,2),j=o[0],p=o[1],O=Object(u.useCallback)(Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)}))),[]);Object(u.useEffect)((function(){O()}),[]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(d,{todos:j,onSelect:n})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(h,{userId:c,clear:function(e){n(e)}}):"No user selected"})})]})};r.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.c876f53a.chunk.js.map