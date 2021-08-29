const e=Symbol("Comlink.proxy"),t=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,s=new Map([["proxy",{canHandle:t=>a(t)&&t[e],serialize(e){const{port1:t,port2:n}=new MessageChannel;return o(e,t),[n,[n]]},deserialize:e=>(e.start(),c(e))}],["throw",{canHandle:e=>a(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function o(t,n=self){n.addEventListener("message",(function a(s){if(!s||!s.data)return;const{id:c,type:u,path:l}=Object.assign({path:[]},s.data),p=(s.data.argumentList||[]).map(d);let h;try{const n=l.slice(0,-1).reduce(((e,t)=>e[t]),t),r=l.reduce(((e,t)=>e[t]),t);switch(u){case"GET":h=r;break;case"SET":n[l.slice(-1)[0]]=d(s.data.value),h=!0;break;case"APPLY":h=r.apply(n,p);break;case"CONSTRUCT":h=function(t){return Object.assign(t,{[e]:!0})}(new r(...p));break;case"ENDPOINT":{const{port1:e,port2:n}=new MessageChannel;o(t,n),h=function(e,t){return m.set(e,t),e}(e,[e])}break;case"RELEASE":h=void 0;break;default:return}}catch(g){h={value:g,[r]:0}}Promise.resolve(h).catch((e=>({value:e,[r]:0}))).then((e=>{const[t,r]=f(e);n.postMessage(Object.assign(Object.assign({},t),{id:c}),r),"RELEASE"===u&&(n.removeEventListener("message",a),i(n))}))})),n.start&&n.start()}function i(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function c(e,t){return l(e,[],t)}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function l(e,r=[],a=function(){}){let s=!1;const o=new Proxy(a,{get(t,a){if(u(s),a===n)return()=>h(e,{type:"RELEASE",path:r.map((e=>e.toString()))}).then((()=>{i(e),s=!0}));if("then"===a){if(0===r.length)return{then:()=>o};const t=h(e,{type:"GET",path:r.map((e=>e.toString()))}).then(d);return t.then.bind(t)}return l(e,[...r,a])},set(t,n,a){u(s);const[o,i]=f(a);return h(e,{type:"SET",path:[...r,n].map((e=>e.toString())),value:o},i).then(d)},apply(n,a,o){u(s);const i=r[r.length-1];if(i===t)return h(e,{type:"ENDPOINT"}).then(d);if("bind"===i)return l(e,r.slice(0,-1));const[c,m]=p(o);return h(e,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:c},m).then(d)},construct(t,n){u(s);const[a,o]=p(n);return h(e,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:a},o).then(d)}});return o}function p(e){const t=e.map(f);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const m=new WeakMap;function f(e){for(const[t,n]of s)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},m.get(e)||[]]}function d(e){switch(e.type){case"HANDLER":return s.get(e.name).deserialize(e.value);case"RAW":return e.value}}function h(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}export{c as w};
