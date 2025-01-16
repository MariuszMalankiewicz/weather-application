<template>
  <div>
    <div class="overflow-hidden">
      <div class="row">
        <!-- User panel -->
        <div class="col-12 col-md-5 order-md-2">
          <UserPanel :awatar="Awatar" class="overflow-hidden" />
        </div>
        <!-- CitySearchPanel -->
        <div class="col-12 col-md-7 order-md-1">
          <CitySearchPanel
            :filteredCities="filteredCities"
            :watchlist="watchlist"
            :weatherData="weatherData"
            v-model:searchQuery="searchQuery"
            :addToWatchlist="addToWatchlist"
            :removeFromWatchlist="removeFromWatchlist"
            :filterCities="filterCities"
          />
          <!-- CityWatchListPanel -->
          <CityWatchListPanel
            :watchlist="watchlist"
            :weatherData="weatherData"
            :searchQuery="searchQuery"
            :filterCities="filterCities"
            :addToWatchlist="addToWatchlist"
            :removeFromWatchlist="removeFromWatchlist"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import UserPanel from '../components/RightSitePanel.vue'
import CitySearchPanel from '../components/CitySearchPanel.vue'
import CityWatchListPanel from '../components/CityWatchListPanel.vue'
import { fetchCitiesData } from '../utils/fetchCities'
import { fetchWeatherData } from '../utils/fetchWeather'
import Awatar from '../assets/awatar.jpeg'

export default {
  name: 'HomePage',
  components: { UserPanel, CitySearchPanel, CityWatchListPanel },
  data() {
    return { Awatar }
  },
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
      if (searchQuery.value) {
        filteredCities.value = cities.value
          .filter((city) => city.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
          .slice(0, 5)
      } else {
        filteredCities.value = []
      }
    }

    const addToWatchlist = (city: any) => {
      if (!watchlist.value.includes(city)) watchlist.value.push(city)
      fetchWeatherForCity(city.name)
    }

    const removeFromWatchlist = (city: any) => {
      watchlist.value = watchlist.value.filter((c) => c.id !== city.id)
      delete weatherData.value[city.name]
    }

    const fetchWeatherForCity = async (cityName: string) => {
      const weather = await fetchWeatherData(cityName)
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
