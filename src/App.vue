<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <router-link to="/">Stations</router-link> |
        <router-link to="/favorites">Favorites</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 2rem 0;
  background-color: #42b983;
  //text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
