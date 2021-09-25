<template>
  <h1>Mes prospects</h1>
  <Prospects/>
</template>

<script>
import Prospects from './components/Prospects.vue'

export default {
  name: 'App',
  components: {
    Prospects
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
