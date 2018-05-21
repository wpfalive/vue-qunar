<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // Document.documentElement returns the Element that is the root element of the document
      // For any non-empty HTML document, document.documentElement will always be an <html> element.
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  text-align center
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  background $bgColor
  color #fff
  .header-fixed-back
    position absolute
    left .28rem
    top 0
    bottom 0
    width .64rem
    font-size .4rem
    text-align center
    color #fff
</style>
