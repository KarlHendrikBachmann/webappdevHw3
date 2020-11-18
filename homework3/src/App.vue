<template>
  <div id="app">
    <router-link to = "/">HomePage </router-link>
    <router-link to = "loginpage">LoginPage </router-link>
    <router-link to = "browsepage">BrowsePage</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
