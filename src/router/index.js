import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home'
import Home2 from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  component: Login
},
{
  path: '/home',
  name: 'home',
  component: Home,
  children: [
    { path: '',
      component: Home2 },
    {
      path: 'comment',
      component: () => import('../views/comment/pinglunguanli.vue')
    },
    {
      path: 'articles',
      component: () => import('../views/comment/neirongliebiao.vue')
    },
    {
      path: 'publish',
      component: () => import('../views/comment/publishArticle.vue')
    },
    {
      path: 'material',
      component: () => import('../views/comment/material.vue')
    }
  ]
}
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
