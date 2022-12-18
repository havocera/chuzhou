import VueRouter from 'vue-router'
// 不同权限登录界面
import govLogin from '../components/login/govLogin'
import transportLogin from '../components/login/transportLogin'
import lssLogin from '../components/login/lssLogin'
import sgsLogin from '../components/login/sgsLogin'
import Login from '../components/Login'
import lssBaseInfo from '../components/lsssystem/lssBaseInfo'
// 零售商系统
import sgsBaseInfo from '../components/sgssystem/sgsBaseInfo'
import lsqyInfo from '../components/lsssystem/lsqyInfo'
import lssList from '../components/lsssystem/lssList'
//收购商系统
import sgsqyInfo from '../components/sgssystem/sgsqyInfo'
import sgsList from '../components/sgssystem/sgsList'
import index from '../components/index/index'
import qyList from '../components/bank/qyList'
import bankqyinfo from '../components/bank/bankqyinfo'
import enterpriseHome from '../components/enterpriseHome'
import countyLevelHome from '../components/countyLevelHome'
import highestLevelHome from '../components/highestLevelHome'
import BaseInfo from '../components/BaseInfo'
import ProcessInfo from '../components/ProcessInfo'
import TransportInfo from '../components/TransportInfo'
import PlantInfo from '../components/PlantInfo'
import FwsyInfo from '../components/FwsyInfo'
import cunzhengInfo from '../components/cunzhengInfo'
// 监管系统
import bankproductlist from '../components/bank/bankproductlist'
import banklocationlist from '../components/bank/banklocationlist'
import banktransportlist from '../components/bank/banktransportlist'
import bankTradeList from '../components/bank/bankTradeList'
import bankQyzzList from '../components/bank/bankQyzzList'
import bankSymList from '../components/bank/bankSymList'
import bankInstorageList from '../components/bank/bankInstorageList'
import BankLogin from '../components/BankLogin'
import symQuery from '../components/bank/symQuery'
import bankqyanalysis from '../components/bank/bankqyanalysis'
import bankTrpList from '../components/bank/bankTrpList'
// 物流商系统
import TransporterList from '../components/transport/TransporterList'
// 企业用户
import welcome from '../components/enterprise/welcome/welcome'
import userInfo from '../components/enterprise/userInfo/userInfo'
import qyInfo from '../components/enterprise/qyInfo/qyInfo'
import cdInfo from '../components/enterprise/cdInfo/cdInfo'
import productInfo from '../components/enterprise/productInfo/productInfo'
import ylsgInfo from '../components/enterprise/sgInfo/ylsgInfo'
import trpcgInfo from '../components/enterprise/trpInfo/trpcgInfo'
import trpsyInfo from '../components/enterprise/trpInfo/trpsyInfo'
import nszyInfo from '../components/enterprise/nszyInfo/nszyInfo'
import iotInfo from '../components/enterprise/nszyInfo/iotInfo'
import cpscInfo from '../components/enterprise/cpscInfo/cpscInfo'
import jcsd from '../components/enterprise/jcInfo/jcsd'
import jczd from '../components/enterprise/jcInfo/jczd'
import symprint from '../components/enterprise/symInfo/symprint'
import sym from '../components/sym'
import symList from '../components/enterprise/symInfo/symList'
import symtest from '../components/symtest'
import czsystem from '../components/enterprise/cunzheng/czsystem'
import register from '../components/register'
import jggc from '../components/enterprise/jggc/jggc'
import khxx from '../components/enterprise/ltgc/khxx'
import wlxx from '../components/enterprise/ltgc/wlxx'
import storageInfo from '../components/enterprise/storageManage/storageInfo'
import inStorage from '../components/enterprise/storageManage/inStorage'
import outStorage from '../components/enterprise/storageManage/outStorage'
import proDuctCunzheng from '../components/enterprise/cunzheng/proDuctCunzheng'
import jysj from '../components/enterprise/cunzheng/jysj'
// 县级监管单位
import cuserInfo from '../components/countyLevel/userInfo/userInfo'
import partyInfo from '../components/countyLevel/userInfo/partyInfo'
import qyUserMsg from '../components/countyLevel/userMsg/qyUserMsg'
import qyProductInfo from '../components/countyLevel/supervisionAndWarningInfo/qyProductInfo'
import districtTotal from '../components/countyLevel/qyMsg/districtTotal'
import industyTotal from '../components/countyLevel/qyMsg/industyTotal'
// 最高级权限
import huserInfo from '../components/highestLevel/userInfo/userInfo'
import cityMonitorUser from '../components/highestLevel/userMsg/cityMonitorUser'
import countyMonitorUser from '../components/highestLevel/userMsg/countyMonitorUser'
import govenMonitorUser from '../components/highestLevel/userMsg/govenMonitorUser'
import hqyUser from '../components/highestLevel/userMsg/hqyUser'
import totalRegisterUserMsg from '../components/highestLevel/userMsg/totalRegisterUserMsg'
import totalRegisterQy from '../components/highestLevel/qyMsg/totalRegisterQy'
import hdistrictTotal from '../components/highestLevel/qyMsg/hdistrictTotal'
import hindustyTotal from '../components/highestLevel/qyMsg/hindustyTotal'
import danamicMonitor from '../components/highestLevel/supervisionAndWarningInfo/danamicMonitor'
import pesticideWarning from '../components/highestLevel/supervisionAndWarningInfo/pesticideWarning'
import pickingMonitor from '../components/highestLevel/supervisionAndWarningInfo/pickingMonitor'
import hqyProductInfo from '../components/highestLevel/supervisionAndWarningInfo/hqyProductInfo'
import scanCodeMonitor from '../components/highestLevel/supervisionAndWarningInfo/scanCodeMonitor'
import scanCodeTotal from '../components/highestLevel/supervisionAndWarningInfo/scanCodeTotal'
import menuClass from '../components/highestLevel/platProtect/menuClass'
import menuMsg from '../components/highestLevel/platProtect/menuMsg'
import roleMsg from '../components/highestLevel/platProtect/roleMsg'
import roleTaskAllocation from '../components/highestLevel/platProtect/roleTaskAllocation'
import symReset from '../components/symReset'
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
      component: symReset
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
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/govLogin',
      name: 'govLogin',
      component: govLogin
    },
    {
      path: '/transportLogin',
      name: 'transportLogin',
      component: transportLogin
    },
    {
      path: '/lssLogin',
      name: 'lssLogin',
      component: lssLogin
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
      component: register
    },
    {
      path: '/sym/:name',
      name: 'sym',
      component: sym
    },
    {
      path: '/cunzhenggov',
      name: 'cunzhenggov',
      component: ()=>import('../components/cunzhenggov/index')
    },
    {
      path: '/qyList',
      name: 'qyList',
      component: qyList
    },
    {
      path: '/bankqyinfo',
      name: 'bankqyinfo',
      component: bankqyinfo
    },
    {
      path: '/bankproductlist',
      name: 'bankproductlist',
      component: bankproductlist
    },
    {
      path: '/banklocationlist',
      name: 'banklocationlist',
      component: banklocationlist
    },
    {
      path: '/banktransportlist',
      name: 'banktransportlist',
      component: banktransportlist
    },
    {
      path: '/bankTradeList',
      name: 'bankTradeList',
      component: bankTradeList
    },
    {
      path: '/bankTrpList',
      name: 'bankTrpList',
      component: bankTrpList
    },
    {
      path: '/bankSymList',
      name: 'bankSymList',
      component: bankSymList
    },
    {
      path: '/bankQyzzList',
      name: 'bankQyzzList',
      component: bankQyzzList
    },
    {
      path: '/bankInstorageList',
      name: 'bankInstorageList',
      component: bankInstorageList
    },
    {
      path: '/BankLogin',
      name: 'BankLogin',
      component: BankLogin
    },
    {
      path: '/symQuery',
      name: 'symQuery',
      component: symQuery
    },
    {
      path: '/bankqyanalysis',
      name: 'bankqyanalysis',
      component: bankqyanalysis
    },

        //  零售商基础信息菜单lssBaseInfo,路由重定向和子路由是、只需要写在一起，写一次就行了
        {
          path: '/lssBaseInfo',
          name: 'lssBaseInfo',
          component: lssBaseInfo,
          children: [
            {
              path: '/lsqyInfo',
              component: lsqyInfo
            },
            {
              path:'/lssList',
              component:lssList
            }
          ]
        },
                //  收购商基础信息菜单sgsBaseInfo,路由重定向和子路由是、只需要写在一起，写一次就行了
                {
                  path: '/sgsBaseInfo',
                  name: 'sgsBaseInfo',
                  component: sgsBaseInfo,
                  children: [
                    {
                      path: '/sgsqyInfo',
                      component: sgsqyInfo
                    },
                    {
                      path:'/sgsList',
                      component:sgsList
                    }
                  ]
                },

    // 企业用户菜单
    {
      path: '/enterpriseHome',
      name: 'enterpriseHome',
      component: enterpriseHome,
      children: [
        {
          path: '/userInfo',
          component: userInfo
        },
        {
          path: '/symtest',
          component: symtest
        },
      ]
    },
      // 企业基础信息菜单BaseInfo
        {
          path: '/BaseInfo',
          name: 'BaseInfo',
          component: BaseInfo,
          children: [
            {
              path: '/welcome',
              component: welcome
            },
           
            {
              path: '/qyInfo',
              component: qyInfo
            },
            {
              path: '/cdInfo',
              component: cdInfo
            },
            {
              path: '/productInfo',
              component: productInfo
            },
          ]
        },
          // 加工过程管理ProcessInfo
          {
            path: '/ProcessInfo',
            name: 'ProcessInfo',
            component: ProcessInfo,
            children: [
              {
                path: '/jggc',
                component: jggc
              },
              {
                path: '/storageInfo',
                component: storageInfo
              },
              {
                path: '/inStorage',
                component: inStorage
              },
              {
                path: '/outStorage',
                component: outStorage
              },
            ]
          },
           // 流通过程管理TransportInfo
           {
            path: '/TransportInfo',
            name: 'TransportInfo',
            component:TransportInfo,
            children: [
              {
                path: '/jysj',
                component:()=>import("../components/enterprise/jiaoyi/jiaoyi")
              },
              {
                path: '/khxx',
                component: khxx
              },
              {
                path: '/wlxx',
                component: wlxx
              },
            ]
          },
             // 种植过程管理PlantInfo
             {
              path: '/PlantInfo',
              name: 'PlantInfo',
              component:PlantInfo,
              children: [
                {
                  path: '/trpcgInfo',
                  component: trpcgInfo
                },
                {
                  path: '/trpsyInfo',
                  component: trpsyInfo
                },
                {
                  path: '/nszyInfo',
                  component: nszyInfo
                },
                {
                  path: '/iotInfo',
                  component: iotInfo
                },
                {
                  path: '/cpscInfo',
                  component: cpscInfo
                },
                {
                  path: '/jcsdInfo',
                  component: jcsd
                },
              ]
            },
             // 防伪溯源查询系统FwsyInfo
             {
              path: '/FwsyInfo',
              name: 'FwsyInfo',
              component:FwsyInfo,
              children: [
                
                {
                  path: '/symInfo',
                  component: symprint
                },
                {
                  path: '/symList',
                  component: symList
                },
               
              ]
            },
              // 存证系统cunzhengInfo
              {
                path: '/cunzhengInfo',
                name: 'cunzhengInfo',
                component:cunzhengInfo,
                children: [
                  {
                    path: '/czshow',
                    component:()=>import('../components/enterprise/cunzheng/czshow/czshow')
                  },
                  {
                    path: '/czsystem',
                    component:czsystem
                  },
                  {
                    path: '/proDuctCunzheng',
                    component: proDuctCunzheng
                  },
                  {
                    path: '/jiaoyi',
                    component:jysj
                  },
                 
                ]
              },
    // 县级监管单位菜单
    {
      path: '/countyLevelHome',
      name: 'countyLevelHome',
      component: countyLevelHome,
      children: [
        {
          path: '/cuserInfo',
          component: cuserInfo
        },
        {
          path: '/partyInfo',
          component: partyInfo
        },
        {
          path: '/qyUserMsg',
          component: qyUserMsg
        },
        {
          path: '/qyProductInfo',
          component: qyProductInfo
        },
        {
          path: '/districtTotal',
          component: districtTotal
        },
        {
          path: '/industyTotal',
          component: industyTotal
        },
      ]
    },
    // 最高级权限菜单
    {
      path: '/highestLevelHome',
      name: 'highestLevelHome',
      component: highestLevelHome,
      children: [
        {
          path: '/huserInfo',
          component: huserInfo
        },
        {
          path: '/cityMonitorUser',
          component: cityMonitorUser
        },
        {
          path: '/countyMonitorUser',
          component: countyMonitorUser
        },
        {
          path: '/govenMonitorUser',
          component: govenMonitorUser
        },
        {
          path: '/hqyUser',
          component: hqyUser
        },
        {
          path: '/totalRegisterUserMsg',
          component: totalRegisterUserMsg
        },
        {
          path: '/totalRegisterQy',
          component: totalRegisterQy
        },
        {
          path: '/hdistrictTotal',
          component: hdistrictTotal
        },
        {
          path: '/hindustyTotal',
          component: hindustyTotal
        },
        {
          path: '/danamicMonitor',
          component: danamicMonitor
        },
        {
          path: '/pesticideWarning',
          component: pesticideWarning
        },
        {
          path: '/pickingMonitor',
          component: pickingMonitor
        },
        {
          path: '/hqyProductInfo',
          component: hqyProductInfo
        },
        {
          path: '/scanCodeMonitor',
          component: scanCodeMonitor
        },
        {
          path: '/scanCodeTotal',
          component: scanCodeTotal
        },
        {
          path: '/menuClass',
          component: menuClass
        },
        {
          path: '/menuMsg',
          component: menuMsg
        },
        {
          path: '/roleMsg',
          component: roleMsg
        },
        {
          path: '/roleTaskAllocation',
          component: roleTaskAllocation
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
