<template>
  <div>
    <div class="row pb-5">
      <div
        v-for="city in watchlist"
        :key="city.id"
        class="col-6 col-sm-4 col-sm-6 col-lg-4 col-xl-3 text-center"
      >
        <div class="rounded border wrapper mb-3">
          <img :src="cityImg" alt="city" class="w-100" />
          <p class="mt-2 mb-0 fw-bold">{{ city.name }}, {{ city.country }}</p>
          <p class="mt-1 mb-0">Temp: {{ weatherData[city.name]?.temp?.toFixed(0) }}°C</p>
          <p class="mt-1 mb-0">Humidity: {{ weatherData[city.name]?.humidity }}%</p>
          <div class="d-flex justify-content-center align-items-center gap-3 mt-2 mb-3">
            <button @click="viewWeatherChart(city.name)" class="btn btn-primary btn-sm">
            Details
            </button>
            <button
              @click="$emit('remove', city)"
              class="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
        </div>
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
.wrapper{
  width: 100%;
  max-width: 200px;
}
</style>
