(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),r=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.name="name",t.length="length"}(c||(c={}));var j=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],g=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Object(r.a)(t);return e&&s.sort((function(t,n){switch(e){case c.name:return t.localeCompare(n);case c.length:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==c.name}),onClick:function(){return s(c.name)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==c.length}),onClick:function(){return s(c.length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!j}),onClick:function(){return d(!j)},children:"Reverse"}),(n||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.242f8505.chunk.js.map