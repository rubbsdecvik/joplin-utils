import{e as r,c as t}from"./vendor.8d5b4c2e.js";import{m as e}from"./mdParser.a96f78d2.js";r(class{static parseLink(r){const s=e.parse(r),l=[];return t(s,(r=>{var t;if("link"!==r.type)return;const e=r;e.url.startsWith("https"),l.push({title:null==(t=e.children[0])?void 0:t.value,url:e.url})})),l}static convertLink(r,s){const l=e.parse(r);return t(l,(r=>{if("link"!==r.type)return;const t=r,e=s[t.url];e&&(t.url=e.url,0===t.children.length&&t.children.push({type:"text",value:""}),t.children[0].value=e.title)})),e.stringify(l)}});
