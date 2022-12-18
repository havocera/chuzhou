<template>
  <div>
  <!-- 发件人信息 -->
  <div style="width:100%;text-align:center;font-size:25px;">物流详细信息</div>
 <el-descriptions class="margin-top" title="发件人信息" :column="3" :size="size" border>
    <template slot="extra">
    </template>
    
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        发货人
      </template>
      {{printData.shiper_name}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
  {{printData.shiper_phone}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        发货地
      </template>
      {{printData.ship_address}}
    </el-descriptions-item>
  </el-descriptions>
<!-- 收件人信息 -->
<el-descriptions class="margin-top" title="收件人信息" :column="3" :size="size" border>
    <template slot="extra">
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        收件人
      </template>
      {{printData.client_name}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{printData.client_phone}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        收货地址
      </template>
      {{printData.destination}}
    </el-descriptions-item>
  </el-descriptions>
   <!-- 运输信息 -->
   <el-descriptions class="margin-top" title="运输信息" :column="3" :size="size" border>
    <template slot="extra">
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-receiving"></i>
        发货日期
      </template>
   {{printData.delivery_time}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        运输联系方式
      </template>
     {{printData.carrier_phone}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-truck"></i>
        物流单号
      </template>
     {{printData.courier_number}}
    </el-descriptions-item>
       <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-truck"></i>
        运输车辆信息
      </template>
     {{printData.license}}
    </el-descriptions-item>
  </el-descriptions>
  <!-- 货物信息 -->
   <el-descriptions class="margin-top" title="货物信息" :column="3" :size="size">
    <template slot="extra">
    </template>
    <el-descriptions-item label="产品名称">{{printData.cpmc}}</el-descriptions-item>
     <el-descriptions-item label="生产企业">{{printData.qymc}}</el-descriptions-item>
    <el-descriptions-item label="批次号">{{printData.pch}}</el-descriptions-item>
    <el-descriptions-item label="运输数量">{{printData.number}}kg</el-descriptions-item>
    <el-descriptions-item label="订单编号">
     {{printData.order_number}}
    </el-descriptions-item>

  </el-descriptions>
  <!-- <el-descriptions class="margin-top" title="现场照片" :column="3" :size="size">
    <template slot="extra">
    </template>
    <el-descriptions-item >

<img :src="'https://ahteaapi.wtycms.cn/Uploads/transport/'+printData.qydm+'/waybill/'+printData.waybill_pic" class="img" alt="">
        </el-descriptions-item>
    
    

  </el-descriptions> -->
  
  <span slot="footer" class="dialog-footer">
  </span>
<!-- </el-dialog> -->
</div>
</template>

<script>
export default {
    
    data(){
        return{
            printData:{},
            size:'',
        }
    },
    methods:{
async printCargoBill(id){
          //  console.log(id)
            const{data:res} = await this.$http.post('CreateOrderNumber',{id:id})
            console.log(res)
            this.printData = res.data;
            this.printCargoDialogVisible = true;
            // 生成打印单号提示信息
           
           
        }
    }

}
</script>

<style>
.img{
    min-width: 300px;
    max-width: 500px;
}

</style>