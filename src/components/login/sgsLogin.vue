<template>
  <div class="login_content">
    <div class="loginTittle" style="">
      物联网+区块链食品安全收购商系统
    </div>
 <el-button icon="el-icon-house" @click="toIndex" circle style="position:absolute;top:30px;right:30px;"> </el-button>
    <div class="box">
      
    <div class="login_box">
      <!-- <h2 class="title-c" id="h2_systemname">物联网+区块链食品安全追溯系统</h2> -->
      <div class="login_title">欢迎登录</div>
      <!-- 登录表单区 -->
      <el-form class="login_form" :model="loginForm">
        <el-form-item>
          <el-select v-model="loginForm.auth" style="width:100%" @change="getchange" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.name" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.pwd"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 登录按钮区域 -->
        <el-form-item class="btns">
          <el-button class="login blue" type="success" @click="login">登录</el-button>
          <!-- <el-button type="info" @click="resetloginForm">重置</el-button> -->
           <el-button class="login back" type="info" @click="toregister" >注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
   


    
  </div>
</template>

<script>


import { getLoginForm } from '../../API/index'
export default {
  data() {
    return {
      options:[
        {
          value:1,
          label:"收购商"
        }
       
      ],

      show3:false,
      // 登录表单的数据绑定对象
      loginForm: {
        auth:'',
        name: '收购商',
        pwd: '123456'
      }
    }
  },
  created(){
this.loginForm.auth=this.options[0].value
  },
  methods: {
    getchange(e){
        console.log(e)
        if(e==2){
          this.loginForm.name="监管管理员"
        }else if(e==1){
          this.loginForm.name="物流商"
        }else if(e=3){
          this.loginForm.name="hnkj"
        }
    },
    toregister(){
      this.$router.push("register")
    },
    resetloginForm() {
      (this.loginForm.name = ''), (this.loginForm.pwd = '')
    },
    login() {
      window.localStorage.clear();
       window.sessionStorage.clear()
      this.$http.post('login',{"name":this.loginForm.name, "pwd":this.loginForm.pwd}).then(res => {
        // console.log(res)
        if (res.data.code !== 0) return this.$message.error('登录失败！')
        this.$message({
          message:'登录成功！',
          type:'success',
          duration:1000
        })
        window.sessionStorage.setItem('token', res.data.data.token)
        window.localStorage.setItem('token', res.data.data.token)
        // window.sessionStorage.setItem('name', res.data.data.rymc)
        if (res.data.data.groupname == '企业') {
          // console.log('1')
          // this.$router.push('index')
            this.$router.push('sydaohang')
          window.localStorage.setItem('userInfo',JSON.stringify(res.data.data))
          window.sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
        } else if (res.data.data.groupname == '监管管理员') {
          console.log('2')
          this.$router.push('qylist')
          window.sessionStorage.setItem('token', res.data.data.token)
          window.sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
          window.localStorage.setItem('userInfo',JSON.stringify(res.data.data))
        } 
        else if (res.data.data.groupname == '物流商') {
          console.log('3')
          this.$router.push('TransporterList')
          window.sessionStorage.setItem('token', res.data.data.token)
          window.sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
          window.localStorage.setItem('userInfo',JSON.stringify(res.data.data))
        } 
        else if (res.data.data.groupname == '收购商') {
          console.log('4')
        //   this.$notify({
        //   title: '零售商系统开发中',
        //   message: '零售商系统开发中，请联系管理员处理！',
        //   type: 'warning'
        // });
          this.$router.push('sgsBaseInfo')
          window.sessionStorage.setItem('token', res.data.data.token)
          window.sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
          window.localStorage.setItem('userInfo',JSON.stringify(res.data.data))
        } 
        else if (res.data.data.groupname == '系统管理员') {
          console.log('4')
           this.$router.push('index')
            window.sessionStorage.setItem('token', res.data.data.token)
            window.sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
            window.localStorage.setItem('userInfo',JSON.stringify(res.data.data))
        } else return this.$message.error(res.message)
      })
    },
    toIndex(){
      this.$router.push('index')
    }
  }
}
</script>

<style scoped lang="less">
.login_content {
  position:fixed;
 top: 0;
 left: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/transportLogin.png') no-repeat;
   background-size: cover;
 -webkit-background-size: cover;
 -o-background-size: cover;
 background-position: center 0;
  // background-size: 100% 100%;
}
.content{
  width: 100%;
  height: 100%;
}
.left{
  background-color: #004dff;
  height: 100%;
  animation:mymove 1s ease;
}
@keyframes mymove
{
from {width: 0;}
to {width: 41.66667%;}
}
.contt{
  height: 100%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
}
.logo {
    margin: 0 auto;
    // align-items: center;
    margin-bottom: 5vh;
    width: calc(100vh * 340 / 1080);
    height: calc(100vh * 340 / 1080);
    background: url("../../assets/images/circle.svg") center no-repeat;
    background-size: contain;
}
.logo_fa{
  margin: 0 auto;
}
.right{
  height: 100%;
  // width: 100%;
  background-image: url("../../assets/images/rightbg.png");
}
.box{
  height: 100%;
   display: flex;
   align-items: center;
   margin-top:-5rem ;
}
.img_title{
  margin: 0 auto;
  
}
.img_title img{
  width: 28vw;
  }
.login_box{
  margin: 0 auto;
  width: 880px;
  text-align: center;
  .login_title{
    margin-top: 10px;
   
    margin-bottom: 45px;
    color: #fff;
    font-size: 1.9vw;
  }
  .login_form{
    width: 380px;
    margin: 0 auto;
  }
  .el-input__inner{
          height: 60px;
        }
}
.title-c {
  margin-bottom: 30px;
    font-size: 2.0vw;
    font-weight: 400;
    font-family: PingFangSC-Medium;
    line-height: 80px;
    color: #004dff;
}
.login{
  height: 50px;
  width: 150px;
  font-size: 21px;
}
.blue{
  background-color: #004dff;
}
.back{
  background-color: #fff;
  color: #004dff;
}
.loginTittle{
  margin-top: 30px;
  text-align:center;
  font-size: 5rem;
  color:#fff;
  font-family: 'Courier New', Courier, monospace;
}
</style>
