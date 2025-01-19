import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Weather from '../views/Weather.vue'
import WeatherCityChart from '../views/WeatherCityChart.vue'

const routes = [
  { path: '/', component: Login },
  {
    path: '/weather',
    component: Weather,
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
    component: WeatherCityChart,
    props: (route) => ({ cityName: route.query.city }),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
