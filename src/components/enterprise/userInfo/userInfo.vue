<template>
  <div class="userForm">
    <div class="title">个人信息管理</div>
    <el-form label-width="100px" :model="userInfo">
      <el-form-item label="登录名称">
        <el-input v-model="userInfo.rybh" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="人员名称">
        <el-input v-model="userInfo.rymc"></el-input>
      </el-form-item>
      <el-form-item label="所属组名">
        <el-input v-model="userInfo.groupname" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="userInfo.dh"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="userInfo.sex">
          <el-option label="男" value="men"></el-option>
          <el-option label="女" value="women"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker  value-format="yyyy-MM-dd" v-model="userInfo.birth" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="editUserInfo">提交修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import { getUserInfo } from '../../../API'
// import { getUserInfo } from '../../../API/index'
// import { getLoginForm } from '../../../API/index'
export default {
  data(){
    return{
        userInfo:{
          rybh:'',
          rymc:'',
          groupname:'',
          dh:'',
          sex:'',
          birth:'',
        }
    }
  },
  created(){
      this.getUserInfo()
  },
  methods:{
    // 请求用户信息
    async getUserInfo(){
      // 从sessionStorage里取出存的token
     const tokenStr = window.sessionStorage.getItem('token')
     const {data:res} = await axios.post('userInfo')
    // console.log(res.data)
    this.userInfo=res.data
    // console.log(this.userInfo)
    },
    async editUserInfo(){
      // this.$message.success('修改成功')
      this.userInfo.token = window.sessionStorage.getItem('token')
      const {data:res}= await this.$http.post(
        'DoEditUserInfo',
        this.userInfo
      )
      if(res.code == 0){
        this.$message.success('修改个人信息成功')
      }else{
        this.$message.error('修改个人信息失败')
      }
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.title {
  font-size: 30px;
  font-weight: 700;
  color: rgb(84, 92, 100);
  text-align: center;
  text-shadow: 2px 2px #fff;
  margin-left: 50px;
  margin-bottom: 50px;
}
.userForm {
  width: 550px;
  margin: 70px auto;
}
.el-select {
  width: 100%;
}
.btns {
  text-align: center;
  .el-button {
    width: 100px;
  }
}
</style>

