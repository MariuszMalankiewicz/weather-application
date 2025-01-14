<template>
  <ul class="list-group mb-3">
    <CityListItem
      v-for="city in cities"
      :key="city.id"
      :city="city"
      :inWatchlist="watchlist.includes(city)"
      @add="$emit('add', city)"
      @remove="$emit('remove', city)"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CityListItem from './CityListItem.vue';

export default defineComponent({
  name: 'CityList',
  components: { CityListItem },
  props: {
    cities: {
      type: Array as PropType<any[]>,
      required: true,
    },
    watchlist: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
});
</script>
