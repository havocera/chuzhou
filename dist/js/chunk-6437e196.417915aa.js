(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6437e196"],{"996a":function(t,e,r){},"9ca4":function(t,e,r){"use strict";r("996a")},ab77:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("产品信息")]),r("el-breadcrumb-item",[t._v("上传产品信息")])],1),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:6}},[r("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入内容"},on:{clear:t.getproductList},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.queryMsg},slot:"append"})],1)],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("添加产品")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.productList}},[r("el-table-column",{attrs:{label:"编号",type:"index"}}),r("el-table-column",{attrs:{prop:"qymc",label:"生产企业名称",width:"180"}}),r("el-table-column",{attrs:{prop:"cpmc",label:"产品名称",width:"140"}}),r("el-table-column",{attrs:{prop:"picname",label:"产品图片",width:"140"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("img",{attrs:{src:t.row.picname,alt:"暂无图片",width:"100px",height:"100px"}})]}}])}),r("el-table-column",{attrs:{prop:"cpgg",label:"产品规格",width:"180"}}),r("el-table-column",{attrs:{prop:"bzq",label:"保质期（单位：月）",width:"180"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"ms",label:"产品介绍"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(r){return t.showEditDialog(e.row.bh)}}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-end"}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-delete"},on:{click:function(r){return t.removeById(e.row.bh)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":t.queryInfo.current_page,background:"",layout:"prev, pager, next, total",total:t.total,"page-size":t.queryInfo.pageSize},on:{"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加产品信息",visible:t.addDialogVisible,width:"40%"},on:{"update:visible":function(e){t.addDialogVisible=e},close:t.addFormClosed}},[r("el-form",{ref:"addFormRef",attrs:{rules:t.FormRules,enctype:"multipart/form-data",model:t.addProductForm,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"产品名称",prop:"cpmc"}},[r("el-input",{model:{value:t.addProductForm.cpmc,callback:function(e){t.$set(t.addProductForm,"cpmc",e)},expression:"addProductForm.cpmc"}})],1),r("el-form-item",{attrs:{label:"图片名称",prop:"picname"}},[r("el-input",{attrs:{disabled:""},model:{value:t.addProductForm.picname,callback:function(e){t.$set(t.addProductForm,"picname",e)},expression:"addProductForm.picname"}})],1),r("el-form-item",{attrs:{label:"图片上传"}},[r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{name:"image",action:t.uploadURL,"on-success":t.successEvent,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"list-type":"picture"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png格式的图片，且图片大小不能超过1MB")])],1)],1),r("el-form-item",{attrs:{label:"产品规格",prop:"cpgg"}},[r("el-input",{model:{value:t.addProductForm.cpgg,callback:function(e){t.$set(t.addProductForm,"cpgg",e)},expression:"addProductForm.cpgg"}})],1),r("el-form-item",{attrs:{label:"保质期",prop:"bzq"}},[r("el-input",{attrs:{placeholder:"单位：月"},model:{value:t.addProductForm.bzq,callback:function(e){t.$set(t.addProductForm,"bzq",e)},expression:"addProductForm.bzq"}})],1),r("el-form-item",{attrs:{label:"产品介绍",prop:"ms"}},[r("el-input",{attrs:{rows:"8",type:"textarea"},model:{value:t.addProductForm.ms,callback:function(e){t.$set(t.addProductForm,"ms",e)},expression:"addProductForm.ms"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addProductSubmit}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"编辑产品信息",visible:t.editDialogVisible,width:"40%"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[r("el-form",{ref:"editFormRef",attrs:{model:t.editProductForm,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"企业名称"}},[r("el-input",{attrs:{disabled:""},model:{value:t.editProductForm.qymc,callback:function(e){t.$set(t.editProductForm,"qymc",e)},expression:"editProductForm.qymc"}})],1),r("el-form-item",{attrs:{label:"产品名称"}},[r("el-input",{model:{value:t.editProductForm.cpmc,callback:function(e){t.$set(t.editProductForm,"cpmc",e)},expression:"editProductForm.cpmc"}})],1),r("el-form-item",{attrs:{label:"图片路径"}},[r("el-input",{attrs:{disabled:""},model:{value:t.editProductForm.picname,callback:function(e){t.$set(t.editProductForm,"picname",e)},expression:"editProductForm.picname"}})],1),r("el-form-item",{attrs:{label:"图片修改"}},[r("el-upload",{ref:"editUploadRef",staticClass:"upload-demo",attrs:{name:"image",action:t.uploadURL,"on-success":t.successEvent,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"list-type":"picture"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png格式的图片，且图片大小不能超过1MB")])],1)],1),r("el-form-item",{attrs:{label:"产品规格"}},[r("el-input",{model:{value:t.editProductForm.cpgg,callback:function(e){t.$set(t.editProductForm,"cpgg",e)},expression:"editProductForm.cpgg"}})],1),r("el-form-item",{attrs:{label:"保质期"}},[r("el-input",{attrs:{placeholder:"单位：月"},model:{value:t.editProductForm.bzq,callback:function(e){t.$set(t.editProductForm,"bzq",e)},expression:"editProductForm.bzq"}})],1),r("el-form-item",{attrs:{label:"产品介绍"}},[r("el-input",{attrs:{type:"textarea",rows:"8"},model:{value:t.editProductForm.ms,callback:function(e){t.$set(t.editProductForm,"ms",e)},expression:"editProductForm.ms"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.editProductSubmit}},[t._v("提交修改")])],1)],1)],1)},a=[],n=r("1da1"),i=(r("b0c0"),r("96cf"),r("bc3a"),{data:function(){return{queryInfo:{query:"",pageSize:5,current_page:1},total:0,productList:[],addDialogVisible:!1,addProductForm:{token:"",cpmc:"",picname:"",cpgg:"",bzq:"",ms:""},editProductForm:{},editProductFormPicname:"",editDialogVisible:!1,tokenStr:window.sessionStorage.getItem("token"),uploadURL:"",headerObj:{token:window.sessionStorage.getItem("token")},FormRules:{cpmc:[{required:!0,message:"请输入产品名称",trigger:"blur"}]}}},created:function(){this.getproductList(),this.setUploadURL()},methods:{getproductList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=window.sessionStorage.getItem("token"),e.next=3,t.$http.post("/productInfo",{token:r,page:t.queryInfo.current_page,query:t.queryInfo.query});case 3:if(o=e.sent,a=o.data,0===a.code){e.next=7;break}return e.abrupt("return",t.$message.error("获取产品列表数据失败！"));case 7:t.productList=a.data.result,t.total=a.data.total,console.log(a);case 10:case"end":return e.stop()}}),e)})))()},handleCurrentChange:function(t){this.queryInfo.current_page=t,this.getproductList()},queryMsg:function(){this.getproductList()},addFormClosed:function(){console.log(this.$refs),this.$refs.addFormRef.resetFields(),this.$refs.upload.clearFiles()},showEditDialog:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(t),r.next=3,e.$http.post("EditProductInfo",{token:e.tokenStr,bh:t});case 3:o=r.sent,a=o.data,console.log(a.data),e.editProductForm=a.data,e.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editProductSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.editDialogVisible=!1,e.next=3,t.$http.post("DoEditProductInfo",{token:t.tokenStr,bh:t.editProductForm.bh,picname:t.editProductForm.picname,qymc:t.editProductForm.qymc,cpmc:t.editProductForm.cpmc,cpgg:t.editProductForm.cpgg,bzq:t.editProductForm.bzq,ms:t.editProductForm.ms});case 3:r=e.sent,o=r.data,t.getproductList(),0==o.code?(t.$message.success("产品信息编辑成功"),t.getproductList()):t.$message.error("产品信息编辑失败");case 7:case"end":return e.stop()}}),e)})))()},removeById:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$confirm("此操作将永久删除该产品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(o=r.sent,"confirm"==o){r.next=5;break}return r.abrupt("return",e.$message.info("取消了删除操作"));case 5:return r.next=7,e.$http.post("DelProductInfo",{token:e.tokenStr,bh:t});case 7:a=r.sent,n=a.data,1==n.code?(e.$message.success("删除产品成功"),e.getproductList()):e.$message.error("删除产品失败");case 10:case"end":return r.stop()}}),r)})))()},addProductSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.addProductForm.token=t.tokenStr,e.next=3,t.$http.post("AddProductInfo",t.addProductForm);case 3:if(r=e.sent,o=r.data,console.log(o),0===o.code){e.next=8;break}return e.abrupt("return",t.$message.error("添加产品失败"));case 8:t.addDialogVisible=!1,t.$message.success("产品添加成功"),t.getproductList();case 11:case"end":return e.stop()}}),e)})))()},handlePreview:function(){},handleRemove:function(){},successEvent:function(t,e,r){this.addProductForm.picname=e.name,this.editProductForm.picname=e.name,console.log(t,e.name)},setUploadURL:function(){this.tokenStr=window.sessionStorage.getItem("token"),this.uploadURL="http://czapi.wtycms.cn/Productupload?token="+this.tokenStr,console.log(this.uploadURL)}}}),c=i,s=(r("9ca4"),r("2877")),l=Object(s["a"])(c,o,a,!1,null,"3bf059b6",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-6437e196.417915aa.js.map