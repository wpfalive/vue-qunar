<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市<span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
// 增加变量
@import '~styles/variables.styl'
.header
  display flex
  height .86rem
  line-height .86rem
  color #fff
  background $bgColor
  .header-left
    float left
    width .8rem
    .back-icon
      font-size .4rem
      text-align center
  .header-input
    flex 1
    margin-top .12rem
    height .6rem
    line-height .6rem
    border-radius .1rem
    padding-left .16rem
    color #ccc
    background #fff
  .header-right
    float right
    width 1.32rem
    text-align center
    .city-icon
      margin-left -.04rem
      font-size .24rem
</style>
