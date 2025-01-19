<template>
  <div class="main-wrapper mx-auto mt-5 px-2">
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import { Chart, LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend, LineController, Filler } from 'chart.js';

Chart.register(LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend, LineController, Filler);

export default {
  name: 'WeatherLineChart',
  props: {
    temperatureData: {
      type: Array as () => number[],
      required: true
    },
    humidityData: {
      type: Array as () => number[],
      required: true
    },
    labels: {
      type: Array as () => string[],
      required: true
    }
  },
  data() {
    return {
      myChart: null as Chart | null
    };
  },
  mounted() {
    const canvas = this.$refs.myChart as HTMLCanvasElement;
    if (canvas) {
      this.myChart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Temperature (°C)',
              data: this.temperatureData,
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
              pointBackgroundColor: 'rgb(75, 192, 192)',
              pointRadius: 5
            },
            {
              label: 'Humidity (%)',
              data: this.humidityData,
              fill: false,
              borderColor: 'rgb(54, 162, 235)',
              tension: 0.1,
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointRadius: 5
            }
          ]
        },
        options: {
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
};
</script>
<style>
.main-wrapper{
  width: 1200px;
  height: auto;
}
canvas {
  width: auto;
  height: auto;
}

</style>
