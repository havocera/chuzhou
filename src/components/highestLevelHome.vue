<template>
  <el-container class="indexContainer">
    <!-- 头部区域 -->
    <el-header>
      <div class="logo">
        <img src="@/assets/logo.png" width="60px" height="60px" />
        <span>区块链溯源系统</span>
      </div>
      <el-button @click="loginOut" class="btnLoginOut">退出系统</el-button>
    </el-header>
    <el-container>
      <!-- 左侧菜单区域 -->
      <el-aside width="200px">
        <el-col>
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :unique-opened="true"
          >
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in highestMenuList" :key="item.id">
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
      highestMenuList: [
        {
          id: 1,
          authName: '个人信息管理',
          children: [{ id: 2, authName: '个人信息管理', path: 'huserInfo' }]
        },
        {
          id: 3,
          authName: '监管预警与追溯',
          children: [
            {
              id: 4,
              authName: '企业产品监管',
              path: 'hqyProductInfo'
            },
            {
              id: 5,
              authName: '扫码检测',
              path: 'scanCodeMonitor'
            },
            {
              id: 6,
              authName: '扫码统计',
              path: 'scanCodeTotal'
            },
            {
              id: 7,
              authName: '动态监测',
              path: 'danamicMonitor'
            },
            {
              id: 8,
              authName: '农药预警',
              path: 'pesticideWarning'
            },
            {
              id: 9,
              authName: '采摘检测',
              path: 'pickingMonitor'
            }
          ]
        },
        {
          id: 10,
          authName: '用户管理',
          children: [
            {
              id: 11,
              authName: '全部注册用户管理',
              path: 'totalRegisterUserMsg'
            },
            {
              id: 12,
              authName: '省级监管用户',
              path: 'govenMonitorUser'
            },
            {
              id: 13,
              authName: '市级监管用户',
              path: 'cityMonitorUser'
            },
            {
              id: 14,
              authName: '县级监管用户',
              path: 'countyMonitorUser'
            },
            {
              id: 15,
              authName: '企业用户',
              path: 'hqyUser'
            }
          ]
        },
        {
          id: 16,
          authName: '企业管理',
          children: [
            {
              id: 17,
              authName: '全部注册企业',
              path: 'totalRegisterQy'
            },
            {
              id: 18,
              authName: '按行政区统计查询',
              path: 'hdistrictTotal'
            },
            {
              id: 19,
              authName: '按产业统计查询',
              path: 'hindustyTotal'
            }
          ]
        },
        {
          id: 20,
          authName: '平台维护',
          children: [
            {
              id: 21,
              authName: '菜单管理',
              path: 'menuMsg'
            },
            {
              id: 22,
              authName: '菜单分类',
              path: 'menuClass'
            },
            {
              id: 23,
              authName: '角色管理',
              path: 'roleMsg'
            },
            {
              id: 24,
              authName: '角色任务分配',
              path: 'roleTaskAllocation'
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
  background-color: #373c41;
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
  background-color: #373c41;
  border: none;
}
</style>
