(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),r=n(6),a=n(1),i=(n(13),n(14),n(4)),l=n.n(i),u=n(0),b=function(t){var e=t.goods;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})};!function(t){t.name="name",t.length="length",t.default=""}(c||(c={}));var h=n(8);var d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(){var t=Object(a.useState)(c.default),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),i=Object(r.a)(o,2),j=i[0],g=i[1],f=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Object(h.a)(t);return e&&s.sort((function(t,n){switch(e){case c.name:return t.localeCompare(n);case c.length:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(d,n,j);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==c.name}),onClick:function(){return s(c.name)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":n!==c.length}),onClick:function(){return s(c.length)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!j}),onClick:function(){return g(!j)},children:"Reverse"}),(n||j)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.default),g(!1)},children:"Reset"})]}),Object(u.jsx)(b,{goods:f})]})};o.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e1f12201.chunk.js.map