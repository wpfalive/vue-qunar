<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
       城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  // @import '~@/assets/styles/variables.styl'
  // @import '~@/assets/styles/variables.styl'
  // 给styles目录起一个别名
  // 修改了webpack配置需要重启服务器
  @import '~styles/variables.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
    .back-icon
      font-size: .4rem
      text-align: center
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      height: .62rem
      line-height: .62rem
      margin-top: .12rem
      margin-left: .2rem
      color: #ccc
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
