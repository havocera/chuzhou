(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-456aaa86"],{"6a75":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("div",{staticStyle:{"min-height":"5vw"}}),a("el-main",{staticClass:"main_sym"},[a("div",{staticClass:"title"},[t._v("溯源码信息查询")]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"textfi",attrs:{type:"text",placeholder:"请输入溯源码"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"btn",on:{click:t.queryQy}},[t._v("查询")])])]),a("div",{staticClass:"header2"}),a("el-footer",{staticClass:"footer"},[t._v(" 版权所有：滁州学院"),a("br"),t._v(" 技术支持：安徽椒图信息科技有限公司 ")])],1)],1)},i=[],r=a("1da1"),s=(a("96cf"),{data:function(){return{tokenStr:"",queryInfo:{token:"",query:"",page:1,pageSize:5},query:"",total:0,tableData:[]}},created:function(){this.getDataList()},methods:{getDataList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.queryInfo.token=t.tokenStr,e.next=3,t.$http.post("SelectBusiness",{query:t.query});case 3:a=e.sent,n=a.data,console.log(n),t.tableData=n.data,t.total=n.data.length;case 8:case"end":return e.stop()}}),e)})))()},queryQy:function(){this.$notify({title:"警告",message:"溯源码信息尚未接入！",type:"warning"})},opendetail:function(t){console.log(t),this.$router.push({path:"bankqyinfo",query:{qydm:t}})}}}),o=s,u=(a("f8a7"),a("2877")),c=Object(u["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports},"7bad":function(t,e,a){},f8a7:function(t,e,a){"use strict";a("7bad")}}]);
//# sourceMappingURL=chunk-456aaa86.3eb1befa.js.map