<template>
  <div>
      <el-container>
  <el-header height="100px">
      <el-row :gutter="20" >
  <el-col :span="6">
  <el-card class="titlecard">
      <el-row>
  <el-col :span="8" class="ico gree">
      <i  class="el-icon-user-solid"></i>
      </el-col>
  <el-col :span="16" class="title">
      {{BusinessInfo.qymc}}
      </el-col>
</el-row>

</el-card>
  </el-col>
   <el-col :span="6">
  <el-card class="titlecard">
          <el-row>
  <el-col :span="8" class="ico blue">
      <i class="el-icon-upload"></i>
      </el-col>
  <el-col :span="16" class="title">
      资质凭证：{{countData.license}}条
      </el-col>
</el-row>
     
</el-card>
  </el-col>
   <el-col :span="6">
  <el-card class="titlecard">
              <el-row>
  <el-col :span="8" class="ico sky">
      <i class="el-icon-s-claim"></i>
      </el-col>
  <el-col :span="16" class="title">
      资质上链凭证：{{countData.license_chain}}条
      </el-col>
</el-row>
</el-card>
  </el-col>
   <el-col :span="6">
  <el-card class="titlecard">
              <el-row>
  <el-col :span="8" class="ico red">
      <i class="el-icon-s-marketing
"></i>
      </el-col>
  <el-col :span="16" class="title">
      交易上链凭证：{{countData.transaction}}条
      </el-col>
</el-row>
</el-card>
  </el-col>
  
</el-row>
  </el-header>
  <el-main>
<el-card >

</el-card>
  </el-main>
</el-container>
    
          <el-container>
  <el-header height="100px">
      <el-row :gutter="20" >
  <el-col :span="6">
  <el-card class="titlecard">
      <el-row>
  <el-col :span="8" class="ico gree">
      <i  class="el-icon-folder-opened"></i>
      </el-col>
  <el-col :span="16" class="title">
     产品信息：{{countData.zd_cpmc}}条
      </el-col>
</el-row>

</el-card>
  </el-col>
   <el-col :span="6">
  <el-card class="titlecard">
          <el-row>
  <el-col :span="8" class="ico blue">
      <i class="el-icon-connection"></i>
      </el-col>
  <el-col :span="16" class="title">
      生成批次数量：{{countData.pch}}条
      </el-col>
</el-row>
     
</el-card>
  </el-col>
   <el-col :span="6">
  <el-card class="titlecard">
              <el-row>
  <el-col :span="8" class="ico sky">
      <i class="el-icon-truck"></i>
      </el-col>
  <el-col :span="16" class="title">
      物流信息：{{countData.transport}}条
      </el-col>
</el-row>
</el-card>
  </el-col>
   <el-col :span="6">
  <el-card class="titlecard">
              <el-row>
  <el-col :span="8" class="ico red">
      <i class="el-icon-s-home
"></i>
      </el-col>
  <el-col :span="16" class="title">
      加工信息：{{countData.process}}条
      </el-col>
</el-row>
</el-card>
  </el-col>
  
</el-row>
  </el-header>
  <el-main>
<el-card >

</el-card>
  </el-main>
</el-container>
   <el-row :gutter="20" >
  <el-col :span="12" style="margin-top:20px;"><div class="grid-content bg-purple">
      <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="create_time"
      label="交易时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="product"
      label="交易产品"
      width="180">
    </el-table-column>
    <el-table-column
      prop="money"
      label="交易金额">
    </el-table-column>
     <el-table-column
      prop="number"
      label="交易数量">
    </el-table-column>
  </el-table></div></el-col>
  <el-col :span="12">
    <el-card>
<!-- <div class="grid-content bg-purple"> -->
      <canvas id="myChart" width="600" height="385" ></canvas>
<!-- </div> -->
    </el-card>
    
</el-col>
</el-row>

  </div>
</template>

<script>
export default {
    data(){
        return{
            BusinessInfo:[],
            data:[

                  ],
            tableData:[],
            countData:{}
        }
    },
created(){
    this.getqyinfo()
    this.getNewTransactionList()
    this.chartData();
},
mounted(){
    this.drawChart()

    },
methods:{
   async getqyinfo(){
         const {data:res} = await this.$http.post('BusinessInfo')
        //  console.log(res)
         this.BusinessInfo = res.data;
    },
   async getNewTransactionList(){
           const{data:res} = await this.$http.post('NewTransactionList ')
           this.tableData = res.data.result;
           console.log(res)
    } ,
    drawChart(){
        // Step 1: 创建 Chart 对象
const chart = new this.$F2.Chart({
  id: 'myChart',
  pixelRatio: window.devicePixelRatio // 指定分辨率
});

// Step 2: 载入数据源
chart.source(this.data);

// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
chart.interval().position('genre*sold').color('genre');

// Step 4: 渲染图表
chart.render();
    },
   async chartData(){
            const{data:res} = await this.$http.post('LicenseCount')
            console.log(res)
            // this.data[0].sold = res.data[0].yj;
            //  this.data[1].sold = res.data[0].lvse;
            //   this.data[2].sold = res.data[0].dlbz;
            //    this.data[3].sold = res.data[0].honor;
              //  console.log(this.data)
              const result= [];
              result.push({genre:'有机',sold:res.data.yj})
              result.push({genre:'绿色',sold:res.data.lvse})
              result.push({genre:'地理标识',sold:res.data.dlbz})
              result.push({genre:'无公害证书',sold:res.data.honor})
              console.log(result)
              this.data = result;
              this.drawChart()
               const{data:res2} = await this.$http.post('CountInfo')
               console.log(res2)
               this.countData = res2.data;
    }
}
}
</script>

<style>
.titlecard{
    height: 100px;
   line-height: 100px;
}
.ico{
     font-size: 60px;
    line-height: 50px;
}
.title{
    font-size: 20px !important;
    line-height: 50px;
    color: black !important;
}
.gree{
    color: #40c9c6;
}
.blue{
    color: #36a3f7;
}
.red{
    color: #f4516c;
}
.sky{
    color: #34bfa3;
}
#myChart{
  min-width: 600px;
}
</style>