<template>
  <div>
      
      <div class="qytitle" @click="tolocation">
         {{businessInfo.qymc}}
      </div>
<el-card>
    <el-backtop >
       <div>返回顶部</div>
  </el-backtop>
   
    <div slot="header" class="clearfix">
<el-page-header @back="goback" content="企业数据分析">
</el-page-header>
    </div>
</el-card>
     
 <!-- 企业信息详情 -->

<el-row :gutter="24" style="margin-top:30px;">
  <el-col :span="8" style="padding-left:30px;">
        <div class="div1">
      <el-form :label-position="labelPosition" label-width="120px">
  <el-form-item label="企业名称">
      <div class="box1 wd80">
          xx茶叶
      </div>
  </el-form-item>
  <el-form-item label="企业信用代码">
     <div class="box2 wd80">
         123456789
      </div>
  </el-form-item>
  <el-form-item label="企业资质">
   <div class="box3 wd80">
             <el-checkbox v-model="qyzz.yyzz" >营业执照</el-checkbox>
            <el-checkbox v-model="qyzz.yyzz">林权证</el-checkbox>
            <el-checkbox v-model="qyzz.yyzz">无公害农产品</el-checkbox>
            <el-checkbox v-model="qyzz.yyzz" >绿色食品</el-checkbox>
             <el-checkbox v-model="qyzz.yyzz" >有机农产品</el-checkbox>
            <el-checkbox v-model="qyzz.yyzz" >农产品地理标志</el-checkbox>
            <el-checkbox v-model="qyzz.yyzz" >其他</el-checkbox>
      </div>
   
  </el-form-item>
</el-form>
    <div class="title black">
        溯源评级
    </div>
   <div id="mychart1" class="chart1">
          
      </div>
      <table border="1" width="90%" style="text-align:center;margin-top:-150px;">
  <tr>
    
    <th>等级</th>
	 <th>说明</th>
  </tr>
  <tr>
   
    <td>A</td>
	  <td>企业资质齐全，经营能力和稳定性强，风险小</td>
  </tr>
 <tr>
   
    <td>B</td>
	  <td>企业资质较好，经营能力和稳定性一般，风险较小</td>
  </tr>
	<tr>
    <td>C</td>
	  <td>企业资质一般，经营能力和稳定性一般，存在一定风险</td>
  </tr>
		<tr>
    <td>D</td>
	  <td>企业资质较少，经营能力和稳定性较弱，风险较大</td>
  </tr>
</table>

        </div>
  </el-col>
  <el-col :span="8">
        <div class="echartTitle">交易信息记录</div>
        <div id="jiaoyiChart" style="width:100%;height:300px;"></div>
        <div class="echartTitle">种植过程信息监控</div>
          <div id="plantChart" style="width:100%;height:300px;"></div>
          <div class="echartTitle">产品检测记录</div>
          <div id="jianceChart" style="width:100%;height:300px;"></div>
  </el-col>
  <el-col :span="8">
      <div class="echartTitle">溯源码扫码次数</div>
          <div id="symChart" style="width:100%;height:350px;"></div>
  <!-- 表格开始 -->
  <table border="1" width="90%" style="text-align:center;">
  <tr>
    <th></th>
    <th>客户名称</th>
	 <th>销售额</th>
    <th>销售额占比</th>
  </tr>
  <tr>
    <td rowspan="7">上年度前五大客户</td>
    <td>公司A</td>
	  <td>250,000</td>
	  <td>28.8%</td>
  </tr>
 <tr>
   
    <td>个人A</td>
	  <td>150,000</td>
	  <td>17.3%</td>
  </tr>
	<tr>
    <td>公司B</td>
	  <td>120,000</td>
	  <td>13.8%</td>
  </tr>
	<tr>
    <td>公司C</td>
	  <td>90,000</td>
	  <td>11.8%</td>
  </tr>
	 <tr>
   
    <td>个人B</td>
      <td>85,000</td>
      <td>10.3%</td>
  </tr>
    <tr>
    <td>公司D</td>
      <td>72,000</td>
      <td>9.5%</td>
  </tr>
    <tr>
    <td>公司E</td>
      <td>70,000</td>
      <td>8.8%</td>
  </tr>
  <tr>
	 <td rowspan="7">上上年度前五大客户</td>
    <td>公司A</td>
	  <td>250,000</td>
	  <td>28.8%</td>
  </tr>
 <tr>
   
    <td>个人A</td>
	  <td>150,000</td>
	  <td>17.3%</td>
  </tr>
	<tr>
    <td>公司B</td>
	  <td>120,000</td>
	  <td>13.8%</td>
  </tr>
	<tr>
    <td>公司C</td>
	  <td>90,000</td>
	  <td>11.8%</td>
  </tr>
	 <tr>
   
    <td>个人B</td>
      <td>85,000</td>
      <td>10.3%</td>
  </tr>
    <tr>
    <td>公司D</td>
      <td>72,000</td>
      <td>9.5%</td>
  </tr>
    <tr>
    <td>公司E</td>
      <td>70,000</td>
      <td>8.8%</td>
  </tr>
</table>
<!-- 表格结束 -->

  </el-col>
</el-row>

  </div>
</template>

<script>

export default {
    data(){
        return{
            qyid:"",
            businessInfo:{},
            tableData:[],
            productdata:[],
            prototal:0,
            total:0,
            queryInfo:{
                pageSize:5
            },
            dataNumber:{},
            qydm:'',
             src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            qyzz:{
                yyzz:true,
            },
            labelPosition:'left'
        }
    },
    mounted(){
        this.drawLine();
        this.drawJiaoyiLine();
        this.drawPlantLine();
        this.drawJianceLine();
        this.drawSymLine();
    },
created(){
    this.getqyinfo()
    this.getNewTransactionList()
},
methods:{
    // echarts画图
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mychart1'))
        // 绘制图表
        myChart.setOption({
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.25, '#FF6E76'],
            [0.5, '#FDDD60'],
            [0.75, '#58D9F9'],
            [1, '#7CFFB2']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 20,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'auto',
          width: 5
        }
      },
      axisLabel: {
        color: '#464646',
        fontSize: 20,
        distance: -60,
        formatter: function (value) {
          if (value === 0.875) {
            return 'A';
          } else if (value === 0.625) {
            return 'B';
          } else if (value === 0.375) {
            return 'C';
          } else if (value === 0.125) {
            return 'D';
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-20%'],
        fontSize: 30
      },
      detail: {
        fontSize: 50,
        offsetCenter: [0, '0%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '分';
        },
        color: 'auto'
      },
      data: [
        {
          value: 0.8,
          name: 'Grade Rating'
        }
      ]
    }
  ]
});
    },
    // 种植过程监控echarts
    drawPlantLine(){
         let myChart = this.$echarts.init(document.getElementById('plantChart'))
         myChart.setOption({
             title: {
    // text: '种植过程信息监控'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['农事作业次数', '投入品采购次数', '投入品使用次数']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['202105', '202106', '202107', '202108', '202109', '202110', '202111']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '农事作业次数',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '投入品采购次数',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '投入品使用次数',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
  ]
         })
    },
    // 交易信息记录echarts
     drawJiaoyiLine(){
         let myChart = this.$echarts.init(document.getElementById('jiaoyiChart'))
         myChart.setOption({
             title: {
    // text: '交易信息记录',

  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['交易金额（元）', '交易数量（kg）']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['202203', '202204', '202205', '202206', '202207', '202208', '202209']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '交易金额（元）',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '交易数量（kg）',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
  ]
         })
    },
    // 产品检测记录echarts
    drawJianceLine(){
 let myChart = this.$echarts.init(document.getElementById('jianceChart'));
 var emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)',
  }
};
 myChart.setOption({
                title: {
    // text: '检测信息记录',

  },
     legend: {
    data: ['检测合格', '检测不合格'],
    left: 'left'
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  toolbox: {
    feature: {
      magicType: {
        type: ['stack']
      },
      dataView: {}
    }
  },
  tooltip: {},
  xAxis: {
    data: ['202101','202102','202103','202104','202105','202106','202107','202108'],
    name: '月',
    axisLine: { onZero: true },
    splitLine: { show: false },
    splitArea: { show: false }
  },
  yAxis: {
    name:'检测数量'
  },
  grid: {
    bottom: 100
  },
  series: [
    {
      name: '检测不合格',
      type: 'bar',
      stack: 'two',
      emphasis: emphasisStyle,
      data:['0','1','2','1','0','1','2','1']
    },
       {
      name: '检测合格',
      type: 'bar',
      stack: 'one',
      emphasis: emphasisStyle,
      data: ['100','98','44','56','45','89','12','25']
    },
  ]
 })
    },
    drawSymLine(){
 let myChart = this.$echarts.init(document.getElementById('symChart'));
 myChart.setOption({
     xAxis: {
    type: 'category',
    data: ['202105', '202106', '202107', '202108', '202109', '202110', '202111']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
 })
    },
  tolocation(){
        // this.$router.push('/login')
        console.log(123)
    },
   async getqyinfo(){
        const qydm = this.$route.query.qydm;
        this.qydm = qydm;
        // console.log(qydm)
         const {data:res} = await this.$http.post('getQyBasicByQydm',{qydm:this.qydm});
        const {data:res2} = await this.$http.post('getCountByQydm',{qydm:this.qydm})
         console.log(res2)
         this.dataNumber = res2.data;
        //  this.BusinessInfo = res.data;
        this.businessInfo =res.data[0];
    },
   async getNewTransactionList(){
           const{data:res} = await this.$http.post('NewTransactionList ')
           this.tableData = res.data.result;
           console.log(res)
    } ,
     goback(){
            this.$router.back(-1)
        },
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
    font-size: 20px;
    line-height: 50px;
    color:#222;
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
.qytitle{
    font-size: 2.5rem;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
}
.mgb20 {
    margin-bottom: 20px;
}
.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}
.grid-button{
    width: 80px;
}
.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(45, 140, 240);
}
.grid-con-4 .grid-con-icon {
    background: rgb(85, 67, 242);
}

.grid-con-4 .grid-num {
    color: rgb(45, 140, 240);
}
.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
.title{
    text-align: center;
    font-size: 25px;
    padding-bottom: 25px;
}
.qyForm .el-input.is-disabled .el-input__inner,.el-textarea__inner{
    color: #000!important;
}
.qyForm{
    display: inline-block;
    width: 50%;
}
.rightarea{
    display: inline-block;
    width: 49%;
    text-align: center;
    vertical-align: top;
}
.demonstration{
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
.mapDiv{
    width: 95%;
    height: 600px;
    margin: 0 auto;}
.div1 .box1{
    height: 40px;
}
.div1 .box2{
    height: 40px;
}
.div1 .box3{
    min-height: 40px;
    padding: 10px;
}
.wd80{
    width: 75%;
    border: 1px solid #000;
}
.chart1{
    width: 100%;
    height: 500px;
    /* border: 1px solid #000; */
}
.black{
    color: #000!important;
}
.echartTitle{
    font-size: 1.5vw;
    text-align: center;
    
}
</style>