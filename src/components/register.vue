<template>
  <div class="login_content">
    <el-row :gutter="20" class="content">
  <el-col :span="10" class="left">
    <div class="contt">
      <div class="logo_fa">
        <div class="logo">

    </div>
     <div class="img_title">
<img src="../assets/images/title.png" width="500px" alt="">
    </div>
      </div>
    </div>
  </el-col>
  <el-col :span="14" class="right">
    <div class="login_box">
      <h2 class="title-c" id="h2_systemname">物联网+区块链食品安全追溯系统</h2>
      <div class="login_title">用户注册</div>
      <!-- 登录表单区 -->
    <el-form ref="registerForm" :model="registerForm" label-width="100px" :rules="rules">
  <el-form-item label="用户登录名" >
    <el-input v-model="registerForm.rybh" @blur="isName" ></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="registerForm.pwd" show-password></el-input>
  </el-form-item>
  <el-form-item label="确认密码">
    <el-input v-model="registerForm.confirmPwd" show-password></el-input>
  </el-form-item>
  <el-form-item label="企业名称">
    <el-input v-model="registerForm.qymc" @blur="isQymc"></el-input>
  </el-form-item>
  <el-form-item label="企业负责人">
    <el-input v-model="registerForm.fzr"></el-input>
  </el-form-item>
  <el-form-item label="手机号">
    <el-input v-model="registerForm.phone" @blur="isPhone"></el-input>
  </el-form-item>
    <el-form-item label="注册类型" style="width:100%">

    <el-checkbox-group v-model="registerForm.qylx">
      <el-checkbox-button  label="生产企业" >生产企业</el-checkbox-button>
      <el-checkbox-button  label="加工企业" >物流商</el-checkbox-button>
      <el-checkbox-button  label="运输企业" >收购商</el-checkbox-button>
      <el-checkbox-button  label="销售企业" >零售商</el-checkbox-button>
    </el-checkbox-group>
  
  </el-form-item>
  <!-- <el-form-item label="行政区">
    <el-input v-model="xzqname" :disabled="true"></el-input>
  </el-form-item> -->
  <el-form-item label="企业详细地址">
    <el-input v-model="registerForm.address"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button type="primary" class="login blue" @click="registerSubmit">立即注册</el-button>
    <el-button type="primary" class="login back" @click="tologin">返回登录</el-button>
  </el-form-item>
</el-form>
    </div>
    </el-col>
</el-row>
    
  </div>
</template>``

<script>
export default {
  data() {
    return {
      // 登录表单的数据绑定对象
      registerForm: {
        rybh: '',
        pwd: '',
        confirmPwd:'',
        phone:'',
        qymc:'',
        fzr:'',
        qylx:[],
        xzq:'341524000000',
        address:'',
      },
      xzqname:'安徽省/六安市/金寨县',
      rules:{
          name:[
            {required:true,message:'请输入用户名',trigger:'blur'}
          ],
          password:[
            {required:true,message:'密码',trigger:'blur'}
          ],
          qymc:[
            {required:true,message:'请输入用户名',trigger:'blur'}
          ],
          address:[
            {required:true,message:'请输入用户名',trigger:'blur'}
          ]
          
      },
     options:[]
    }
  },
  created(){
      // this.requestJson()
  },
  methods: {
    tologin(){
      this.$router.push("login")
    },
    resetregisterForm() {
      (this.registerForm.name = ''), (this.registerForm.pwd = '')
    },
  // async requestJson(){
  //     const {data:res} = await instance.post('src/API/address.json')
  //     console.log(res)
  //  },
  async registerSubmit(){
    window.sessionStorage.clear();
          this.registerForm.qylx = JSON.stringify(this.registerForm.qylx);
          console.log(this.registerForm)
          if(this.registerForm.pwd === this.registerForm.confirmPwd){
            const{data:res} = await this.$http.post('Register',this.registerForm)
            console.log(res)
            if(res.code == 1 ){
               this.$message({
           message: '注册成功',
            type: 'success'
          });
          // 注册成功后跳转到导航页面
          // this.$http.post('/login',{name:this.registerForm.rybh,pwd:this.registerForm.pwd}).then(res=>{
          // window.sessionStorage.setItem('token', res.data.data.token)
          // this.$router.push('daohang')
          // })
          const{data:loginRes} = await this.$http.post('login',{name:this.registerForm.rybh,pwd:this.registerForm.pwd});
          console.log(loginRes)
          window.sessionStorage.setItem('token', loginRes.data.token)
          window.sessionStorage.setItem('userInfo',JSON.stringify(loginRes.data))
          // this.$router.push('daohang')
            }else{
              this.$message({
           message: '注册失败',
            type: 'error'
            })
            }
    
          }else{
            console.log("两次密码不一致")
             this.$message({
            showClose: true,
            message: '两次输入密码不一致，请重新输入',
            type: 'error'
        });
          }

  },
  // 验证用户名是否存在
  async isName(){
     const{data:res} = await this.$http.post('isName',{rybh:this.registerForm.rybh});
    //  console.log(res)
    if(res.code == -1){
      return  this.$notify.error({
          title: '错误',
          message: '该用户名已存在'
        });
    }
  },
  // 验证手机号是否存在
    async isPhone(){
     const{data:res} = await this.$http.post('isPhone',{phone:this.registerForm.phone});
    //  console.log(res)
    if(res.code == -1){
      return  this.$notify.error({
          title: '错误',
          message: '该手机号已存在'
        });
    }
  },
  // 验证企业名称是否存在
    async isQymc(){
     const{data:res} = await this.$http.post('isQymc',{qymc:this.registerForm.qymc});
    //  console.log(res)
    if(res.code == -1){
      return  this.$notify.error({
          title: '错误',
          message: '该企业已存在'
        });
    }
  },
  }
}
</script>

<style scoped lang="less">
.login_content {
  width: 100%;
  height: 100%;
  // background: url('../assets/images/jzbg.png') no-repeat;
  background-size: 100% 100%;
}
.content{
  width: 100%;
  height: 100%;
}
.left{
  background-color: #004dff;
  height: 100%;
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
    background: url("../assets/images/circle.svg") center no-repeat;
    background-size: contain;
}
.logo_fa{
  margin: 0 auto;
}
.right{
  height: 100%;
  // width: 100%;
}
.box{
  height: 100%;
   display: flex;
   align-items: center;
}
.img_title{
  margin: 0 auto;
}
.login_box{
  margin: 0 auto;
  width: 580px;
  text-align: center;
  .login_title{
    margin-top: 10px;
    margin-bottom: 15px;
    color: #004dff;
    font-size: 20px;
  }
  .el-input__inner{
          height: 60px;
        }
  .el-select{
    width: 100%;
  }
}
.title-c {
    font-size: 38px;
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

</style>
