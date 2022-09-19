import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: 'element/chooseIcon',
        component: () => import('../views/chooseIcon/index.vue'),
      },
      {
        path: 'element/chooseArea',
        component: () => import('../views/chooseArea/index.vue'),
      },
      {
        path: 'element/trend',
        component: () => import('../views/trend/index.vue'),
      },
      {
        path: 'element/notification',
        component: () => import('../views/notification/index.vue'),
      },
      {
        path: 'element/menu',
        component: () => import('../views/menu/index.vue'),
      },
      {
        path: 'element/progress',
        component: () => import('../views/progress/index.vue'),
      },
      {
        path: 'element/chooseTime',
        component: () => import('../views/chooseTime/index.vue'),
      },
      {
        path: 'element/chooseCity',
        component: () => import('../views/chooseCity/index.vue'),
      },
      {
        path: 'element/form',
        component: () => import('../views/form/index.vue'),
      },
      {
        path: 'element/table',
        component: () => import('../views/table/index.vue'),
      },
      {
        path: 'element/calendar',
        component: () => import('../views/calendar/index.vue'),
      },
      {
        path: '/login',
        component: () => import('../views/login/index.vue'),
      },
      {
        path: '/validCode',
        component: () => import('../views/validCode/index.vue'),
      },
      {
        path: '/fullScreen',
        component: () => import('../views/fullScreen/index.vue'),
      },
      {
        path: '/guide',
        component: () => import('../views/guide/index.vue'),
      },
      {
        path: '/dark',
        component: () => import('../views/dark/index.vue'),
      },
      {
        path: '/editor',
        component: () => import('../views/editor/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
