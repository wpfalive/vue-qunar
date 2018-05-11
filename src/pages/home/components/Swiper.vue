<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg" alt="">
      </swiper-slide>
      <!-- <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: `HomeSwiper`,
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
    widows 100%
    height 0 // 不能直接在height中写31.25%，因为height相对的是父级元素的高度
    //根据图片宽高比算出，padding相对于width总会撑开31.25%
    // 这样就始终保持了31.25%的比例
    padding-bottom 31.25% 
    .swiper-img
      // height: 2rem
      // width: 7.48rem
      width: 100%
</style>
