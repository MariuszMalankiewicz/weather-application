<template>
  <div>
    <h1>Wykres pogody dla {{ cityName }}</h1>
    <div v-if="weatherData">
      <p>Temperatura: {{ weatherData.temperature }}°C</p>
      <p>Wilgotność: {{ weatherData.humidity }}%</p>
    </div>
    <div v-else>
      <p>Ładowanie danych...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { fetchWeatherData } from '../utils/fetchWeather'

export default defineComponent({
  name: 'WeatherChart',
  props: {
    cityName: String,
  },
  setup(props) {
    const weatherData = ref<{ temperature: number | null; humidity: number | null }>({ temperature: null, humidity: null })

    onMounted(async () => {
      try {
        weatherData.value = await fetchWeatherData(props.cityName)
      } catch (error) {
        console.error('Błąd podczas pobierania danych pogodowych:', error)
      }
    })

    return { weatherData }
  },
})
</script>
