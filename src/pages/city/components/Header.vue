<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  background $bgColor
  color #fff
  .header-back
    position absolute
    left .28rem
    top 0
    bottom 0
    width .64rem
    font-size .4rem
    text-align center
    color #fff
</style>
