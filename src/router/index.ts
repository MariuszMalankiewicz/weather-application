import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import WeatherPage from '../views/WeatherPage.vue'

const routes = [
  { path: '/', component: LoginPage },
  {
    path: '/weather',
    component: WeatherPage,
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem('user')
      if (!user) {
        next('/')
      } else {
        next()
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
