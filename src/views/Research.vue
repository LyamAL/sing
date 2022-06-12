<template>
  <div>
    <header class="home-header wrap">
      <nav-bar/>
    </header>

    
    <div style="margin:auto; width:90%;">


      <el-row :gutter="20">
        <el-col :span="12" v-for="(item, index) in researchList" :key="index" >
          <el-card :body-style="{ padding: '0px'}" shadow="hover">
            <div style="padding: 14px;" class="card-title">
              <span>{{item.title}}</span>
            </div>
            <img :src="item.imgUrl" class="image">
            <div style="padding: 14px;" class="card-text">
              <span type="text" >{{item.text}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>


      <el-divider></el-divider>
      <div class="big-title">
          <span type="text" >Projects {{(Object.keys(projectList).length+1)/2}}</span>

      </div>
      <el-row :gutter="20" v-for="n in Math.ceil((Object.keys(projectList).length+1)/2)" :key="n">
      
        <el-col :span="12"  v-for="i in 2" :key="i" >
          <el-card :body-style="{ padding: '0px'}" shadow="hover" v-if="n<=Object.keys(projectList).length">
            n
            <img :src="projectList.findIndex(item => item.id == n).figurl" class="image">
          
          </el-card>
        </el-col>
      </el-row>
    </div>
    
     
    
    
  </div>
</template>


<script>

import navBar from '@/components/NavBar'
import {getLocal} from '@/common/js/utils'
import {Toast} from 'vant'

export default {
  name: 'home',
  data() {
    return {
      researchList:[{
        'title':"人工智能与大数据分析",
        "imgUrl": require("../assets/banner1.jpg"),
        "text": "Instant delivery has developed rapidly in recent years and significantly changed the lifestyle of people due to its timeliness and convenience. "},
        {
        'title':"物联网与移动通信技术",
        "imgUrl": require("../assets/banner2.jpg"),
        "text": "Recent years have witnessed the proliferation of Low-power Wide Area Networks (LPWANs) in the unlicensed band for various Internet-of-Things (IoT) applications. "}
      ],
      projectList:[{
      'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration_start':"01-01-2021",
      'duration_end':"01-01-2021",
      "principal investigator": "Depeng Jin"
      },{
        'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration_start':"01-01-2021",
      'duration_end':"01-01-2021",
      "principal investigator": "Depeng Jin"
      },{
        'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration_start':"01-01-2021",
      'duration_end':"01-01-2021",
      "principal investigator": "Depeng Jin"
    }]
    }
  },
  components: {
    navBar
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
    this.projectList = [{
      'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration_start':"01-01-2021",
      'duration_end':"01-01-2021",
      "principal investigator": "Depeng Jin"
      },{
        'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration_start':"01-01-2021",
      'duration_end':"01-01-2021",
      "principal investigator": "Depeng Jin"
      },{
        'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration_start':"01-01-2021",
      'duration_end':"01-01-2021",
      "principal investigator": "Depeng Jin"
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
  .el-row {
   
    margin-top: 100px;
    
  }

 

  .el-card{
    margin: auto;
    width: 80%;
    border: 0ch;
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


</style>