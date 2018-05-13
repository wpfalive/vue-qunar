<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log('app.vue mounted')
  }
}
</script>

<style>
</style>
