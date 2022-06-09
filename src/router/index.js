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
  // {
  //   path: '/publication',
  //   name: 'publication',
  //   // 意味着 [name] 等于login webpackChunkName用到哪个模块再加载哪个模块，实现懒加载进行页面的优化
  //   component: () => import(/* webpackChunkName: "login" */ '../views/Publication.vue'),
  // },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
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
  //   component: () => import(/* webpackChunkName: "category" */ '../views/Project.vue'),
  // },
  // {
  //   path: '/seminars',
  //   name: 'seminars',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Seminars.vue'),
  // },
  // {
  //   path: '/people',
  //   name: 'people',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/People.vue'),
  // },
  // {
  //   path: '/application',
  //   name: 'application',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Application.vue'),
  // },
  // {
  //   path: '/About',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  // {
  //   path: '/resource',
  //   name: 'resource',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Resource.vue'),
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
