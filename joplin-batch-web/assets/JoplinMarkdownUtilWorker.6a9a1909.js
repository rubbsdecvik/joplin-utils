import{c as e,d as s,e as t,f as r,g as l,h as n}from"./vendor.bd0c5dc4.js";const a=class{parseInternalLink(e){const s=[];return n(a.md.parse(e),(e=>{var t;if("link"!==e.type&&"image"!==e.type)return;const r=e;r.url.startsWith(":/")&&s.push({id:r.url.slice(2),title:"link"===r.type?null!=(t=r.title)?t:r.children[0].value:r.alt})})),s}};let i=a;i.md=e().use(s).use(t).use(r,{bullet:"-",fences:!0,incrementListMarker:!1});l(new i);
