import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: () => import(/* webpackChunkName: "login" */ '../views/PublicationTopic.vue'),
  },
  {
    path: '/publication/topic',
    name: 'publicationTopic',
    component: () => import(/* webpackChunkName: "login" */ '../views/PublicationTopic.vue'),
  },
  {
    path: '/publication/date',
    name: 'publicationDate',
    component: () => import(/* webpackChunkName: "login" */ '../views/PublicationDate.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/research',
    name: 'research',
    component: () => import(/* webpackChunkName: "home" */ '../views/Research.vue'),
  },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
  // },
  // {
  //   path: '/project',
  //   name: 'project',
  //   meta: {
  //     index: 1
  //   },
  //   component: () => import(/* webpackChunkName: "category" */ '../views/PublicationDate.vue'),
  // },
  // {
  //   path: '/seminars',
  //   name: 'seminars',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Seminars.vue'),
  // },
  {
    path: '/people',
    name: 'people',
    component: () => import(/* webpackChunkName: "about" */ '../views/People.vue'),
  },
  {
    path: '/application',
    name: 'application',
    component: () => import(/* webpackChunkName: "about" */ '../views/Application.vue'),
  },
  // {
  //   path: '/About',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
     path: '/resource',
     name: 'resource',
     component: () => import(/* webpackChunkName: "about" */ '../views/ResourceLogin.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


export default router
