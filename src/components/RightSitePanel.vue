<template>
  <div class="position-relative text-white pt-4 px-4 box">
    <svg
      class="position-absolute opacity-25"
      fill="lightblue"
      style="width: 200px; top: 100px; left: -90px; z-index: 0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
      />
    </svg>
    <svg
      class="position-absolute opacity-25"
      fill="lightblue"
      style="width: 160px; top: 60px; right: -50px; z-index: 0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
      />
    </svg>
    <svg
      class="position-absolute opacity-25"
      fill="lightblue"
      style="width: 100px; top: 220px; right: -15px; z-index: 0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
      />
    </svg>
    <TopHeader></TopHeader>
    <WeatherCurrent></WeatherCurrent>
  </div>
</template>
<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import WeatherCurrent from '../components/WeatherCurrent.vue'
export default {
  name: 'RightSitePanel',
  components: { TopHeader, WeatherCurrent },
}
</script>

<style>
.placeholder-indent {
  text-indent: 20px;
}
.box {
  height: auto;
  background-color: #12124d;
}

@media (min-width: 768px) {
  .box {
    height: 100vh;
    min-height: 400px;
  }
}
</style>
