<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_750x200_b99b8e07.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_750x200_b423f532.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1804/1b/6c766b79e2045102.jpg_750x200_29ad1225.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  height 0
  width 100%
  padding-bottom 26.67%
  .swiper-img
    width 100%
</style>
