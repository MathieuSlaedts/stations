<template>
  <div class="stations">
    <div class="container">
      <search-stations></search-stations>
      <list-stations></list-stations>
    </div>
  </div>
</template>

<script>
import SearchStations from "@/components/SearchStations.vue";
import ListStations from "@/components/ListStations.vue";

export default {
  name: "Home",
  components: {
    "search-stations": SearchStations,
    "list-stations": ListStations,
  },
};
</script>
