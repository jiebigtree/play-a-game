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
.nav-bar {
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
}
</style>
