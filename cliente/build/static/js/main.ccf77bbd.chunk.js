(this["webpackJsonpgestion-ausencias"]=this["webpackJsonpgestion-ausencias"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(18),a=n.n(r),i=(n(39),n(40),n(41),n(19),n(13)),o=n(6),s=n.n(o),u=n(9),l=n(34),d=n(14),p=n.n(d),j="https://backend-dot-gestion-ausencias-2.oa.r.appspot.com/",h=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Obteniendo licencias"),e.prev=1,e.next=4,p()({method:"get",url:"".concat(j,"licencias")});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({method:"post",url:"".concat(j,"licencias"),data:t});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"true",e.prev=1,e.next=4,p()({method:"put",url:"".concat(j,"licencias?id=").concat(t,"&activa=").concat(n)});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),v=n(7),x=n(3);function O(e){var t={descrip:"",inicio:"",fin:""},n=Object(c.useState)(t),r=Object(i.a)(n,2),a=r[0],o=r[1],d=function(e){var t=Object(l.a)({},a);t[e.target.name]=e.target.value,o(t)},p=function(){var n=Object(u.a)(s.a.mark((function n(c){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c.preventDefault(),f(new FormData(c.target)),o(t),e.onSubmit();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(x.jsx)("form",{onSubmit:p,encType:"multipart/form-data",children:Object(x.jsx)(v.Row,{children:Object(x.jsxs)(v.Col,{s:6,children:[Object(x.jsx)("input",{type:"text",name:"descrip",placeholder:"Descripci\xf3n",required:!0,value:a.descrip,onChange:d}),Object(x.jsx)("input",{type:"date",name:"inicio",value:a.inicio,required:!0,onChange:d}),Object(x.jsx)("input",{type:"date",name:"fin",value:a.fin,required:!0,onChange:d}),Object(x.jsx)(v.Button,{type:"submit",children:"Crear Licencia"})]})})})}function m(e){var t=e.licencias,n=function(e){var t=e.activa?"toggle_on":"toggle_off",n=e.activa?{color:"#26a69a"}:{color:"red"};return n.cursor="pointer",Object(x.jsx)(v.Icon,{id:e.id,small:!0,style:n,onClick:function(){return c(e)},children:t})},c=function(){var t=Object(u.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n.activa?"false":"true",t.next=4,b(n.id,c);case 4:e.onChange(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)(v.Table,{className:"striped",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:Object(x.jsx)("th",{colSpan:2,children:"Lista de licencias vigentes"})})}),Object(x.jsx)("tbody",{children:t.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(v.Checkbox,{filledIn:!0,label:"",id:e.id,value:e.id,checked:!1,onChange:function(e){return console.log(e.target.checked)}})}),Object(x.jsxs)("td",{children:[e.descrip,(e.eliminada?" (Eliminada)":"")+"\xa0\xa0"]}),Object(x.jsx)("td",{children:n(e)})]},e.id)}))})]})}function g(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){h().then((function(e){r(e)})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{onSubmit:function(){return h().then((function(e){return r(e)}))}}),Object(x.jsx)(m,{licencias:n,onChange:function(){return h().then((function(e){return r(e)}))}})]})}var w=function(){return Object(x.jsx)("div",{className:"App container",children:Object(x.jsx)(g,{})})};a.a.render(Object(x.jsx)(w,{}),document.getElementById("root"))},39:function(e,t,n){},40:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.ccf77bbd.chunk.js.map