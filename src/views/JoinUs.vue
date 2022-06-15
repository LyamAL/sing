<template>
  <div>
    <header>
      <nav-bar/>
    </header>
    <div class="joinus">
      <span style="font-size: 25px; font-weight: bold; margin: 15px 0;">东南大学智慧物联网研究中心 —— 硕士/博士研究生招新</span>
      <van-divider/>
      <div class="intro">
        <span style="color: #4d5156; font-weight: bold;">东南大学智慧物联网研究中心</span>,
        是由何田教授和王帅教授创办。实验主研究方向包括智慧物联网，大数据分析和无线通信等。实验室拥有浓厚的科研氛围，导师会针对学生的不同特点制定不同的培养方案。此外，实验室与罗格斯大学、韦恩州立大学、明尼苏达大学．香港城市大学等多所国际知名大学开展学生联合培养工作。
      </div>
      <van-divider/>
      <span class="subtitle">招聘硕士/博士生研究方向</span>
      <div class="intro" v-for="direction in directionList" v-bind:key="direction">
        <span style="color: #4d5156; font-weight: bold; margin-bottom: 5px;">{{ direction.name }}</span>,
        {{ direction.desc }}
      </div>
      <van-divider/>
      <span class="subtitle">导师介绍</span>
      <div class="prof-list">
        <div v-for="prof in profList" v-bind:key="prof.index" class="card">
          <img :src="prof.imgUrl">
          <div class="col">
            <router-link tag="a" :to="prof.pageUrl"><span>{{ prof.name }}</span></router-link>
            <p>{{ prof.desc }} </p>
          </div>
        </div>
      </div>
      <van-divider/>
      <span class="subtitle">培养方案</span>
      <div class="intro">
        实验室采取每周一对一讨论+组会+国内外老师联合培养的多维培养模式，根据同学们的兴趣点去制定相应的培养方案。目前实验室已有多位本科生发表计算机A类论文，多位研究生在学习第一年即以第一作者发表A类论文。
      </div>
      <van-divider/>
      <span class="subtitle">课题选择</span>
      <div class="intro">
        实验室倡导对一个有意义的问题进行深入挖掘并做出实际的应用系统，每个同学刚进组时都会在导师的指导下，依据自己的兴趣去选定相应的课题。
      </div>
      <van-divider/>
      <span class="subtitle">国际交流</span>
      <div class="intro">
        参与课题的同学可直接参加国外合作课题组的组会，安排合作课题组教授对课题进行细致的指导。实验室提倡做出高水平成果，并有着充足的科研经费保障课题的进行，对于优秀的学生也非常乐意派其参加国内外高水平会议和前往国外合作课题组进行访问学习。
      </div>
      <div style="font-size: 25px; font-weight: bold; margin: 30px 0;">
        东南大学智慧物联网研究中心欢迎你的到来！
      </div>
    </div>
    <footer-info/>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
import footerInfo from '@/components/FooterInfo'

export default {
  data() {
    return {
      directionList: [
        {
          name: '大数据分析',
          desc: '大量的物联网设备会产生各式各样的数据，如何设计高效的系统去处理并应用这些数据是一个前景广阔的研究方向。实验室基于数据驱动去研究并解决实际生活中的许多问题，如共享单车的平衡调度、电动公交车队的电池寿命感知、蜂窝数据的用量预测等。'
        },
        {
          name: '智慧物流网',
          desc: '物联网设备数量正在以一个飞快的速度增长，如何更加智能化地连接、使用这些设备成为了一个非常具有科研和应用价值的方向。具体来说，研究异构直联通信技术使得不同的无线通信协议如WiFi、ZigBee和Bluetooth等能够免网关进行通信。研究计算机视觉和物联网设备感知相结合的技术，利用不同传感器收集的数据进行融合从而解决某些场景下相应的问题等。'
        },
      ],
      profList: [{
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
        }]
    }
  },
  components: {
    navBar,
    footerInfo
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

.prof-list {
  display: flex;
  width: 100%;
  padding-top: 15px;
  flex-direction: column;
  .fj(center);
  padding-bottom: 15px;

  .card {
    width: 72%;
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

.joinus {
  .fj(center);
  width: 72%;
  padding-left: 15%;
  flex-direction: column;
  text-align: center;


  .intro {
    text-align: left;
    font-size: 14px;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: left;
  }
}
</style>
