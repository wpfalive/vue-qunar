<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcons">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
// 跟轮播图一样，需要一个占位，宽高比例为2：1
// .swiper-container自带了overflow hidden这个样式
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top .1rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    // 这里height设为0，是content内容区的高度设为0
    // 这样一来，div.icon的高度就由padding-bottom撑开
    // 如果不设置height为0，那么div.icon的高度为 padding-bottom + p标签高度
    // 就会超过应有的高度
    height 0
    .icon-img
      position absolute
      top 0
      right 0
      bottom .44rem
      left 0
      box-sizing border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      line-height .44rem
      height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
