(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8bd8f76"],{"285f":function(t,e,a){},"60f11":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("农事作业信息")]),a("el-breadcrumb-item",[t._v("上传农事作业信息")])],1),a("el-card",{staticClass:"box-card"},[a("div",{ref:"nszyChart",staticClass:"nszyChart"}),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入农事作业名称"},on:{clear:t.getDataList},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getDataList},slot:"append"})],1)],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("新增农事作业")])],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:t.Refresh}},[t._v("刷新")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataInfoList}},[a("el-table-column",{attrs:{label:"编号",type:"index"}}),a("el-table-column",{attrs:{label:"生产企业名称",prop:"qymc"}}),a("el-table-column",{attrs:{label:"产地名称",prop:"chandi"}}),a("el-table-column",{attrs:{label:"农事作业",prop:"nszy"}}),a("el-table-column",{attrs:{label:"投入品名称",prop:"trpmc"}}),a("el-table-column",{attrs:{label:"作业人",prop:"zyr"}}),a("el-table-column",{attrs:{label:"作业量",prop:"newZyl"}}),a("el-table-column",{attrs:{label:"日期",prop:"rq"}}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.editInfo(e.row.bh)}}})],1),a("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top-end"}},[a("el-button",{attrs:{type:"warning",icon:"el-icon-delete"},on:{click:function(a){return t.delInfo(e.row.bh)}}})],1)]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total",total:t.total,"page-size":t.queryInfo.pageSize},on:{"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{title:"新增农事作业",visible:t.addDialogVisible,width:"30%"},on:{"update:visible":function(e){t.addDialogVisible=e}}},[a("el-form",{ref:"addFormRef",attrs:{model:t.addFormInfo,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"产地名称","label-width":"100px",prop:"chandi"}},[a("el-select",{attrs:{placeholder:"请选择作业地块"},model:{value:t.addFormInfo.cdbh,callback:function(e){t.$set(t.addFormInfo,"cdbh",e)},expression:"addFormInfo.cdbh"}},t._l(t.selectchandi,(function(t){return a("el-option",{key:t.cdbh,attrs:{label:t.chandi,value:t.cdbh}})})),1)],1),a("el-form-item",{attrs:{label:"农事作业","label-width":"100px",prop:"nszy"}},[a("el-input",{model:{value:t.addFormInfo.nszy,callback:function(e){t.$set(t.addFormInfo,"nszy",e)},expression:"addFormInfo.nszy"}})],1),a("el-form-item",{attrs:{label:"作业人","label-width":"100px",prop:"zyr"}},[a("el-input",{model:{value:t.addFormInfo.zyr,callback:function(e){t.$set(t.addFormInfo,"zyr",e)},expression:"addFormInfo.zyr"}})],1),a("el-form-item",{attrs:{label:"投入品名称","label-width":"100px",prop:"trpmc"}},[a("el-input",{model:{value:t.addFormInfo.trpmc,callback:function(e){t.$set(t.addFormInfo,"trpmc",e)},expression:"addFormInfo.trpmc"}})],1),a("el-form-item",{attrs:{label:"作业量","label-width":"100px",prop:"zyl"}},[a("el-input",{model:{value:t.addFormInfo.zyl,callback:function(e){t.$set(t.addFormInfo,"zyl",e)},expression:"addFormInfo.zyl"}})],1),a("el-form-item",{attrs:{label:"单位","label-width":"100px",prop:"zyldw"}},[a("el-input",{model:{value:t.addFormInfo.zyldw,callback:function(e){t.$set(t.addFormInfo,"zyldw",e)},expression:"addFormInfo.zyldw"}})],1),a("el-form-item",{attrs:{label:"作业日期","label-width":"100px",prop:"rq"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.addFormInfo.rq,callback:function(e){t.$set(t.addFormInfo,"rq",e)},expression:"addFormInfo.rq"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addFormSubmit}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改农事作业",visible:t.editDialogVisible,width:"30%"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[a("el-form",{ref:"editFormRef",attrs:{model:t.editFormInfo,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"产地名称","label-width":"100px",prop:"chandi"}},[a("el-select",{attrs:{placeholder:"请选择作业地块"},model:{value:t.editFormInfo.cdbh,callback:function(e){t.$set(t.editFormInfo,"cdbh",e)},expression:"editFormInfo.cdbh"}},t._l(t.selectchandi,(function(t){return a("el-option",{key:t.cdbh,attrs:{label:t.chandi,value:t.cdbh}})})),1)],1),a("el-form-item",{attrs:{label:"农事作业","label-width":"100px",prop:"nszy"}},[a("el-input",{model:{value:t.editFormInfo.nszy,callback:function(e){t.$set(t.editFormInfo,"nszy",e)},expression:"editFormInfo.nszy"}})],1),a("el-form-item",{attrs:{label:"作业人","label-width":"100px",prop:"zyr"}},[a("el-input",{model:{value:t.editFormInfo.zyr,callback:function(e){t.$set(t.editFormInfo,"zyr",e)},expression:"editFormInfo.zyr"}})],1),a("el-form-item",{attrs:{label:"投入品名称","label-width":"100px",prop:"trpmc"}},[a("el-input",{model:{value:t.editFormInfo.trpmc,callback:function(e){t.$set(t.editFormInfo,"trpmc",e)},expression:"editFormInfo.trpmc"}})],1),a("el-form-item",{attrs:{label:"作业量","label-width":"100px",prop:"zyl"}},[a("el-input",{model:{value:t.editFormInfo.zyl,callback:function(e){t.$set(t.editFormInfo,"zyl",e)},expression:"editFormInfo.zyl"}})],1),a("el-form-item",{attrs:{label:"单位","label-width":"100px",prop:"zyldw"}},[a("el-input",{model:{value:t.addFormInfo.zyldw,callback:function(e){t.$set(t.addFormInfo,"zyldw",e)},expression:"addFormInfo.zyldw"}})],1),a("el-form-item",{attrs:{label:"作业日期","label-width":"100px",prop:"rq"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.editFormInfo.rq,callback:function(e){t.$set(t.editFormInfo,"rq",e)},expression:"editFormInfo.rq"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editFormSubmit}},[t._v("确 定")])],1)],1)],1)],1)},r=[],n=a("1da1"),l=(a("96cf"),a("b0c0"),a("d81d"),{data:function(){return{option:{title:{text:"农事作业详情",textAlign:"auto",left:"center"},legend:{show:!1,data:["农事作业记录"]},tooltip:{show:!0},xAxis:{type:"category",data:[],name:"作业人",triggerEvent:!0},yAxis:{type:"value",name:"作业量（条）",triggerEvent:!0},series:[{name:"农事作业记录",data:[],type:"bar",barWidth:"50"}]},tokenStr:"",queryInfo:{token:"",query:"",page:1,pageSize:5,zyr:""},total:0,dataInfoList:[],addDialogVisible:!1,editDialogVisible:!1,addFormInfo:{token:"",chandi:"",cdbh:"",nszy:"",zyr:"",trpmc:"",zyl:"",zyldw:"",rq:""},editFormInfo:{},selectchandi:[]}},created:function(){this.getTokenStr(),this.getEchatData(),this.getDataList()},mounted:function(){var t=this;this.myChart=this.$echarts.init(this.$refs.nszyChart),this.myChart.setOption(this.option),this.myChart.on("click",(function(e){t.queryInfo.zyr=e.name,t.getDataList()}))},methods:{getTokenStr:function(){this.tokenStr=window.sessionStorage.getItem("token")},getEchatData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("Countfarmoperation",{token:t.tokenStr});case 2:a=e.sent,o=a.data,t.option.xAxis.data=o.data.map((function(t){return{value:t.name}})),t.option.series[0].data=o.data.map((function(t){return{value:t.value}})),t.myChart.setOption(t.option);case 7:case"end":return e.stop()}}),e)})))()},getDataList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o,r,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.queryInfo.token=t.tokenStr,e.next=3,t.$http.post("FarmingoperationsInfo",t.queryInfo);case 3:if(a=e.sent,o=a.data,t.dataInfoList=o.data.result,t.total=o.data.total,console.log(t.dataInfoList),void 0!=t.dataInfoList)for(r=0;r<t.dataInfoList.length;r++)t.dataInfoList[r].newZyl=t.dataInfoList[r].zyl+t.dataInfoList[r].zyldw;return e.next=11,t.$http.post("SelectPlace",{token:t.tokenStr});case 11:n=e.sent,l=n.data,t.selectchandi=l.data;case 14:case"end":return e.stop()}}),e)})))()},handleCurrentChange:function(t){this.queryInfo.page=t,this.getDataList()},addFormSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.addFormInfo.token=t.tokenStr,e.next=3,t.$http.post("AddFarmingoperationsInfo",t.addFormInfo);case 3:t.getDataList(),t.getEchatData(),t.addDialogVisible=!1,t.$refs.addFormRef.resetFields();case 7:case"end":return e.stop()}}),e)})))()},editInfo:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.post("EditFarmingoperationsInfo",{token:e.tokenStr,bh:t});case 2:o=a.sent,r=o.data,e.editFormInfo=r.data,e.editDialogVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},editFormSubmit:function(){this.editFormInfo.token=this.tokenStr,this.$http.post("DoEditFarmingoperationsInfo",this.editFormInfo),this.getDataList(),this.editDialogVisible=!1},delInfo:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$confirm("此操作将永久删除该条农事作业信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(o=a.sent,"confirm"==o){a.next=5;break}return a.abrupt("return",e.$message.info("取消删除"));case 5:return a.next=7,e.$http.post("DelFarmingoperationsInfo",{token:e.tokenStr,bh:t});case 7:if(r=a.sent,200===r.status){a.next=10;break}return a.abrupt("return",e.$message.error("删除农事作业信息失败"));case 10:e.$message.success("删除农事作业信息成功"),e.getDataList(),console.log(r);case 13:case"end":return a.stop()}}),a)})))()},Refresh:function(){this.queryInfo.zyr="",this.getDataList()}}}),i=l,s=(a("7b3c"),a("2877")),d=Object(s["a"])(i,o,r,!1,null,"888b197e",null);e["default"]=d.exports},"7b3c":function(t,e,a){"use strict";a("285f")}}]);
//# sourceMappingURL=chunk-c8bd8f76.f0d3c533.js.map