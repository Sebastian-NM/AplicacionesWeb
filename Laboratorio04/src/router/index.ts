import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
import Interests from '../views/Interests.vue'
import Awards from '../views/Awards.vue'

const routes = [
  { path: '/about', component: About },
  { path: '/experience', component: Experience },
  { path: '/education', component: Education },
  { path: '/skills', component: Skills },
  { path: '/interests', component: Interests },
  { path: '/awards', component: Awards },
  { path: '/', redirect: '/about' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
