<template>
  <el-container class="indexContainer">
    <!-- 头部区域 -->
    <el-header>
      <div class="logo">
        <!-- <img src="@/assets/logo.png" width="60px" height="60px" /> -->
        <span>AIOT+互联网金寨茶产业区块链试点项目</span>
      </div>
      <!-- <el-button class="btnLoginOut">欢迎访问----{{username}}</el-button> -->
      <el-button @click="loginOut" class="btnLoginOut">退出系统</el-button>
    </el-header>
    <el-container>
      <!-- 左侧菜单区域 -->
      <el-aside width="200px">
        <el-col>
          <el-menu
            background-color="#05824C"
            text-color="#fff"
            active-text-color="#409EFF"
            :router="true"
            :unique-opened="true"
          >
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in enterpriseMenuList" :key="item.id">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.authName }}</span>
              </template>
              <!-- 二级菜单 -->

              <el-menu-item
                :index="subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <template slot="title">
                  <i class="el-icon-menu"></i>
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
// const username = sessionStorage.getItem('name')
export default {
  data() {
    return {
      enterpriseMenuList: [
        {
          id: 1,
          authName: '个人信息管理',
          icon:'el-icon-s-custom',
          children: [{ id: 2, authName: '个人信息管理', path: 'userInfo' }]
        },
        {
          id: 3,
          authName: '企业信息管理',
          icon:'el-icon-office-building',
          children: [
            {
              id: 4,
              authName: '企业信息管理',
              path: 'qyInfo'
            }
          ]
        },
        {
          id: 5,
          authName: '土地信息',
          icon:'el-icon-map-location',
          children: [
            {
              id: 6,
              authName: '上传土地信息',
              path: 'cdInfo'
            }
          ]
        },
        {
          id: 7,
          authName: '产品信息',
          icon:'el-icon-box',
          children: [
            {
              id: 8,
              authName: '上传产品信息',
              path: 'productInfo'
            }
          ]
        },
        // {
        //   id: 9,
        //   authName: '收购信息',
        //   icon:'el-icon-coin',
        //   children: [
        //     {
        //       id: 10,
        //       authName: '上传原料收购信息',
        //       path: 'ylsgInfo'
        //     }
        //   ]
        // },
        {
          id: 13,
          authName: '投入品信息',
          icon:'el-icon-star-on',
          children: [
            {
              id: 14,
              authName: '投入品采购信息',
              path: 'trpcgInfo'
            },
            {
              id: 15,
              authName: '投入品使用信息',
              path: 'trpsyInfo'
            }
          ]
        },
        {
          id: 16,
          authName: '种植过程管理',
          icon:'el-icon-place',
          children: [
            {
              id: 17,
              authName: '种植过程管理',
              path: 'nszyInfo'
            }
          ]
        },
         {
          id: 22,
          authName: '加工过程管理',
          icon:'el-icon-star-on',
          children: [
            {
              id: 23,
              authName: '加工过程管理',
              path: 'jggc'
            }
          ]
        },
        {
          id: 24,
          authName: '流通过程管理',
          icon:'el-icon-s-promotion',
          children: [
            {
              id: 25,
              authName: '物流信息管理',
              path: 'wlxx'
            },
             {
              id: 25,
              authName: '客户信息管理',
              path: 'khxx'
            }
          ]
        },
        {
          id: 29,
          authName: '仓储管理',
          icon:'el-icon-s-home',
          children: [
            {
              id: 30,
              authName: '仓库管理',
              path: 'storageInfo'
            },
             {
              id: 31,
              authName: '入库管理',
              path: 'inStorage'
            },
            {
              id: 32,
              authName: '出库管理',
              path: 'outStorage'
            }
          ]
        },
        {
          id: 18,
          authName: '产品生产信息',
          icon:'el-icon-discover',
          children: [
            {
              id: 19,
              authName: '上传产品生产信息',
              path: 'cpscInfo'
            }
          ]
        },
        {
          id: 20,
          authName: '产品检测信息上传',
          icon:'el-icon-upload',
          children: [
            {
              id: 21,
              authName: '产品检测信息上传',
              path: 'jcsdInfo'
            },
            // {
            //   id: 22,
            //   authName: '检测信息自动上传',
            //   path: 'jczdInfo'
            // }
          ]
        },
        {
          id: 23,
          authName: '溯源码打印管理',
          icon:'el-icon-printer',
          children: [
            // {
            //   id: 24,
            //   authName: '溯源码生成数量统计',
            //   path: 'smtjInfo'
            // },
            {
              id: 25,
              authName: '溯源码打印管理',
              path: 'symInfo'
            },
            // {
            //   id: 26,
            //   authName: '溯源码扫描地查询',
            //   path: 'smdInfo'
            // }
          ]
        },
        {
          id:27,
          authName:'区块链存证系统',
          icon:'el-icon-connection',
          children:[
            {
              id:28,
              authName:'企业认证存证系统',
              path:'czsystem'
            },
             {
              id:29,
              authName:'产品认证存证系统',
              path:'proDuctCunzheng'
            }
          ]
        },
                {
          id:30,
          authName:'交易数据管理',
          icon:'el-icon-shopping-cart-2',
          children:[
            {
              id:31,
              authName:'交易数据管理',
              path:'jysj'
            }
          ]
        }
      ],
      username: ''
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
  background-color:#05824C;
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
  background-color: #03C17C;
  border: none;
}
</style>
