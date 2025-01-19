import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import WeatherChart from '../components/WeatherCityForecast.vue'

const routes = [
  { path: '/', component: LoginPage },
  {
    path: '/weather',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem('user')
      if (!user) {
        next('/')
      } else {
        next()
      }
    },
  },
  {
    path: '/weather-chart',
    name: 'weather-chart',
    component: WeatherChart,
    props: (route) => ({ cityName: route.query.city }),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
