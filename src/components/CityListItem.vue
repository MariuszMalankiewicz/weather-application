<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {{ city.name }} ({{ city.country }})
    <button
      v-if="!inWatchlist"
      @click="$emit('add', city)"
      class="btn btn-success btn-sm"
    >
      Dodaj
    </button>
    <button
      v-if="inWatchlist"
      @click="$emit('remove', city)"
      class="btn btn-danger btn-sm"
    >
      Usuń
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CityListItem',
  props: {
    city: {
      type: Object as PropType<any>,
      required: true,
    },
    inWatchlist: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
