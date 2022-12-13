(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16d78329"],{"425e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("产品生产信息")]),a("el-breadcrumb-item",[e._v("上传产品生产信息")])],1),a("el-card",{staticClass:"box-card"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入产品名称"},on:{clear:e.getDataList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getDataList},slot:"append"})],1)],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("新增产品生产信息")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"编号",type:"index"}}),a("el-table-column",{attrs:{label:"生产企业名称",prop:"qymc"}}),a("el-table-column",{attrs:{label:"产品名称",prop:"cpmc"}}),a("el-table-column",{attrs:{label:"产品规格",prop:"cpgg"}}),a("el-table-column",{attrs:{label:"生产负责人",prop:"scz"}}),a("el-table-column",{attrs:{label:"产地",prop:"chandi"}}),a("el-table-column",{attrs:{label:"生产日期",prop:"rq"}}),a("el-table-column",{attrs:{label:"批次号",prop:"pch"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top-end"}},[a("el-button",{attrs:{type:"warning",icon:"el-icon-delete"},on:{click:function(a){return e.delInfo(t.row.bh)}}})],1)]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total",total:e.total,"page-size":e.queryInfo.pageSize},on:{"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"新增产品生产信息",visible:e.addDialogVisible,width:"40%"},on:{"update:visible":function(t){e.addDialogVisible=t}}},[a("el-form",{ref:"addFormRef",attrs:{size:"medium",rules:e.rules,model:e.addFormInfo,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"产地名称",prop:"chandi"}},[a("el-select",{attrs:{placeholder:"请选择作业地块"},model:{value:e.addFormInfo.chandi,callback:function(t){e.$set(e.addFormInfo,"chandi",t)},expression:"addFormInfo.chandi"}},e._l(e.selectchandi,(function(e){return a("el-option",{key:e.cdbh,attrs:{label:e.chandi,value:e.chandi}})})),1)],1),a("el-form-item",{attrs:{label:"产品名称",prop:"cpbh"}},[a("el-select",{attrs:{placeholder:"请选择产品"},model:{value:e.addFormInfo.cpbh,callback:function(t){e.$set(e.addFormInfo,"cpbh",t)},expression:"addFormInfo.cpbh"}},e._l(e.selectProduct,(function(e){return a("el-option",{key:e.bh,attrs:{label:e.cpmc,value:e.bh}})})),1)],1),a("el-form-item",{attrs:{label:"生产负责人",prop:"scz"}},[a("el-input",{model:{value:e.addFormInfo.scz,callback:function(t){e.$set(e.addFormInfo,"scz",t)},expression:"addFormInfo.scz"}})],1),a("el-form-item",{attrs:{label:"生产日期",prop:"rq"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.addFormInfo.rq,callback:function(t){e.$set(e.addFormInfo,"rq",t)},expression:"addFormInfo.rq"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addFormSubmit}},[e._v("确 定")])],1)],1)],1)],1)},n=[],o=a("1da1"),l=(a("96cf"),{data:function(){return{tokenStr:"",queryInfo:{token:"",query:"",page:1,pageSize:5},total:0,tableData:[],addDialogVisible:!1,addFormInfo:{token:"",chandi:"",cpbh:"",cpmc:"",scz:"",rq:""},selectchandi:[],selectProduct:[]}},created:function(){this.tokenStr=window.sessionStorage.getItem("token"),this.getDataList()},methods:{getDataList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.queryInfo.token=e.tokenStr,t.next=3,e.$http.post("ProductionInfo",e.queryInfo);case 3:return a=t.sent,r=a.data,e.tableData=r.data.result,e.total=r.data.total,t.next=9,e.$http.post("SelectPlace",{token:e.tokenStr});case 9:return n=t.sent,o=n.data,e.selectchandi=o.data,t.next=14,e.$http.post("SelectProduction",{token:e.tokenStr});case 14:l=t.sent,c=l.data,e.selectProduct=c.data;case 17:case"end":return t.stop()}}),t)})))()},handleCurrentChange:function(e){this.queryInfo.page=e,this.getDataList()},addFormSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.addFormInfo.token=e.tokenStr,t.next=3,e.$http.post("AddProductionInfo",e.addFormInfo);case 3:a=t.sent,r=a.data,console.log(r),0==r.code?(e.$message({message:"添加产品生产信息成功！",type:"success"}),e.getDataList(),e.addDialogVisible=!1):e.$message({message:"添加产品生产信息失败！",type:"error"});case 7:case"end":return t.stop()}}),t)})))()},delInfo:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm("此操作将永久删除该条信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(r=a.sent,"confirm"==r){a.next=5;break}return a.abrupt("return",t.$message.info("取消删除"));case 5:return a.next=7,t.$http.post("DelProductionInfo",{token:t.tokenStr,bh:e});case 7:if(n=a.sent,200===n.status){a.next=10;break}return a.abrupt("return",t.$message.error("删除失败"));case 10:t.$message.success("删除成功"),t.getDataList(),console.log(n);case 13:case"end":return a.stop()}}),a)})))()}}}),c=l,s=(a("d05a"),a("2877")),i=Object(s["a"])(c,r,n,!1,null,"5657dce5",null);t["default"]=i.exports},"7bfa":function(e,t,a){},d05a:function(e,t,a){"use strict";a("7bfa")}}]);
//# sourceMappingURL=chunk-16d78329.d7cbc060.js.map