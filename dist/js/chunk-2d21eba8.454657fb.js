(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eba8"],{d798:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("el-backtop",[a("div",[t._v("返回顶部")])]),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-page-header",{attrs:{content:"加工过程详情"},on:{back:t.goback}})],1),a("el-card",{staticClass:"box-card"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.productList}},[a("el-table-column",{attrs:{label:"编号",type:"index"}}),a("el-table-column",{attrs:{prop:"cpmc",label:"产品名称",width:"180"}}),a("el-table-column",{attrs:{prop:"pch",label:"批次号",width:"180"}}),a("el-table-column",{attrs:{prop:"process_way",label:"加工方式",width:"140"}}),a("el-table-column",{attrs:{prop:"process_name",label:"加工过程",width:"140"}}),a("el-table-column",{attrs:{prop:"process_time",label:"加工时间",width:"140"}}),a("el-table-column",{attrs:{prop:"fzr",label:"负责人",width:"140"}}),a("el-table-column",{attrs:{prop:"picture",label:"加工图片",width:"140"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.picture,alt:"暂无图片",width:"100px",height:"100px"}})]}}])})],1),a("el-pagination",{attrs:{"current-page":t.queryInfo.current_page,background:"",layout:"prev, pager, next, total",total:t.total,"page-size":t.queryInfo.pageSize},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},n=[],l=a("1da1"),o=(a("96cf"),{data:function(){return{qydm:"",queryInfo:{query:"",pageSize:7,current_page:1},total:0,productList:[]}},created:function(){this.getproductlist()},methods:{getproductlist:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.qydm=t.$route.query.qydm,e.next=3,t.$http.post("getProcessByQydm",{qydm:t.qydm,page:t.queryInfo.current_page});case 3:a=e.sent,r=a.data,console.log(r),t.productList=r.data.result,t.total=r.data.total;case 8:case"end":return e.stop()}}),e)})))()},goback:function(){this.$router.back(-1)},handleCurrentChange:function(t){this.queryInfo.current_page=t,this.getproductlist()}}}),c=o,s=a("2877"),u=Object(s["a"])(c,r,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21eba8.454657fb.js.map