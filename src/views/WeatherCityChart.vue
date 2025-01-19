<template>
  <div>
    <h2 class="text-center mt-5">Weather data for: {{ cityName }}</h2>
    <div v-if="weatherData">
      <WeatherLineChart
        :temperatureData="temperatures"
        :humidityData="humiditys"
        :labels="dt"
      />
    </div>
    <div v-else>
      <p>Loading Data...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router';
import { fetchCityCoordinates } from '../utils/fetchCities.js'
import { fetch5DayWeatherForecast } from '../utils/fetchWeather.js';
import { API_KEY } from '../../config.js';
import WeatherLineChart from '../components/WeatherLineChart.vue';

export default {
  name: 'WeatherCityChart',
  components: {
    WeatherLineChart
  },
  setup() {
    const route = useRoute();
    const cityName = (route.query.city as string) || '';
    const coordinates = ref<{ lat: number | null, lon: number | null }>({ lat: null, lon: null });
    const weatherData = ref<any>(null);
    const temperatures = ref(null);
    const humiditys = ref(null);
    const dt = ref(null);

    const getCityCoordinates = async () => {
      try {
        if (cityName) {
          coordinates.value = await fetchCityCoordinates(cityName, API_KEY);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getWeatherData = async () => {
      try {
        if (coordinates.value.lat && coordinates.value.lon) {
          weatherData.value = await fetch5DayWeatherForecast(coordinates.value.lat, coordinates.value.lon, API_KEY);
          temperatures.value = weatherData.value.map((item: any) => item.main.temp.toFixed(0));
          humiditys.value = weatherData.value.map((item: any) => item.main.humidity);
          dt.value = weatherData.value.map((item: any) => new Date(item.dt * 1000).toLocaleString());
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchWeatherIfCoordinatesAvailable = () => {
      if (coordinates.value.lat && coordinates.value.lon) {
        getWeatherData();
      }
    };

    watch(coordinates, fetchWeatherIfCoordinatesAvailable);

    onMounted(() => {
      getCityCoordinates();
    });

    return {
      cityName,
      weatherData,
      temperatures,
      humiditys,
      dt,
    };
  }
};
</script>
