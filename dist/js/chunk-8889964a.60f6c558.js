(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8889964a"],{"25e6":function(e,t,r){},"36b2":function(e,t,r){"use strict";var o=r("bc3a"),n=r.n(o);n.a.create({baseURL:"http://czapi.wtycms.cn/",timeout:5e3}),r("4328")},4127:function(e,t,r){"use strict";var o=r("d233"),n=r("b313"),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,n,a,i,s,c,u,d,f,p,g){var y=t;if("function"===typeof c)y=c(r,y);else if(y instanceof Date)y=f(y);else if(null===y){if(a)return s&&!g?s(r,l.encoder):r;y=""}if("string"===typeof y||"number"===typeof y||"boolean"===typeof y||o.isBuffer(y)){if(s){var m=g?r:s(r,l.encoder);return[p(m)+"="+p(s(y,l.encoder))]}return[p(r)+"="+p(String(y))]}var h,b=[];if("undefined"===typeof y)return b;if(Array.isArray(c))h=c;else{var w=Object.keys(y);h=u?w.sort(u):w}for(var v=0;v<h.length;++v){var O=h[v];i&&null===y[O]||(b=Array.isArray(y)?b.concat(e(y[O],n(r,O),n,a,i,s,c,u,d,f,p,g)):b.concat(e(y[O],r+(d?"."+O:"["+O+"]"),n,a,i,s,c,u,d,f,p,g)))}return b};e.exports=function(e,t){var r=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof i.delimiter?l.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"===typeof i.skipNulls?i.skipNulls:l.skipNulls,f="boolean"===typeof i.encode?i.encode:l.encode,p="function"===typeof i.encoder?i.encoder:l.encoder,g="function"===typeof i.sort?i.sort:null,y="undefined"!==typeof i.allowDots&&i.allowDots,m="function"===typeof i.serializeDate?i.serializeDate:l.serializeDate,h="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"===typeof i.format)i.format=n["default"];else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,w,v=n.formatters[i.format];"function"===typeof i.filter?(w=i.filter,r=w("",r)):Array.isArray(i.filter)&&(w=i.filter,b=w);var O,j=[];if("object"!==typeof r||null===r)return"";O=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var F=a[O];b||(b=Object.keys(r)),g&&b.sort(g);for(var k=0;k<b.length;++k){var S=b[k];d&&null===r[S]||(j=j.concat(s(r[S],S,F,u,d,f?p:null,w,g,y,m,v,h)))}var x=j.join(c),A=!0===i.addQueryPrefix?"?":"";return x.length>0?A+x:""}},4328:function(e,t,r){"use strict";var o=r("4127"),n=r("9e6a"),a=r("b313");e.exports={formats:a,parse:n,stringify:o}},"578a":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login_content"},[r("el-button",{staticStyle:{position:"absolute",top:"30px",right:"30px"},attrs:{icon:"el-icon-house",circle:""},on:{click:e.toIndex}}),r("div",{staticClass:"box"},[r("div",{staticClass:"login_box"},[r("div",{staticClass:"login_title"},[e._v("欢迎登录")]),r("el-form",{staticClass:"login_form",attrs:{model:e.loginForm}},[r("el-form-item",[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:e.getchange},model:{value:e.loginForm.auth,callback:function(t){e.$set(e.loginForm,"auth",t)},expression:"loginForm.auth"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"请输入用户名"},model:{value:e.loginForm.name,callback:function(t){e.$set(e.loginForm,"name",t)},expression:"loginForm.name"}})],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.loginForm.pwd,callback:function(t){e.$set(e.loginForm,"pwd",t)},expression:"loginForm.pwd"}})],1),r("el-form-item",{staticClass:"btns"},[r("el-button",{staticClass:"login blue",attrs:{type:"success"},on:{click:e.login}},[e._v("登录")]),r("el-button",{staticClass:"login back",attrs:{type:"info"},on:{click:e.toregister}},[e._v("注册")])],1)],1)],1)])],1)},n=[],a=(r("b0c0"),r("e9c4"),r("36b2"),{data:function(){return{options:[{value:1,label:"生产商"}],show3:!1,loginForm:{auth:"",name:"hnkj",pwd:"123456"}}},created:function(){this.loginForm.auth=this.options[0].value},methods:{getchange:function(e){console.log(e),2==e?this.loginForm.name="监管管理员":1==e?this.loginForm.name="物流商":(e=3)&&(this.loginForm.name="hnkj")},toregister:function(){this.$router.push("register")},resetloginForm:function(){this.loginForm.name="",this.loginForm.pwd=""},login:function(){var e=this;window.localStorage.clear(),window.sessionStorage.clear(),this.$http.post("login",{name:this.loginForm.name,pwd:this.loginForm.pwd}).then((function(t){if(0!==t.data.code)return e.$message.error("登录失败！");if(e.$message({message:"登录成功！",type:"success",duration:1e3}),window.sessionStorage.setItem("token",t.data.data.token),window.localStorage.setItem("token",t.data.data.token),"企业"==t.data.data.groupname)e.$router.push("sydaohang"),window.localStorage.setItem("userInfo",JSON.stringify(t.data.data)),window.sessionStorage.setItem("userInfo",JSON.stringify(t.data.data));else if("监管管理员"==t.data.data.groupname)console.log("2"),e.$router.push("qylist"),window.sessionStorage.setItem("token",t.data.data.token),window.sessionStorage.setItem("userInfo",JSON.stringify(t.data.data)),window.localStorage.setItem("userInfo",JSON.stringify(t.data.data));else if("物流商"==t.data.data.groupname)console.log("3"),e.$router.push("TransporterList"),window.sessionStorage.setItem("token",t.data.data.token),window.sessionStorage.setItem("userInfo",JSON.stringify(t.data.data)),window.localStorage.setItem("userInfo",JSON.stringify(t.data.data));else{if("系统管理员"!=t.data.data.groupname)return e.$message.error(t.message);console.log("4"),e.$router.push("index"),window.sessionStorage.setItem("token",t.data.data.token),window.sessionStorage.setItem("userInfo",JSON.stringify(t.data.data)),window.localStorage.setItem("userInfo",JSON.stringify(t.data.data))}}))},toIndex:function(){this.$router.push("index")}}}),i=a,l=(r("7392"),r("2877")),s=Object(l["a"])(i,o,n,!1,null,"69c5c3b0",null);t["default"]=s.exports},7392:function(e,t,r){"use strict";r("25e6")},"9e6a":function(e,t,r){"use strict";var o=r("d233"),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=o.split(t.delimiter,i),s=0;s<l.length;++s){var c,u,d=l[s],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(c=t.decoder(d,a.decoder),u=t.strictNullHandling?null:""):(c=t.decoder(d.slice(0,p),a.decoder),u=t.decoder(d.slice(p+1),a.decoder)),n.call(r,c)?r[c]=[].concat(r[c]).concat(u):r[c]=u}return r},l=function(e,t,r){for(var o=t,n=e.length-1;n>=0;--n){var a,i=e[n];if("[]"===i)a=[],a=a.concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(a=[],a[s]=o):a[l]=o}o=a}return o},s=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=a.exec(o),c=s?o.slice(0,s.index):o,u=[];if(c){if(!r.plainObjects&&n.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}var d=0;while(null!==(s=i.exec(o))&&d<r.depth){if(d+=1,!r.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"===typeof r.depth?r.depth:a.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var n="string"===typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},c=Object.keys(n),u=0;u<c.length;++u){var d=c[u],f=s(d,n[d],r);l=o.merge(l,f,r)}return o.compact(l)}},b313:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)"undefined"!==typeof t[n]&&o.push(t[n]);r.obj[r.prop]=o}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(r[o]=e[o]);return r},l=function e(t,r,n){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=i(t,n)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,a){o.call(t,a)?t[a]&&"object"===typeof t[a]?t[a]=e(t[a],r,n):t.push(r):t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return o.call(t,a)?t[a]=e(t[a],i,n):t[a]=i,t}),a)},s=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",o=0;o<t.length;++o){var a=t.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(o):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(o)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],l=Object.keys(i),s=0;s<l.length;++s){var c=l[s],u=i[c];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:c}),r.push(u))}return a(t)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:s,compact:d,decode:c,encode:u,isBuffer:p,isRegExp:f,merge:l}},e9c4:function(e,t,r){var o=r("23e7"),n=r("da84"),a=r("d066"),i=r("2ba4"),l=r("e330"),s=r("d039"),c=n.Array,u=a("JSON","stringify"),d=l(/./.exec),f=l("".charAt),p=l("".charCodeAt),g=l("".replace),y=l(1..toString),m=/[\uD800-\uDFFF]/g,h=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,w=function(e,t,r){var o=f(r,t-1),n=f(r,t+1);return d(h,e)&&!d(b,n)||d(b,e)&&!d(h,o)?"\\u"+y(p(e,0),16):e},v=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&o({target:"JSON",stat:!0,forced:v},{stringify:function(e,t,r){for(var o=0,n=arguments.length,a=c(n);o<n;o++)a[o]=arguments[o];var l=i(u,null,a);return"string"==typeof l?g(l,m,w):l}})}}]);
//# sourceMappingURL=chunk-8889964a.60f6c558.js.map