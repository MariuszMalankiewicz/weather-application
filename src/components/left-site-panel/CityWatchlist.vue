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
        <button @click="viewWeatherChart(city.name)" class="btn btn-link btn-sm mb-3">
          Details
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
