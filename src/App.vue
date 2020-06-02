<template>
  <div id="app">
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
body {
  background: white;
  font-family: Helvetica;
}

#app {
  padding: 20px;
  transition: all 0.2s;
}
</style>
