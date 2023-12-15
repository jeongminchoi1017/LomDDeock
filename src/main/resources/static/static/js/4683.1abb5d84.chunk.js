"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4683],{24683:function(e,n,a){a.r(n),a.d(n,{default:function(){return h}});var t=a(74165),r=a(15861),i=a(29439),s=a(72791),c=a(8116),o=a(47022),l=a(89743),d=a(2677),u=a(91398),v=a(28949),f=a(55294),x=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/api/getNoticeList?pg=".concat(n));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=(a(51100),a(80184));var h=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),a=n[0],f=n[1],h=(0,s.useState)({}),Z=(0,i.Z)(h,2),p=Z[0],y=Z[1];(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(1);case 2:n=e.sent,f(n.dtoList),y(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var N=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:a=e.sent,f(a.dtoList),y(a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function j(e){var n=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(e));return"".concat(n[4].value,"-").concat(n[0].value,"-").concat(n[2].value)}return(0,m.jsx)("section",{className:"cs",children:(0,m.jsxs)(o.Z,{id:"notice",children:[(0,m.jsx)("div",{className:"cs-title",children:(0,m.jsx)("h3",{children:"\uace0\uac1d\uc13c\ud130"})}),(0,m.jsxs)(l.Z,{className:"justify-content-center",children:[(0,m.jsx)(d.Z,{sm:2,children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(u.Z.Item,{action:!0,variant:"light",active:!0,href:"/cs/csNotice",children:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,m.jsx)(u.Z.Item,{action:!0,variant:"light",href:"/cs/CsEventList",children:"\uc774\ubca4\ud2b8"}),(0,m.jsx)(u.Z.Item,{action:!0,variant:"light",href:"/cs/CsFaq",children:"\uc790\uc8fc\ubb3b\ub294 \uc9c8\ubb38"}),(0,m.jsx)(u.Z.Item,{action:!0,variant:"light",href:"/cs/CsQnaList",children:"\uace0\uac1d\uc758 \uc18c\ub9ac"})]})}),(0,m.jsxs)(d.Z,{sm:9,children:[(0,m.jsx)("div",{className:"location",children:(0,m.jsxs)("span",{children:[" \uace0\uac1d\uc13c\ud130 > ",(0,m.jsx)("strong",{children:"\uacf5\uc9c0\uc0ac\ud56d"})," "]})}),(0,m.jsx)(v.Z,{children:a.map((function(e,n){return(0,m.jsxs)(v.Z.Item,{eventKey:"".concat(n),children:[(0,m.jsxs)(v.Z.Header,{children:[e.title,(0,m.jsx)("span",{className:"date",children:j(e.rdate)})]}),(0,m.jsx)(v.Z.Body,{children:(0,m.jsx)("p",{className:"typeReset",dangerouslySetInnerHTML:{__html:e.content}})})]})}))}),(0,m.jsxs)(c.Z,{style:{justifyContent:"center",marginTop:"10px"},children:[p.prev&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.Z.Prev,{onClick:function(){N(p.start-1)}})}),function(){for(var e=[],n=function(n){e.push((0,m.jsx)(c.Z.Item,{active:n===p.pg,onClick:function(){N(n)},children:n},n))},a=p.start;a<=p.end;a++)n(a);return e}(),p.next&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.Z.Next,{onClick:function(){N(p.end+1)}})})]})]})]})]})})}},28949:function(e,n,a){a.d(n,{Z:function(){return O}});var t=a(1413),r=a(45987),i=a(81694),s=a.n(i),c=a(72791),o=a(8580),l=a(10162),d=a(17858);function u(e,n){return Array.isArray(e)?e.includes(n):e===n}var v=c.createContext({});v.displayName="AccordionContext";var f=v,x=a(80184),m=["as","bsPrefix","className","children","eventKey"],h=c.forwardRef((function(e,n){var a=e.as,i=void 0===a?"div":a,o=e.bsPrefix,v=e.className,h=e.children,Z=e.eventKey,p=(0,r.Z)(e,m),y=(0,c.useContext)(f).activeEventKey;return o=(0,l.vE)(o,"accordion-collapse"),(0,x.jsx)(d.Z,(0,t.Z)((0,t.Z)({ref:n,in:u(y,Z)},p),{},{className:s()(v,o),children:(0,x.jsx)(i,{children:c.Children.only(h)})}))}));h.displayName="AccordionCollapse";var Z=h,p=c.createContext({eventKey:""});p.displayName="AccordionItemContext";var y=p,N=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j=c.forwardRef((function(e,n){var a=e.as,i=void 0===a?"div":a,o=e.bsPrefix,d=e.className,u=e.onEnter,v=e.onEntering,f=e.onEntered,m=e.onExit,h=e.onExiting,p=e.onExited,j=(0,r.Z)(e,N);o=(0,l.vE)(o,"accordion-body");var b=(0,c.useContext)(y).eventKey;return(0,x.jsx)(Z,{eventKey:b,onEnter:u,onEntering:v,onEntered:f,onExit:m,onExiting:h,onExited:p,children:(0,x.jsx)(i,(0,t.Z)((0,t.Z)({ref:n},j),{},{className:s()(d,o)}))})}));j.displayName="AccordionBody";var b=j,E=a(93433),g=["as","bsPrefix","className","onClick"];var C=c.forwardRef((function(e,n){var a=e.as,i=void 0===a?"button":a,o=e.bsPrefix,d=e.className,v=e.onClick,m=(0,r.Z)(e,g);o=(0,l.vE)(o,"accordion-button");var h=(0,c.useContext)(y).eventKey,Z=function(e,n){var a=(0,c.useContext)(f),t=a.activeEventKey,r=a.onSelect,i=a.alwaysOpen;return function(a){var s=e===t?null:e;i&&(s=Array.isArray(t)?t.includes(e)?t.filter((function(n){return n!==e})):[].concat((0,E.Z)(t),[e]):[e]),null==r||r(s,a),null==n||n(a)}}(h,v),p=(0,c.useContext)(f).activeEventKey;return"button"===i&&(m.type="button"),(0,x.jsx)(i,(0,t.Z)((0,t.Z)({ref:n,onClick:Z},m),{},{"aria-expanded":Array.isArray(p)?p.includes(h):h===p,className:s()(d,o,!u(p,h)&&"collapsed")}))}));C.displayName="AccordionButton";var P=C,w=["as","bsPrefix","className","children","onClick"],k=c.forwardRef((function(e,n){var a=e.as,i=void 0===a?"h2":a,c=e.bsPrefix,o=e.className,d=e.children,u=e.onClick,v=(0,r.Z)(e,w);return c=(0,l.vE)(c,"accordion-header"),(0,x.jsx)(i,(0,t.Z)((0,t.Z)({ref:n},v),{},{className:s()(o,c),children:(0,x.jsx)(P,{onClick:u,children:d})}))}));k.displayName="AccordionHeader";var K=k,I=["as","bsPrefix","className","eventKey"],A=c.forwardRef((function(e,n){var a=e.as,i=void 0===a?"div":a,o=e.bsPrefix,d=e.className,u=e.eventKey,v=(0,r.Z)(e,I);o=(0,l.vE)(o,"accordion-item");var f=(0,c.useMemo)((function(){return{eventKey:u}}),[u]);return(0,x.jsx)(y.Provider,{value:f,children:(0,x.jsx)(i,(0,t.Z)((0,t.Z)({ref:n},v),{},{className:s()(d,o)}))})}));A.displayName="AccordionItem";var L=A,R=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],S=c.forwardRef((function(e,n){var a=(0,o.Ch)(e,{activeKey:"onSelect"}),i=a.as,d=void 0===i?"div":i,u=a.activeKey,v=a.bsPrefix,m=a.className,h=a.onSelect,Z=a.flush,p=a.alwaysOpen,y=(0,r.Z)(a,R),N=(0,l.vE)(v,"accordion"),j=(0,c.useMemo)((function(){return{activeEventKey:u,onSelect:h,alwaysOpen:p}}),[u,h,p]);return(0,x.jsx)(f.Provider,{value:j,children:(0,x.jsx)(d,(0,t.Z)((0,t.Z)({ref:n},y),{},{className:s()(m,N,Z&&"".concat(N,"-flush"))}))})}));S.displayName="Accordion";var O=Object.assign(S,{Button:P,Collapse:Z,Item:L,Header:K,Body:b})},91398:function(e,n,a){a.d(n,{Z:function(){return j}});var t=a(1413),r=a(45987),i=a(81694),s=a.n(i),c=a(72791),o=(a(42391),a(8580)),l=a(41337),d=a(10162),u=a(29439),v=a(39007),f=a(24787),x=a(78633),m=a(80184),h=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],Z=c.forwardRef((function(e,n){var a=e.bsPrefix,i=e.active,c=e.disabled,o=e.eventKey,l=e.className,Z=e.variant,p=e.action,y=e.as,N=(0,r.Z)(e,h);a=(0,d.vE)(a,"list-group-item");var j=(0,f.v)((0,t.Z)({key:(0,x.h)(o,N.href),active:i},N)),b=(0,u.Z)(j,2),E=b[0],g=b[1],C=(0,v.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();E.onClick(e)}));c&&void 0===N.tabIndex&&(N.tabIndex=-1,N["aria-disabled"]=!0);var P=y||(p?N.href?"a":"button":"div");return(0,m.jsx)(P,(0,t.Z)((0,t.Z)((0,t.Z)({ref:n},N),E),{},{onClick:C,className:s()(l,a,g.isActive&&"active",c&&"disabled",Z&&"".concat(a,"-").concat(Z),p&&"".concat(a,"-action"))}))}));Z.displayName="ListGroupItem";var p=Z,y=["className","bsPrefix","variant","horizontal","numbered","as"],N=c.forwardRef((function(e,n){var a,i=(0,o.Ch)(e,{activeKey:"onSelect"}),c=i.className,u=i.bsPrefix,v=i.variant,f=i.horizontal,x=i.numbered,h=i.as,Z=void 0===h?"div":h,p=(0,r.Z)(i,y),N=(0,d.vE)(u,"list-group");return f&&(a=!0===f?"horizontal":"horizontal-".concat(f)),(0,m.jsx)(l.Z,(0,t.Z)((0,t.Z)({ref:n},p),{},{as:Z,className:s()(c,N,v&&"".concat(N,"-").concat(v),a&&"".concat(N,"-").concat(a),x&&"".concat(N,"-numbered"))}))}));N.displayName="ListGroup";var j=Object.assign(N,{Item:p})},8116:function(e,n,a){a.d(n,{Z:function(){return E}});var t=a(1413),r=a(45987),i=a(81694),s=a.n(i),c=a(72791),o=a(10162),l=a(16445),d=a(80184),u=["active","disabled","className","style","activeLabel","children","linkStyle","linkClassName"],v=["children"],f=c.forwardRef((function(e,n){var a=e.active,i=void 0!==a&&a,c=e.disabled,o=void 0!==c&&c,v=e.className,f=e.style,x=e.activeLabel,m=void 0===x?"(current)":x,h=e.children,Z=e.linkStyle,p=e.linkClassName,y=(0,r.Z)(e,u),N=i||o?"span":l.Z;return(0,d.jsx)("li",{ref:n,style:f,className:s()(v,"page-item",{active:i,disabled:o}),children:(0,d.jsxs)(N,(0,t.Z)((0,t.Z)({className:s()("page-link",p),style:Z},y),{},{children:[h,i&&m&&(0,d.jsx)("span",{className:"visually-hidden",children:m})]}))})}));f.displayName="PageItem";var x=f;function m(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,i=c.forwardRef((function(e,i){var s=e.children,c=(0,r.Z)(e,v);return(0,d.jsxs)(f,(0,t.Z)((0,t.Z)({},c),{},{ref:i,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:s||n}),(0,d.jsx)("span",{className:"visually-hidden",children:a})]}))}));return i.displayName=e,i}var h=m("First","\xab"),Z=m("Prev","\u2039","Previous"),p=m("Ellipsis","\u2026","More"),y=m("Next","\u203a"),N=m("Last","\xbb"),j=["bsPrefix","className","size"],b=c.forwardRef((function(e,n){var a=e.bsPrefix,i=e.className,c=e.size,l=(0,r.Z)(e,j),u=(0,o.vE)(a,"pagination");return(0,d.jsx)("ul",(0,t.Z)((0,t.Z)({ref:n},l),{},{className:s()(i,u,c&&"".concat(u,"-").concat(c))}))}));b.displayName="Pagination";var E=Object.assign(b,{First:h,Prev:Z,Ellipsis:p,Item:x,Next:y,Last:N})},51100:function(){}}]);
//# sourceMappingURL=4683.1abb5d84.chunk.js.map