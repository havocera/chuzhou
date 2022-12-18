<template>
  <el-container>
  <el-header class="mainheader">
      <div class="logo">
      
      </div>
         <el-row >

  <el-col :span="10" class="logo-main">
     物联网+区块链食品安全追溯系统
  </el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light">.</div></el-col>
  <el-col :span="8" class="mainlogin">
       <div class="login-title">
           {{BusinessInfo.qymc}} 
    <span v-if="!BusinessInfo.qymc" @click="tologin">登录</span>
    <el-divider direction="vertical"></el-divider>
    <span v-if="!BusinessInfo.qymc" @click="toregister">注册</span>
    <span v-if="BusinessInfo.qymc" @click="tologinout">退出登陆</span>
    <el-divider direction="vertical"></el-divider>
    <span @click="tobank">银行入口</span>
  </div>
  </el-col>
</el-row>

<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple">
    <el-menu :default-active="$router.path" :router="true" active-text-color="#fff" text-color="#0080FF" class="index-menu" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/index" style=" border-bottom-color: transparent;">首页</el-menu-item>
  
  <el-menu-item index="/sydaohang" style=" border-bottom-color: transparent;">溯源系统</el-menu-item>
  <el-menu-item :index="czshow" style=" border-bottom-color: transparent;">企业入口</el-menu-item>
  <el-menu-item index="/BankLogin" style="border-bottom-color: transparent;">银行入口</el-menu-item>
  <!-- <el-menu-item index="" style="color: rgb(255, 255, 255); border-bottom-color: transparent;">11</el-menu-item> -->
  <el-menu-item index="#" style="border-bottom-color: transparent;"><a href="http://jiaoyidata.wtycms.cn/" target="_blank" >大数据分析</a> </el-menu-item>
  <el-menu-item index="/symQuery" style="border-bottom-color: transparent;">溯源码查询</el-menu-item>
  <!-- <el-submenu index="" >
    <template slot="title" >Paas平台</template>
    <el-menu-item index="" style="border-bottom-color: transparent; color: rgb(0,0,0);">开放平台</el-menu-item>
    <el-menu-item index="" style="border-bottom-color: transparent; color: rgb(0,0,0);">数据对接平台</el-menu-item>
    
  </el-submenu> -->
</el-menu>
    </div></el-col>
</el-row>


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
</div>
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
   &emsp;&emsp;物联网+区块链食品安全追溯系统通过区块链技术，去中心化、揭露透明、数据不可篡改、数据共享、点对点传输的一项技术，将农产品种植、加工、流通、销售等阶段信息上链，形成完整而严谨的供应链闭环，做到来历可查、去向可追、职责可究，从而实现了产品全过程“身份”管理、品质把控、产品保障。
   银行通过该平台，实时获取农业经营主体的采购、销售与结算等数据，提供实时在线信用融资服务，解决农户前期投入和后期销售中的资金问题。建立基于种植端、供应链、金融端的信用评价机制，从而能够实现信用记录、信用评级、违法失信行为、风险预警等信息共享。
  </el-col>
</el-row>
<!-- --------------------平台介绍-------------------- -->

  </el-main>
  <el-footer class="footer" >

     
        <el-row :gutter="20">
           <el-col :span="3"> <div>快速入口</div></el-col>
    <el-col :span="5"> <el-link style="color:#fff;" href="http://www.bankcomm.com/BankCommSite/default.shtml">交通银行</el-link></el-col>       
  <el-col :span="5"> <el-link style="color:#fff;" href="http://nync.ah.gov.cn/">安徽省农业农村厅</el-link></el-col>
  <el-col :span="5"><el-link style="color:#fff;" href="http://www.qsst.moa.gov.cn/" >国家溯源平台</el-link></el-col>
  <el-col :span="5"><el-link style="color:#fff;" href="http://www.aielab.net/ahsy">安徽省农产品追溯平台</el-link></el-col>
 
</el-row>

  </el-footer>
</el-container>

</template>

<script>
import {loadBMap} from '../../API/loadResources'
export default {
    data(){
        return{
            sydaohang:"sydaohang",
            czshow:"czshow",
            activeIndex:"/index",
            playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
            autoplay: true, // 如果为true,浏览器准备好时开始回放。
            muted: true, // 默认情况下将会消除任何音频。
            loop: false, // 是否视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4", // 类型
              src: 'https://www.ahjinzhai.gov.cn/group1/M00/01/00/wKgSG15rDO2AL6H-A2o6f98CE6U695.mp4' // url地址
            }],
            poster: '', // 封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true, // 当前时间和持续时间的分隔符
              durationDisplay: true, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: true // 是否显示全屏按钮
            }
          },
            count:0,
            activeName: 'first',
            BusinessInfo:[]
        }
    },
    created(){
        this.getUserInfo();
        // 百度地图
         window.initBaiduMapScript = () =>{
        console.log(BMap);
        this.getlocation();
    }
    loadBMap('initBaiduMapScript');

    },
    methods:{
      // 地图开始
       getlocation(){this.$nextTick(function(){
        try{
           const geolocation =new BMap.Geolocation();
           geolocation.getCurrentPosition(function(r){
              console.log(r,"aaaa");
              if(this.getStatus() == BMAP_STATUS_SUCCESS){
                 const{lat =null, lng=null} = r.point;
              }
           });
        }catch(e){
           console.log(e)
        }
      })
   },
      // 地图结束
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
this.$router.push('BankLogin')
        },
        handleClick(e){

        },
        handleSelect(e){

        },
        load () {
        // this.count += 1
      }
    }

}
</script>

<style scoped>
.mainshow{
    background-color: #fff;
    margin-top: 150px;
}
.mainheader{
    height: 500px!important;
    padding: 0;
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
    /* background-image: url("../../assets/images/footer.png"); */
    background:#138ebe;
    background-size: cover;
    height: 100px!important;
    color: seashell;
    padding-top: 30px;
    text-align: center;
}
.top{
    width: 80%;
    margin: 0 auto;
}
.grid-content{
  height: 70px !important;;
}
.logo-main{
  margin-top: 1vw;
    height: 4vw;
    line-height: 4vw;
    /* color: #fff; */
    color: #333;
    font-size: 2.0vw;
    font-weight: 600;
    padding-left: 70px;
    
}
.login-title{
  color: rgb(241, 141, 9);
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
.index-menu{
  display: flex;
  /* flex-direction: column; */
  align-content: flex-end;
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
/* .bg{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    background-color: seagreen;
    min-height: 500px;
    
} */
.bg{
    /* position: absolute;
    left: 0;
    top: 0; */
    z-index: -1;
    width: 100%;
    background-color: seagreen;
    min-height: 500px;
    
}
</style>