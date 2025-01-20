<template>
  <div>
    <div class="row">
      <div
        v-for="city in watchlist"
        :key="city.id"
        class="col-6 col-sm-4 col-sm-6 col-lg-4 col-xl-3 col-xxl-2 text-center"
      >
        <img :src="cityImg" alt="city" class="rounded img-rwd" />
        <p class="mt-1 mb-0">{{ city.name }}, {{ city.country }}</p>
        <p class="mt-1 mb-0">Temp: {{ weatherData[city.name]?.temp?.toFixed(0) }}°C</p>
        <p class="mt-1 mb-0">Humidity: {{ weatherData[city.name]?.humidity }}%</p>
        <button @click="viewWeatherChart(city.name)" class="btn btn-link btn-sm mb-0">
          Details
        </button>
        <button
          @click="$emit('remove', city)"
          class="btn btn-danger btn-sm mt-1 mb-3">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import cityImg from '../../assets/city.jpeg'

export default defineComponent({
  name: 'CityWatchlist',
  data() {
    return {
      cityImg,
    }
  },
  props: {
    watchlist: {
      type: Array as PropType<any[]>,
      required: true,
    },
    weatherData: {
      type: Object as PropType<Record<string, any>>,
        required: true,
    },
  },
  setup() {
    const router = useRouter()

    const viewWeatherChart = (cityName: string) => {
      router.push({
        name: 'weather-chart',
        query: { city: cityName },
      })
    }

    return { viewWeatherChart }
  },
})
</script>
<style>
.img-rwd {
  width: 100%;
  max-width: 160px;
}
</style>
