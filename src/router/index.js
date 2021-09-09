import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/website/Home.vue'
import Guard from '../services/middleware'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Register.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "about" */ '../views/store/Store.vue')
    //beforeEnter: Guard.auth
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Login.vue')
  },
  {
    path:'/profile',
    name:"Profile",
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Profile.vue'),
    beforeEnter: Guard.auth
  },
  {
    path:'/cart',
    name:'Cart',
    component: () => import('../views/store/Cart'),
    //beforeEnter: Guard.auth
  },
  {
    path:"/userShop",
    name:'UserShop',
    component: () => import('../views/user/UserShop')
  },
  {
    path:"/userOrderDetail/:id",
    name:'userOrderDetail',
    component: () => import('../views/user/UserOrderDetail')
  },
  {
    path:"/adminLogin",
    name:'adminLogin',
    component: () => import('../views/admin/AdminLogin')

  },
  {
    path:'/adminProfile',
    name:'adminProfile',
    component: () => import('../views/admin/ProfileAdmin')
  },
  {
    path:'/orders',
    name:'orders',
    component: () => import('../views/admin/Orders')
  },
  {
    path: '/ordersDetail/:id',
    name:'ordersDetail',
    component: () => import('../views/admin/OrdersDetail')
  },
  {
    path:'/canceledOrders',
    name:'canceledOrders',
    component: () => import('../views/admin/CanceledOrders')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
