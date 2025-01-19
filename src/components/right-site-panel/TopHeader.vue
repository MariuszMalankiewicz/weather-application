<template>
  <header class="d-flex align-items-start justify-content-between mb-5">
    <div class="d-flex">
      <p class="me-3">Notification<span class="bg-danger rounded px-2 m-1">2</span></p>
      <p>Places</p>
    </div>
    <div class="position-relative">
      <div
        class="rounded position-absolute top-0 start-50"
        style="width: 6px; height: 6px; background-color: red"
      ></div>
      <img :src="awatar" alt="awatar" class="rounded me-4" style="width: 32px" />
    </div>
  </header>
</template>
<script lang="ts">
import awatar from '../../assets/awatar.jpeg'
export default {
  name: 'TopHeader',
  setup() {
    return {
      awatar,
    }
  },
}
</script>
