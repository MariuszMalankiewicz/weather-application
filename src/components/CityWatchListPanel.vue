<template>
  <div class="px-4">
    <p class="fs-1">Weather <span class="fw-bold">Forecast</span></p>
    <div>
      <CityWatchlist :watchlist="watchlist" :weatherData="weatherData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CityWatchlist from './CityWatchlist.vue' // Upewnij się, że masz zaimportowany komponent Watchlist

export default defineComponent({
  name: 'CityWatchListPanel',
  components: { CityWatchlist },
  props: {
    filteredCities: Array,
    watchlist: Array,
    weatherData: Object,
    searchQuery: String,
    addToWatchlist: Function,
    removeFromWatchlist: Function,
    filterCities: Function,
  },
  setup(props, { emit }) {
    const localSearchQuery = ref(props.searchQuery)

    const updateSearchQuery = () => {
      emit('update:searchQuery', localSearchQuery.value)
      props.filterCities()
    }

    return {
      localSearchQuery,
      updateSearchQuery,
    }
  },
})
</script>
