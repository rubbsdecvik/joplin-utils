import{C as r}from"./vendor.2849723c.js";
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
***************************************************************************** */var n=function(){return(n=Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r}).apply(this,arguments)};function t(t,e,o){void 0===e&&(e=[]),void 0===o&&(o={loading:!1});var u,a,c=r.exports.useRef(0),i=(u=r.exports.useRef(!1),a=r.exports.useCallback((function(){return u.current}),[]),r.exports.useEffect((function(){return u.current=!0,function(){u.current=!1}}),[]),a),s=r.exports.useState(o),f=s[0],l=s[1];return[f,r.exports.useCallback((function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var o=++c.current;return l((function(r){return n(n({},r),{loading:!0})})),t.apply(void 0,r).then((function(r){return i()&&o===c.current&&l({value:r,loading:!1}),r}),(function(r){return i()&&o===c.current&&l({error:r,loading:!1}),r}))}),e)]}export{t as u};
