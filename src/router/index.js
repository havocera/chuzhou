import VueRouter from 'vue-router'
// 不同权限登录界面

// import lssBaseInfo from '../components/lsssystem/lssBaseInfo'
// // 零售商系统
// import sgsBaseInfo from '../components/sgssystem/sgsBaseInfo'
// import lsqyInfo from '../components/lsssystem/lsqyInfo'
// import lssList from '../components/lsssystem/lssList'
// //收购商系统
// import sgsqyInfo from '../components/sgssystem/sgsqyInfo'
// import sgsList from '../components/sgssystem/sgsList'
// import index from '../components/index/index'
// import qyList from '../components/bank/qyList'
// import bankqyinfo from '../components/bank/bankqyinfo'
// import enterpriseHome from '../components/enterpriseHome'
// import countyLevelHome from '../components/countyLevelHome'
// import highestLevelHome from '../components/highestLevelHome'
// import BaseInfo from '../components/BaseInfo'
// import ProcessInfo from '../components/ProcessInfo'
// import TransportInfo from '../components/TransportInfo'
// import PlantInfo from '../components/PlantInfo'
// import FwsyInfo from '../components/FwsyInfo'
// import cunzhengInfo from '../components/cunzhengInfo'
// // 监管系统
// import bankproductlist from '../components/bank/bankproductlist'
// import banklocationlist from '../components/bank/banklocationlist'
// import banktransportlist from '../components/bank/banktransportlist'
// import bankTradeList from '../components/bank/bankTradeList'
// import bankQyzzList from '../components/bank/bankQyzzList'
// import bankSymList from '../components/bank/bankSymList'
// import bankInstorageList from '../components/bank/bankInstorageList'
// import BankLogin from '../components/BankLogin'
// import symQuery from '../components/bank/symQuery'
// import bankqyanalysis from '../components/bank/bankqyanalysis'
// import bankTrpList from '../components/bank/bankTrpList'
// // 物流商系统
// import TransporterList from '../components/transport/TransporterList'
// 企业用户
// import welcome from '../components/enterprise/welcome/welcome'
// import userInfo from '../components/enterprise/userInfo/userInfo'
// import qyInfo from '../components/enterprise/qyInfo/qyInfo'
// import cdInfo from '../components/enterprise/cdInfo/cdInfo'
// import productInfo from '../components/enterprise/productInfo/productInfo'
// import ylsgInfo from '../components/enterprise/sgInfo/ylsgInfo'
// import trpcgInfo from '../components/enterprise/trpInfo/trpcgInfo'
// import trpsyInfo from '../components/enterprise/trpInfo/trpsyInfo'
// import nszyInfo from '../components/enterprise/nszyInfo/nszyInfo'
// import iotInfo from '../components/enterprise/nszyInfo/iotInfo'
// import cpscInfo from '../components/enterprise/cpscInfo/cpscInfo'
// import jcsd from '../components/enterprise/jcInfo/jcsd'
// import jczd from '../components/enterprise/jcInfo/jczd'
// import symprint from '../components/enterprise/symInfo/symprint'
// import sym from '../components/sym'
// import symList from '../components/enterprise/symInfo/symList'
// import symtest from '../components/symtest'
// import czsystem from '../components/enterprise/cunzheng/czsystem'
// import register from '../components/register'
// import jggc from '../components/enterprise/jggc/jggc'
// import khxx from '../components/enterprise/ltgc/khxx'
// import wlxx from '../components/enterprise/ltgc/wlxx'
// import storageInfo from '../components/enterprise/storageManage/storageInfo'
// import inStorage from '../components/enterprise/storageManage/inStorage'
// import outStorage from '../components/enterprise/storageManage/outStorage'
// import proDuctCunzheng from '../components/enterprise/cunzheng/proDuctCunzheng'
// import jysj from '../components/enterprise/cunzheng/jysj'
// 县级监管单位
// import cuserInfo from '../components/countyLevel/userInfo/userInfo'
// import partyInfo from '../components/countyLevel/userInfo/partyInfo'
// import qyUserMsg from '../components/countyLevel/userMsg/qyUserMsg'
// import qyProductInfo from '../components/countyLevel/supervisionAndWarningInfo/qyProductInfo'
// import districtTotal from '../components/countyLevel/qyMsg/districtTotal'
// import industyTotal from '../components/countyLevel/qyMsg/industyTotal'
// 最高级权限
// import huserInfo from '../components/highestLevel/userInfo/userInfo'
// import cityMonitorUser from '../components/highestLevel/userMsg/cityMonitorUser'
// import countyMonitorUser from '../components/highestLevel/userMsg/countyMonitorUser'
// import govenMonitorUser from '../components/highestLevel/userMsg/govenMonitorUser'
// import hqyUser from '../components/highestLevel/userMsg/hqyUser'
// import totalRegisterUserMsg from '../components/highestLevel/userMsg/totalRegisterUserMsg'
// import totalRegisterQy from '../components/highestLevel/qyMsg/totalRegisterQy'
// import hdistrictTotal from '../components/highestLevel/qyMsg/hdistrictTotal'
// import hindustyTotal from '../components/highestLevel/qyMsg/hindustyTotal'
// import danamicMonitor from '../components/highestLevel/supervisionAndWarningInfo/danamicMonitor'
// import pesticideWarning from '../components/highestLevel/supervisionAndWarningInfo/pesticideWarning'
// import pickingMonitor from '../components/highestLevel/supervisionAndWarningInfo/pickingMonitor'
// import hqyProductInfo from '../components/highestLevel/supervisionAndWarningInfo/hqyProductInfo'
// import scanCodeMonitor from '../components/highestLevel/supervisionAndWarningInfo/scanCodeMonitor'
// import scanCodeTotal from '../components/highestLevel/supervisionAndWarningInfo/scanCodeTotal'
// import menuClass from '../components/highestLevel/platProtect/menuClass'
// import menuMsg from '../components/highestLevel/platProtect/menuMsg'
// import roleMsg from '../components/highestLevel/platProtect/roleMsg'
// import roleTaskAllocation from '../components/highestLevel/platProtect/roleTaskAllocation'
// import symReset from '../components/symReset'
var router = new VueRouter({
  base: '/qkl/',
  // mode: 'history', //去掉路由#号
  routes: [
    // {
    //   path: '/', redirect: '/index'
    // },
    {
      path: '/', redirect: '/index'
    },
    {
      path:'/symReset',
      component: ()=>import('../components/symReset')
    },
    {
      path: '/enterpriseHome', redirect: '/userInfo'
    },
    {
      path: '/BaseInfo', redirect: '/qyInfo'
    },
    {
      path: '/lssBaseInfo', redirect: '/lsqyInfo'
    },
    {
      path: '/sgsBaseInfo', redirect: '/sgsqyInfo'
    },
    {
      path: '/ProcessInfo', redirect: '/jggc'
    },
    {
      path: '/FwsyInfo', redirect: '/symInfo'
    },
    {
      path: '/PlantInfo', redirect: '/trpcgInfo'
    },
    {
      path: '/TransportInfo', redirect: '/jysj'
    },
    {
      path: '/cunzhengInfo', redirect: '/czshow'
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import('../components/index/index')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('../components/Login')
    },
    {
      path: '/govLogin',
      name: 'govLogin',
      component:()=>import('../components/login/govLogin')
    },
    {
      path: '/transportLogin',
      name: 'transportLogin',
      component: ()=>import('../components/login/transportLogin')
    },
    {
      path: '/lssLogin',
      name: 'lssLogin',
      component: ()=>import('../components/login/lssLogin')
    },
    {
      path: '/sgsLogin',
      name: 'sgsLogin',
      component:()=>import('../components/login/sgsLogin')
    },
    {
      path: '/TransporterList',
      name: 'TransporterList',
      // component: TransporterList
      component: ()=>import('../components/transport/TransporterList')
    },
    {
      path: '/wlxxdetail',
      name: 'wlxxdetail',
      // component: TransporterList
      component: ()=>import('../components/transport/models/printer')
    },
    {
      path: '/datav',
      name: 'datav',
      component: ()=>import('../components/gov/datav/datav')
    },
    {
      path: '/BaseInfo',
      name: 'BaseInfo',
      component: () => import('../components/BaseInfo.vue')
    },
    {
      path: '/daohang',
      name: 'daohang',
      component: () => import('../components/daohang/daohang.vue')
    },
    {
      path: '/sydaohang',
      name: 'sydaohang',
      component: () => import('../components/sydaohang/sydaohang.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:  () => import('../components/register')
    },
    {
      path: '/sym/:name',
      name: 'sym',
      component: () => import('../components/sym')
    },
    {
      path: '/cunzhenggov',
      name: 'cunzhenggov',
      component: ()=>import('../components/cunzhenggov/index')
    },
    {
      path: '/qyList',
      name: 'qyList',
      component: ()=>import('../components/bank/qyList')
    },
    {
      path: '/bankqyinfo',
      name: 'bankqyinfo',
      component:()=>import('../components/bank/bankqyinfo')
    },
    {
      path: '/bankproductlist',
      name: 'bankproductlist',
      component: ()=>import('../components/bank/bankproductlist')
    },
    {
      path: '/banklocationlist',
      name: 'banklocationlist',
      component:()=>import('../components/bank/banklocationlist')
    },
    {
      path: '/banktransportlist',
      name: 'banktransportlist',
      component: ()=>import('../components/bank/banktransportlist')
    },
    {
      path: '/bankTradeList',
      name: 'bankTradeList',
      component:  ()=>import('../components/bank/bankTradeList')
    },
    {
      path: '/bankTrpList',
      name: 'bankTrpList',
      component: ()=>import('../components/bank/bankTrpList')
    },
    {
      path: '/bankSymList',
      name: 'bankSymList',
      component:()=>import('../components/bank/bankSymList')
    },
    {
      path: '/bankQyzzList',
      name: 'bankQyzzList',
      component: ()=>import('../components/bank/bankQyzzList')
    },
    {
      path: '/bankInstorageList',
      name: 'bankInstorageList',
      component:()=>import('../components/bank/bankInstorageList')
    },
    {
      path: '/BankLogin',
      name: 'BankLogin',
      component: ()=>import('../components/BankLogin')
    },
    {
      path: '/symQuery',
      name: 'symQuery',
      component: ()=>import('../components/bank/symQuery')
    },
    {
      path: '/bankqyanalysis',
      name: 'bankqyanalysis',
      component: ()=>import('../components/bank/bankqyanalysis')
    },

        //  零售商基础信息菜单lssBaseInfo,路由重定向和子路由是、只需要写在一起，写一次就行了
        {
          path: '/lssBaseInfo',
          name: 'lssBaseInfo',
          component: ()=>import('../components/lsssystem/lssBaseInfo'),
          children: [
            {
              path: '/lsqyInfo',
              component: ()=>import('../components/lsssystem/lsqyInfo')
            },
            {
              path:'/lssList',
              component:()=>import('../components/lsssystem/lssList')
            }
          ]
        },
                //  收购商基础信息菜单sgsBaseInfo,路由重定向和子路由是、只需要写在一起，写一次就行了
                {
                  path: '/sgsBaseInfo',
                  name: 'sgsBaseInfo',
                  component: ()=>import('../components/sgssystem/sgsBaseInfo'),
                  children: [
                    {
                      path: '/sgsqyInfo',
                      component: ()=>import('../components/sgssystem/sgsqyInfo')
                    },
                    {
                      path:'/sgsList',
                      component:()=>import('../components/sgssystem/sgsList')
                    }
                  ]
                },

    // 企业用户菜单
    {
      path: '/enterpriseHome',
      name: 'enterpriseHome',
      component: ()=>import('../components/enterpriseHome'),
      children: [
        {
          path: '/userInfo',
          component: ()=>import('../components/enterprise/userInfo/userInfo')
        },
        {
          path: '/symtest',
          component: ()=>import('../components/symtest')
        },
      ]
    },
      // 企业基础信息菜单BaseInfo
        {
          path: '/BaseInfo',
          name: 'BaseInfo',
          component:()=>import('../components/BaseInfo'),
          children: [
            {
              path: '/welcome',
              component: ()=>import('../components/enterprise/welcome/welcome')
            },
           
            {
              path: '/qyInfo',
              component: ()=>import('../components/enterprise/qyInfo/qyInfo')
            },
            {
              path: '/cdInfo',
              component: ()=>import('../components/enterprise/cdInfo/cdInfo')
            },
            {
              path: '/productInfo',
              component: ()=>import('../components/enterprise/productInfo/productInfo')
            },
          ]
        },
          // 加工过程管理ProcessInfo
          {
            path: '/ProcessInfo',
            name: 'ProcessInfo',
            component: ()=>import('../components/ProcessInfo'),
            children: [
              {
                path: '/jggc',
                component: ()=>import('../components/enterprise/jggc/jggc')
              },
              {
                path: '/storageInfo',
                component: ()=>import( '../components/enterprise/storageManage/storageInfo')
              },
              {
                path: '/inStorage',
                component: ()=>import( '../components/enterprise/storageManage/inStorage')
              },
              {
                path: '/outStorage',
                component: ()=>import( '../components/enterprise/storageManage/outStorage')
              },
            ]
          },
           // 流通过程管理TransportInfo
           {
            path: '/TransportInfo',
            name: 'TransportInfo',
            component:()=>import('../components/TransportInfo'),
            children: [
              {
                path: '/jysj',
                component:()=>import("../components/enterprise/jiaoyi/jiaoyi")
              },
              {
                path: '/khxx',
                component: ()=>import('../components/enterprise/ltgc/khxx')
              },
              {
                path: '/wlxx',
                component: ()=>import('../components/enterprise/ltgc/wlxx')
              },
            ]
          },
             // 种植过程管理PlantInfo
             {
              path: '/PlantInfo',
              name: 'PlantInfo',
              component:()=>import('../components/PlantInfo'),
              children: [
                {
                  path: '/trpcgInfo',
                  component: ()=>import('../components/enterprise/trpInfo/trpcgInfo')
                },
                {
                  path: '/trpsyInfo',
                  component: ()=>import('../components/enterprise/trpInfo/trpsyInfo')
                },
                {
                  path: '/nszyInfo',
                  component: ()=>import('../components/enterprise/nszyInfo/nszyInfo')
                },
                {
                  path: '/iotInfo',
                  component: ()=>import('../components/enterprise/nszyInfo/iotInfo')
                },
                {
                  path: '/cpscInfo',
                  component: ()=>import( '../components/enterprise/cpscInfo/cpscInfo')
                },
                {
                  path: '/jcsdInfo',
                  component:  ()=>import( '../components/enterprise/jcInfo/jcsd')
                },
              ]
            },
             // 防伪溯源查询系统FwsyInfo
             {
              path: '/FwsyInfo',
              name: 'FwsyInfo',
              component: ()=>import('../components/FwsyInfo'),
              children: [
                
                {
                  path: '/symInfo',
                  component: ()=>import('../components/enterprise/symInfo/symprint')
                },
                {
                  path: '/symList',
                  component: ()=>import('../components/enterprise/symInfo/symList')
                },
               
              ]
            },
              // 存证系统cunzhengInfo
              {
                path: '/cunzhengInfo',
                name: 'cunzhengInfo',
                component:()=>import( '../components/cunzhengInfo'),
                children: [
                  {
                    path: '/czshow',
                    component:()=>import('../components/enterprise/cunzheng/czshow/czshow')
                  },
                  {
                    path: '/czsystem',
                    component:()=>import('../components/enterprise/cunzheng/czsystem')
                  },
                  {
                    path: '/proDuctCunzheng',
                    component: ()=>import('../components/enterprise/cunzheng/proDuctCunzheng')
                  },
                  {
                    path: '/jiaoyi',
                    component:()=>import('../components/enterprise/cunzheng/jysj')
                  },
                 
                ]
              },
    // 县级监管单位菜单
    {
      path: '/countyLevelHome',
      name: 'countyLevelHome',
      component: ()=>import('../components/countyLevelHome'),
      children: [
        {
          path: '/cuserInfo',
          component: ()=>import('../components/countyLevel/userInfo/userInfo')
        },
        {
          path: '/partyInfo',
          component: ()=>import('../components/countyLevel/userInfo/partyInfo')
        },
        {
          path: '/qyUserMsg',
          component: ()=>import('../components/countyLevel/userMsg/qyUserMsg')
        },
        {
          path: '/qyProductInfo',
          component: ()=>import('../components/countyLevel/supervisionAndWarningInfo/qyProductInfo')
        },
        {
          path: '/districtTotal',
          component:  ()=>import('../components/countyLevel/qyMsg/districtTotal')
        },
        {
          path: '/industyTotal',
          component:  ()=>import('../components/countyLevel/qyMsg/industyTotal')
        },
      ]
    },
    // 最高级权限菜单
    {
      path: '/highestLevelHome',
      name: 'highestLevelHome',
      component: ()=>import('../components/highestLevelHome'),
      children: [
        {
          path: '/huserInfo',
          component: ()=>import('../components/highestLevel/userInfo/userInfo')
        },
        {
          path: '/cityMonitorUser',
          component:  ()=>import('../components/highestLevel/userMsg/cityMonitorUser')
        },
        {
          path: '/countyMonitorUser',
          component: ()=>import('../components/highestLevel/userMsg/countyMonitorUser')
        },
        {
          path: '/govenMonitorUser',
          component: ()=>import( '../components/highestLevel/userMsg/govenMonitorUser')
        },
        {
          path: '/hqyUser',
          component:  ()=>import( '../components/highestLevel/userMsg/hqyUser')
        },
        {
          path: '/totalRegisterUserMsg',
          component:  ()=>import( '../components/highestLevel/userMsg/totalRegisterUserMsg')
        },
        {
          path: '/totalRegisterQy',
          component: ()=>import('../components/highestLevel/qyMsg/totalRegisterQy')
        },
        {
          path: '/hdistrictTotal',
          component: ()=>import('../components/highestLevel/qyMsg/hdistrictTotal')
        },
        {
          path: '/hindustyTotal',
          component: ()=>import('../components/highestLevel/qyMsg/hindustyTotal')
        },
        {
          path: '/danamicMonitor',
          component: ()=>import('../components/highestLevel/supervisionAndWarningInfo/danamicMonitor')
        },
        {
          path: '/pesticideWarning',
          component: ()=>import('../components/highestLevel/supervisionAndWarningInfo/pesticideWarning')
        },
        {
          path: '/pickingMonitor',
          component: ()=>import( '../components/highestLevel/supervisionAndWarningInfo/pickingMonitor')
        },
        {
          path: '/hqyProductInfo',
          component: ()=>import(  '../components/highestLevel/supervisionAndWarningInfo/hqyProductInfo')
        },
        {
          path: '/scanCodeMonitor',
          component: ()=>import(  '../components/highestLevel/supervisionAndWarningInfo/scanCodeMonitor')
        },
        {
          path: '/scanCodeTotal',
          component: ()=>import( '../components/highestLevel/supervisionAndWarningInfo/scanCodeTotal')
        },
        {
          path: '/menuClass',
          component:  ()=>import( '../components/highestLevel/platProtect/menuClass')
        },
        {
          path: '/menuMsg',
          component:  ()=>import(  '../components/highestLevel/platProtect/menuMsg')
        },
        {
          path: '/roleMsg',
          component: ()=>import( '../components/highestLevel/platProtect/roleMsg')
        },
        {
          path: '/roleTaskAllocation',
          component: ()=>import( '../components/highestLevel/platProtect/roleTaskAllocation')
        },
        
      ]
    },
  ],
  linkActiveClass: 'mui-active'
})
router.beforeEach((to, from, next) => {
  // let isLogin = !!localStorage.eleToken
  const now_path = to.path.split('/')
  
  if (to.path === '/login'||to.path === '/BankLogin' ||to.path ==='/register' || now_path[1] === 'sym'||to.path === '/index'||to.path === '/symQuery'||to.path =='/govLogin'||to.path =='/transportLogin'||to.path =='/lssLogin'||to.path =='/sgsLogin') return next()
  // if () return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
