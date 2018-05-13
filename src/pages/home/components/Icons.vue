<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '必游榜单'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
        desc: 'Q+精选'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '演出'
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      }, {
        id: '0011',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '名胜古迹'
      }, {
        id: '0012',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png',
        desc: '周边游'
      }, {
        id: '0013',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        desc: '城市观光'
      }, {
        id: '0014',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '游乐场'
      }],
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50.67%
// .icons
//   // 触发bfc(闭合浮动？)
//   overflow hidden
//   // 这个height设为0是因为如果不显式设置height
//   // div中包含的img会有一个默认的高度 14px
//   // 导致整个.icons的高度超过预期
//   height 0
//   padding-bottom 50.67%
.icons
  margin-top .1rem
  .icon
    position relative
    float left
    overflow hidden
    width 25%
    // 这里height设为0，是content内容区的高度设为0
    // 这样一来，div.icon的高度就由padding-bottom撑开
    // 如果不设置height为0，那么div.icon的高度为 padding-bottom + p标签高度
    // 就会超过应有的高度
    height 0
    // 这里不设置 height 25%是因为父元素高度为0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      right 0
      left 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      bottom .1rem
      left 0
      right 0
      color $darkTextColor
      text-align center
      ellipsis()
</style>
