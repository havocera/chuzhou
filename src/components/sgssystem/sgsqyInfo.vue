<template>
        <div class="qyForm">
    <div class="qytitle">收购商信息管理</div>
    <el-form  label-width="100px" :model="businessInfo">
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
      <el-form-item label="企业简介">
        <el-input type="textarea" v-model="businessInfo.dwjj"></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="submitqyInfo">提交修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
        businessInfo:{
          qymc:'',
          fzr:'',
          fzrtel:'',
          addr:'',
          qylx:'',
          zyyw:'',
          zycp:'',
          jygm:'',
          dwjj:'',
          xydm:'',
        }
    }
  },
  created(){
      this.getBusinessInfo()
  },
  methods:{
    // 请求企业信息
    async getBusinessInfo(){
      // 从sessionStorage里取出存的token
     const tokenStr = window.sessionStorage.getItem('token')
     const {data:res} = await axios.post('BusinessInfo',{token:tokenStr})
    // console.log(res.data)
    this.businessInfo=res.data
    },
    // 提交企业信息
    async submitqyInfo(){
        // this.$message.success('修改成功')
         // this.$message.success('修改成功')
      this.businessInfo.token = window.sessionStorage.getItem('token')
      const {data:res}= await this.$http.post(
        'DoEditBusinessInfo',
        this.businessInfo
      )
      if(res.code == 0){
        this.$message.success('修改企业信息成功')
      }else{
        this.$message.error('修改企业信息失败')
      }
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.qytitle {
  font-size: 30px;
  font-weight: 700;
  color: rgb(84, 92, 100);
  text-align: center;
  text-shadow: 2px 2px #fff;
  margin-bottom: 10px;
  margin-left: 50px;
  width: 100%;
  box-sizing: border-box;
}
.qyForm {
  display: block;
  width: 550px;
  margin: 0px auto;
}
.btns {
  text-align: center;
  .el-button {
    width: 100px;
  }
}
</style>