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
    beforeEnter: Guard.auth
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
    component: () => import('../views/admin/ProfileAdmin'),
    beforeEnter: Guard.auth
  },
  {
    path:'/orders',
    name:'orders',
    component: () => import('../views/admin/Orders'),
    beforeEnter: Guard.auth
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
  },
  {
    path:'/canceledOrderDetail/:id',
    name:'canceledOrderDetail',
    component: () => import('../views/admin/CanceledOrdersDetail')
  },
  {
    path:'/concludedOrders',
    name:'concludedOrders',
    component: () => import('../views/admin/ConcludedOrders')
  },
  {
    path:'/concludedOrdersDetail/:id',
    name:'concludedOrdersDetail',
    component: () => import('../views/admin/ConcludedOrdersDetail')
  },
  {
    path:'/userCupons',
    name:'userCupons',
    component: () => import('../views/user/UserCupons')
  },
  {
    path:'/cupons',
    name: 'cupons',
    component: () => import('../views/admin/Cupons')
  },
  {
    path:'/newProduct',
    name:'newProduct',
    component: () => import('../views/admin/NewProduct')
  },
  {
    path:'/categories',
    name:'categories',
    component: () => import('../views/admin/Categories')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
