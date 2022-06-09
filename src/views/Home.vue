<template>
  <div>
    <header class="home-header wrap">
      <nav-bar/>
    </header>
    <swiper :list="swiperList"></swiper>
    <footerInfo/>
  </div>
</template>

<script>
import swiper from '@/components/Swiper'
import navBar from '@/components/NavBar'
import footerInfo from '@/components/FooterInfo'
import {getLocal} from '@/common/js/utils'
import {Toast} from 'vant'

export default {
  name: 'home',
  data() {
    return {
      swiperList: [],
      isLogin: false,
      headerScroll: true,
    }
  },
  components: {
    navBar,
    swiper,
    footerInfo
  },
  async mounted() {
    const token = getLocal('token')
    if (token) {
      this.isLogin = true
    }
    // window.addEventListener('scroll', this.pageScroll)
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    });
    this.swiperList = [{
      "carouselUrl": "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-p50-pocket.png",
      "redirectUrl": "http://47.102.214.205/"
    },
      {
        "carouselUrl": "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-iphone13.png",
        "redirectUrl": "http://47.102.214.205/"
      },
      {
        "carouselUrl": "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-mate40.png",
        "redirectUrl": "http://47.102.214.205/"
      }]
    Toast.clear()
  },
  methods: {
    // 滚动显示、隐藏header
    // pageScroll() {
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    // },
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.home-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 40px);
  .fj();
  line-height: 40px;
  padding: 0 15px;
  .boxSizing();
  font-size: 12px;
  color: #fff;
  z-index: 10000;
  align-items: center;
  display: flex;
  box-shadow:0 0 3px 0 $theme-color;

}
</style>
