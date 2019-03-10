<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Layout/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Layout from "./components/Layout.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Layout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
