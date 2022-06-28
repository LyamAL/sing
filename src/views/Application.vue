<template>
  <div>
    <header class="home-header">
      <nav-bar/>
    </header>
    <div class="intro">
      <h3 style="font-weight: bold; font-size: 30px;">Group Application:</h3>
    </div>
    <div class="apps">
      <!--        TODO-->
      <div class="singe-app" v-for="app in group_applicationList" v-bind:key="app.title">
        <router-link tag="div" to="/knowledge_graph/">
          <span>{{ app.title }}
          </span>
          <img :src="app.figurl" alt="">
        </router-link>
        <p>{{ app.detail }}</p>
      </div>
    </div>
    <div class="intro">
      <h3 style="font-weight: bold; font-size: 30px;">Individual Applications:</h3>
    </div>
    <div class="apps">
      <div class="singe-app" v-for="app in self_applicationList" v-bind:key="app.title">
        <div>
        <span>{{ app.title }}
        </span>
          <img :src="app.figurl" alt="">
        </div>
        <p>{{ app.detail }}</p>
      </div>
    </div>
    <footer-info/>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import footerInfo from "@/components/FooterInfo";
import {Toast} from "vant";
import {getGroupApplications} from '@/service/application'
import {getIndividualApplications} from '@/service/application'

export default {
  data() {
    return {
      group_applicationList: [],
      self_applicationList: [],
      // group_applicationList: [{
      //   title: 'Knowledge Graph',
      //   figurl: require('../assets/knowleage_graph.png'),
      //   detail: 'very good'
      // }],
      // self_applicationList: [{
      //   title: 'TCAC：Time-Constrained Actor-Critic Order Dispatch',
      //   figurl: 'http://47.102.214.205/img/TCAC.e62fa4f8.jpg',
      //   detail: 'Instant delivery has developed rapidly in recent years and significantly changed the lifestyle of people due to its timeliness and convenience. In instant delivery, the order dispatch process is concurrent. Couriers take new orders continuously and deliver multiple orders in a delivery trip (i.e., a batch). The delivery time of orders in a batch is often overlapped and interlinked with each other. The pickup and delivery sequence of the existing orders in a batch changes dynamically due to time constraints and real-time overdue possibility (i.e., the rate of deliveries that are not finished in promised time). Most of existing order dispatch mechanisms are designed for independent order dispatch or concurrent delivery without strict time constraints, hence are incapable of handling real-time concurrent dispatch with strict time constraints in on-demand instant delivery. To address the challenge, we propose a Time-Constrained Actor- Critic Reinforcement learning based concurrent dispatch system called TCAC-Dispatch to enhance the long-term overall revenue and reduce the overdue rate.'
      // }, {
      //   title: 'LoRa resilience against CTI',
      //   figurl: 'http://47.102.214.205/img/PSR.1abc9c95.png',
      //   detail: 'Recent years have witnessed the proliferation of Low-power Wide Area Networks (LPWANs) in the unlicensed band for various Internet-of-Things (IoT) applications. LPWAN devices inevitably suffer from high power Cross Technology Interference (CTI), such as interference from Wi- Fi, coexisting in the same spectrum. To alleviate this issue, we introduces the Partial Symbol Recovery (PSR) scheme for improving the CTI resilience of LPWAN. At the PHY layer, although CTI has much higher power, its duration is relatively shorter compared with LoRa symbols, leaving part of a LoRa symbol uncorrupted. By examining the unique frequency patterns in LoRa symbols with time-frequency analysis, our design effectively detects the clean LoRa chips that are free of CTI. This enables PSR to only rely on clean LoRa chips for successfully recovering from communication failures.We evaluate our PSR design with real-world testbeds, including SX1280 LoRa chips and USRP B210, under Wi-Fi interference in various scenarios.'
      // }, {
      //   title: 'LoRa Concurrent Transmission',
      //   figurl: 'http://47.102.214.205/img/SCLoRa.679b2bf8.png',
      //   detail: 'As one of the representatives of low-power wide-area network (LPWAN) technology, LoRa has become a widely used communication platform in the Internet of Things. Due to the intensive deployment of the end device, signal collisions caused by concurrent transmission affect network performance. Existing methods use signal features such as frequency to separate data packets. Because signal features are unstable or coarse-grained, the existing methods cannot solve the signal collision well in the burst traffic. In this work, we propose a novel PHY layer method that leverages multi-dimensional information to decode collided LoRa transmissions called SCLoRa. SCLoRa uses cumulative spectral coefficients to separate symbols that integrate frequency and power information. We consider the actual factors of channel fading, similar symbol boundaries, and spectrum leakage. We implemented and evaluated SCLoRa on the USRP B210 base station and SX1278 LoRa nodes. We set up different radio parameters and conducted experiments respectively. The results show that the throughput of SCLoRa is 3 times that of the state-of-art.'
      // }, {
      //   title: 'BRAVO',
      //   figurl: 'http://47.102.214.205/img/bravo.6a50e6e5.jpg',
      //   detail: 'Bike sharing systems, which provide a convenient commute choice for short trips, have emerged rapidly in many cities. While bike sharing has greatly facilitated people\'s commutes, those systems are facing a costly maintenance issue -- rebalancing bikes among stations. We observe that existing systems frequently suffer situations such as no-bike-to-borrow (empty) or no-dock-to-return (full) due to existing ad hoc rebalancing practice. To address this issue, we provide systematic analysis on user trip data, station status data, rebalancing data, and meteorology data, and propose BRAVO - the first practical data-driven bike rebalancing app for operators to improve bike sharing service while reducing the maintenance cost. Specifically, leveraging experiences from two-round round-the-clock field studies and comprehensive information from four data sets, a data-driven model is proposed to capture and predict the safe rebalancing range for each station. Based on this safe rebalancing range, BRAVO computes the optimal rebalancing amounts for the full and empty stations to minimize the rebalancing cost.'
      // }
      // ]
    }
  },
  components: {
    footerInfo,
    navBar,
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      Toast.loading({message: '加载中...', forbidClick: true});
      const {data: glist} = await getGroupApplications()
      const {data: ilist} = await getIndividualApplications()
      this.group_applicationList = glist.application_project_list;
      this.self_applicationList = ilist.application_project_list
      Toast.clear()
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

.intro {
  .fj(flex-start);
  width: 72%;
  padding-left: 15%;
  padding-top: 40px;
  flex-direction: column;
  text-align: left;

}

.apps {
  .fj(center);
  background-color: #fefefe;
  width: 72%;
  margin-left: 15%;
  flex-direction: column;

  :hover {
    background-color: #fafafa;
  }

  .singe-app {
    .fj(space-around);
    margin: 16px 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    flex-direction: row;

    div {
      width: 30%;
      .fj(center);
      flex-direction: column;
    }

    img {
      .wh(260px, 150px);
      border-radius: 8px;
      margin: 10px;
    }

    span {
      color: #000000;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      padding: 10px
    }

    p {
      width: 65%;
      font-size: 14px;
      color: #4d5156;
      padding: 15px
    }
  }
}
</style>
