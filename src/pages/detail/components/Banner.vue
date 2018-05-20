<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: ['//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg', 'http://img1.qunarzz.com/sight/p0/1712/17/17d5e111e3707ceea3.img.jpg_r_800x800_87c263fd.jpg']
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 54.6%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      margin-top .14rem
      padding 0 .3rem
      line-height .32rem
      border-radius .2rem
      background rgba(0, 0, 0, .5)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
