(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b0598e8"],{"3aef":function(t,s,e){},cead:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"select_system"},[e("div",{staticClass:"select_system_shadow"}),e("div",{staticClass:"select_system_header"},[t._m(0),e("div",{staticClass:"select_system_header_left"}),e("div",{staticClass:"select_system_header_right"},[e("el-dropdown",{on:{command:t.handleCommand}},[e("div",{staticClass:"user_name"},[e("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#5bd5ff"}},[t._v(" "+t._s(t.BusinessInfo.qymc)+" "),"系统管理员"==t.userinfo.groupname?e("i",{staticStyle:{}},[t._v("系统管理员")]):t._e(),t._v(" "),e("i",{staticClass:"el-icon-caret-bottom"})])]),e("el-dropdown-menu",{staticClass:"dropme",attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"a",icon:"el-icon-key"}},[t._v("修改密码")]),e("el-dropdown-item",{attrs:{command:"b",icon:"el-icon-user-solid"}},[t._v("个人中心")]),e("el-dropdown-item",{attrs:{command:"c",icon:"el-icon-warning"}},[t._v("关于我们")])],1)],1),e("div",{staticClass:"exit_box",on:{click:t.tologin}},[t._v("退出")])],1)]),e("div",{staticClass:"circle_box1"},[e("div",{staticClass:"circle_box2 show_circle"}),e("div",{staticClass:"circle_box3 show_circle hide_circle"}),e("div",{staticClass:"circle_box4 rotate_circle"}),e("div",{staticClass:"circle_box5 rotate_circle1"},[e("div",{staticClass:"system_box show_system_box",style:{opacity:t.deg}},["企业"==t.userinfo.groupname?e("div",{staticClass:"system2 system2_1",on:{click:t.tocunzheng}},[e("div",{staticClass:"right_text"},[t._v("徽茶品牌区块链存证与智能合约系统")])]):t._e(),"企业"!=t.userinfo.groupname?e("div",{staticClass:"system2 system2_1",on:{click:t.tocunzhenggov}},[e("div",{staticClass:"right_text"},[t._v("徽茶品牌区块链存证与智能合约系统")])]):t._e(),"企业"!=t.userinfo.groupname?e("div",{staticClass:"system2 system2_3",on:{click:t.togongyinglian}},[e("div",{staticClass:"right_text"},[t._v("六安瓜片供应链大数据系统")])]):t._e(),"企业"!=t.userinfo.groupname?e("div",{staticClass:"system2 system2_5",on:{click:t.togongyinglian}},[e("div",{staticClass:"left_text"},[t._v("茶叶加工智能化系统")])]):t._e(),"企业"!=t.userinfo.groupname?e("div",{staticClass:"system2 system2_6",on:{click:t.tosy}},[e("div",{staticClass:"right_text"},[t._v("基于区块链的皖西徽茶品牌保护与防伪系统")])]):t._e(),"企业"==t.userinfo.groupname?e("div",{staticClass:"system2 system2_2",on:{click:t.tosy}},[e("div",{staticClass:"right_text"},[t._v("基于区块链的皖西徽茶品牌保护与防伪系统")])]):t._e()])]),t._m(1)])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"select_system_header_title"},[e("div",[t._v("“AIOT+区块链”茶产业技术示范与应用")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"circle_text show_circle_text"},[e("div",[t._v("欢迎光临")]),e("div",[t._v("系统管理平台")])])}],o=e("1da1"),a=(e("96cf"),e("e9c4"),{data:function(){return{userinfo:[],transform:"",deg:0,BusinessInfo:[]}},created:function(){var t=this;this.getUserInfo(),setTimeout((function(){t.deg=1}),1e3)},methods:{handleCommand:function(t){switch(console.log(t),t){case"a":console.log("修改密码");break;case"b":this.$router.push("enterpriseHome");break;case"c":this.$message("安徽椒图信息科技有限公司");break}},getUserInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var e,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.post("BusinessInfo");case 2:e=s.sent,i=e.data,t.userinfo=JSON.parse(window.sessionStorage.getItem("userInfo")),0==i.code&&(window.sessionStorage.setItem("BusinessInfo",JSON.stringify(i.data)),t.BusinessInfo=i.data);case 6:case"end":return s.stop()}}),s)})))()},tologin:function(){this.$router.push("login")},tocunzheng:function(){this.$router.push("cunzhengInfo")},tocunzhenggov:function(){this.$router.push("datav")},togongyinglian:function(){this.$message.error("正在开发中")},tosy:function(){this.$router.push("sydaohang")},toprotectbigdata:function(){console.log(123);var t="http://teabigdata.wtycms.cn/";window.location.href=t}}}),c=a,r=(e("f23d"),e("2877")),l=Object(r["a"])(c,i,n,!1,null,null,null);s["default"]=l.exports},e9c4:function(t,s,e){var i=e("23e7"),n=e("da84"),o=e("d066"),a=e("2ba4"),c=e("e330"),r=e("d039"),l=n.Array,d=o("JSON","stringify"),u=c(/./.exec),_=c("".charAt),f=c("".charCodeAt),m=c("".replace),v=c(1..toString),g=/[\uD800-\uDFFF]/g,h=/^[\uD800-\uDBFF]$/,p=/^[\uDC00-\uDFFF]$/,y=function(t,s,e){var i=_(e,s-1),n=_(e,s+1);return u(h,t)&&!u(p,n)||u(p,t)&&!u(h,i)?"\\u"+v(f(t,0),16):t},C=r((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")}));d&&i({target:"JSON",stat:!0,forced:C},{stringify:function(t,s,e){for(var i=0,n=arguments.length,o=l(n);i<n;i++)o[i]=arguments[i];var c=a(d,null,o);return"string"==typeof c?m(c,g,y):c}})},f23d:function(t,s,e){"use strict";e("3aef")}}]);
//# sourceMappingURL=chunk-5b0598e8.65ddcbc7.js.map