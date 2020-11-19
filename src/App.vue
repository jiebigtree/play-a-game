<template>
  <div id="app">
    <router-view />
    <div class="nav-bar" v-show="$route.meta.navShow">
      <router-link to="/">炒菜</router-link> |
      <router-link to="/hotpot">火锅</router-link> |
      <router-link to="/barbecue">烤肉</router-link>
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
