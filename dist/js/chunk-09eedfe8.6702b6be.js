(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09eedfe8"],{"0d93":function(t,e,a){},"77ed":function(t,e,a){"use strict";a("0d93")},a276:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",{staticClass:"indexContainer"},[a("el-header",[a("el-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"logo"},[a("span",{staticStyle:{"font-size":"20px",color:"#fff"}},[t._v("食品安全追溯系统--物流信息查询管理系统")])])]),a("el-col",{attrs:{span:12}}),a("el-col",{attrs:{span:6}},[a("el-button",{staticClass:"btnLoginOut",attrs:{icon:"el-icon-switch-button"},on:{click:t.loginOut}},[t._v("退出系统")])],1)],1)],1),a("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2"},[a("i",{staticClass:"el-icon-shopping-bag-1 grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.Num.business))]),a("div",[t._v("企业数量")])]),a("div",{staticClass:"grid-button"})])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-s-goods grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.Num.client))]),a("div",[t._v("客户数量")])]),a("div",{staticClass:"grid-button"})])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-4"},[a("i",{staticClass:"el-icon-truck grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.Num.transport))]),a("div",[t._v("物流信息")])]),a("div",{staticClass:"grid-button"})])])],1)],1),a("el-card",{staticClass:"box-card"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入企业名称"},on:{clear:t.getDataList},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getDataList},slot:"append"})],1)],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("查询企业物流信息")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index",label:"编号"}}),a("el-table-column",{attrs:{prop:"qymc",label:"企业名称",width:"180"}}),a("el-table-column",{attrs:{prop:"client_firm",label:"购买方",width:"180"}}),a("el-table-column",{attrs:{prop:"client_name",label:"客户姓名"}}),a("el-table-column",{attrs:{prop:"client_phone",label:"客户电话"}}),a("el-table-column",{attrs:{prop:"client_source",label:"客户来源"}}),a("el-table-column",{attrs:{prop:"client_address",label:"客户地址"}}),a("el-table-column",{attrs:{prop:"courier_number",label:"物流单号"}}),a("el-table-column",{attrs:{prop:"license",label:"运输车辆"}}),a("el-table-column",{attrs:{prop:"number",label:"数量"}}),a("el-table-column",{attrs:{prop:"order_number",label:"订单编号"}}),a("el-table-column",{attrs:{prop:"destination",label:"目的地"}}),a("el-table-column",{attrs:{prop:"shiper_phone",label:"发货地"}}),a("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"查看",placement:"top-start"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-view"},on:{click:function(a){return t.editInfo(e.row.id)}}})],1)]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total",total:t.total,"page-size":t.queryInfo.pageSize},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},r=[],s=a("1da1"),i=(a("96cf"),{data:function(){return{tokenStr:"",queryInfo:{token:"",query:"",page:1,pageSize:5},total:0,tableData:[],Num:{}}},created:function(){this.tokenStr=window.sessionStorage.getItem("token"),this.getDataList(),this.getNumData()},methods:{loginOut:function(){window.sessionStorage.clear(),this.$router.push("/index")},getDataList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.queryInfo.token=t.tokenStr,e.next=3,t.$http.post("SelectTransportList",t.queryInfo);case 3:a=e.sent,n=a.data,console.log(n.data.result),t.tableData=n.data.result,t.total=n.data.total;case 8:case"end":return e.stop()}}),e)})))()},getNumData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("getCountforregulator");case 2:a=e.sent,n=a.data,console.log(n),t.Num=n.data;case 6:case"end":return e.stop()}}),e)})))()},handleCurrentChange:function(t){this.queryInfo.page=t,this.getDataList()},addFormSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("AddClientInfo",t.addClientInfo);case 2:t.getDataList(),t.addDialogVisible=!1,t.$refs.addFormRef.resetFields();case 5:case"end":return e.stop()}}),e)})))()},editInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.post("EditClientInfo",{id:t});case 2:n=a.sent,r=n.data,console.log(r.data),e.editClientInfo=r.data,e.editDialogVisible=!0;case 7:case"end":return a.stop()}}),a)})))()},editFormSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("DoEditClientInfo",t.editClientInfo);case 2:t.editDialogVisible=!1,t.$message.success("编辑成功"),t.getDataList();case 5:case"end":return e.stop()}}),e)})))()},delInfo:function(t){var e=this;this.$confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$http.post("DelClientInfo",{id:t}),e.$message({type:"success",message:"删除成功!"}),e.getDataList()})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}}),o=i,l=(a("77ed"),a("2877")),c=Object(l["a"])(o,n,r,!1,null,"7df5ab84",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-09eedfe8.6702b6be.js.map