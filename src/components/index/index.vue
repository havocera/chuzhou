<template>
  <el-container>
  <el-header class="mainheader">
      <div class="bg">
          <el-carousel trigger="click" height="500px">
              <el-carousel-item  key="3">
        <img src="../../assets/images/banner3.png" align="bottom"  width="100%" height="100%" alt="">
      </el-carousel-item>
      <el-carousel-item  key="1">
        <img src="../../assets/images/banner2.png" align="bottom" width="100%" height="100%"  alt="">
      </el-carousel-item>
    </el-carousel>
      </div>
      <div class="mot">
      <div class="top">
<div>
    <el-row >
  <el-col :span="14" class="logo-main">
     物联网+区块链食品安全追溯系统
  </el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light">.</div></el-col>
  <el-col :span="8" class="mainlogin">
       <div>
           {{BusinessInfo.qymc}} 
    <span v-if="!BusinessInfo.qymc" @click="tologin">登录</span>
    <el-divider direction="vertical"></el-divider>
    <span v-if="!BusinessInfo.qymc" @click="toregister">注册</span>
    <span v-if="BusinessInfo.qymc" @click="tologinout">退出登陆</span>
    <el-divider direction="vertical"></el-divider>
    <span @click="tobank">政府监管入口</span>
  </div>
  </el-col>
</el-row>
</div>
<el-menu :default-active="$router.path" :router="true" active-text-color="#fff" text-color="rgba(255,255,255,1)" class="index-menu" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/index" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">首页</el-menu-item>
  <el-menu-item index="/datav" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">食品安全追溯大数据</el-menu-item>
  <el-menu-item index="/govLogin" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">政府监管</el-menu-item>
  <el-menu-item index="/sydaohang" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">生产采集系统</el-menu-item>
  
  <el-menu-item index="/transportLogin" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">物流商系统</el-menu-item>
  <!-- <el-menu-item index="" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">11</el-menu-item> -->
 <el-menu-item index="/sgsLogin" style="border-bottom-color: transparent;">收购商系统</el-menu-item>
  <el-menu-item index="/lssLogin" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">零售商系统</el-menu-item>
  <!-- <el-menu-item index="/symQuery" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">消费者查询追溯系统</el-menu-item> -->
  <!-- <el-submenu index="" >
    <template slot="title" >Paas平台</template>
    <el-menu-item index="" style="border-bottom-color: transparent; color: rgb(0,0,0);">开放平台</el-menu-item>
    <el-menu-item index="" style="border-bottom-color: transparent; color: rgb(0,0,0);">数据对接平台</el-menu-item>
    
  </el-submenu> -->
</el-menu>
</div>
</div>
  </el-header>
  <el-main class="mainshow">
      <!-- --------------------平台介绍-------------------- -->
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6" style="text-align:center;font-size:24px;height: 128px;line-height:128px">平台介绍</el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
    <el-col :span="9" style="margin-left:10px;">
        <!-- <video-player class="video-player vjs-custom-skin" 
            ref="videoPlayer" 
            :playsinline="true" 
            :options="playerOptions">
      </video-player> -->
      <img style="width:100%;" src="../../assets/images/pingtai.png" alt="">
       <!-- <el-image src="../../assets/images/pingtai.png"></el-image> -->

  </el-col>
  <el-col :span="9" class="info" style="">
   &emsp;&emsp;物联网+区块链食品安全追溯系统通过区块链技术，去中心化、揭露透明、数据不可篡改、数据共享、点对点传输的一项技术，将产品的生产、加工、流通、销售等阶段信息上链，形成完整而严谨的供应链闭环，做到来历可查、去向可追、职责可究，从而实现了产品全过程“身份”管理、品质把控、产品保障。
   政府单位通过该平台，实时获取农业经营主体的采购、销售与结算等数据，实现实时监管，解决农户前期投入和后期销售中的不规范问题。建立基于生产、流通、销售过程监管机制。
  </el-col>
</el-row>
<!-- --------------------平台介绍-------------------- -->

  </el-main>
  <el-footer class="footer" >
    版权所有：滁州学院<br/>
    技术支持：安徽椒图信息科技有限公司
  </el-footer>
</el-container>

</template>

<script>
export default {
    data(){
        return{
            sydaohang:"sydaohang",
            czshow:"czshow",
            activeIndex:"/index",
            count:0,
            activeName: 'first',
            BusinessInfo:[]
        }
    },
    created(){
        this.getUserInfo();
    },
    methods:{
      toregister(){
        this.$router.push("/register")
      },
        tologinout(){
            window.sessionStorage.clear()
            window.localStorage.clear()
            location.reload();
        },
        async getUserInfo(){
      const {data:res} = await this.$http.post('BusinessInfo')
      this.userinfo =JSON.parse( window.localStorage.getItem('userInfo'))
      if(this.userinfo.groupname!="企业"){
        this.sydaohang="qylist"

      }
      if(res.code==0){
        window.localStorage.setItem('BusinessInfo',JSON.stringify(res.data))
        this.BusinessInfo=res.data

      }
    },
        tologin(){
            this.$router.push("/login")
            // this.$request({
            //   methods:"get",
            //   url:"qyindex",
            //   data:{"page":1,"limit":5}
            //   }).then(res=>{
            //   console.log(res)
            // })
        },
        tobank(){
this.$router.push('govLogin')
        },
        handleClick(e){

        },
        handleSelect(e){

        },
        load () {
        // this.count += 1
      },
      msg(){
        this.$notify({
          title: '系统开发中',
          message: '系统正在开发中，请联系管理员处理！',
          type: 'warning'
        });
      }
    }

}
</script>

<style>
.mainshow{
    background-color: #fff;
}
.download-mot{
margin: 80px auto;
}
.download-mot .tips{
    line-height: 60px;
    font-size: 30px;
}
.download{
    width: 218px;
    height: 218px;
    border: 1px solid #dad9e3;
    /* background: #f5f6f9; */
    background-color: #E0E0E0;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    
    
}
.download img{
    margin: 18px 0 9px 0px;
}
.download span{
font-size: 14px;
    color: #6d6c7d;
    text-align: center;
    display: block;
    line-height: 20px;

    }
.mainheader{
    height: 500px!important;
    padding: 0;
    /* background-image: url("../../assets/images/daohangbg2.png"); */
    background-size: 100%;
       
}
.info{
    color:#333;
    font-size:20px;
    margin-left:30px;
    line-height: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.el-submenu__title i{
    color: snow;
}
.footer{
    background-image: url("../../assets/images/footer.png");
    background-size: cover;
    min-height: 80px!important;
    color: seashell;
    padding-top: 30px;
    text-align: center;
}
.top{
    width: 80%;
    margin: 0 auto;
}
.logo-main{
  margin-top: 1vw;
    height: 4vw;
    line-height: 4vw;
    color: #fff;
    font-size: 2.0vw;
    font-weight: 600;
    
}
.mainlogin{
    height:4vw;
    line-height: 4vw;
    color: #fff;
    font-size: 1vw;
    
    text-align: right;
    cursor: pointer;
}
.el-menu{
    background: none;
  
}
.el-submenu__title{
    font-size: 20px;
}

.el-menu.el-menu--horizontal{
border: none;

}
.index-menu .el-menu-item{
font-size: 1vw!important;
}
/* .el-menu-item:hover{
 background: none;
 color: #000;
} */
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
     background: none;
  
}
.bg{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    background-color: seagreen;
    min-height: 500px;
    
}

</style>