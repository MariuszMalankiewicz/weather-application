<template>
  <div>
    <h1>Wyszukiwanie miast</h1>
    <input
      type="text"
      v-model="searchQuery"
      @input="filterCities"
      placeholder="Wyszukaj miasto..."
      class="form-control mb-3"
    />
    <CityList
      :cities="filteredCities"
      :watchlist="watchlist"
      @add="addToWatchlist"
      @remove="removeFromWatchlist"
    />
    <Watchlist :watchlist="watchlist" :weatherData="weatherData" />
    <button
      v-if="hasMoreCities"
      @click="loadMoreCities"
      class="btn btn-primary mt-3"
    >
      Załaduj więcej
    </button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CityList from '../components/CityList.vue';
import Watchlist from '../components/Watchlist.vue';
import { fetchCitiesData } from '../utils/fetchCities';
import { fetchWeatherData } from '../utils/fetchWeather';

export default {
  name: 'HomePage',
  components: { CityList, Watchlist },
  setup() {
    const cities = ref([]);
    const filteredCities = ref([]);
    const searchQuery = ref('');
    const watchlist = ref([]);
    const weatherData = ref<{ [key: string]: { temperature: number | null, humidity: number | null } }>({});
    const currentPage = ref(0);
    const pageSize = 3;
    const hasMoreCities = ref(true);
    const weatherInterval = ref<any>(null);

    const fetchCities = async () => {
      cities.value = await fetchCitiesData();
      loadCitiesPage(0);
    };

    const loadCitiesPage = (page: number) => {
      const start = page * pageSize;
      const end = start + pageSize;
      filteredCities.value = cities.value.slice(start, end);
      hasMoreCities.value = end < cities.value.length;
    };

    const filterCities = () => {
      if (searchQuery.value) {
        filteredCities.value = cities.value
          .filter(city =>
            city.name.toLowerCase().includes(searchQuery.value.toLowerCase())
          )
          .slice(0, pageSize);
      } else {
        loadCitiesPage(currentPage.value);
      }
    };

    const loadMoreCities = () => {
      currentPage.value += 1;
      loadCitiesPage(currentPage.value);
    };

    const addToWatchlist = (city: any) => {
      if (!watchlist.value.includes(city)) watchlist.value.push(city);
      fetchWeatherForCity(city.name);
    };

    const removeFromWatchlist = (city: any) => {
      watchlist.value = watchlist.value.filter(c => c.id !== city.id);
      delete weatherData.value[city.name];
    };

    const fetchWeatherForCity = async (cityName: string) => {
      const weather = await fetchWeatherData(cityName);
      weatherData.value[cityName] = weather;
    };

    const fetchWeatherForWatchlist = () => {
      watchlist.value.forEach((city: any) => {
        fetchWeatherForCity(city.name);
      });
    };

    const startWeatherUpdates = () => {
      weatherInterval.value = setInterval(fetchWeatherForWatchlist, 60000);
    };

    const stopWeatherUpdates = () => {
      if (weatherInterval.value) {
        clearInterval(weatherInterval.value);
      }
    };

    onMounted(() => {
      fetchCities();
      startWeatherUpdates();
    });

    onBeforeUnmount(() => {
      stopWeatherUpdates();
    });

    return {
      searchQuery,
      filteredCities,
      watchlist,
      weatherData,
      filterCities,
      loadMoreCities,
      hasMoreCities,
      addToWatchlist,
      removeFromWatchlist,
    };
  },
};
</script>
