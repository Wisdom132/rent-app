import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [



  {
    path: "/",
    name: "home",
    component: () => import("@/layouts/blank"),
    redirect: "/",
    children: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/property',
      name: 'Property',
      component: () => import( /* webpackChunkName: "about" */ '../views/Property.vue')
    }, {
      path: "/login",
      nme: "Login",
      component: () => import('../views/Login.vue')
    }, {
      path: "/sign-up",
      nme: "Signup",
      component: () => import('../views/Signup.vue')
    }]
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layouts/admin"),
    redirect: "/admin/dashboard",
    children: [{
        path: "dashboard",
        nme: "Dashboard",
        component: () => import('../components/admin/dashboard.vue')
      },
      {
        path: "houses",
        nme: "house",
        component: () => import('../components/admin/houses.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router