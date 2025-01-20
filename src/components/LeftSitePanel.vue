<template>
  <div>
    <CitySearch
    :filteredCities="filteredCities"
    :watchlist="watchlist"
    :weatherData="weatherData"
    v-model:searchQuery="searchQuery"
    :addToWatchlist="addToWatchlist"
    :removeFromWatchlist="removeFromWatchlist"
    :filterCities="filterCities"
    />
    <CityList
      :cities="filteredCities"
      :watchlist="watchlist"
      @add="addToWatchlist"
      @remove="removeFromWatchlist"
    />
    <div class="px-4">
      <p class="fs-1">Weather <span class="fw-bold">Forecast</span></p>
      <p class="pb-2" v-if="watchlist.length">Watchlist: {{ watchlist.length }}/10</p>
      <div>
        <CityWatchlist
        :watchlist="watchlist"
        :weatherData="weatherData"
        @remove="removeFromWatchlist"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CitySearch from './left-site-panel/CitySearch.vue'
import CityList from './left-site-panel/CityList.vue'
import CityWatchlist from './left-site-panel/CityWatchlist.vue'
import { fetchCitiesData } from '../utils/fetchCities'
import { fetchWeatherData } from '../utils/fetchWeather'
import { API_KEY } from '../../config.js'

export default {
  name: 'LeftSitePanel',
  components: { CitySearch, CityList, CityWatchlist },
  setup() {
    const cities = ref([])
    const filteredCities = ref([])
    const searchQuery = ref('')
    const watchlist = ref([])
    const weatherData = ref<Record<string, any>>({})
    const weatherInterval = ref<any>(null)

    const fetchCities = async () => {
      cities.value = await fetchCitiesData()
    }

    const filterCities = () => {
      if (searchQuery.value.trim()) {
        filteredCities.value = cities.value
          .filter((city) => city.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
          .slice(0, 5)
      } else {
        filteredCities.value = []
      }
    }

    const addToWatchlist = (city: any) => {
  // Sprawdzenie, czy lista obserwowanych miast ma mniej niż 10 miast
  if (watchlist.value.length < 10) {
    if (!watchlist.value.includes(city)) {
      watchlist.value.push(city)
      fetchWeatherForCity(city.name)
    }
  } else {
    alert('You can only add up to 10 cities to the watchlist.')
  }
  searchQuery.value = ''
  filteredCities.value = []
}

    const removeFromWatchlist = (city: any) => {
      watchlist.value = watchlist.value.filter((c) => c.id !== city.id)
      delete weatherData.value[city.name]
    }

    const fetchWeatherForCity = async (cityName: string) => {
      const weather = await fetchWeatherData(cityName, API_KEY)
      weatherData.value[cityName] = weather
    }

    const fetchWeatherForWatchlist = () => {
      watchlist.value.forEach((city: any) => {
        fetchWeatherForCity(city.name)
      })
    }

    const startWeatherUpdates = () => {
      weatherInterval.value = setInterval(fetchWeatherForWatchlist, 60000)
    }

    const stopWeatherUpdates = () => {
      if (weatherInterval.value) clearInterval(weatherInterval.value)
    }

    onMounted(() => {
      fetchCities()
      startWeatherUpdates()
    })

    onBeforeUnmount(() => {
      stopWeatherUpdates()
    })

    return {
      cities,
      filteredCities,
      searchQuery,
      watchlist,
      weatherData,
      filterCities,
      addToWatchlist,
      removeFromWatchlist,
    }
  },
}
</script>
