<template>
  <el-container @mousewheel="rollScroll($event)">
    <el-header class="mainheader">

      <div class="mot">
        <div class="top">

          <el-row>
            <el-col :span="4" class="logo-main">
              物联网+区块链食品安全追溯系统
            </el-col>
            <el-col :span="16">
              <el-menu :default-active="$router.path" :router="true" active-text-color="#fff"
                text-color="rgba(255,255,255,1)" class="index-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/index"
                  style="color: rgb(255, 255, 255); border-bottom-color: transparent;">首页</el-menu-item>
                <el-menu-item index="/datav"
                  style="color: rgb(255, 255, 255); border-bottom-color: transparent;">食品安全追溯大数据</el-menu-item>
                <el-menu-item index="/govLogin"
                  style="color: rgb(255, 255, 255); border-bottom-color: transparent;">政府监管</el-menu-item>
                <el-menu-item index="/sydaohang"
                  style="color: rgb(255, 255, 255); border-bottom-color: transparent;">生产采集系统</el-menu-item>

                <el-menu-item index="/transportLogin"
                  style="color: rgb(255, 255, 255); border-bottom-color: transparent;">物流商系统</el-menu-item>

                <el-menu-item index="/sgsLogin" style="border-bottom-color: transparent;">收购商系统</el-menu-item>
                <el-menu-item index="/lssLogin"
                  style="color: rgb(255, 255, 255); border-bottom-color: transparent;">零售商系统</el-menu-item>
                <el-menu-item index="/symQuery"
                  style="color: rgb(255, 255, 255); border-bottom-color: transparent;">消费者查询追溯系统</el-menu-item>

              </el-menu>
            </el-col>
            <el-col :span="4" class="mainlogin">
              <div>
                {{ BusinessInfo.qymc }}
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
      </div>
    </el-header>

    <el-main class="mainshow">
      <div class="main-info">

        <div class="bg">
          <el-carousel trigger="click" height="500px">
            <el-carousel-item key="3">
              <img src="../../assets/images/banner3.png" align="bottom" width="100%" height="100%" alt="">
            </el-carousel-item>
            <el-carousel-item key="1">
              <img src="../../assets/images/shipin2.png" align="bottom" width="100%" height="100%" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="main-info-title">
          <div class="titlec">
            物联网+区块链食品安全追溯系统
          </div>
          <div class="titled">
            &emsp;&emsp;物联网+区块链食品安全追溯系统通过区块链技术，去中心化、揭露透明、数据不可篡改、数据共享、点对点传输的一项技术，将产品的生产、加工、流通、销售等阶段信息上链，形成完整而严谨的供应链闭环，做到来历可查、去向可追、职责可究，从而实现了产品全过程“身份”管理、品质把控、产品保障。
            政府单位通过该平台，实时获取农业经营主体的采购、销售与结算等数据，实现实时监管，解决农户前期投入和后期销售中的不规范问题。建立基于生产、流通、销售过程监管机制。
          </div>

        </div>
      </div>
      <div class="main-sys">
        <div class="sys">
          <el-row>
          <el-col :span="12">
            
           <div class="sys-title"> <img src="../../assets/icon/proico.png" alt="" srcset="">
            食品安全追溯大数据</div>
            <div class="sys-con">
              汇聚食品安全追溯大数据，用图表形式进行灵活展示
              
            </div>
            <div class="sys-con2">
              &emsp;&emsp;食品安全需要关注各方面上报信息，大数据通过图表展示。能够更加灵活的查看各项数据，实现精准的食品安全追溯。
            </div>
            <div>
              <router-link to='datav' ><div class="butt">立即查看</div></router-link>
            </div>
          </el-col>
          <el-col :span="12">
           <div class="sys-i"><img class="sys-ico" src="../../assets/images/ico/data.png" alt="" srcset=""></div>
            
          </el-col>
        </el-row>
        </div>
        <div class="sys">
          <el-row>
          <el-col :span="12">
            
           <div class="sys-title"> <img src="../../assets/icon/proico.png" alt="" srcset="">
            政府监管系统</div>
            <div class="sys-con">
              食品安全，政府监管
            </div>
            <div class="sys-con2">
              &emsp;&emsp;食品质量追溯具有公益性、复杂性、链条性、系统性、覆盖性的特点。食品质量追溯体系的建设离不开政府的监督管理，质检部门等相关机构在确保食品安全等问题上起主导作用，政府监督管理职能贯穿食品追溯的整个流程。监管部门通过对生产商、采购商、零售商、物流商进行资格认证，将其终端作为节点加入联盟链中，同时将监管信息上链；并根据食品的生产、加工、运输、储存、销售环节信息和消费者反馈信息对生产商、物流商、采购商、零售商做出相应的调整或奖惩。
            </div>
            <div>
              <router-link to='govlogin' ><div class="butt">立即查看</div></router-link>
            </div>
          </el-col>
          <el-col :span="12">
           <div class="sys-i"><img class="sys-ico" src="../../assets/images/ico/gov.png" alt="" srcset=""></div>
            
          </el-col>
        </el-row>
        </div>
        <div class="sys">
          <el-row>
          <el-col :span="12">
            
           <div class="sys-title"> <img src="../../assets/icon/proico.png" alt="" srcset="">
            生产采集系统</div>
            <div class="sys-con">
              生产采集，源头追溯
            </div>
            <div class="sys-con2">
              &emsp;&emsp;生产商节点在获得相应的权限后，生产食品并标识唯一 溯源码，对生产管理和信息进行采集，将企业主体备案、农业投入和生产使用、交易信息备案、食品溯源码信息和生产管理和采集信息进行上链。
            </div>
            <div>
              <router-link to='sydaohang' ><div class="butt">立即查看</div></router-link>
            </div>
          </el-col>
          <el-col :span="12">
           <div class="sys-i"><img class="sys-ico" src="../../assets/images/ico/shengchan.png" alt="" srcset=""></div>
            
          </el-col>
        </el-row>
        </div>
        <div class="sys">
          <el-row>
          <el-col :span="12">
            
           <div class="sys-title"> <img src="../../assets/icon/proico.png" alt="" srcset="">
            物流商系统</div>
            <div class="sys-con">
              物流追溯，消除中间环节盲区
            </div>
            <div class="sys-con2">
              &emsp;&emsp;物流商节点在获得相应权限后，通过采集管理和信息采集，将物流企业主体备案、运输信息、采集管理和采集信息上链。
            </div>
            <div >
              <router-link to='transportLogin' ><div class="butt">立即查看</div></router-link>
            </div>
          </el-col>
          <el-col :span="12">
           <div class="sys-i"><img class="sys-ico" src="../../assets/images/ico/wuliu.png" alt="" srcset=""></div>
            
          </el-col>
        </el-row>
        </div>

        <div class="sys">
          <el-row>
          <el-col :span="12">
            
           <div class="sys-title"> <img src="../../assets/icon/proico.png" alt="" srcset="">
            批发商系统</div>
            <div class="sys-con">
              对接食品流通每一个环节，保障健康食品
            </div>
            <div class="sys-con2">
              &emsp;&emsp;批发商节点在获得相应权限后，通过采集管理和信息采集，将企业主体备案、交易信息、采集管理和采集信息以及流通过程中的商品信息如存储、食品的质量等数据进行上链。
            </div>
            <div>
              <router-link to='sgslogin' ><div class="butt">立即查看</div></router-link>
            </div>
          </el-col>
          <el-col :span="12">
           <div class="sys-i"><img class="sys-ico" src="../../assets/images/ico/pifa.png" alt="" srcset=""></div>
            
          </el-col>
        </el-row>
        </div>

        <div class="sys">
          <el-row>
          <el-col :span="12">
            
           <div class="sys-title"> <img src="../../assets/icon/proico.png" alt="" srcset="">
            零售商系统</div>
            <div class="sys-con">
              把控食品销售终端，追溯销售流向
            </div>
            <div class="sys-con2">
              &emsp;&emsp;零售商节点在获得相应的权限后，通过信息管理和采集，将企业主体备案、采集管理和采集信息、交易信息和流通过程中的商品信息如存储状态、产品质量等数据进行上链。
            </div>
            <div>
              <router-link to='lsslogin' ><div class="butt">立即查看</div></router-link>
            </div>
          </el-col>
          <el-col :span="12">
           <div class="sys-i"><img class="sys-ico" src="../../assets/images/ico/lingshou.png" alt="" srcset=""></div>
            
          </el-col>
        </el-row>
        </div>

        <div class="sys">
          <el-row>
          <el-col :span="12">
            
           <div class="sys-title"> <img src="../../assets/icon/proico.png" alt="" srcset="">
            消费者查询追溯系统</div>
            <div class="sys-con">
              消费者查询，食品安全更放心
            </div>
            <div class="sys-con2">
              &emsp;&emsp;消费者节点在获得相应权限后，在特定的设备上通过扫描电子标签查询整个交易的流程
            </div>
            <div>
              <router-link to='symQuery' ><div class="butt">立即查看</div></router-link>
            </div>
          </el-col>
          <el-col :span="12">
           <div class="sys-i"><img class="sys-ico" src="../../assets/images/ico/xiaofei.png" alt="" srcset=""></div>
            
          </el-col>
        </el-row>
        </div>
        
      </div>

      <!-- --------------------平台介绍-------------------- -->
      <!-- <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6" style="text-align:center;font-size:24px;height: 128px;line-height:128px">平台功能</el-col>
</el-row> -->
      <el-row type="flex" class="row-bg menu-main" justify="center">
        <!-- <el-row :gutter="0">
    
  <el-col :span="6"><div class="grid-content bg-p">
    <router-link to="/govLogin">
    <div class="icon"><img src="../../assets/icon/gov.png" alt=""></div>
    <div class="title-cc">
      政府监管
    </div>
  </router-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-a">
    <router-link to="/sydaohang">
    <div class="icon"><img src="../../assets/icon/shengchan2.png" alt=""></div>
    <div class="title-cc">
      生产采集系统
    </div>
  </router-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-b">
    <router-link to="/transportLogin">
    <div class="icon"><img src="../../assets/icon/wuliu.png" alt=""></div>
    <div class="title-cc">
      物流商系统
    </div>
  </router-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-c">
    <router-link to="/sgsLogin">
    <div class="icon"><img src="../../assets/icon/shougou.png" alt=""></div>
    <div class="title-cc">
      批发商系统
    </div>
  </router-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-d">
    <router-link to="/lssLogin">
    <div class="icon"><img src="../../assets/icon/lingshou.png" alt=""></div>
    <div class="title-cc">
      零售商系统
    </div>
  </router-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-e">
    <router-link to="/symQuery">
    <div class="icon"><img src="../../assets/icon/shengchan.png" alt=""></div>
    <div class="title-cc">
      消费者追溯查询
    </div>
  </router-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-f">
    <router-link to="/datav">
    <div class="icon"><img src="../../assets/icon/data.png" alt=""></div>
    <div class="title-cc">
      食品安全大数据
    </div>
  </router-link>
  </div></el-col>
 
</el-row> -->
        <!-- <el-col :span="9" style="margin-left:10px;">
        
      <img style="width:100%;" src="../../assets/images/pingtai.png" alt="">
       

  </el-col>
  <el-col :span="9" class="info" style="">
   
  </el-col> -->
      </el-row>
      <!-- --------------------平台介绍-------------------- -->

    </el-main>
    <el-footer class="footer">
      版权所有：滁州学院<br />
      技术支持：安徽椒图信息科技有限公司
    </el-footer>
  </el-container>

</template>

<script>

export default {
  data() {
    return {
      sydaohang: "sydaohang",
      czshow: "czshow",
      activeIndex: "/index",
      count: 0,
      activeName: 'first',
      BusinessInfo: [],
      timeOut: null,
    }
  },
  created() {
    
    this.getUserInfo();
    
  },
  methods: {
    
    
    toregister() {
      this.$router.push("/register")
    },
    tologinout() {
      window.sessionStorage.clear()
      window.localStorage.clear()
      location.reload();
    },
    async getUserInfo() {
      const { data: res } = await this.$http.post('BusinessInfo')
      this.userinfo = JSON.parse(window.localStorage.getItem('userInfo'))
      if (this.userinfo.groupname != "企业") {
        this.sydaohang = "qylist"

      }
      if (res.code == 0) {
        window.localStorage.setItem('BusinessInfo', JSON.stringify(res.data))
        this.BusinessInfo = res.data

      }
    },
    tologin() {
      this.$router.push("/login")
      // this.$request({
      //   methods:"get",
      //   url:"qyindex",
      //   data:{"page":1,"limit":5}
      //   }).then(res=>{
      //   console.log(res)
      // })
    },
    tobank() {
      this.$router.push('govLogin')
    },
    handleClick(e) {

    },
    handleSelect(e) {

    },
    load() {
      // this.count += 1
    },
    msg() {
      this.$notify({
        title: '系统开发中',
        message: '系统正在开发中，请联系管理员处理！',
        type: 'warning'
      });
    }
  }

}
</script>

<style lang="less">
.swiper {
    width: 600px;
    height: 300px;
} 
.main-info-title {
  min-height: 500px;
  z-index: 1000 !important;
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0,0.3);

  .titlec {
    padding-top: 3vw;
    color: #fff;
    font-size: 3vw;
  }

  .titled {
    width: 80%;
    margin: 0 auto;
    padding-top: 3vw;
    color: #fff;
    font-size: 1vw;
  }

}

.logo-title {
  // margin-top: 3vw;
}

.main-info {
  min-height: 500px;
  width: 100%;
  position: relative;
}

.menu-main {
  .icon {
    width: 5vw;
    padding-top: 10px;
    margin: 0px auto;
    text-align: center;

    img {
      width: 5vw;
    }
  }

  .title-cc {
    color: #fff;
    font-size: 25px;
    width: 100%;
    text-align: center;
  }

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .grid-content {
      z-index: 10000;
      border-radius: 4px;
      min-height: 9vw;
      width: 15vw;
      margin-top: 10px;
      margin: 10px auto;
      // background-color: aquamarine;
    }

    .grid-content:hover {
      // box-shadow: #333;
      cursor: pointer;

      box-shadow: 5px 5px 0 #ccc;
      // background: transparent;


    }

    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-p {
    background-color: #fd9898;
  }

  .bg-a {
    background-color: #3e89ec;
  }

  .bg-b {
    background-color: #45ac79;
  }

  .bg-c {
    background-color: #9290f2;
  }

  .bg-d {
    background-color: #1ddac7;
  }

  .bg-e {
    background-color: #c66;
    //#8e56c7
    //#ffa200
  }

  .bg-f {
    background-color: #8e56c7;

  }

  .bg-g {
    background-color: #ffa200;
  }
}

.mainshow {
  background-color: #fff;
  margin: 0;
  padding: 0;
}

.download-mot {
  margin: 80px auto;
}

.main-sys {
  min-height: 400px;
  width: 100%;
  background-image: url('../../assets/images/product.png');
  background-size: 100% 100%;
  .sys{
    min-height: 500px;
    .butt{
      font-family: "PingFang SC Regular", MicrosoftYaHei;
    margin-top: 2.2vw;
    cursor: pointer;
    float: right;
    text-align: center;
    line-height: 2.5vw;
    font-size: 1vw;
    color: rgb(255, 255, 255);
    width: 9vw;
    height: 2.5vw;
    background: rgb(36, 105, 241);
    border-radius: 35px;
    }
    .sys-i{
      text-align: center;
    }
    .sys-con2{
      font-size: .9vw;
    font-family: AlibabaPuHuiTiR;
    line-height: 1.5vw;
    padding: 1% 3% 0 30%;
    color: #4d628c;
    }
  }
  .sys-title{
    width: 40%;
    margin: 0 auto;
    margin-top: 3vw;
    font-size: 1vw;
    vertical-align: middle;
    font-weight: 700;
    img{
      vertical-align: middle;
    }
  }
  .sys-con{
    padding: 1% 3% 0 30%;
    font-family: PuHuiTi-Bold;
    text-align: left;
    line-height: 35px;
    margin: 20px 0;
    font-size: 1vw;
    color: #1a53fe;
    font-weight: 700;
  }
  .sys-ico{
    width: 500px;
  }
}

.download-mot .tips {
  line-height: 60px;
  font-size: 30px;
}

.download {
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

.download img {
  margin: 18px 0 9px 0px;
}

.download span {
  font-size: 14px;
  color: #6d6c7d;
  text-align: center;
  display: block;
  line-height: 20px;

}

.mainheader {
  // height: 440px!important;
  padding: 0;
  /* background-image: url("../../assets/images/daohangbg2.png"); */
  background-color: #333;
  background-size: 100%;

}

.info {
  color: #333;
  font-size: 20px;
  margin-left: 30px;
  line-height: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.el-submenu__title i {
  color: snow;
}

.footer {
  background-image: url("../../assets/images/footer.png");
  background-size: cover;
  min-height: 80px !important;
  color: seashell;
  padding-top: 30px;
  text-align: center;
}

.top {
  width: 80%;
  margin: 0 auto;
}

.logo-main {
  // margin-top: 1vw;
  // height: 4vw;
  line-height: 3vw;
  color: #fff;
  font-size: 0.8vw;
  font-weight: 600;

}

.mainlogin {
  height: 4vw;
  line-height: 4vw;
  color: #fff;
  font-size: 1vw;

  text-align: right;
  cursor: pointer;
}

.el-menu {
  background: none;

}

.el-submenu__title {
  font-size: 20px;
}

.el-menu.el-menu--horizontal {
  border: none;

}

.index-menu .el-menu-item {
  font-size: .8vw !important;
}

/* .el-menu-item:hover{
 background: none;
 color: #000;
} */
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background: none;

}

.bg {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  background-color: seagreen;
  min-height: 500px;

}
</style>