<template>
  <div>
    <header class="home-header">
      <nav-bar/>
    </header>
    <swiper :list="swiperList"></swiper>
    <div class="group-intro">
      <div class="group-title">
        <h4>
          <span style="color: #3895bf">SING </span> - Short Introduction
        </h4></div>
      <div>
        <p class="group-desc">实验室研究方向主要包括：人工智能与大数据分析、物联网，无线网络，移动通信技术。欢迎对物联网或大数据方向感兴趣的同学申请加入实验室团队。Instant delivery has
          developed rapidly in recent years and significantly changed the lifestyle of people due to its timeliness and
          convenience.
          Recent years have witnessed the proliferation of Low-power Wide Area Networks (LPWANs) in the unlicensed band
          for various Internet-of-Things (IoT) applications
        </p>
      </div>
    </div>

    <div class="research-list" @click="goToResearch">
      <div v-for="research in researchList" v-bind:key="research.index">
        <router-link tag="a" to="/research"><span>{{ research.name }}</span></router-link>
        <img src="../assets/logo.png" alt=""/>  <!--      <img :src="research.imgUrl">-->
        <p>{{ research.desc }} </p>
      </div>
    </div>
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
      researchList: [{
        'name': 'Research 1',
        'imgUrl': '',
        'desc': 'Instant delivery has developed rapidly in recent years and significantly changed the lifestyle of people due to its timeliness and convenience.'
      }
        , {
          'name': 'Research 2',
          'imgUrl': '',
          'desc': 'Recent years have witnessed the proliferation of Low-power Wide Area Networks (LPWANs) in the unlicensed band for various Internet-of-Things (IoT) applications'
        }, {
          'name': 'Research 3',
          'imgUrl': '',
          'desc': 'As one of the representatives of low-power wide-area network (LPWAN) technology, LoRa has become a widely used communication platform in the Internet of Things.'
        }]
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
    window.addEventListener('scroll', this.pageScroll)
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
    pageScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    },
    goToResearch() {
      this.$router.push({path: `research`})
    }
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
  .boxSizing();
  font-size: 12px;
  color: #fff;
  z-index: 10000;
  box-shadow: 0 0 4px 0 @theme-color;
}

.group-intro {
  display: flex;
  width: 100%;
  padding-bottom: 13px;
  flex-direction: column;
  color: #000;

  .group-title {
    .wh(100%, 40px);
    text-align: center;
    font-weight: bolder;
    font-size: 20px;
  }

  .group-desc {
    padding: 15px 15%;
    text-align: left;
    color: #4d5156;
    font-weight: 500;
    font-size: 12px;
  }

}

.research-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  .fj(center);
  padding: 10px 0;

  div {
    width: 23%;
    color: #4d5156;

    background-color: #f8f8f8;
    transition: width 2s;

    flex-direction: column;
    text-align: center;
    display: flex;
    margin: 0 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);


    &:hover {
      background-color: #f5f5f5;
    }

    img {
      .wh(40px, 40px);
      margin: 13px auto 8px auto;
    }

    a {
      padding-top: 10px;

      :hover {
        color: @theme-color;
      }
    }

    span {
      font-size: 15px;
      font-weight: bold;
      text-align: center;
    }

    p {
      padding: 10px 10px;
      font-size: 12px;
      text-align: left;
    }
  }

}


</style>
