<template>
  <div>
    <div class="row">
      <div v-for="city in watchlist" :key="city.id" class="col-6 text-center">
        <img :src="cityImg" alt="city" class="rounded" style="max-width: 150px;">
        <p class="mt-1 mb-0">{{ city.name }}, {{ city.country }}</p>
        <button
          @click="viewWeatherChart(city.name)"
          class="btn btn-link btn-sm mb-3"
        >
          Details
        </button>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import cityImg from '../assets/city.jpeg';

export default defineComponent({
  name: 'Watchlist',
  data() {
    return {
      cityImg,
    };
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
