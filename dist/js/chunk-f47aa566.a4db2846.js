(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f47aa566"],{9625:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{width:"100%","text-align":"center","font-size":"25px"}},[t._v("物流详细信息")]),i("el-descriptions",{staticClass:"margin-top",attrs:{title:"发件人信息",column:3,size:t.size,border:""}},[i("template",{slot:"extra"}),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v(" 发货人 ")]),t._v(" "+t._s(t.printData.shiper_name)+" ")],2),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v(" 手机号 ")]),t._v(" "+t._s(t.printData.shiper_phone)+" ")],2),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-location-outline"}),t._v(" 发货地 ")]),t._v(" "+t._s(t.printData.ship_address)+" ")],2)],2),i("el-descriptions",{staticClass:"margin-top",attrs:{title:"收件人信息",column:3,size:t.size,border:""}},[i("template",{slot:"extra"}),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v(" 收件人 ")]),t._v(" "+t._s(t.printData.client_name)+" ")],2),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v(" 手机号 ")]),t._v(" "+t._s(t.printData.client_phone)+" ")],2),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-location-outline"}),t._v(" 收货地址 ")]),t._v(" "+t._s(t.printData.destination)+" ")],2)],2),i("el-descriptions",{staticClass:"margin-top",attrs:{title:"运输信息",column:3,size:t.size,border:""}},[i("template",{slot:"extra"}),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-receiving"}),t._v(" 发货日期 ")]),t._v(" "+t._s(t.printData.delivery_time)+" ")],2),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v(" 运输联系方式 ")]),t._v(" "+t._s(t.printData.carrier_phone)+" ")],2),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-truck"}),t._v(" 物流单号 ")]),t._v(" "+t._s(t.printData.courier_number)+" ")],2),i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-truck"}),t._v(" 运输车辆信息 ")]),t._v(" "+t._s(t.printData.license)+" ")],2)],2),i("el-descriptions",{staticClass:"margin-top",attrs:{title:"货物信息",column:3,size:t.size}},[i("template",{slot:"extra"}),i("el-descriptions-item",{attrs:{label:"产品名称"}},[t._v(t._s(t.printData.cpmc))]),i("el-descriptions-item",{attrs:{label:"生产企业"}},[t._v(t._s(t.printData.qymc))]),i("el-descriptions-item",{attrs:{label:"批次号"}},[t._v(t._s(t.printData.pch))]),i("el-descriptions-item",{attrs:{label:"运输数量"}},[t._v(t._s(t.printData.number)+"kg")]),i("el-descriptions-item",{attrs:{label:"订单编号"}},[t._v(" "+t._s(t.printData.order_number)+" ")])],2),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)},a=[],l=i("1da1"),n=(i("96cf"),{data:function(){return{printData:{},size:""}},methods:{printCargoBill:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function i(){var s,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$http.post("CreateOrderNumber",{id:t});case 2:s=i.sent,a=s.data,console.log(a),e.printData=a.data,e.printCargoDialogVisible=!0;case 7:case"end":return i.stop()}}),i)})))()}}}),r=n,o=(i("da848"),i("2877")),c=Object(o["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports},"9dec":function(t,e,i){},da848:function(t,e,i){"use strict";i("9dec")}}]);
//# sourceMappingURL=chunk-f47aa566.a4db2846.js.map