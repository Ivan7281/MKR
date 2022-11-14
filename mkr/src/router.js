import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home/index.vue'
import AllCarParts from './pages/AllCarParts/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  { path: '/AllCarParts', component: AllCarParts, name: 'AllCarParts' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
export default router