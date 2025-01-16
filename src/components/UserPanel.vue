<template>
  <!-- User panel -->
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
    <div>
      <div
        class="d-flex text-center align-items-center justify-content-center position-relative"
        style="z-index: 1"
      >
        <div class="me-3">
          <svg
            style="width: 35px"
            fill="lightblue"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3z"
            />
          </svg>
        </div>
        <div class="pt-3">
          <h3>Today</h3>
          <p>15.01.2025</p>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-center mt-2 mb-4">
        <h2 class="fs-1">28 °C</h2>
        <p>City, Country</p>
        <div class="d-flex gap-3">
          <p>max temp</p>
          <p>low temp</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TopHeader from '../components/TopHeader.vue';
export default {
  name: 'UserPanel',
  components: { TopHeader },
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
