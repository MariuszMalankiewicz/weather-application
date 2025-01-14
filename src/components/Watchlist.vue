<template>
  <div>
    <h2>Obserwowane miasta</h2>
    <ul class="list-group">
      <li v-for="city in watchlist" :key="city.id" class="list-group-item">
        {{ city.name }} ({{ city.country }})<br>
        <span v-if="weatherData[city.name]">
          Temperatura: {{ weatherData[city.name].temperature?.toFixed(0) }}°C,
          Wilgotność: {{ weatherData[city.name].humidity }}%
        </span>
        <span v-else>
          Brak danych pogodowych
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Watchlist',
  props: {
    watchlist: {
      type: Array as PropType<any[]>,
      required: true,
    },
    weatherData: {
      type: Object as PropType<{ [key: string]: { temperature: number | null, humidity: number | null } }>,
      required: true,
    },
  },
});
</script>
