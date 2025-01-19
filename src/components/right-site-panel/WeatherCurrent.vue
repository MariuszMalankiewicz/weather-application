<template>
  <div>
    <div class="text-center mb-5">
      <h1 class="fw-1" v-if="!weatherData">Loading...</h1>
      <div v-if="!weatherData" class="d-flex align-items-center justify-content-center">
        <p class="mt-3">Chosse Your Location</p>
        <svg
          class="ms-2"
          style="max-width: 25px; cursor: pointer"
          fill="white"
          @click="fetchLocation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
          />
        </svg>
      </div>
      <p v-if="location">Twoja lokalizacja: {{ location.lat }}, {{ location.lon }}</p>
    </div>

    <div v-if="weatherData">
      <div
        class="d-flex text-center align-items-center justify-content-center position-relative"
        style="z-index: 1"
      >
        <div class="me-3">
          <img :src="weatherData.iconUrl" alt="Weather Icon" />
        </div>
        <div class="pt-3">
          <h3>Today</h3>
          <p>{{ weatherData.date }}</p>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-center mt-2 mb-4">
        <h2 class="fs-1">{{ weatherData.temp?.toFixed(0) }} °C</h2>
        <p>{{ weatherData.city }}, {{ weatherData.country }}</p>
        <div class="d-flex gap-3">
          <p>max: {{ weatherData.temp_max?.toFixed(0) }}°C</p>
          <p>feels_like: {{ weatherData.feels_like?.toFixed(0) }}°C</p>
          <p>min: {{ weatherData.temp_min?.toFixed(0) }}°C</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from 'vue'
import { getLocation } from '@/utils/geolocation'
import { fetchCurrentWeatherFromLocation } from '@/utils/fetchWeather'
import type { Weather } from '@/types/types'
import { API_KEY } from '../../../config.js';

export default {
  name: 'WeatherCurrent',
  setup() {
    const weatherData = ref<Weather | null>(null)
    const error = ref<string | null>(null)
    const location = ref<{ lat: number; lon: number } | null>(null)

    const fetchLocation = async () => {
      try {
        location.value = await getLocation()
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(async () => {
      try {
        const location = await getLocation()
        weatherData.value = await fetchCurrentWeatherFromLocation(location, API_KEY)
      } catch (err) {
        error.value = err as string
      }
    })

    return {
      weatherData,
      error,
      location,
      fetchLocation,
    }
  },
}
</script>
