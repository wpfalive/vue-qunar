<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>text</div>
  </div>
</template>
<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style>
</style>
