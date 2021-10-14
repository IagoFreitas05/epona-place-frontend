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
    component: () => import('../views/user/orders/UserShop')
  },
  {
    path:"/userOrderDetail/:id",
    name:'userOrderDetail',
    component: () => import('../views/user/orders/UserOrderDetail')
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
    component: () => import('../views/admin/orders/Orders'),
    beforeEnter: Guard.auth
  },
  {
    path: '/ordersDetail/:id',
    name:'ordersDetail',
    component: () => import('../views/admin/orders/OrdersDetail')
  },
  {
    path:'/canceledOrders',
    name:'canceledOrders',
    component: () => import('../views/admin/orders/CanceledOrders')
  },
  {
    path:'/concludedOrders',
    name:'concludedOrders',
    component: () => import('../views/admin/orders/OrdersShipped')
  },
  {
    path:'/receivedOrders',
    name:'receivedOrders',
    component: () => import('../views/admin/orders/ReceivedOrders')
  },
  {
    path:'/requestCanceledOrders',
    name:'requestCanceledOrders',
    component: () => import('../views/admin/orders/RequestCanceledOrders')
  },
  {
    path:'/userCupons',
    name:'userCupons',
    component: () => import('../views/user/UserCupons')
  },
  {
    path:'/cupons',
    name: 'cupons',
    component: () => import('../views/admin/products/Cupons')
  },
  {
    path:'/newProduct',
    name:'newProduct',
    component: () => import('../views/admin/products/NewProduct')
  },
  {
    path:'/categories',
    name:'categories',
    component: () => import('../views/admin/products/Categories')
  },
  {
    path:'/aprovedCancel',
    name:'aprovedCancel',
    component: () => import('../views/admin/orders/AprovedCancel')
  }
  ,
  {
    path:'/deniedCancel',
    name:'deniedCancel',
    component: () => import('../views/admin/orders/DeniedCancel')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
