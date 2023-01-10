<template>
  <el-container class="indexContainer">
    <!-- 头部区域 -->
    <el-header class="header">
      <div class="logo">
        <img src="@/assets/logo.png" width="60px" height="60px" />
        <span>区块链溯源系统</span>
      </div>
      <el-button @click="loginOut" class="btnLoginOut">退出系统</el-button>
    </el-header>
    <el-container>
      <!-- 左侧菜单区域 background-color="#545c64"-->
      <el-aside width="200px">
        <el-col>
          <el-menu
            
            background-color="#1890ff"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :unique-opened="true"
          >
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in countyMenuList" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.authName }}</span>
              </template>
              <!-- 二级菜单 -->

              <el-menu-item
                :index="subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ subItem.authName }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      countyMenuList: [
        {
          id: 1,
          authName: '个人信息管理',
          children: [
            { id: 2, authName: '个人信息管理', path: 'cuserInfo' },
            { id: 3, authName: '用户信息查询', path: 'partyInfo' }
          ]
        },
        {
          id: 4,
          authName: '监管预警与追溯',
          children: [
            {
              id: 5,
              authName: '企业产品监管',
              path: 'qyProductInfo'
            }
          ]
        },
        {
          id: 6,
          authName: '用户管理',
          children: [
            {
              id: 7,
              authName: '企业用户管理',
              path: 'qyUserMsg'
            }
          ]
        },
        {
          id: 8,
          authName: '企业管理',
          children: [
            {
              id: 9,
              authName: '按行政区统计查询',
              path: 'districtTotal'
            },
            {
              id: 10,
              authName: '按产业统计查询',
              path: 'industyTotal'
            }
          ]
        }
      ]
    }
  },
  methods: {
    loginOut() {
      window.sessionStorage.clear()
      this.$router.push('/login')
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
  background-color: #05824C;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  > div {
    display: flex;
    font-size: 20px;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
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
  color: #ffd04b;
  background-color: #05824C;
  border: none;
}
.header{
  background-color: #05824C;
}
</style>
