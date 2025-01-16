<template>
      <!-- CitySearchInput -->
    <div class="pt-4 px-4">
      <div class="d-flex mt-md-2 mt-lg-3 ms-md-2 ms-lg-3">
        <div class="position-relative">
        <svg
          class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-2 pb-2"
          style="max-width: 20px"
          xmlns="http://www.w3.org/2000/svg"
          fill="gray"
          viewBox="0 0 512 512"
          >
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
      <input
        type="text"
        v-model="localSearchQuery"
        @input="updateSearchQuery"
        placeholder="Search city..."
        class="form-control placeholder-indent"
      />
    </div>
    <!-- CityChooseList -->
    <div class="ms-2 w-25">
      <p class="mt-2">
        All places
        <svg
          style="max-width: 8px;"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
          />
        </svg>
      </p>
    </div>
      </div>

    <CityList
      :cities="filteredCities"
      :watchlist="watchlist"
      @add="addToWatchlist"
      @remove="removeFromWatchlist"
    />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CityList from "./CityList.vue";

export default defineComponent({
  name: "CitySearchPanel",
  components: { CityList },
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
    const localSearchQuery = ref(props.searchQuery);

    const updateSearchQuery = () => {
      emit("update:searchQuery", localSearchQuery.value);
      props.filterCities();
    };

    return {
      localSearchQuery,
      updateSearchQuery,
    };
  },
});
</script>

<style scoped>
.placeholder-indent {
  padding-left: 20px;
}
</style>
