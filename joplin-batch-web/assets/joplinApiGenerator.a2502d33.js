var t,e;import{_ as r}from"./index.3b26dc49.js";
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
***************************************************************************** */var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function i(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(ie){i(ie)}}function a(t){try{c(n.throw(t))}catch(ie){i(ie)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}var s="object"==typeof self?self.FormData:window.FormData,a=Object.freeze(Object.assign(Object.create(null),s,{[Symbol.toStringTag]:"Module",default:s})),c={exports:{}},u=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}},d=u,f=Object.prototype.toString;function l(t){return"[object Array]"===f.call(t)}function h(t){return void 0===t}function p(t){return null!==t&&"object"==typeof t}function g(t){if("[object Object]"!==f.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Function]"===f.call(t)}function y(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),l(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}var v={isArray:l,isArrayBuffer:function(t){return"[object ArrayBuffer]"===f.call(t)},isBuffer:function(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:p,isPlainObject:g,isUndefined:h,isDate:function(t){return"[object Date]"===f.call(t)},isFile:function(t){return"[object File]"===f.call(t)},isBlob:function(t){return"[object Blob]"===f.call(t)},isFunction:m,isStream:function(t){return p(t)&&m(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:y,merge:function t(){var e={};function r(r,n){g(e[n])&&g(r)?e[n]=t(e[n],r):g(r)?e[n]=t({},r):l(r)?e[n]=r.slice():e[n]=r}for(var n=0,o=arguments.length;n<o;n++)y(arguments[n],r);return e},extend:function(t,e,r){return y(e,(function(e,n){t[n]=r&&"function"==typeof e?d(e,r):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}},b=v;function j(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var x=function(t,e,r){if(!e)return t;var n;if(r)n=r(e);else if(b.isURLSearchParams(e))n=e.toString();else{var o=[];b.forEach(e,(function(t,e){null!=t&&(b.isArray(t)?e+="[]":t=[t],b.forEach(t,(function(t){b.isDate(t)?t=t.toISOString():b.isObject(t)&&(t=JSON.stringify(t)),o.push(j(e)+"="+j(t))})))})),n=o.join("&")}if(n){var i=t.indexOf("#");-1!==i&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t},w=v;function A(){this.handlers=[]}A.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},A.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},A.prototype.forEach=function(t){w.forEach(this.handlers,(function(e){null!==e&&t(e)}))};var O=A,S=v,E=function(t){return!(!t||!t.__CANCEL__)},R=v,T=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t},C=function(t,e,r,n,o){var i=new Error(t);return T(i,e,r,n,o)},N=C,k=v,I=k.isStandardBrowserEnv()?{write:function(t,e,r,n,o,i){var s=[];s.push(t+"="+encodeURIComponent(e)),k.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),k.isString(n)&&s.push("path="+n),k.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},B=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)},U=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t},F=v,L=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],P=v,$=P.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=n(window.location.href),function(e){var r=P.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},_=v,q=function(t,e,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(N("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)},W=I,D=x,M=function(t,e){return t&&!B(e)?U(t,e):e},J=function(t){var e,r,n,o={};return t?(F.forEach(t.split("\n"),(function(t){if(n=t.indexOf(":"),e=F.trim(t.substr(0,n)).toLowerCase(),r=F.trim(t.substr(n+1)),e){if(o[e]&&L.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([r]):o[e]?o[e]+", "+r:r}})),o):o},z=$,H=C,K=function(t){return new Promise((function(e,r){var n=t.data,o=t.headers;_.isFormData(n)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(t.auth){var s=t.auth.username||"",a=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+a)}var c=M(t.baseURL,t.url);if(i.open(t.method.toUpperCase(),D(c,t.params,t.paramsSerializer),!0),i.timeout=t.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in i?J(i.getAllResponseHeaders()):null,o={data:t.responseType&&"text"!==t.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:n,config:t,request:i};q(e,r,o),i=null}},i.onabort=function(){i&&(r(H("Request aborted",t,"ECONNABORTED",i)),i=null)},i.onerror=function(){r(H("Network Error",t,null,i)),i=null},i.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(H(e,t,"ECONNABORTED",i)),i=null},_.isStandardBrowserEnv()){var u=(t.withCredentials||z(c))&&t.xsrfCookieName?W.read(t.xsrfCookieName):void 0;u&&(o[t.xsrfHeaderName]=u)}if("setRequestHeader"in i&&_.forEach(o,(function(t,e){void 0===n&&"content-type"===e.toLowerCase()?delete o[e]:i.setRequestHeader(e,t)})),_.isUndefined(t.withCredentials)||(i.withCredentials=!!t.withCredentials),t.responseType)try{i.responseType=t.responseType}catch(ie){if("json"!==t.responseType)throw ie}"function"==typeof t.onDownloadProgress&&i.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){i&&(i.abort(),r(t),i=null)})),n||(n=null),i.send(n)}))},V=v,X=function(t,e){R.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))},G={"Content-Type":"application/x-www-form-urlencoded"};function Z(t,e){!V.isUndefined(t)&&V.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var Q,Y={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Q=K),Q),transformRequest:[function(t,e){return X(e,"Accept"),X(e,"Content-Type"),V.isFormData(t)||V.isArrayBuffer(t)||V.isBuffer(t)||V.isStream(t)||V.isFile(t)||V.isBlob(t)?t:V.isArrayBufferView(t)?t.buffer:V.isURLSearchParams(t)?(Z(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):V.isObject(t)?(Z(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(ie){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};Y.headers={common:{Accept:"application/json, text/plain, */*"}},V.forEach(["delete","get","head"],(function(t){Y.headers[t]={}})),V.forEach(["post","put","patch"],(function(t){Y.headers[t]=V.merge(G)}));var tt=Y,et=v,rt=function(t,e,r){return S.forEach(r,(function(r){t=r(t,e)})),t},nt=E,ot=tt;function it(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var st=v,at=function(t,e){e=e||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function a(t,e){return st.isPlainObject(t)&&st.isPlainObject(e)?st.merge(t,e):st.isPlainObject(e)?st.merge({},e):st.isArray(e)?e.slice():e}function c(n){st.isUndefined(e[n])?st.isUndefined(t[n])||(r[n]=a(void 0,t[n])):r[n]=a(t[n],e[n])}st.forEach(n,(function(t){st.isUndefined(e[t])||(r[t]=a(void 0,e[t]))})),st.forEach(o,c),st.forEach(i,(function(n){st.isUndefined(e[n])?st.isUndefined(t[n])||(r[n]=a(void 0,t[n])):r[n]=a(void 0,e[n])})),st.forEach(s,(function(n){n in e?r[n]=a(t[n],e[n]):n in t&&(r[n]=a(void 0,t[n]))}));var u=n.concat(o).concat(i).concat(s),d=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===u.indexOf(t)}));return st.forEach(d,c),r},ct=v,ut=x,dt=O,ft=function(t){return it(t),t.headers=t.headers||{},t.data=rt(t.data,t.headers,t.transformRequest),t.headers=et.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),et.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||ot.adapter)(t).then((function(e){return it(t),e.data=rt(e.data,e.headers,t.transformResponse),e}),(function(e){return nt(e)||(it(t),e&&e.response&&(e.response.data=rt(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))},lt=at;function ht(t){this.defaults=t,this.interceptors={request:new dt,response:new dt}}ht.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=lt(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[ft,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r},ht.prototype.getUri=function(t){return t=lt(this.defaults,t),ut(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},ct.forEach(["delete","get","head","options"],(function(t){ht.prototype[t]=function(e,r){return this.request(lt(r||{},{method:t,url:e,data:(r||{}).data}))}})),ct.forEach(["post","put","patch"],(function(t){ht.prototype[t]=function(e,r,n){return this.request(lt(n||{},{method:t,url:e,data:r}))}}));var pt=ht;function gt(t){this.message=t}gt.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},gt.prototype.__CANCEL__=!0;var mt=gt,yt=mt;function vt(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new yt(t),e(r.reason))}))}vt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},vt.source=function(){var t;return{token:new vt((function(e){t=e})),cancel:t}};var bt=vt,jt=v,xt=u,wt=pt,At=at;function Ot(t){var e=new wt(t),r=xt(wt.prototype.request,e);return jt.extend(r,wt.prototype,e),jt.extend(r,e),r}var St=Ot(tt);St.Axios=wt,St.create=function(t){return Ot(At(St.defaults,t))},St.Cancel=mt,St.CancelToken=bt,St.isCancel=E,St.all=function(t){return Promise.all(t)},St.spread=function(t){return function(e){return t.apply(null,e)}},St.isAxiosError=function(t){return"object"==typeof t&&!0===t.isAxiosError},c.exports=St,c.exports.default=St;var Et=c.exports,Rt={},Tt=t=>encodeURIComponent(t).replace(/[!'()*]/g,(t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)),Ct=new RegExp("%[a-f0-9]{2}","gi"),Nt=new RegExp("(%[a-f0-9]{2})+","gi");function kt(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],kt(r),kt(n))}function It(t){try{return decodeURIComponent(t)}catch(n){for(var e=t.match(Ct),r=1;r<e.length;r++)e=(t=kt(e,r).join("")).match(Ct);return t}}var Bt,Ut,Ft,Lt,Pt=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=Nt.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var o=It(n[0]);o!==n[0]&&(r[n[0]]=o)}n=Nt.exec(t)}r["%C2"]="�";for(var i=Object.keys(r),s=0;s<i.length;s++){var a=i[s];t=t.replace(new RegExp(a,"g"),r[a])}return t}(t)}},$t=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]},_t=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),i=0;i<n.length;i++){var s=n[i],a=t[s];(o?-1!==e.indexOf(s):e(s,a,t))&&(r[s]=a)}return r};!function(t){const e=Tt,r=Pt,n=$t,o=_t;function i(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(t,r){return r.encode?r.strict?e(t):encodeURIComponent(t):t}function a(t,e){return e.decode?r(t):t}function c(t){return Array.isArray(t)?t.sort():"object"==typeof t?c(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function u(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function d(t){const e=(t=u(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function f(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function l(t,e){i((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return(e,r,n)=>{const o="string"==typeof r&&r.includes(t.arrayFormatSeparator),i="string"==typeof r&&!o&&a(r,t).includes(t.arrayFormatSeparator);r=i?a(r,t):r;const s=o||i?r.split(t.arrayFormatSeparator).map((e=>a(e,t))):null===r?r:a(r,t);n[e]=s};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;for(const i of t.split("&")){if(""===i)continue;let[t,s]=n(e.decode?i.replace(/\+/g," "):i,"=");s=void 0===s?null:["comma","separator"].includes(e.arrayFormat)?s:a(s,e),r(a(t,e),s,o)}for(const n of Object.keys(o)){const t=o[n];if("object"==typeof t&&null!==t)for(const r of Object.keys(t))t[r]=f(t[r],e);else o[n]=f(t,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce(((t,e)=>{const r=o[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=c(r):t[e]=r,t}),Object.create(null))}t.extract=d,t.parse=l,t.stringify=(t,e)=>{if(!t)return"";i((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const r=r=>e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r],n=function(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[s(e,t),"[",o,"]"].join("")]:[...r,[s(e,t),"[",s(o,t),"]=",s(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[s(e,t),"[]"].join("")]:[...r,[s(e,t),"[]=",s(n,t)].join("")];case"comma":case"separator":return e=>(r,n)=>null==n||0===n.length?r:0===r.length?[[s(e,t),"=",s(n,t)].join("")]:[[r,s(n,t)].join(t.arrayFormatSeparator)];default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,s(e,t)]:[...r,[s(e,t),"=",s(n,t)].join("")]}}(e),o={};for(const i of Object.keys(t))r(i)||(o[i]=t[i]);const a=Object.keys(o);return!1!==e.sort&&a.sort(e.sort),a.map((r=>{const o=t[r];return void 0===o?"":null===o?s(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):s(r,e)+"="+s(o,e)})).filter((t=>t.length>0)).join("&")},t.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[r,o]=n(t,"#");return Object.assign({url:r.split("?")[0]||"",query:l(d(t),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:a(o,e)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=u(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),a=Object.assign(i,e.query);let c=t.stringify(a,r);c&&(c=`?${c}`);let d=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(e.url);return e.fragmentIdentifier&&(d=`#${s(e.fragmentIdentifier,r)}`),`${n}${c}${d}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:i,query:s,fragmentIdentifier:a}=t.parseUrl(e,n);return t.stringifyUrl({url:i,query:o(s,r),fragmentIdentifier:a},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?t=>!r.includes(t):(t,e)=>!r(t,e);return t.pick(e,o,n)}}(Rt);class qt{static pageToAllList(t,e){return i(this,void 0,void 0,(function*(){const r=[];for(let n=1,o=!0;o;n++){const i=yield t(Object.assign(Object.assign({},e),{page:n,limit:this.MaxLimit}));o=i.has_more,r.push(...i.items)}return r}))}}qt.MaxLimit=100;class Wt{constructor(t){this.ajax=t}list(t){return i(this,void 0,void 0,(function*(){return this.ajax.get("/notes",t)}))}get(t,e){return i(this,void 0,void 0,(function*(){return this.ajax.get(`/notes/${t}`,{fields:e})}))}create(t){return i(this,void 0,void 0,(function*(){return this.ajax.post("/notes",t)}))}update(t){return i(this,void 0,void 0,(function*(){const{id:e}=t,r=o(t,["id"]);return yield this.ajax.put(`/notes/${e}`,r)}))}remove(t){return i(this,void 0,void 0,(function*(){return this.ajax.delete(`/notes/${t}`)}))}tagsById(t){return qt.pageToAllList((t=>{var{id:e}=t,r=o(t,["id"]);return this.ajax.get(`/notes/${e}/tags`,Object.assign({},r))}),{id:t})}resourcesById(t,e=["id","title"]){return i(this,void 0,void 0,(function*(){return qt.pageToAllList((t=>{var{id:r}=t,n=o(t,["id"]);return this.ajax.get(`/notes/${r}/resources`,Object.assign({fields:e},n))}),{id:t})}))}}class Dt{constructor(t){this.ajax=t}list(t){return i(this,void 0,void 0,(function*(){return yield this.ajax.get("/tags",t)}))}get(t){return i(this,void 0,void 0,(function*(){return yield this.ajax.get(`/tags/${t}`)}))}create(t){return i(this,void 0,void 0,(function*(){return yield this.ajax.post("/tags",t)}))}update(t){return i(this,void 0,void 0,(function*(){const{id:e}=t,r=o(t,["id"]);return yield this.ajax.post(`/tags/${e}`,r)}))}remove(t){return i(this,void 0,void 0,(function*(){return yield this.ajax.delete(`/tags/${t}`)}))}notesByTagId(t){var{id:e}=t,r=o(t,["id"]);return i(this,void 0,void 0,(function*(){return yield this.ajax.get(`/tags/${e}/notes`,r)}))}addTagByNoteId(t,e){return i(this,void 0,void 0,(function*(){return yield this.ajax.post(`/tags/${t}/notes/`,{id:e})}))}removeTagByNoteId(t,e){return i(this,void 0,void 0,(function*(){return yield this.ajax.delete(`/tags/${t}/notes/${e}`)}))}}(Lt=Bt||(Bt={}))[Lt.Note=1]="Note",Lt[Lt.Folder=2]="Folder",Lt[Lt.Setting=3]="Setting",Lt[Lt.Resource=4]="Resource",Lt[Lt.Tag=5]="Tag",Lt[Lt.NoteTag=6]="NoteTag",Lt[Lt.Search=7]="Search",Lt[Lt.Alarm=8]="Alarm",Lt[Lt.MasterKey=9]="MasterKey",Lt[Lt.ItemChange=10]="ItemChange",Lt[Lt.NoteResource=11]="NoteResource",Lt[Lt.ResourceLocalState=12]="ResourceLocalState",Lt[Lt.Revision=13]="Revision",Lt[Lt.Migration=14]="Migration",Lt[Lt.SmartFilter=15]="SmartFilter";class Mt{constructor(t){this.ajax=t}search(t){return i(this,void 0,void 0,(function*(){Mt.TypeEnumMap[8]="";const{type:e}=t,r=o(t,["type"]);return this.ajax.get("/search",Object.assign(Object.assign({},r),{type:Mt.TypeEnumMap[e]}))}))}}Mt.TypeEnumMap={[Bt.Note]:"note",[Bt.Folder]:"folder",[Bt.Setting]:"setting",[Bt.Resource]:"resource",[Bt.Tag]:"tag",[Bt.NoteTag]:"note_tag",[Bt.Search]:"search",[Bt.Alarm]:"alarm",[Bt.MasterKey]:"master_key",[Bt.ItemChange]:"item_change",[Bt.NoteResource]:"note_resource",[Bt.ResourceLocalState]:"resource_local_state",[Bt.Revision]:"revision",[Bt.Migration]:"migration",[Bt.SmartFilter]:"smart_filter"};class Jt{constructor(t){this.ajax=t}pingPort(t){return i(this,void 0,void 0,(function*(){return"JoplinClipperServer"===(yield this.ajax.request({url:`http://localhost:${t}/ping`,method:"get",responseType:"text"}))}))}static range(t,e){const r=[];for(let n=t;n<e;n++)r.push(n);return r}scan(){return i(this,void 0,void 0,(function*(){const t=yield Promise.all(Jt.range(41184,41195).filter((t=>i(this,void 0,void 0,(function*(){try{return yield this.pingPort(t)}catch(Lt){return!1}})))));if(0===t.length)throw new Error("Joplin's port is not scanned");return t[0]}))}ping(){return i(this,void 0,void 0,(function*(){return this.pingPort(this.ajax.config.port)}))}}class zt{constructor(t){this.ajax=t}list(t){return i(this,void 0,void 0,(function*(){return this.ajax.get("/folders",t)}))}listAll(){return i(this,void 0,void 0,(function*(){return this.ajax.get("/folders",{as_tree:1})}))}get(t){return i(this,void 0,void 0,(function*(){return this.ajax.get(`/folders/${t}`)}))}create(t){return i(this,void 0,void 0,(function*(){return this.ajax.post("/folders",t)}))}update(t){return i(this,void 0,void 0,(function*(){const{id:e}=t,r=o(t,["id"]);return this.ajax.put(`/folders/${e}`,r)}))}remove(t){return i(this,void 0,void 0,(function*(){return this.ajax.delete(`/folders/${t}`)}))}notesByFolderId(t,e){return i(this,void 0,void 0,(function*(){return yield qt.pageToAllList((t=>{var{id:e}=t,r=o(t,["id"]);return this.ajax.get(`/folders/${e}/notes`,r)}),{id:t,fields:e})}))}}class Ht{constructor(t){this.ajax=t}list(t){return i(this,void 0,void 0,(function*(){return yield this.ajax.get("/resources",t)}))}get(t,e){return i(this,void 0,void 0,(function*(){return yield this.ajax.get(`/resources/${t}`,{fields:e})}))}create(t){return i(this,void 0,void 0,(function*(){const e=new s;return e.append("props",JSON.stringify({title:t.title})),e.append("data",t.data),yield this.ajax.postFormData("/resources",{props:JSON.stringify({title:t.title}),data:t.data})}))}update(t){return i(this,void 0,void 0,(function*(){const{id:e}=t,r=o(t,["id"]);return yield this.ajax.put(`/resources/${e}`,r)}))}remove(t){return i(this,void 0,void 0,(function*(){return yield this.ajax.delete(`/resources/${t}`)}))}fileByResourceId(t){return i(this,void 0,void 0,(function*(){const e=yield this.ajax.get(`/resources/${t}/file`,{},{responseType:"arraybuffer"});return Buffer.from(e,"binary")}))}}!function(t){t.OpenAndWatch="openAndWatch",t.StopWatching="stopWatching",t.NoteIsWatched="noteIsWatched"}(Ut||(Ut={}));class Kt{constructor(t){this.ajax=t}openAndWatch(t){return this.baseAction(Ut.OpenAndWatch,t)}stopWatching(t){return this.baseAction(Ut.StopWatching,t)}noteIsWatched(t){return i(this,void 0,void 0,(function*(){return this.isWatch(t)}))}isWatch(t){return i(this,void 0,void 0,(function*(){return this.baseAction(Ut.NoteIsWatched,t)}))}baseAction(t,e){return i(this,void 0,void 0,(function*(){return this.ajax.post("/services/externalEditWatcher",{action:t,noteId:e})}))}}!function(t){t.OpenAndWatch="openAndWatch",t.Watch="watch",t.StopWatching="stopWatching",t.NoteIsWatched="isWatched"}(Ft||(Ft={}));class Vt{constructor(t){this.ajax=t}openAndWatch(t){return this.baseAction(Ft.OpenAndWatch,t)}watch(t){return this.baseAction(Ft.Watch,t)}stopWatching(t){return this.baseAction(Ft.StopWatching,t)}noteIsWatched(t){return i(this,void 0,void 0,(function*(){return this.baseAction(Ft.NoteIsWatched,t)}))}baseAction(t,e){return i(this,void 0,void 0,(function*(){return this.ajax.post("/services/resourceEditWatcher",{action:t,resourceId:e})}))}}class Xt{constructor(t){this.ajax=t,this.noteApi=new Wt(this.ajax)}rename(t,e){return this.noteApi.update({id:t,title:e})}move(t,e){return this.noteApi.update({id:t,parent_id:e})}toggleTodo(t,e){return i(this,void 0,void 0,(function*(){const r=yield this.noteApi.get(t,["id","is_todo","todo_completed"]);r.is_todo&&(yield this.noteApi.update({id:r.id,todo_completed:e||(0===r.todo_completed?1:0)}))}))}}class Gt{constructor(t){this.ajax=t,this.folderApi=new zt(this.ajax)}rename(t,e){return this.folderApi.update({id:t,title:e})}path(t){return i(this,void 0,void 0,(function*(){if(!t)return[];const e=yield this.folderApi.get(t);return e.parent_id?(yield this.path(e.parent_id)).concat([e]):[e]}))}move(t,e){return i(this,void 0,void 0,(function*(){if(t!==e){if((yield this.path(e)).some((e=>t===e.id)))throw new Error("Cannot move directory to subdirectory");yield this.folderApi.update({id:t,parent_id:e})}}))}}class Zt{constructor(){this.port=41184,this.token=""}}const Qt={method:"get",data:void 0,headers:{},responseType:"json"},Yt="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||{};class te{constructor(t){this.config=t}request(t){return i(this,void 0,void 0,(function*(){"undefined"==typeof fetch&&Reflect.set(Yt,"fetch",(yield r((()=>import("./index.77080304.js")),["./assets/index.77080304.js","./assets/vendor.bd0c5dc4.js"])).default),"undefined"==typeof FormData&&Reflect.set(Yt,"FormData",(yield r((()=>Promise.resolve().then((function(){return a}))),void 0)).default);const e=Object.assign(Object.assign({},Qt),t);return(yield Et.request({url:e.url,method:e.method,data:e.data,headers:e.headers,responseType:e.responseType})).data}))}baseUrl(t,e){const r=Rt.stringify(Object.assign(Object.assign({},e),this.config),{arrayFormat:"comma"});return`http://localhost:${this.config.port}${t}?${r}`}get(t,e,r){return this.request(Object.assign(Object.assign({url:this.baseUrl(t,e)},r),{method:"get"}))}post(t,e,r){return this.request(Object.assign(Object.assign({url:this.baseUrl(t),data:e},r),{method:"post"}))}put(t,e,r){return this.request(Object.assign(Object.assign({url:this.baseUrl(t),data:e},r),{method:"put"}))}delete(t,e,r){return this.request(Object.assign(Object.assign({url:this.baseUrl(t),data:e},r),{method:"delete"}))}postFormData(t,e){return i(this,void 0,void 0,(function*(){const r=new FormData;Object.entries(e).forEach((([t,e])=>r.append(t,e)));const n=yield fetch(this.baseUrl(t),{method:"post",body:r});return yield n.json()}))}}class ee{constructor(){this.config=new Zt,this.ajax=new te(this.config),this.folderApi=new zt(this.ajax),this.folderExtApi=new Gt(this.ajax),this.joplinApi=new Jt(this.ajax),this.noteActionApi=new Kt(this.ajax),this.noteApi=new Wt(this.ajax),this.noteExtApi=new Xt(this.ajax),this.resourceActionApi=new Vt(this.ajax),this.resourceApi=new Ht(this.ajax),this.searchApi=new Mt(this.ajax),this.tagApi=new Dt(this.ajax)}set token(t){this.config.token=t}set port(t){this.config.port=t}}const re=new ee;
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
function ne(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(e){i(e)}}function a(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}var oe,ie;Object.entries(re).forEach((([t,e])=>{Reflect.set(re,t,class{static scan(t){const e=new Set(["constructor"]);return Reflect.ownKeys(Reflect.getPrototypeOf(t)).filter((r=>!e.has(r)&&t[r]instanceof Function))}static bindMethodThis(t){return this.scan(t).forEach((e=>{const r=e;Reflect.set(t,r,t[r].bind(t))})),t}}.bindMethodThis(e))})),(ie=oe||(oe={})).Xlsx="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ie.Zip="application/zip",ie.Pdf="application/pdf";class se{static dataURItoBlob(t){const e=atob(t.split(",")[1]),r=t.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(e.length),o=new Uint8Array(n);for(let i=0;i<e.length;i++)o[i]=e.charCodeAt(i);return new Blob([n],{type:r})}static blobToFile(t,e){const r=t;return r.lastModifiedDate=new Date,r.name=e,t}static arrayBufferToBlob(t,e){return new Blob([new Uint8Array(t).buffer],e)}static initLookup(){const t=new Uint8Array(256);for(let e=0;e<se.chars.length;e++)t[se.chars.charCodeAt(e)]=e;return t}static arrayBufferToBase64(t){let e,r=new Uint8Array(t),n=r.length,o="";for(e=0;e<n;e+=3)o+=se.chars[r[e]>>2],o+=se.chars[(3&r[e])<<4|r[e+1]>>4],o+=se.chars[(15&r[e+1])<<2|r[e+2]>>6],o+=se.chars[63&r[e+2]];return n%3==2?o=o.substring(0,o.length-1)+"=":n%3==1&&(o=o.substring(0,o.length-2)+"=="),o}static base64ToArrayBuffer(t){let e=.75*t.length;const r=t.length;let n,o,i,s,a,c=0;"="===t[t.length-1]&&(e--,"="===t[t.length-2]&&e--);const u=new ArrayBuffer(e),d=new Uint8Array(u);for(n=0;n<r;n+=4)o=se.lookup[t.charCodeAt(n)],i=se.lookup[t.charCodeAt(n+1)],s=se.lookup[t.charCodeAt(n+2)],a=se.lookup[t.charCodeAt(n+3)],d[c++]=o<<2|i>>4,d[c++]=(15&i)<<4|s>>2,d[c++]=(3&s)<<6|63&a;return u}static arrayBufferToString(t){return new Promise(((e,r)=>{const n=new Blob([t]),o=new FileReader;o.addEventListener("load",(()=>e(o.result))),o.addEventListener("error",r),o.readAsText(n,"utf-8")}))}static arrayBufferToJson(t){return ne(this,void 0,void 0,(function*(){return JSON.parse(yield this.arrayBufferToString(t))}))}}se.chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",se.lookup=se.initLookup(),se.ArrayBufferToJson=se.arrayBufferToJson;class ae{constructor(t){this.storage=t,this.clear=()=>{this.storage.clear()},this.getItem=t=>this.storage.getItem(t),this.key=t=>this.storage.key(t),this.removeItem=t=>{this.storage.removeItem(t)},this.setItem=(t,e)=>{this.storage.setItem(t,e)}}get length(){return this.storage.length}}function ce(t){const e=new Set(["storage","length","clear","getItem","setItem","removeItem","key"]);return new Proxy(new ae(t),{get(t,r,n){if(e.has(r))return Reflect.get(t,r,n);try{return JSON.parse(t.getItem(r.toString()))}catch(o){return null}},set:(t,r,n,o)=>e.has(r)?Reflect.set(t,r,o):(t.setItem(r.toString(),null!=n?JSON.stringify(n):n),!0)})}function ue(t,e=t.substr(t.lastIndexOf("/")+1)){return ne(this,void 0,void 0,(function*(){const r=document.createElement("a");r.download=e,r.style.display="none",r.href=t,document.body.appendChild(r),r.click(),document.body.removeChild(r)}))}const de=new ee,fe=ce(localStorage);de.token=null==(t=fe.settings)?void 0:t.token,de.port=null==(e=fe.settings)?void 0:e.port;export{n as _,ce as a,ue as i,de as j,qt as n};
