<template>
  <div>
    <header class="home-header">
      <nav-bar/>
    </header>
    <swiper :list="swiperList"></swiper>
    <div class="group-intro">
      <div class="group-title">
        <h4>
          <span style="color: #3895bf">AIOTX </span> - Short Introduction
        </h4></div>
      <div>
        <p class="group-desc">
          智慧物联网研究中心是由何田教授和王帅教授于2018年11月创立的实验室。实验室研究方向包括：物联网感知与通信、人工智能与大数据分析、实时计算等。目前博士研究生11名，硕士研究生40余名，并与明尼苏达大学、罗格斯大学、韦恩州立大学、香港城市大学、饿了么、京东物流等多所国际知名大学/企业开展学生联合培养工作。
        </p>
      </div>
    </div>
    <div class="research-list">
      <div v-for="research in researchList" v-bind:key="research.index" @click="goTo">
        <router-link tag="a" to="/research"><span>{{ research.name }}</span></router-link>
              <img :src="research.imgUrl" alt="">
<!--        <p >{{ research.desc }} </p>-->
      </div>
    </div>

    <div class="prof-list">
      <div v-for="prof in professorList" v-bind:key="prof.index" class="card">
        <img :src="prof.imgUrl">
        <div class="col">
          <router-link tag="a" :to="prof.pageUrl"><span>{{ prof.name }}</span></router-link>
          <p>{{ prof.desc }} </p>
        </div>
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
        'name': '大数据分析',
        'imgUrl': require('../assets/research/bigdata.jpeg'),
        'desc': '实验室基于数据驱动去研究并解决实际生活中的许多问题，如停车场空闲车位的有效分配、即时配送场景的订单分派、共享单车的平衡调度、蜂窝数据的用量预测等。'
      }
        , {
          'name': '智慧物联网',
          'imgUrl': require('../assets/research/tongxin.jpg'),
          'desc': '物联网设备数量正在以一个飞快的速度增长，如何更加智能化地连接、使用这些设备成为了一个非常具有科研和应用价值的方向。研究计算机视觉与物联网设备结合的技术，利用不同传感器收集的数据进行融合从而解决某些场景下相应的问题等。'
        }, {
          'name': '物联网与大数据共融',
          'imgUrl': require('../assets/research/sensing.jpg'),
          'desc': '互联的移动和嵌入式设备的激增带来了一个传感器丰富的世界。在我们的日常环境中，越来越多的事物具有计算、传感和通信功能，这种功能有望彻底改变人类与物理对象之间的交互。通过智能感知与数据采集，可获得大规模传感数据供信息特征挖掘。同时，深度学习的最新进展极大地改变了计算设备处理以人为中心的内容（例如图像，视频，语音和音频）的方式。因此，将深层神经网络应用于IoT设备采集的数据挖掘可以能够执行复杂的感测和识别任务，以支持人类与其周围环境之间相互作用的新领域。'
        }],
      professorList: [{
        'name': 'TIAN HE',
        'imgUrl': 'http://47.102.214.205/img/hetian.39ba6c0b.jpg',
        'pageUrl': 'http://47.102.214.205/',
        'desc': 'IEEE/ACM Fellow\n' +
          'Director, Smart Internet of Things Research Center, Southeast University\n' +
          '\n' +
          'Research Interests: Artificial Intelligence, Wireless Coexistence, Posture/Behavior Estimation, Social Interaction Monitoring, Large-Scale Intelligent Transportation Systems (road network efficiency and safety), Rechargeable Sensor Systems/Battery Array Management/Safe Charging.'
      }
        , {
          'name': 'SHUAI WANG',
          'imgUrl': 'http://47.102.214.205/img/wangshuai.3c813d61.jpg',
          'pageUrl': 'http://47.102.214.205/',
          'desc': 'Young Chief Professor, School of Computer Science and Engineering, Southeast University\n' +
            'Executive Director, Smart Internet of Things Research Center, Southeast University\n' +
            '\n' +
            'Research Interests: Artificial Intelligence, Data Mining, Internet of Things, Wireless Networks And Sensors.\n'
        }, {
          'name': 'WEIWEI CHEN',
          'imgUrl': 'http://47.102.214.205/img/chenweiwei.a8bc4b47.jpg',
          'pageUrl': 'http://47.102.214.205/',
          'desc': 'Associate Professor, School of Computer Science and Engineering, Southeast University\n' +
            '\n' +
            'Research Interests: Internet of Things, Wireless Communications, Mobile Edge Computing'
        }]
    }
  },
  components: {
    navBar,
    swiper,
    footerInfo,
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
      "carouselUrl": require("../assets/banner1.jpg"),
      "redirectUrl": "http://47.102.214.205/"
    },
      {
        "carouselUrl": require("../assets/banner2.jpg"),//"https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-iphone13.png",
        "redirectUrl": "http://47.102.214.205/"
      },
      {
        "carouselUrl": require("../assets/banner3.jpg"),
        "redirectUrl": "http://47.102.214.205/"
      }]
    Toast.clear()
  },
  methods: {
    pageScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    },
    goTo() {
      this.$router.push({path: `research`})
    },
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
    flex-direction: column;
    text-align: center;
    display: flex;
    //background-image: url('../assets/research/bigdata.jpeg');
    margin: 0 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #f5f5f5;
    }

    img {
      .wh(100%, 200px);
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

.prof-list {
  display: flex;
  width: 100%;
  padding-top: 15px;
  flex-direction: column;
  .fj(center);
  padding-bottom: 15px;

  .card {
    width: 72%;
    margin-left: 15%;
    margin-bottom: 15px;

    color: #4d5156;
    background-color: #fefefe;

    flex-direction: row;
    text-align: center;
    .fj(space-around);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);


    img {
      .wh(100px, 120px);
      border-radius: 8px;
      margin: 5px 0;
    }

    &:hover {
      background-color: #fff;
    }

    .col {
      width: 80%;
      color: #4d5156;
      background-color: #fefefe;
      flex-direction: column;
      text-align: left;
      .fj(center);

      a {
        padding-top: 10px;
        :hover {
          color: @theme-color;
        }
      }

      span {
        padding-left: 10px;
        font-size: 15px;
        font-weight: bold;
      }

      p {
        padding: 10px 10px;
        font-size: 12px;
        text-align: left;
      }
    }

  }

}


</style>
