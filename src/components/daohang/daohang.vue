<template>
  <div class="select_system">
    <div class="select_system_shadow"></div>
    <div class="select_system_header">
      <div class="select_system_header_title">
        <div>“AIOT+区块链”茶产业技术示范与应用</div>
        </div>
        <div class="select_system_header_left"></div>
        <div class="select_system_header_right">
         
            <el-dropdown @command="handleCommand">
              <div class="user_name" >
  <span class="el-dropdown-link" style="color:#5bd5ff;">
    {{BusinessInfo.qymc}} <i v-if="userinfo.groupname=='系统管理员'" style=" ">系统管理员</i> <i class="el-icon-caret-bottom"></i>
  </span>
  </div>
  <el-dropdown-menu slot="dropdown" class="dropme">
    <el-dropdown-item command="a" icon="el-icon-key">修改密码</el-dropdown-item>
  <el-dropdown-item command="b" icon="el-icon-user-solid">个人中心</el-dropdown-item>
  <el-dropdown-item command="c" icon="el-icon-warning">关于我们</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
            
          <div class="exit_box" @click="tologin">退出</div> 
          </div
          ></div>
      <div class="circle_box1">
        <div class="circle_box2 show_circle"></div>
        <div class="circle_box3 show_circle hide_circle"></div>
        <div class="circle_box4 rotate_circle" ></div>
        <div class="circle_box5 rotate_circle1">
          <div class="system_box show_system_box" :style="{opacity: deg}">
            <div class="system2 system2_1"  v-if="userinfo.groupname=='企业'" @click="tocunzheng">
              <div class="right_text">徽茶品牌区块链存证与智能合约系统</div>
              
            </div>
            <div class="system2 system2_1"  v-if="userinfo.groupname!='企业'" @click="tocunzhenggov">
              <div class="right_text">徽茶品牌区块链存证与智能合约系统</div>
              
            </div>
            
            <div class="system2 system2_3" v-if="userinfo.groupname!='企业'" @click="togongyinglian">
              <div class="right_text">六安瓜片供应链大数据系统</div>
              
            </div>
                <div class="system2 system2_5" v-if="userinfo.groupname!='企业'" @click="togongyinglian">
                  <div class="left_text">茶叶加工智能化系统</div>
                </div>
                <div class="system2 system2_6" v-if="userinfo.groupname!='企业'"  @click="tosy">
              <div class="right_text">基于区块链的皖西徽茶品牌保护与防伪系统</div>
              
            </div>
                
                <div class="system2 system2_2" v-if="userinfo.groupname=='企业'"  @click="tosy">
              <div class="right_text">基于区块链的皖西徽茶品牌保护与防伪系统</div>
              
            </div>
                <!-- <div class="system2 system2_6" @click="togongyinglian">
                  <div class="left_text">区块链存证与智能合约大数据</div>
                 
                </div> -->
                    </div>
                    </div>
                    <div class="circle_text show_circle_text">
                      <div>欢迎光临</div>
                      <div>系统管理平台</div>
                      </div>
                      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userinfo:[],
      transform:"",
      deg:0,
      BusinessInfo:[],
    }

  },
  created(){
    // this.li()
    this.getUserInfo()
    setTimeout(() => {
      this.deg=1
    }, 1000);
    
  },
  methods:{
    handleCommand(command) {
        console.log(command)
        switch (command){
          case "a":
            console.log("修改密码")
            break;
          case "b":
            this.$router.push('enterpriseHome')
            break;
          case "c":
            this.$message("安徽椒图信息科技有限公司")
            break;
        }

      },
   async getUserInfo(){
      const {data:res} = await this.$http.post('BusinessInfo')
      this.userinfo =JSON.parse( window.sessionStorage.getItem('userInfo'))
      if(res.code==0){
        window.sessionStorage.setItem('BusinessInfo',JSON.stringify(res.data))
        this.BusinessInfo=res.data
      }
    },
    tologin(){
      this.$router.push("login")
    },
    tocunzheng(){
        this.$router.push("cunzhengInfo")
    },
    tocunzhenggov(){
        this.$router.push("datav")
    },
    togongyinglian(){
      this.$message.error("正在开发中");
    },
    tosy(){
      this.$router.push("sydaohang")
    },
    toprotectbigdata(){
      console.log(123)
      let Url = "http://teabigdata.wtycms.cn/"
      // window.open(Url,'_blank');
      window.location.href = Url
    }
  }

}
</script>

<style  >
.select_system {
  overflow: hidden;
    height: 100%;
    position: relative;
    background: url("../../assets/images/select_system_bac.jpg") no-repeat 50%/cover;
    background: url("../../assets/images/daohangbg1.png") no-repeat 50%/cover;
}
.select_system .circle_box1 {
    width: 25%;
    padding-top: 25%;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate3d(-50%,-50%,0);
    border-radius: 50%;
    background: url("../../assets/images/system2.png") no-repeat 50%/auto 100%;
    z-index: 1;
}
.select_system .show_circle {
    width: 100%;
    padding-top: 100%;
    transition: all 1.6s;
    opacity: 1;
}
.select_system .circle_box2, .select_system .circle_box3 {
    width: 10px;
    padding-top: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    border-radius: 50%;
    background: url("../../assets/images/system2.png") no-repeat 50%/auto 100%;
}
.select_system .select_system_header {
    background: url("../../assets/images/layout_header.png") no-repeat 50%/auto 100%;
    position: absolute;
    top: 10px;
    height: 5vw;
    left: 0;
    width: 100%;
}
.select_system .select_system_header .select_system_header_title {
    position: absolute;
    top: 0;
    height: 4.2vw;
    line-height: 4.2vw;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 2vw;
    font-weight: 700;
    font-family: SimHei;
    display: flex;
    justify-content: center;
    align-items: center;
}

.select_system .select_system_header .select_system_header_left {
    position: absolute;
    top: 0;
    left: 20px;
}
.select_system .select_system_header .select_system_header_right {
    position: absolute;
    right: 5vw;
    top: -10px;
    height: 2.7vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.select_system .select_system_header .select_system_header_title>div {
    background-image: linear-gradient(
90deg,#1cf6ff,#029aff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.select_system .select_system_header .select_system_header_right .user_name {
    color: #fff;
    font-size: .9vw;
    margin-right: 10px;
}
.select_system .select_system_header .select_system_header_right .exit_box {
    font-size: 1.2vw;
    color: #5bd5ff;
    cursor: pointer;
}
.select_system .show_system_box {
    opacity: 1;
    transition: all .5s;
}

.select_system .system_box {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    width: 100%;
    font-size: 1.5vw;
    color: #fff;
    z-index: 2;
    opacity: 0;
}
.select_system .system_box .system2_1 {
    right: 100%;
    top: 19%;
   
}

.select_system .system_box .system2 {
    position: absolute;
    width: 70%;
    height: 6vw;
    background: linear-gradient(270deg,rgba(31,89,123,.8),transparent);
}
.select_system .system_box .right_text {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.select_system .system_box .canvas2_1 {
    top: 0;
    left: 100%;
}

.select_system .system_box .canvas2 {
    position: absolute;
    width: 100%;
    height: 200%;
}
.select_system .system_box .system2_2 {
    left: 100%;
    bottom: 19%;
    background: linear-gradient(
90deg,rgba(31,89,123,.8),transparent);

}
.select_system .system_box .system2_5 {
    left: 100%;
    top: 40%;
    background: linear-gradient(
90deg,rgba(31,89,123,.8),transparent);

}
.select_system .system_box .system2_6 {
    left: 100%;
    top: 19%;
    background: linear-gradient(
90deg,rgba(31,89,123,.8),transparent);

}
.select_system .system_box .system2_3 {
    right: 100%;
    bottom: 40%;
    background: linear-gradient(
90deg,rgba(31,89,123,.8),transparent);

}
.select_system .system_box .system2_4 {
    right: 100%;
    bottom: 19%;
    background: linear-gradient(
90deg,rgba(31,89,123,.8),transparent);

}
.select_system .system_box .system2 {
    position: absolute;
    width: 86%;
    height: 6vw;
    background: linear-gradient(
270deg,rgba(31,89,123,.8),transparent);
}
.select_system .system_box .left_text {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.select_system .show_circle_text {
    opacity: 1;
    font-size: 2vw;
    transition: all .5s;
}

.select_system .circle_text {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 50%;
    transform: translateY(-65%);
    color: #fff;
    font-size: 1vw;
    /* opacity: 0; */
}

.select_system .hide_circle {
    opacity: 0;
    transition: all .5s;
}

.select_system .show_circle {
    width: 100%;
    padding-top: 100%;
    transition: all 1.6s;
    opacity: 1;
}
.select_system .rotate_circle {
    transform: translate3d(-50%,-50%,0) rotate(3turn);
    transition: all 2s;
}
.select_system .select_system_shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
}

.select_system .circle_box4 {
    width: 80%;
    padding-top: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    background: url("../../assets/images/system1.png") no-repeat 50%/auto 100%;
    animation:mymove 5s ;
-moz-animation:mymove 5s ; /* Firefox */
-webkit-animation:mymove 5s ; /* Safari and Chrome */
-o-animation:mymove 5s ; /* Opera */
}
@keyframes mymove{
    from{
      transform:translate3d(-50%,-50%,0) rotate(0deg);
    }
    to{
      transform:translate3d(-50%,-50%,0) rotate(720deg);
    }
}
.select_system .rotate_circle1 {
    transform: translate3d(-50%,-50%,0) rotate(-4turn);
    transition: all 2s;
}

.select_system .circle_box5 {
    width: 140%;
    padding-top: 140%;
    position: absolute;
    left: 50%;
    top: 50%;
    background: url("../../assets/images/system3.png") no-repeat 50%/auto 100%;
    transform: translate3d(-50%,-50%,0) rotate(0);
    border-radius: 50%;
    animation:mymove1 1s ;
-moz-animation:mymove1 1s ; /* Firefox */
-webkit-animation:mymove1 1s ; /* Safari and Chrome */
-o-animation:mymove1 1s ; /* Opera */
}
@keyframes mymove1{
    from{
      transform:translate3d(-50%,-50%,0) rotate(720deg);
      
    }
    to{
      transform:translate3d(-50%,-50%,0) rotate(0deg);
    }
}

</style>