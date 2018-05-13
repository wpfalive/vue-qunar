<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom">
        <!-- img外层可以包裹一层div，用来撑开图片
        防止页面抖动
        但是这里的img是定死的宽高尺寸，所以div没用了-->
        <img class="item-image" src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg" alt="北京欢乐谷">
        <div class="item-info">
          <p class="item-title">北京欢乐谷</p>
          <p class="item-desc">这里特别受欢迎哟(๑‾ ꇴ ‾๑)</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-image
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    // https://css-tricks.com/flexbox-truncated-text/
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
