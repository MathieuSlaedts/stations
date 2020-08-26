<template>
  <div class="search-stations">
    <div class="field">
      <label class="label">Search stations:</label>
      <input
        class="input"
        type="text"
        placeholder="Search stations"
        ref=""
        v-model="titleValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchStations",
};
</script>
<style lang="scss">
.search-stations {
  padding: 2rem 0;
}
</style>
