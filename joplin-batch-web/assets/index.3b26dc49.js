import{C as e,L as t,M as r,a as n,r as o,R as s,b as a,H as l}from"./vendor.bd0c5dc4.js";let m;const c={},p=function(e,t){if(!t)return e();if(void 0===m){const e=document.createElement("link").relList;m=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in c)return;c[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":m,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},i=[{path:"/",component:e.exports.lazy((()=>p((()=>import("./index.0f4d15e1.js")),["./assets/index.0f4d15e1.js","./assets/vendor.bd0c5dc4.js"]))),exact:!0,title:"首页"},{path:"/settings",component:e.exports.lazy((()=>p((()=>import("./index.a42af817.js")),["./assets/index.a42af817.js","./assets/vendor.bd0c5dc4.js","./assets/joplinApiGenerator.a2502d33.js"]))),title:"设置"},{path:"/unusedResource",component:e.exports.lazy((()=>p((()=>import("./index.b6462191.js")),["./assets/index.b6462191.js","./assets/vendor.bd0c5dc4.js","./assets/PromiseUtil.bb18ee7d.js","./assets/joplinApiGenerator.a2502d33.js"]))),title:"检查未使用的附件资源"},{path:"/notFoundResource",component:e.exports.lazy((()=>p((()=>import("./index.131fa71a.js")),["./assets/index.131fa71a.js","./assets/index.f01a236b.css","./assets/vendor.bd0c5dc4.js","./assets/joplinApiGenerator.a2502d33.js","./assets/PromiseUtil.bb18ee7d.js"]))),title:"检查笔记中失效的资源引用"}];var d="_app_bmerb_1",_="_logo_bmerb_9",u="_sider_bmerb_21",E="_main_bmerb_23";const x=()=>e.exports.createElement(t,{className:d},e.exports.createElement(t.Sider,{className:u},e.exports.createElement("h2",{className:_},"Joplin Batch Web"),e.exports.createElement(r,null,i.map((t=>e.exports.createElement(r.Item,{key:t.path},e.exports.createElement(n,{to:t.path},t.title)))))),e.exports.createElement(t.Content,{className:E},o(i)));s.render(a.createElement(a.StrictMode,null,a.createElement(l,null,a.createElement(e.exports.Suspense,{fallback:"loading..."},a.createElement(x,null)))),document.getElementById("root"));export{p as _};
