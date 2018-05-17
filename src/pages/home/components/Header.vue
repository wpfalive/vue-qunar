<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- 这样写太长了，换一种写法，引入mapState -->
        <!-- {{this.$store.state.city}} -->
        <!-- {{this.city}} -->
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 把city这个数据，映射到名字为city的计算属性之中
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
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
    line-height: $headerHeight
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
      // 指定最小宽度，宽度不写死。这样当文字很长的时候，能自动撑开div的宽度
      // 当文字很短的时候，div也能有一个最小宽度
      min-width: 1.04rem
      padding 0 .1rem
      float: right
      text-align: center
      color #fff
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
