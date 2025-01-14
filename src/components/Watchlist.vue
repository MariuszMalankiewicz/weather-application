<template>
  <div>
    <h2>Obserwowane miasta</h2>
    <ul class="list-group">
      <li v-for="city in watchlist" :key="city.id" class="list-group-item">
        {{ city.name }} ({{ city.country }})
        <button @click="viewWeatherChart(city.name)" class="btn btn-link">Zobacz wykres</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Watchlist',
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
