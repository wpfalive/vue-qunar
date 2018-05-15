<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">杭州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
// 这里在border.css定义了，border-bottom只有before, 没有定义after
// 如果只给html加上这个类，那么会有一个默认的底部边框颜色
.border-bottom
  &:after
    border-color #ccc
.list
  // overflow hidden
  position absolute
  // 相对于页面绝对定位，页面高度为667px, top 79px
  // 667 - 79 = 588px
  // 因此.list的高度只有588px, 超出部分就溢出到.list外了
  // 需要设置 overflow hidden
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height .54rem
    background #eee
    color #666
    padding-left .2rem
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
  .button-wrapper
    float left
    width 33.33%
    .button
      margin .1rem
      text-align center
      // 我们希望边框颜色重一点，所以就不用border.css了
      border .02rem solid #ccc
      border-radius .06rem
      padding .1rem 0
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
