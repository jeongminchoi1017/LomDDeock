"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5764],{2500:function(e,n,a){var i=a(2677),t=a(1398),r=(a(2791),a(184));n.Z=function(){return(0,r.jsxs)(i.Z,{sm:2,children:[(0,r.jsx)("div",{className:"todayDate",children:(0,r.jsx)("h2",{children:"2023-11-07"})}),(0,r.jsxs)(t.Z,{className:"asideMenu",children:[(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/adminIndex",children:"ADMIN HOME"}),(0,r.jsxs)(t.Z.Item,{action:!0,variant:"light",children:["\uba54\ub274\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuList",children:"\u25b6 \uba54\ub274\ubaa9\ub85d"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuRegister",children:"\u25b6 \uba54\ub274\ub4f1\ub85d"})})]})]}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/order/adminOrderStatus",children:"\uc8fc\ubb38\ud604\ud669"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/banner/adminBanner",children:"\ubc30\ub108\uad00\ub9ac"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/event/adminEventList",children:"\uc774\ubca4\ud2b8\uad00\ub9ac"}),(0,r.jsxs)(t.Z.Item,{action:!0,variant:"light",children:["\ucfe0\ud3f0\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/AdminCouponList",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09\ub0b4\uc5ed"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/adminCouponPayment",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09"})})]})]}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/notice/adminNoticeList",children:"\uacf5\uc9c0\uc0ac\ud56d\uad00\ub9ac"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/faq/adminFaqList",children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/qna/adminQna",children:"\uace0\uac1d\uc758\uc18c\ub9ac"})]})]})}},5764:function(e,n,a){a.r(n);var i=a(4942),t=a(1413),r=a(9439),s=a(2791),c=(a(916),a(7022)),l=a(9743),o=a(2677),d=a(2500),h=a(9795),u=a(2076),x=a(1087),m=a(184);n.default=function(){var e=(0,s.useState)({}),n=(0,r.Z)(e,2),a=n[0],v=n[1],f=function(e){var n=e.target.name,r=e.target.value,s=a.content;s.replaceAll("<br>","\r\n");console.log(s),v((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,i.Z)({},n,r))})),console.log(a)};return(0,m.jsx)("section",{id:"admin",children:(0,m.jsx)(c.Z,{id:"adminFaqRegister",children:(0,m.jsxs)(l.Z,{className:"justify-content-center",children:[(0,m.jsx)(d.Z,{}),(0,m.jsx)(o.Z,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:(0,m.jsx)("h3",{children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38 \ub4f1\ub85d"})}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,m.jsxs)(u.Z,{className:"mb-3",children:[(0,m.jsx)(u.Z.Text,{children:"\uc720\ud615"}),(0,m.jsxs)(h.Z.Select,{"aria-label":"\uc720\ud615\uc120\ud0dd",name:"cate",onChange:f,children:[(0,m.jsx)("option",{value:"0",children:"\uc804\uccb4"}),(0,m.jsx)("option",{value:"10",children:"\uc774\ubca4\ud2b8"}),(0,m.jsx)("option",{value:"11",children:"\uc8fc\ubb38/\uacb0\uc81c"}),(0,m.jsx)("option",{value:"12",children:"\ucde8\uc18c/\ud658\ubd88"}),(0,m.jsx)("option",{value:"13",children:"\ud61c\ud0dd"}),(0,m.jsx)("option",{value:"14",children:"\uc774\uc6a9\ubb38\uc758"}),(0,m.jsx)("option",{value:"15",children:"\ud68c\uc6d0\uc815\ubcf4"}),(0,m.jsx)("option",{value:"16",children:"\ucfe0\ud3f0"})]})]}),(0,m.jsxs)(u.Z,{className:"mb-3",children:[(0,m.jsx)(u.Z.Text,{children:"\uc9c8\ubb38"}),(0,m.jsx)(h.Z.Control,{placeholder:"\uc9c8\ubb38\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"title",onChange:f})]}),(0,m.jsxs)(u.Z,{className:"mb-3",children:[(0,m.jsx)(u.Z.Text,{children:"\ub2f5\ubcc0"}),(0,m.jsx)(h.Z.Control,{as:"textarea","aria-label":"With textarea",name:"content",onChange:f,placeholder:"\ub2f5\ubcc0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(x.rU,{to:"/admin/faq/adminFaqList",className:"btnCancel",children:"\ucde8\uc18c"}),(0,m.jsx)("button",{type:"submit",className:"btnRegister",children:"\ub4f1\ub85d"})]})]})]})})]})})})}},2076:function(e,n,a){a.d(n,{Z:function(){return j}});var i=a(5987),t=a(1413),r=a(1694),s=a.n(r),c=a(2791),l=a(162),o=a(6882),d=a(1991),h=a(184),u=["className","bsPrefix","as"],x=c.forwardRef((function(e,n){var a=e.className,r=e.bsPrefix,c=e.as,o=void 0===c?"span":c,d=(0,i.Z)(e,u);return r=(0,l.vE)(r,"input-group-text"),(0,h.jsx)(o,(0,t.Z)({ref:n,className:s()(a,r)},d))}));x.displayName="InputGroupText";var m=x,v=["bsPrefix","size","hasValidation","className","as"],f=c.forwardRef((function(e,n){var a=e.bsPrefix,r=e.size,o=e.hasValidation,u=e.className,x=e.as,m=void 0===x?"div":x,f=(0,i.Z)(e,v);a=(0,l.vE)(a,"input-group");var j=(0,c.useMemo)((function(){return{}}),[]);return(0,h.jsx)(d.Z.Provider,{value:j,children:(0,h.jsx)(m,(0,t.Z)((0,t.Z)({ref:n},f),{},{className:s()(u,a,r&&"".concat(a,"-").concat(r),o&&"has-validation")}))})}));f.displayName="InputGroup";var j=Object.assign(f,{Text:m,Radio:function(e){return(0,h.jsx)(m,{children:(0,h.jsx)(o.Z,(0,t.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,h.jsx)(m,{children:(0,h.jsx)(o.Z,(0,t.Z)({type:"checkbox"},e))})}})},1398:function(e,n,a){a.d(n,{Z:function(){return g}});var i=a(1413),t=a(5987),r=a(1694),s=a.n(r),c=a(2791),l=(a(2391),a(8580)),o=a(1337),d=a(162),h=a(9439),u=a(9007),x=a(4787),m=a(8633),v=a(184),f=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],j=c.forwardRef((function(e,n){var a=e.bsPrefix,r=e.active,c=e.disabled,l=e.eventKey,o=e.className,j=e.variant,Z=e.action,p=e.as,b=(0,t.Z)(e,f);a=(0,d.vE)(a,"list-group-item");var g=(0,x.v)((0,i.Z)({key:(0,m.h)(l,b.href),active:r},b)),N=(0,h.Z)(g,2),I=N[0],y=N[1],C=(0,u.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();I.onClick(e)}));c&&void 0===b.tabIndex&&(b.tabIndex=-1,b["aria-disabled"]=!0);var P=p||(Z?b.href?"a":"button":"div");return(0,v.jsx)(P,(0,i.Z)((0,i.Z)((0,i.Z)({ref:n},b),I),{},{onClick:C,className:s()(o,a,y.isActive&&"active",c&&"disabled",j&&"".concat(a,"-").concat(j),Z&&"".concat(a,"-action"))}))}));j.displayName="ListGroupItem";var Z=j,p=["className","bsPrefix","variant","horizontal","numbered","as"],b=c.forwardRef((function(e,n){var a,r=(0,l.Ch)(e,{activeKey:"onSelect"}),c=r.className,h=r.bsPrefix,u=r.variant,x=r.horizontal,m=r.numbered,f=r.as,j=void 0===f?"div":f,Z=(0,t.Z)(r,p),b=(0,d.vE)(h,"list-group");return x&&(a=!0===x?"horizontal":"horizontal-".concat(x)),(0,v.jsx)(o.Z,(0,i.Z)((0,i.Z)({ref:n},Z),{},{as:j,className:s()(c,b,u&&"".concat(b,"-").concat(u),a&&"".concat(b,"-").concat(a),m&&"".concat(b,"-numbered"))}))}));b.displayName="ListGroup";var g=Object.assign(b,{Item:Z})},916:function(){}}]);
//# sourceMappingURL=5764.0d5870b4.chunk.js.map