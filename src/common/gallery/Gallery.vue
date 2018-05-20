<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(img, index) of imgs" :key="index">
          <img class="gallery-img"
            :src="img"
            alt=""
          />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // gallery再次显示出来时，swiper计算宽度会有一些问题，导致轮播图无法正常滚动
        // 加两个选项
        // swiper监听到这个元素或者父元素发生了dom结构变化，会自动刷新一次
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000
  .wrapper
    // overflow hidden // overflow hidden把高度限制住了，超出的部分无法显示
    height 0
    width 100%
    padding-bottom 100%
    .gallery-img
      width 100%
    .swiper-pagination
      color: #fff
      bottom -1rem
</style>
