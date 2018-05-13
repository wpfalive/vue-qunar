<template>
  <div>
    <!-- todo icons.vue还需要给swiper加上点号 -->
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>

<style>
</style>
