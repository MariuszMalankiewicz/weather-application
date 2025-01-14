<template>
  <div>
    <h2>Obserwowane miasta</h2>
    <ul class="list-group">
      <li v-for="city in watchlist" :key="city.id" class="list-group-item">
        {{ city.name }} ({{ city.country }})
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
  },
});
</script>
