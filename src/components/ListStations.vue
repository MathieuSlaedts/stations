<template>
  <div class="list-stations">
    <ul>
      <li>Une Station</li>
      <li>Une Station</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListStations",
};
</script>
<style lang="scss">
.list-stations {
  li {
    padding: 0.7rem 0;
  }
  li + li {
    border-top: 1px solid #ccc;
  }
}
</style>
