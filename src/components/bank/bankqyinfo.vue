<template>
  <div>
      
      
<el-card>
    <el-backtop >
       <div>返回顶部</div>
  </el-backtop>
   
    <div slot="header" class="clearfix">
<el-page-header @back="goback" content="企业信息详情页面">
</el-page-header>
    </div>
    <div>
        <div class="qytitle" >
         {{businessInfo.qymc}}
      </div>
    </div>
</el-card>

      <!-- <el-container>
  <el-header height="100px">
      <el-row :gutter="20" >
  <el-col :span="6" @click="tolocation">
  <el-card class="titlecard" @click="tolocation">
      <el-row  @click="tolocation">
  <el-col :span="5" class="ico gree">
      <i  class="el-icon-location"></i>
      </el-col>
  <el-col :span="14" class="title">
      产地数据：100条
      </el-col>
      <el-col :span="5" >
     <el-link class="link" type="primary" @click="tolocation" :underline="false">查看详情</el-link>
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
</el-container> -->
    
          <!-- <el-container>
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
      生成批次信息：{{countData.pch}}条
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
</el-container> -->

  <el-row :gutter="20" class="mgb20">
                    <el-col :span="6">
                        <el-card  shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-location grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{dataNumber.chandi}}</div>
                                    <div>产地数据</div>
                                </div>
                                   <div class="grid-button">
                                    <el-button @click="tolocation" type="text">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-shopping-bag-1 grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{dataNumber.product}}</div>
                                    <div>产品数据</div>
                                </div>
                                <div class="grid-button">
                                    <el-button type="text" @click="toproduct">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-s-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{dataNumber.transaction}}</div>
                                    <div>交易数据</div>
                                </div>
                                   <div class="grid-button">
                                    <el-button @click="toTrade" type="text">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                       <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-4">
                                <i class="el-icon-truck grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{dataNumber.transport}}</div>
                                    <div>物流信息</div>
                                </div>
                                   <div class="grid-button">
                                    <el-button @click="totransport" type="text">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

<el-card class="box-card" style="height:40px;">
</el-card>

            <!-- 第二行 -->
              <el-row :gutter="20" class="mgb20" style="margin-top:20px;">
                    <el-col :span="6">
                        <el-card  shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-s-claim grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{dataNumber.license}}</div>
                                    <div>产品证书</div>
                                </div>
                                   <div class="grid-button">
                                    <el-button @click="toQyzz" type="text">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-s-marketing grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5</div>
                                    <div>投入品</div>
                                </div>
                                <div class="grid-button">
                                    <el-button @click="toTrp" type="text">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-s-data grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{dataNumber.process}}</div>
                                    <div>加工过程</div>
                                </div>
                                   <div class="grid-button">
                                    <el-button @click="toStorage" type="text">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                       <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-4">
                                <i class="el-icon-position grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{dataNumber.sym}}</div>
                                    <div>溯源码</div>
                                </div>
                                   <div class="grid-button">
                                    <el-button @click="toSym" type="text">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

            <!-- 企业信息详情 -->
     
    <div class="title">企业信息详情</div>
 <div class="qyForm">
    
    <el-form :disabled="true" label-width="100px"  :model="businessInfo">
      <el-form-item label="企业名称">
        <el-input v-model="businessInfo.qymc"></el-input>
      </el-form-item>
      <el-form-item label="企业负责人">
        <el-input v-model="businessInfo.fzr"></el-input>
      </el-form-item>
      <el-form-item label="负责人手机号">
        <el-input v-model="businessInfo.fzrtel"></el-input>
      </el-form-item>
       <el-form-item label="企业信用代码">
        <el-input v-model="businessInfo.xydm"></el-input>
      </el-form-item>
      <el-form-item label="企业地址">
        <el-input v-model="businessInfo.addr"></el-input>
      </el-form-item>
      <!-- <el-form-item label="企业类型">
        <el-input :disabled="true" v-model="businessInfo.qylx"></el-input>
      </el-form-item> -->
      <el-form-item label="主营业务">
        <el-input v-model="businessInfo.zyyw"></el-input>
      </el-form-item>
      <el-form-item label="主营产品">
        <el-input v-model="businessInfo.zycp"></el-input>
      </el-form-item>
      <el-form-item label="经营规模">
        <el-input v-model="businessInfo.jygm"></el-input>
      </el-form-item>
      <el-form-item   label="企业简介" >
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" v-model="businessInfo.dwjj"></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <!-- <el-button type="primary" @click="submitqyInfo">提交修改</el-button> -->
      </el-form-item>
    </el-form>

  </div>
  <div class="rightarea">
       <div class="block">
    <span class="demonstration">企业营业执照</span>
    <el-image :src="businessInfo.qy_path"  style="width: 32vw; height: 20vw"></el-image>
  </div>
  <!-- <div class="block">
    <span class="demonstration">身份证件</span>
    <el-image :src="src" style="width: 20vw; height: 10vw">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
  </div> -->
  </div>
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
             src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
    toproduct(){
        this.$router.push({
            path:'/bankproductlist',
            query:{
                qydm:this.qydm
            }
        })
    },
       tolocation(){
        this.$router.push({
            path:'/banklocationlist',
            query:{
                qydm:this.qydm
            }
        })
    },
    totransport(){
          this.$router.push({
            path:'/banktransportlist',
            query:{
                qydm:this.qydm
            }
        })
    },
    toTrp(){
          this.$router.push({
            path:'/banktrplist',
            query:{
                qydm:this.qydm
            }
        })
    },
      toSym(){
          this.$router.push({
            path:'/bankSymList',
            query:{
                qydm:this.qydm
            }
        })
    },
         toQyzz(){
          this.$router.push({
            path:'/bankQyzzList',
            query:{
                qydm:this.qydm
            }
        })
    },
         toTrade(){
          this.$router.push({
            path:'/bankTradeList',
            query:{
                qydm:this.qydm
            }
        })
    },
       toStorage(){
          this.$router.push({
            path:'/bankInstorageList',
            query:{
                qydm:this.qydm
            }
        })
    },
    message(){
        this.$message({
          message: '数据暂未接入！',
          type: 'warning'
        });
    },
     goback(){
            this.$router.back(-1)
        },
}
}
</script>

<style lang="less" >
.el-card__header {
    background-color: #1890ff;
    color: #fff;
    .el-page-header__content{
        color: #fff;
    }
  } 

.clearfix{
    background-color: #1890ff;
}
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
</style>