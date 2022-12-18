import VueRouter from 'vue-router'
import Login from '../components/Login'
import enterpriseHome from '../components/enterpriseHome'
import countyLevelHome from '../components/countyLevelHome'
import highestLevelHome from '../components/highestLevelHome'
import one from '../components/one'
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
import cpscInfo from '../components/enterprise/cpscInfo/cpscInfo'
import jcsd from '../components/enterprise/jcInfo/jcsd'
import jczd from '../components/enterprise/jcInfo/jczd'
import smtjInfo from '../components/enterprise/symInfo/smtjInfo'
import symprint from '../components/enterprise/symInfo/symprint'
import smd from '../components/enterprise/symInfo/smd'
import sym from '../components/sym'
import symtest from '../components/symtest'
import czsystem from '../components/czsystem'
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
    {
      path: '/', redirect: '/login'
    },
    {
      path:'/symReset',
      component: symReset

    },
    {
      path: '/enterpriseHome', redirect: '/userInfo'
    },
    {
      path: '/one', redirect: '/productInfo'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
    // 企业用户菜单
    {
      path: '/enterpriseHome',
      name: 'enterpriseHome',
      component: enterpriseHome,
      children: [
        {
          path: '/welcome',
          component: welcome
        },
        {
          path: '/userInfo',
          component: userInfo
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
        {
          path: '/ylsgInfo',
          component: ylsgInfo
        },
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
          path: '/cpscInfo',
          component: cpscInfo
        },
        {
          path: '/jcsdInfo',
          component: jcsd
        },
        {
          path: '/jczdInfo',
          component: jczd
        },
        {
          path: '/smtjInfo',
          component: smtjInfo
        },
        {
          path: '/symInfo',
          component: symprint
        },
        {
          path: '/smdInfo',
          component: smd
        },
        {
          path: '/czsystem',
          component: czsystem
        },
        {
          path: '/jysj',
          component: jysj
        },
        {
          path: '/proDuctCunzheng',
          component: proDuctCunzheng
        },
        {
          path: '/jggc',
          component: jggc
        },
        {
          path: '/khxx',
          component: khxx
        },
        {
          path: '/wlxx',
          component: wlxx
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
        {
          path: '/symtest',
          component: symtest
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
  
  if (to.path === '/login' || to.path ==='/register' || now_path[1] === 'sym') return next()
  // if () return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
