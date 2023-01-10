<template>
  <el-container class="indexContainer">
    <!-- 头部区域 -->
    <el-header>
      <el-row type="flex"
              class="header"
              justify="space-between">
        <el-col :span="8">
          <div class="logo">
            <el-button  @click="isCollapse=!isCollapse" icon="el-icon-s-fold" ></el-button>
            <!-- <img src="@/assets/logo.png" width="60px" height="60px" /> -->
            <span style="font-size:20px;color: #fff;padding-left: 20px;">食品安全追溯系统--加工过程管理</span>
          </div>
        </el-col>
        <el-col :span="10">

        </el-col>
        <el-col :span="6">
          <el-button @click="toDaohang" icon="el-icon-back" class="btnLoginOut">返回导航页面</el-button>
      <el-button @click="loginOut" icon="el-icon-switch-button" class="btnLoginOut">退出系统</el-button>
        </el-col>
      </el-row>

    </el-header>
    <el-container>
      <!-- 左侧菜单区域 -->
      <el-menu background-color="#1890ff" :collapse="isCollapse" active-text-color="#00b173" text-color="#fff" :router="true" :unique-opened="true" :default-active="activeIndex"  mode="vertical" @select="handleSelect">
  <el-menu-item :index="item.path" v-for="item in enterpriseMenuList" :key="item.id" > <i  :class="item.icon"></i><span slot="title">{{item.authName}}</span></el-menu-item>
</el-menu>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// const username = sessionStorage.getItem('name')
export default {
  data () {
    return {
      isCollapse:false,
      activeIndex:"jggc",
      enterpriseMenuList: [
       
            {
              id: 23,
              authName: '加工过程管理',
              icon:'el-icon-refresh',
              path: 'jggc'
            },{
              id: 30,
              authName: '仓库管理',
              icon:'el-icon-box',
              path: 'storageInfo'
            },
             {
              id: 31,
              authName: '入库管理',
              icon:'el-icon-folder-add',
              path: 'inStorage'
            },
            {
              id: 32,
              authName: '出库管理',
              icon:'el-icon-folder-remove',
              path: 'outStorage'
            }
         
      ],
      username: ''
    }
  },
  methods: {
    loginOut () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toDaohang () {
      this.$router.push('sydaohang')
    }
  }
}
</script>
<style scoped lang="less">
.el-menu:not(.el-menu--horizontal,.el-menu--popup) .el-menu-item.is-active {
    background-color:#e6fbf4!important;
    color: #fff;
    border-radius: 0 8px 8px 0;
    i{
      color: #00b173;
    }
}
.el-menu:not(.el-menu--horizontal,.el-menu--popup) .el-menu-item {
    border-left: 4px solid transparent;
    border-radius: 0 8px 8px 0;
    margin: 0 4px;
    // padding: 0 0 0 8px!important;
    min-width: 0;
    i{
      color: #fff;
    }
}
.el-menu:not(.el-menu--horizontal,.el-menu--popup) .el-menu-item.is-active:before {
    content: "";
    position: absolute;
    top: 0;
    left: -4px;
    width: 4px;
    height: 100%;
    z-index: 2;
    border-radius: 8px;
    background: linear-gradient(135deg,#0ad18e,#03a4a5);
}
.indexContainer {
  height: 100%;
}
.el-menu {
  border-right: none;
}
.el-header {
  background-color: #1890ff;
  height: 60px;
  // display: flex;
  // justify-content: space-between;
  align-items: center;
  color: #fff;
  // > div {
  //   display: flex;
  //   font-size: 20px;
  //   align-items: center;
  //   span {
  //     margin-left: 10px;
  //   }
  // }
}
.logo{
  font-size: 1.2vw;
}
.header {
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
  background-color: #05824c;
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
.btnLoginOut:hover {
  background: hsla(0, 0%, 100%, 0.3);
}
</style>
