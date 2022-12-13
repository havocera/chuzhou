<template>
  <el-container class="indexContainer">
    <!-- 头部区域 -->
    <el-header>
      <el-row type="flex" class="header"  justify="space-between">
  <el-col :span="8">
    <div class="logo">
        <!-- <img src="@/assets/logo.png" width="60px" height="60px" /> -->
        <span style="font-size:20px;color: #Fff;">食品安全追溯系统--基础信息管理</span>
      </div>
    </el-col>
  <el-col :span="12">
     <el-menu background-color="#1890ff" active-text-color="#ffd04b" text-color="#fff" :router="true" :unique-opened="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item :index="item.path" v-for="item in enterpriseMenuList" :key="item.id" > <i  :class="item.icon"></i>{{item.authName}}</el-menu-item>
</el-menu>
    </el-col>
  <el-col :span="6">
<el-button @click="toDaohang" icon="el-icon-back" class="btnLoginOut">返回导航页面</el-button>
      <el-button @click="loginOut" icon="el-icon-switch-button" class="btnLoginOut">退出系统</el-button>
  </el-col>
</el-row>
      
    </el-header>
    <el-container>
      <!-- 左侧菜单区域 -->
      
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// const username = sessionStorage.getItem('name')
export default {
  data() {
    return {
      activeIndex:'qyInfo',
      enterpriseMenuList: [
       
       
            {
              id: 4,
              authName: '企业信息管理',
              icon:'el-icon-office-building',
              path: 'qyInfo'
            },
            {
              id: 6,
              authName: '上传土地信息',
              icon:'el-icon-map-location',
              path: 'cdInfo'
            },
       
        
            {
              id: 8,
              authName: '上传产品信息',
              icon:'el-icon-box',
              path: 'productInfo'
            }
      

      ],
      username: ''
    }
  },
  methods: {
    loginOut() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toDaohang(){
      this.$router.push('sydaohang')
    }
  }
}
</script>
<style scoped lang="less">
.indexContainer {
  height: 100%;
}
.el-menu {
  border-right: none;
}
.el-header {
  background-color: #1890ff;
  height: 60px;

  align-items: center;
  color: #fff;
  
}
.logo{
  font-size: 1.2vw;
}
.header{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // background-color:#05824C;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  /* line-height: 160px; */
}
.el-submenu {
  text-align: left;
}
.btnLoginOut {
  color: #fff;
  background-color: #1890ff;
  border: none;
}
.btnLoginOut:hover{
  background: hsla(0,0%,100%,.3);
}
</style>
