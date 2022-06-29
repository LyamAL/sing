import Vue from 'vue'
import VueRouter from 'vue-router'

import {getLocal,removeLocal} from '@/common/js/utils'
import {Message} from 'element-ui'

Vue.use(VueRouter)

// 定义路由规则
const routes = [
  // 实验室主页
  {
    path: '/',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/publication',
    name: 'publication',
    component: () => import(/* webpackChunkName: "publication" */ '../views/PublicationTopic.vue'),
  },
  {
    path: '/publication/topic',
    name: 'publicationTopic',
    component: () => import(/* webpackChunkName: "publicationTopic" */ '../views/PublicationTopic.vue'),
  },
  {
    path: '/publication/date',
    name: 'publicationDate',
    component: () => import(/* webpackChunkName: "publicationDate" */ '../views/PublicationDate.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/research',
    name: 'research',
    component: () => import(/* webpackChunkName: "research" */ '../views/Research.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
  },
  {
    path: '/people',
    name: 'people',
    component: () => import(/* webpackChunkName: "people" */ '../views/People.vue'),
  },
  {
    path: '/application',
    name: 'application',
    component: () => import(/* webpackChunkName: "application" */ '../views/Application.vue'),
  },
  {
    path: '/joinus',
    name: 'join-us',
    component: () => import(/* webpackChunkName: "join-us" */ '../views/JoinUs.vue'),
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resource.vue'),
  },
  {
    path: '/resourceLogin',
    name: 'resourceLogin',
    component: () => import(/* webpackChunkName: "resource" */ '../views/ResourceLogin.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  // 获取存储localStorage的token
  let token = getLocal('token')
  // 获取存储token的开始时间
  const tokenStartTime = getLocal('tokenStartTime')
  // 后台给出的token有效时间，一个星期 单位 是秒
  // 我们自己定义1天过期，让用户重新登录一下， 用户总不可能在一个页面挂机一天吧
  const timeOver = 1 * 24 * 3600 * 1000
  // 当前时间
  let date = new Date().getTime()
  // 如果大于说明是token过期了
  if(date - tokenStartTime > timeOver) {
     console.log('tocken',token)
     token = null
     removeLocal('token')
  }
  // 如果token过期了
  if (!token) {
    if (to.path == '/resource'){
      // 注意要import element的Message组件
      Message.error("登录状态过期，请重新登录")
      return next('/resourceLogin')
    }
  }
  next()

})

export default router
