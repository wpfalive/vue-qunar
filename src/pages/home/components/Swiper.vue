<template>
  <div class="wrapper">
    <!-- swiper最初创建，是通过父组件传来的空数组创建的（未获取ajax数据） -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: `HomeSwiper`,
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  // 样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
      background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    // 不能直接在height中写26.67%，因为height相对的是父级元素的高度
    // 根据图片宽高比算出，padding相对于width总会撑开26.67%
    // 这样就始终保持了26.67%的比例
    padding-bottom 26.67%
    background #eee
    .swiper-img
      width: 100%
</style>
