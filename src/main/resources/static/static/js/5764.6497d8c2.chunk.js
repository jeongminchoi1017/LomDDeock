"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5764],{2500:function(n,e,a){var i=a(2677),t=a(1398),r=(a(2791),a(184));e.Z=function(){return(0,r.jsxs)(i.Z,{sm:2,children:[(0,r.jsx)("div",{className:"todayDate",children:(0,r.jsx)("h2",{children:"2023-11-07"})}),(0,r.jsxs)(t.Z,{className:"asideMenu",children:[(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/adminIndex",children:"ADMIN HOME"}),(0,r.jsxs)(t.Z.Item,{action:!0,variant:"light",children:["\uba54\ub274\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuList",children:"\u25b6 \uba54\ub274\ubaa9\ub85d"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuRegister",children:"\u25b6 \uba54\ub274\ub4f1\ub85d"})})]})]}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/order/adminOrderStatus",children:"\uc8fc\ubb38\ud604\ud669"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/banner/adminBanner",children:"\ubc30\ub108\uad00\ub9ac"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/event/adminEventList",children:"\uc774\ubca4\ud2b8\uad00\ub9ac"}),(0,r.jsxs)(t.Z.Item,{action:!0,variant:"light",children:["\ucfe0\ud3f0\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/AdminCouponList",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09\ub0b4\uc5ed"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/adminCouponPayment",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09"})})]})]}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/notice/adminNoticeList",children:"\uacf5\uc9c0\uc0ac\ud56d\uad00\ub9ac"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/faq/adminFaqList",children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38"}),(0,r.jsx)(t.Z.Item,{action:!0,variant:"light",href:"/admin/qna/adminQna",children:"\uace0\uac1d\uc758\uc18c\ub9ac"})]})]})}},5764:function(n,e,a){a.r(e);var i=a(4942),t=a(1413),r=a(9439),s=a(2791),c=(a(916),a(7022)),l=a(9743),o=a(2677),d=a(2500),h=a(9795),u=a(2076),m=a(1087),x=a(5294),v=a(184);e.default=function(){var n=(0,s.useState)({}),e=(0,r.Z)(n,2),a=e[0],f=e[1],j=function(n){var e=n.target.name,a=n.target.value;f((function(n){return(0,t.Z)((0,t.Z)({},n),{},(0,i.Z)({},e,a))}))};return(0,v.jsx)("section",{id:"admin",children:(0,v.jsx)(c.Z,{id:"adminFaqRegister",children:(0,v.jsxs)(l.Z,{className:"justify-content-center",children:[(0,v.jsx)(d.Z,{}),(0,v.jsx)(o.Z,{children:(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:(0,v.jsx)("h3",{children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38 \ub4f1\ub85d"})}),(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),x.Z.post("/api/admin/faq/adminFaqRegister",a).then((function(n){alert("\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})).catch((function(n){console.log("\uc804\uc1a1\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}))},children:[(0,v.jsxs)(u.Z,{className:"mb-3",children:[(0,v.jsx)(u.Z.Text,{children:"\uc720\ud615"}),(0,v.jsxs)(h.Z.Select,{"aria-label":"\uc720\ud615\uc120\ud0dd",name:"cate",onChange:j,children:[(0,v.jsx)("option",{value:"0",children:"\uc804\uccb4"}),(0,v.jsx)("option",{value:"10",children:"\uc774\ubca4\ud2b8"}),(0,v.jsx)("option",{value:"11",children:"\uc8fc\ubb38/\uacb0\uc81c"}),(0,v.jsx)("option",{value:"12",children:"\ucde8\uc18c/\ud658\ubd88"}),(0,v.jsx)("option",{value:"13",children:"\ud61c\ud0dd"}),(0,v.jsx)("option",{value:"14",children:"\uc774\uc6a9\ubb38\uc758"}),(0,v.jsx)("option",{value:"15",children:"\ud68c\uc6d0\uc815\ubcf4"}),(0,v.jsx)("option",{value:"16",children:"\ucfe0\ud3f0"})]})]}),(0,v.jsxs)(u.Z,{className:"mb-3",children:[(0,v.jsx)(u.Z.Text,{children:"\uc9c8\ubb38"}),(0,v.jsx)(h.Z.Control,{placeholder:"\uc9c8\ubb38\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"title",onChange:j})]}),(0,v.jsxs)(u.Z,{className:"mb-3",children:[(0,v.jsx)(u.Z.Text,{children:"\ub2f5\ubcc0"}),(0,v.jsx)(h.Z.Control,{as:"textarea","aria-label":"With textarea",name:"content",onChange:j,placeholder:"\ub2f5\ubcc0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)(m.rU,{to:"/admin/faq/adminFaqList",className:"btnCancel",children:"\ucde8\uc18c"}),(0,v.jsx)("button",{type:"submit",className:"btnRegister",children:"\ub4f1\ub85d"})]})]})]})})]})})})}},2076:function(n,e,a){a.d(e,{Z:function(){return j}});var i=a(5987),t=a(1413),r=a(1694),s=a.n(r),c=a(2791),l=a(162),o=a(6882),d=a(1991),h=a(184),u=["className","bsPrefix","as"],m=c.forwardRef((function(n,e){var a=n.className,r=n.bsPrefix,c=n.as,o=void 0===c?"span":c,d=(0,i.Z)(n,u);return r=(0,l.vE)(r,"input-group-text"),(0,h.jsx)(o,(0,t.Z)({ref:e,className:s()(a,r)},d))}));m.displayName="InputGroupText";var x=m,v=["bsPrefix","size","hasValidation","className","as"],f=c.forwardRef((function(n,e){var a=n.bsPrefix,r=n.size,o=n.hasValidation,u=n.className,m=n.as,x=void 0===m?"div":m,f=(0,i.Z)(n,v);a=(0,l.vE)(a,"input-group");var j=(0,c.useMemo)((function(){return{}}),[]);return(0,h.jsx)(d.Z.Provider,{value:j,children:(0,h.jsx)(x,(0,t.Z)((0,t.Z)({ref:e},f),{},{className:s()(u,a,r&&"".concat(a,"-").concat(r),o&&"has-validation")}))})}));f.displayName="InputGroup";var j=Object.assign(f,{Text:x,Radio:function(n){return(0,h.jsx)(x,{children:(0,h.jsx)(o.Z,(0,t.Z)({type:"radio"},n))})},Checkbox:function(n){return(0,h.jsx)(x,{children:(0,h.jsx)(o.Z,(0,t.Z)({type:"checkbox"},n))})}})},1398:function(n,e,a){a.d(e,{Z:function(){return g}});var i=a(1413),t=a(5987),r=a(1694),s=a.n(r),c=a(2791),l=(a(2391),a(8580)),o=a(1337),d=a(162),h=a(9439),u=a(9007),m=a(4787),x=a(8633),v=a(184),f=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],j=c.forwardRef((function(n,e){var a=n.bsPrefix,r=n.active,c=n.disabled,l=n.eventKey,o=n.className,j=n.variant,Z=n.action,p=n.as,b=(0,t.Z)(n,f);a=(0,d.vE)(a,"list-group-item");var g=(0,m.v)((0,i.Z)({key:(0,x.h)(l,b.href),active:r},b)),N=(0,h.Z)(g,2),I=N[0],y=N[1],C=(0,u.Z)((function(n){if(c)return n.preventDefault(),void n.stopPropagation();I.onClick(n)}));c&&void 0===b.tabIndex&&(b.tabIndex=-1,b["aria-disabled"]=!0);var P=p||(Z?b.href?"a":"button":"div");return(0,v.jsx)(P,(0,i.Z)((0,i.Z)((0,i.Z)({ref:e},b),I),{},{onClick:C,className:s()(o,a,y.isActive&&"active",c&&"disabled",j&&"".concat(a,"-").concat(j),Z&&"".concat(a,"-action"))}))}));j.displayName="ListGroupItem";var Z=j,p=["className","bsPrefix","variant","horizontal","numbered","as"],b=c.forwardRef((function(n,e){var a,r=(0,l.Ch)(n,{activeKey:"onSelect"}),c=r.className,h=r.bsPrefix,u=r.variant,m=r.horizontal,x=r.numbered,f=r.as,j=void 0===f?"div":f,Z=(0,t.Z)(r,p),b=(0,d.vE)(h,"list-group");return m&&(a=!0===m?"horizontal":"horizontal-".concat(m)),(0,v.jsx)(o.Z,(0,i.Z)((0,i.Z)({ref:e},Z),{},{as:j,className:s()(c,b,u&&"".concat(b,"-").concat(u),a&&"".concat(b,"-").concat(a),x&&"".concat(b,"-numbered"))}))}));b.displayName="ListGroup";var g=Object.assign(b,{Item:Z})},916:function(){}}]);
//# sourceMappingURL=5764.6497d8c2.chunk.js.map