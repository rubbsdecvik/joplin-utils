import{C as t}from"./vendor.a6a3bb3d.js";
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
***************************************************************************** */var r,e,n=function(){return(n=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t}).apply(this,arguments)};function i(r,e,i){void 0===e&&(e=[]),void 0===i&&(i={loading:!1});var a,s,o=t.exports.useRef(0),u=(a=t.exports.useRef(!1),s=t.exports.useCallback((function(){return a.current}),[]),t.exports.useEffect((function(){return a.current=!0,function(){a.current=!1}}),[]),s),c=t.exports.useState(i),l=c[0],f=c[1];return[l,t.exports.useCallback((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=++o.current;return f((function(t){return n(n({},t),{loading:!0})})),r.apply(void 0,t).then((function(t){return u()&&i===o.current&&f({value:t,loading:!1}),t}),(function(t){return u()&&i===o.current&&f({error:t,loading:!1}),t}))}),e)]}
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
***************************************************************************** */function a(t,r,e,n){return new(e||(e=Promise))((function(i,a){function s(t){try{u(n.next(t))}catch(r){a(r)}}function o(t){try{u(n.throw(t))}catch(r){a(r)}}function u(t){var r;t.done?i(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(s,o)}u((n=n.apply(t,r||[])).next())}))}function s(t){return new Promise((r=>{if("number"==typeof t)setTimeout(r,t);else if("function"==typeof t){const e=setInterval((()=>{t()&&(clearInterval(e),r())}),100)}else r()}))}function o(t,r){let e=0;return function(...n){return a(this,void 0,void 0,(function*(){yield s((()=>{const t=e<r;return t&&e++,t}));try{return yield t(...n)}finally{e--}}))}}(e=r||(r={})).Filter="filter",e.Map="map",e.ForEach="forEach",e.Reduce="reduce",e.FlatMap="flatMap";class u{constructor(t,r){this.type=t,this.args=r,this.type=t,this.args=r}}u.Type=r;class c{constructor(t){this.arr=t,this.tasks=[]}static reduce(t,r,e){return t.reduce(((t,e,n)=>t.then((t=>r(t,e,n)))),Promise.resolve(e))}static map(t,r){return Promise.all(t.map(((t,e)=>r(t,e))))}static filter(t,r){return a(this,void 0,void 0,(function*(){const e=[];return yield c.map(t,((t,n)=>a(this,void 0,void 0,(function*(){(yield r(t,n))&&e.push(t)})))),e}))}static flatMap(t,r){return a(this,void 0,void 0,(function*(){return(yield Promise.all(t.map(((t,e)=>r(t,e))))).flatMap((t=>t))}))}static forEach(t,r){return a(this,void 0,void 0,(function*(){yield c.map(t,r)}))}map(t){return this.tasks.push(new u(r.Map,[t])),this}flatMap(t){return this.tasks.push(new u(r.FlatMap,[t])),this}filter(t){return this.tasks.push(new u(r.Filter,[t])),this}forEach(t){return a(this,void 0,void 0,(function*(){this.tasks.push(new u(r.Map,[t])),yield this}))}then(t,r){const e=this.value();return e.then((r=>(t&&t(e),r))).catch((t=>{throw r&&r(t),t})),e}value(){return a(this,void 0,void 0,(function*(){let t=this.arr;for(const e of this.tasks)switch(e.type){case r.Filter:t=yield c.filter(t,e.args[0]);break;case r.Map:t=yield c.map(t,e.args[0]);break;case r.FlatMap:t=yield c.flatMap(t,e.args[0]);break;case r.ForEach:return void(yield c.forEach(t,e.args[0]));case r.Reduce:return yield c.reduce(t,e.args[0],e.args[1])}return t}))}}export{s as e,c as f,o as n,i as u};
