import{i as e,C as t,u as n,L as o,M as r,a as s,r as a,R as c,b as i,H as l}from"./vendor.d7a724cc.js";let u;const m={},p=function(e,t){if(!t)return e();if(void 0===u){const e=document.createElement("link").relList;u=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":u,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};var d={menu:{home:"首页",settings:"设置",unusedResource:"检查未使用的附件资源",notFoundResource:"检查笔记中失效的资源引用",convertExternalLink:"转换外部链接为内部引用笔记"},settings:{title:"安全设置",form:{token:"授权令牌",port:"端口"},action:{submit:"提交"},msg:{success:"设置成功",error:"无法访问 joplin web clipper api"}},unusedResource:{title:"检查未使用的资源",listEmptyText:"没有找到任何未使用的附件资源",action:{removeAll:"删除全部",check:"检查",remove:"删除",download:"下载"},msg:{process:"[{{rate}}/{{all}}] 正在检查资源 {{title}}",error:"请检查 joplin token/port 配置"}},notFoundResource:{title:"检查笔记中引用失效的资源",listEmptyText:"没有找到任何引用失效的资源",unknownFileName:"未知文件名 {{id}}",action:{check:"检查",open:"打开"}},convertExternalLink:{title:"转换外部链接为内部引用笔记",action:{convert:"转换",open:"打开"},msg:{success:"转换完成"}}};var h,E,_={menu:{home:"Home",settings:"Settings",unusedResource:"Check for unused attachment resources",notFoundResource:"Check for invalid resource references in notes",convertExternalLink:"Convert external links to internally referenced notes"},settings:{title:"Security Settings",form:{token:"Authorization token",port:"Port"},action:{submit:"Submit"},msg:{success:"Setup was successful",error:"Unable to access joplin web clipper api"}},unusedResource:{title:"Check for unused resources",listEmptyText:"No unused attachment resources were found",action:{removeAll:"Delete all",check:"Check",remove:"Remove",download:"Download"},msg:{process:"[{{rate}}/{{all}}] is checking for resources {{title}}",error:"Please check joplin token/port configuration"}},notFoundResource:{title:"Check notes for references to a failed resource",listEmptyText:"No reference to a failed resource was found",unknownFileName:"Unknown file name {{id}}",action:{check:"Check",open:"Open"}},convertExternalLink:{title:"Convert External Link to Internal Reference Notes",action:{convert:"Convert",open:"Open"},msg:{success:"Conversion complete"}}};(E=h||(h={})).ZhCN="zhCN",E.En="en";const x=new class{constructor(){}async load(t){await e.init({lng:t,resources:{en:{translation:_},zhCN:{translation:d}}})}t(...t){return e.t(t[0],t[1])}};var k="_app_bmerb_1",f="_logo_bmerb_9",v="_sider_bmerb_21",g="_main_bmerb_23";function R(){return navigator.language.startsWith("zh")?h.ZhCN:h.En}const b=()=>{const[e,c]=t.exports.useState([]);return n((async()=>{await x.load(R()),c([{path:"/",component:t.exports.lazy((()=>p((()=>import("./index.dfe840ee.js")),["./assets/index.dfe840ee.js","./assets/vendor.d7a724cc.js"]))),exact:!0,title:x.t("menu.home")},{path:"/settings",component:t.exports.lazy((()=>p((()=>import("./index.ecb18930.js")),["./assets/index.ecb18930.js","./assets/vendor.d7a724cc.js","./assets/joplinApiGenerator.9fe4b04b.js"]))),title:x.t("menu.settings")},{path:"/unusedResource",component:t.exports.lazy((()=>p((()=>import("./index.acfd766e.js")),["./assets/index.acfd766e.js","./assets/vendor.d7a724cc.js","./assets/index.esm.84052b48.js","./assets/joplinApiGenerator.9fe4b04b.js","./assets/PromiseUtil.a7bff535.js","./assets/immer.esm.6f40434d.js"]))),title:x.t("menu.unusedResource")},{path:"/notFoundResource",component:t.exports.lazy((()=>p((()=>import("./index.3baa4664.js")),["./assets/index.3baa4664.js","./assets/index.f01a236b.css","./assets/vendor.d7a724cc.js","./assets/joplinApiGenerator.9fe4b04b.js","./assets/index.esm.84052b48.js","./assets/PromiseUtil.a7bff535.js"]))),title:x.t("menu.notFoundResource")},{path:"/convertExternalLink",component:t.exports.lazy((()=>p((()=>import("./index.908f0242.js")),["./assets/index.908f0242.js","./assets/index.d60ec32e.css","./assets/vendor.d7a724cc.js","./assets/joplinApiGenerator.9fe4b04b.js","./assets/index.esm.84052b48.js","./assets/immer.esm.6f40434d.js"]))),title:x.t("menu.convertExternalLink")}])})),t.exports.createElement(o,{className:k},t.exports.createElement(o.Sider,{className:v,width:"max-content"},t.exports.createElement("h2",{className:f},"Joplin Batch"),t.exports.createElement(r,null,e.map((e=>t.exports.createElement(r.Item,{key:e.path},t.exports.createElement(s,{to:e.path},e.title)))))),t.exports.createElement(o.Content,{className:g},t.exports.createElement(t.exports.Suspense,{fallback:"loading..."},a(e))))};c.render(i.createElement(i.StrictMode,null,i.createElement(l,null,i.createElement(b,null))),document.getElementById("root"));export{h as L,p as _,R as g,x as i};
