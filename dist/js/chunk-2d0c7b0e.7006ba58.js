(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7b0e"],{5261:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("el-backtop",[a("div",[t._v("返回顶部")])]),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-page-header",{attrs:{content:"投入品监管页面"},on:{back:t.goback}})],1),a("el-card",{staticClass:"box-card"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.productList}},[a("el-table-column",{attrs:{label:"编号",type:"index"}}),a("el-table-column",{attrs:{prop:"qymc",label:"生产企业名称",width:"180"}}),a("el-table-column",{attrs:{prop:"trpm",label:"投入品名称",width:"180"}}),a("el-table-column",{attrs:{prop:"PDClass",label:"类别",width:"180"}}),a("el-table-column",{attrs:{prop:"nyfz",label:"农药作用",width:"140"}}),a("el-table-column",{attrs:{prop:"nyscz",label:"生产商",width:"140"}}),a("el-table-column",{attrs:{prop:"nysyfa",label:"使用方法",width:"140"}}),a("el-table-column",{attrs:{prop:"trpgg",label:"规格",width:"140"}}),a("el-table-column",{attrs:{prop:"cgrq",label:"采购时间"}})],1),a("el-pagination",{attrs:{"current-page":t.queryInfo.current_page,background:"",layout:"prev, pager, next, total",total:t.total,"page-size":t.queryInfo.pageSize},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},l=[],n=a("1da1"),o=(a("96cf"),{data:function(){return{qydm:"",queryInfo:{query:"",pageSize:7,current_page:1},total:0,productList:[]}},created:function(){this.getproductlist()},methods:{getproductlist:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.qydm=t.$route.query.qydm,e.next=3,t.$http.post("getTrpsyByQydm",{qydm:t.qydm,page:t.queryInfo.current_page});case 3:a=e.sent,r=a.data,console.log(r),t.productList=r.data.result,t.total=r.data.total;case 8:case"end":return e.stop()}}),e)})))()},goback:function(){this.$router.back(-1)},handleCurrentChange:function(t){this.queryInfo.current_page=t,this.getproductlist()}}}),c=o,u=a("2877"),s=Object(u["a"])(c,r,l,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0c7b0e.7006ba58.js.map