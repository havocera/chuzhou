(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b60f655c"],{"2a7d":function(t,e,a){"use strict";a("bdcb")},"94bc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("el-header",{staticClass:"el-h"},[a("el-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"logo"},[a("span",{staticStyle:{"font-size":"20px",color:"#fff"}},[t._v("食品安全追溯系统--监管系统")])])]),a("el-col",{attrs:{span:12}}),a("el-col",{attrs:{span:6}},[a("el-button",{staticClass:"btnLoginOut",attrs:{icon:"el-icon-switch-button"},on:{click:t.loginOut}},[t._v("退出系统")])],1)],1)],1),a("el-main",{staticClass:"main_sym"},[a("div",{staticClass:"title"},[t._v("企业信息查询")]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"textfi",attrs:{type:"text",placeholder:"请输入企业名称"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"btn",on:{click:t.queryQy}},[t._v("查询")])])])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index",label:"编号"}}),a("el-table-column",{attrs:{prop:"qymc",label:"企业名称",width:"180"}}),a("el-table-column",{attrs:{prop:"fzr",label:"姓名"}}),a("el-table-column",{attrs:{prop:"fzrtel",label:"联系电话"}}),a("el-table-column",{attrs:{prop:"addr",label:"企业地址"}}),a("el-table-column",{attrs:{label:"查看详情",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"查看详情",placement:"top-start"}},[a("a",{attrs:{href:"javascript:viod();"},on:{click:function(a){return t.opendetail(e.row.qydm),!1}}},[t._v("查看详情"),a("i",{staticClass:"el-icon-arrow-right"})])])]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total",total:t.total,"page-size":t.queryInfo.pageSize},on:{"current-change":t.handleCurrentChange}})],1)},l=[],o=a("1da1"),r=(a("96cf"),{data:function(){return{tokenStr:"",queryInfo:{token:"",query:"",page:1,pageSize:5},query:"",total:0,tableData:[]}},created:function(){this.getDataList()},methods:{loginOut:function(){window.sessionStorage.clear(),this.$router.push("/index")},getDataList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.queryInfo.token=t.tokenStr,e.next=3,t.$http.post("SelectBusiness",{query:t.query});case 3:a=e.sent,n=a.data,console.log(n),t.tableData=n.data,t.total=n.data.length;case 8:case"end":return e.stop()}}),e)})))()},queryQy:function(){this.getDataList()},opendetail:function(t){console.log(t),this.$router.push({path:"bankqyinfo",query:{qydm:t}})},opendata:function(t){console.log(t),this.$router.push({path:"bankqyanalysis",query:{qydm:t}})}}}),s=r,i=(a("2a7d"),a("2877")),c=Object(i["a"])(s,n,l,!1,null,"350d410e",null);e["default"]=c.exports},bdcb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b60f655c.f36a83b0.js.map