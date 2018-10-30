import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import GetTel from '@/components/GetTel'
// import Result from '@/components/Result'
// import Group from '@/components/Group'
// import Code from '@/components/Code'
const Group = resolve => require(['@/components/Group'], resolve);
// // 申请入驻
// import AppCenter from '@/components/app/AppCenter'
const AppCenter = resolve => require(['@/components/app/AppCenter'], resolve);
// // 充值首页
// import Recharge from '@/components/Recharge/Recharge'
const Recharge = resolve => require(['@/components/Recharge/Recharge'], resolve);
// // 币种列表
// import CurrencyList from '@/components/Recharge/CurrencyList'
const CurrencyList = resolve => require(['@/components/Recharge/CurrencyList'], resolve);
// // 充值记录
// import cRecord from '@/components/Recharge/cRecord'
const cRecord = resolve => require(['@/components/Recharge/cRecord'], resolve);
// // 充值详情
// import topUpDetails from '@/components/Recharge/topUpDetails'
const topUpDetails = resolve => require(['@/components/Recharge/topUpDetails'], resolve);
// // 举报页面
// import Report from '@/components/Report/report'
const Report = resolve => require(['@/components/Report/report'], resolve);
// // 举报跳转页面
// import ReportInfo from '@/components/Report/reportInfo'
const ReportInfo = resolve => require(['@/components/Report/reportInfo'], resolve);
// 反馈页
const Feedback = resolve => require(['@/components/Feedback/Feedback'],resolve)
// 反馈详情页
const FeedbackInfo = resolve => require(['@/components/Feedback/FeedbackInfo'],resolve)
// 认证个人
const Personal = resolve => require(['@/components/Authentication/Personal/Personal'],resolve)

const load = resolve => require(['@/components/loading'],resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', redirect:'/appcenter'},
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import('@/components/Home')
    // },{
    //   path: '/gettel',
    //   component: () => import('@/components/GetTel')
    // },{
    //   path:'/result',
    //   component: () => import('@/components/Result')
    // },{
    //   path: '/group',
    //   component: () => import('@/components/Group')
    // },{
    //   path: '/code',
    //   component: () => import('@/components/Code')
    // },
    {
      path:'/group',
      component:Group
    },
    {
      path:'/appcenter',
      component: AppCenter
    },{
      path:'/recharge',
      component: Recharge
    },{
      path:'/currencylist',
      component:CurrencyList
    },{
      path:'/crecord',
      component: cRecord
    },{
      path:'/topupdetails',
      component: topUpDetails
    },{
      path:'/report',
      component: Report
    },{
      path:'/reportinfo',
      component: ReportInfo
    },{
      path:'/feedback',
      component: Feedback
    },{
      path:'/feedbackinfo',
      component: FeedbackInfo
    },{
      path:'/load',
      component: load
    },{
      path:'/personal',
      component: Personal
    }
  ],
  scrollBehavior(to ,from ,savedPosition){
    return{
      x:0,
      y:0
    }
  }
})
