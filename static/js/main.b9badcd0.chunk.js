(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=a(1),l=(a(14),a(9)),d=a.n(l),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a=t.completed,n=t.title,i=t.user;return Object(u.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":a}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(u.jsx)(m,{user:i})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],f=function(){var e=function(e,t){return t.find((function(t){return t.id===e}))||null},t=O.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{user:e(t.userId,h)})})),a=Object(o.useState)(t),n=Object(c.a)(a,2),i=n[0],l=n[1],d=Object(o.useState)(""),m=Object(c.a)(d,2),j=m[0],f=m[1],p=Object(o.useState)(!1),x=Object(c.a)(p,2),v=x[0],y=x[1],S=Object(o.useState)(0),N=Object(c.a)(S,2),I=N[0],g=N[1],C=Object(o.useState)(!1),_=Object(c.a)(C,2),k=_[0],D=_[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(t){t.preventDefault();var a=j.trim();y(!a),D(!I),a&&I&&(!function(t,a){var n,c={id:(n=i,Math.max.apply(Math,Object(r.a)(n.map((function(e){return e.id}))))+1),title:t,completed:!1,userId:a,user:e(I,h)};l((function(e){return[].concat(Object(r.a)(e),[c])}))}(j,I),f(""),g(0))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text","data-cy":"titleInput",value:j,onChange:function(e){f(e.target.value),y(!1)},placeholder:"Enter a title"}),v&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("select",{"data-cy":"userSelect",value:I,onChange:function(e){g(+e.target.value),D(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),k&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:i})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b9badcd0.chunk.js.map