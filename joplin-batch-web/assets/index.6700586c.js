import{C as e,n as t,m as s,k as r,B as o,o as i,p as n}from"./vendor.8d5b4c2e.js";import{f as a,n as c}from"./index.esm.84052b48.js";import{s as l,j as u,a as m,i as d}from"./joplinApiGenerator.5dee38af.js";import{P as p}from"./PromiseUtil.a7bff535.js";import{f}from"./immer.esm.6f40434d.js";import{i as g}from"./index.d4ed201a.js";const h=new class{constructor(e){this.config=e}getUnusedResource(){return p.warpOnEvent((async e=>{const t=await l.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]});let s=0;return await a.filter(t,c((async r=>{const o=!(await this.checkUsed(r.id));return e.process({title:r.title,all:t.length,rate:s++}),o}),10))}))}async checkUsed(e){return(await this.config.searchApi.search({query:`"](:/${e})"`})).items.length>0}}(u);const x=function(e){const t=e();return e=>`http://localhost:${null==t?void 0:t.port}/resources/${e}/file?token=${null==t?void 0:t.token}`}((()=>m(localStorage).settings));export default()=>{const[a,c]=e.exports.useState([]),[l,m]=e.exports.useState(""),[p,w]=t((async()=>{try{const e=await h.getUnusedResource().on("process",(e=>{m(g.t("unusedResource.msg.process",e))}));console.log("list: ",e),c(e)}catch(e){s.error(g.t("unusedResource.msg.error"))}}));return e.exports.createElement(r,{title:g.t("unusedResource.title"),extra:e.exports.createElement(o,{onClick:w},g.t("unusedResource.action.check"))},e.exports.createElement(i,{dataSource:a,locale:{emptyText:g.t("unusedResource.listEmptyText")},renderItem:t=>e.exports.createElement(i.Item,{key:t.id,actions:[e.exports.createElement(o,{onClick:()=>async function(e){c(f((t=>t.filter((t=>t.id!==e))))),await u.resourceApi.remove(e)}(t.id)},g.t("unusedResource.action.remove")),e.exports.createElement(o,{onClick:()=>async function(e){await d(x(e))}(t.id)},g.t("unusedResource.action.download"))],extra:t.mime.startsWith("image/")&&e.exports.createElement(n,{src:x(t.id),width:300})},e.exports.createElement(i.Item.Meta,{title:t.title})),loading:{spinning:p.loading,tip:l}}))};