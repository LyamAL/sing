<template>
  <div>
    <header class="home-header wrap">
      <nav-bar/>
    </header>
    <div style="margin:auto; width:90%;padding-bottom: 15px;">
      <div class="big-title" style="margin-top: 80px; font-size: 30px">
        <span type="text">Research</span>
      </div>
      <el-row :gutter="20" style="margin-top:40px">
        <el-col :span="8" v-for="(item, index) in researchList" :key="index">
          <el-card :body-style="{ padding: '0px'}" shadow="hover">
            <div style="padding: 14px;" class="card-title">
              <span>{{ item.title }}</span>
            </div>
            <img :src="item.imgUrl" class="image">
            <!--            <div style="padding: 14px;" class="card-text">-->
            <!--              <span type="text" >{{item.desc}}</span>-->
            <!--            </div>-->
          </el-card>
        </el-col>
      </el-row>

      <el-divider></el-divider>
      <div class="big-title" style="font-size: 30px">
        <span type="text">Projects</span>
      </div>

      <div class="news">
        <div class="singe-news" v-for="project in projectList" v-bind:key="project.title">
          <img :src="'http://123.57.255.174:8080' + project.figurl" alt="">
          <div class="news-desc">
            <div style="margin-bottom: 10px; margin-left: 10px;">
              <div style="margin_bottom:10px; margin-left: 5px; ">
                <span style="font-size: 19px; font-weight: bold;text-align: left">{{ project.title }}</span>
              </div>
              <br/>
              <span style="font-weight:bold;font-size: 15px;color: #4d5156">Source:</span>
              <span style="font-size: 15px;color: #4d5156">{{ project.source }}</span><br/>
              <span style="font-weight:bold;font-size: 15px;color: #4d5156">Duration: </span>
              <span style="font-size: 15px;color: #4d5156">{{ project.duration_start }}~{{ project.duration_end}}</span><br/>
              <span style="font-weight:bold;font-size: 15px;color: #4d5156">Principal Investigator: </span>
              <span style="font-size: 15px;color: #4d5156">{{ project.principal_investigator }}</span>
            </div>
          </div>
        </div>
      </div>
<!--      <el-row :gutter="20">-->
<!--        <div v-for="project in projectList" :key="project.id">-->
<!--          <el-col :span="10" style=" margin-bottom:10px">-->
<!--            <el-container style=" border: 1px solid #eee;border-radius: 4px;background-color:#eee">-->
<!--              <el-aside width="120px" style="margin:auto;text-align: center; ">-->
<!--                <img :src="'http://123.57.255.174:8080'+project.figurl" class="icon">-->
<!--              </el-aside>-->
<!--              <el-container>-->
<!--                <el-main style="padding-left:0;">-->
<!--                  <div>-->
<!--                    <span class="small-title" style="margin_bottom:10px; font-size: 13px">{{ project.title }}</span>-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <span style="font-weight:bold" class="card-text">Source:</span>-->
<!--                    <span class="card-text">{{ project.source }}</span>-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <span style="font-weight:bold" class="card-text">Duration: </span>-->
<!--                    <span class="card-text">{{ project.duration_start }}~{{project.duration_end}}</span>-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <span style="font-weight:bold" class="card-text">Principal Investigator: </span>-->
<!--                    <span class="card-text">{{ project.principal_investigator }}</span>-->
<!--                  </div>-->

<!--                </el-main>-->
<!--              </el-container>-->
<!--            </el-container>-->
<!--          </el-col>-->
<!--        </div>-->
<!--      </el-row>-->
    </div>

    <footer-info/>
  </div>
</template>


<script>

import navBar from '@/components/NavBar'

import footerInfo from '@/components/FooterInfo'
import {Toast} from 'vant'

import {getProjects} from '@/service/research'


export default {
  name: 'research',
  data() {
    return {
      researchList: [{
        'title': '大数据分析与应用',
        'imgUrl': require('../assets/research/bigdata.jpeg'),
        'desc': '实验室基于数据驱动去研究并解决实际生活中的许多问题，如停车场空闲车位的有效分配、即时配送场景的订单分派、共享单车的平衡调度、蜂窝数据的用量预测等。'
      }
        , {
          'title': '物联网通信',
          'imgUrl': require('../assets/research/tongxin.jpg'),
          'desc': '物联网设备数量正在以一个飞快的速度增长，如何更加智能化地连接、使用这些设备成为了一个非常具有科研和应用价值的方向。研究计算机视觉与物联网设备结合的技术，利用不同传感器收集的数据进行融合从而解决某些场景下相应的问题等。'
        }, {
          'title': '物联网感知',
          'imgUrl': require('../assets/research/sensing.jpg'),
          'desc': '互联的移动和嵌入式设备的激增带来了一个传感器丰富的世界。在我们的日常环境中，越来越多的事物具有计算、传感和通信功能，这种功能有望彻底改变人类与物理对象之间的交互。通过智能感知与数据采集，可获得大规模传感数据供信息特征挖掘。同时，深度学习的最新进展极大地改变了计算设备处理以人为中心的内容（例如图像，视频，语音和音频）的方式。因此，将深层神经网络应用于IoT设备采集的数据挖掘可以能够执行复杂的感测和识别任务，以支持人类与其周围环境之间相互作用的新领域。'
        }],
      projectList:[]
      //   projectList:[{
      //     "id": 1,
      //   'title':"Networking Brain for Urban Cyber-Twin System",
      //   'figurl': require("../assets/knowleage_graph.png"),
      //   'source':"Ministry of Science and Technology Research and Development Project",
      //   'duration':"01-01-2021 to 01-01-2021",
      //   "principal": "Depeng Jin"
      //   },{
      //     "id": 2,
      //     'title':"Networking Brain for Urban Cyber-Twin System",
      //   'figurl': require("../assets/knowleage_graph.png"),
      //   'source':"Ministry of Science and Technology Research and Development Project",
      //   'duration':"01-01-2021 to 01-01-2021",
      //   "principal": "Depeng Jin"
      //   },{
      //     "id": 3,
      //     'title':"Networking Brain for Urban Cyber-Twin System",
      //   'figurl': require("../assets/knowleage_graph.png"),
      //   'source':"Ministry of Science and Technology Research and Development Project",
      //   'duration':"01-01-2021 to 01-01-2021",
      //   "principal": "Depeng Jin"
      // }]
    }
  },
  components: {
    navBar,
    footerInfo,
  },
  created() {
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    });

    Toast.clear()
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      Toast.loading({message: '加载中...', forbidClick: true});
      const {data: list} =await getProjects()
      this.projectList = list.research_project_list
      console.log(this.projectList)
      Toast.clear()
    },
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
@import '../common/style/text';

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
  box-shadow: 0 0 3px 0 @theme-color;

}

.news {
  .fj(flex-start);
  background-color: #fefefe;
  //margin-left: 15%;
  flex-wrap: wrap;
  color: #4d5156;

  .singe-news {
    .fj(space-between);
    margin: 5px 5px;
    width: 45%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    flex-direction: column;

    img {
      .wh(95%, 100%);
      border-radius: 8px;
      margin: 5px;
    }
    .news-desc {
      width: 100%;
      .fj(space-between);
      flex-direction: column;

      span {
        font-size: 18px;
        color: #333333;
        text-align: left;
        padding: 10px
      }

      p {
        width: 70%;
        font-size: 17px;
        color: #4d5156;
        padding: 15px;
        text-align: justify;
      }
    }



  }
}
.el-row {
  margin-top: 20px;
}


.el-card {
  margin: auto;
  width: 90%;
  border: 0;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.icon {
  width: 70%;
}

</style>
