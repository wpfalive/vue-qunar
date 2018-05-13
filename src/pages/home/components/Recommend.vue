<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="item.title" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
        title: '北京欢乐谷',
        desc: '近期小伙伴们收藏最！多！的景点😊'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
        title: '世界花卉大观园',
        desc: '揽天下奇花异草，聚世界经典园林'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
        title: '古北水镇',
        desc: '👍小伙伴们都收藏了，去看看吧~'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_200x200_5193a3b6.jpg',
        title: '十渡聚龙湾玻璃栈道',
        desc: '梦寻生态山水，情归大美聚龙'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)'
      }]
    }
  }
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
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top: .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color: #fff
</style>
