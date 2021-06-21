/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,r,i){return new(r||(r=Promise))((function(n,a){function s(t){try{c(i.next(t))}catch(e){a(e)}}function o(t){try{c(i.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,o)}c((i=i.apply(t,e||[])).next())}))}function e(t){return new Promise((e=>{if("number"==typeof t)setTimeout(e,t);else if("function"==typeof t){const r=setInterval((()=>{t()&&(clearInterval(r),e())}),100)}else e()}))}function r(r,i){let n=0;return function(...a){return t(this,void 0,void 0,(function*(){yield e((()=>{const t=n<i;return t&&n++,t}));try{return yield r(...a)}finally{n--}}))}}var i,n;(n=i||(i={})).Filter="filter",n.Map="map",n.ForEach="forEach",n.Reduce="reduce",n.FlatMap="flatMap";class a{constructor(t,e){this.type=t,this.args=e,this.type=t,this.args=e}}a.Type=i;class s{constructor(t){this.arr=t,this.tasks=[]}static reduce(t,e,r){return t.reduce(((t,r,i)=>t.then((t=>e(t,r,i)))),Promise.resolve(r))}static map(t,e){return Promise.all(t.map(((t,r)=>e(t,r))))}static filter(e,r){return t(this,void 0,void 0,(function*(){const i=[];return yield s.map(e,((e,n)=>t(this,void 0,void 0,(function*(){(yield r(e,n))&&i.push(e)})))),i}))}static flatMap(e,r){return t(this,void 0,void 0,(function*(){return(yield Promise.all(e.map(((t,e)=>r(t,e))))).flatMap((t=>t))}))}static forEach(e,r){return t(this,void 0,void 0,(function*(){yield s.map(e,r)}))}map(t){return this.tasks.push(new a(i.Map,[t])),this}flatMap(t){return this.tasks.push(new a(i.FlatMap,[t])),this}filter(t){return this.tasks.push(new a(i.Filter,[t])),this}forEach(e){return t(this,void 0,void 0,(function*(){this.tasks.push(new a(i.Map,[e])),yield this}))}then(t,e){const r=this.value();return r.then((e=>(t&&t(r),e))).catch((t=>{throw e&&e(t),t})),r}value(){return t(this,void 0,void 0,(function*(){let t=this.arr;for(const e of this.tasks)switch(e.type){case i.Filter:t=yield s.filter(t,e.args[0]);break;case i.Map:t=yield s.map(t,e.args[0]);break;case i.FlatMap:t=yield s.flatMap(t,e.args[0]);break;case i.ForEach:return void(yield s.forEach(t,e.args[0]));case i.Reduce:return yield s.reduce(t,e.args[0],e.args[1])}return t}))}}export{e,s as f,r as n};
