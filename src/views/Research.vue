<template>
  <div>
    <header class="home-header wrap">
      <nav-bar/>
    </header>


    <div style="margin:auto; width:90%;padding-bottom: 15px;">


      <el-row :gutter="20" style=" margin-top:100px">
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
          <span type="text" >Projects</span>

      </div>
      <el-row :gutter="20">
        <div v-for="project in projectList" :key="project.id">
          <el-col :span="12" style=" margin-bottom:10px">
            <el-container style=" border: 1px solid #eee;border-radius: 4px;background-color:#eee" >
            <el-aside width="120px" style="margin:auto;text-align: center; ">
            <img :src="project.figurl" class="icon">
            </el-aside>
            <el-container>
             <el-main style="padding-left:0;">
               <div>
                   <span class="small-title" style="margin_bottom:10px">{{project.title}}</span>
               </div>
              <div>
                  <span style="font-weight:bold" class="card-text">Source:</span>
                  <span class="card-text">{{project.source}}</span>
              </div>
              <div>
                  <span style="font-weight:bold" class="card-text">Duration: </span>
                  <span class="card-text">{{project.duration}}</span>
              </div>
              <div>
                  <span style="font-weight:bold" class="card-text">Principal Investigator: </span>
                  <span class="card-text">{{project.principal}}</span>
              </div>

             </el-main>
            </el-container>
          </el-container>
        </el-col>
        </div>
      </el-row>
      <!-- <el-row :gutter="20" v-for="n in Math.ceil((Object.keys(projectList).length+1)/2)" :key="n">
      <div>
        <el-col :span="12"  v-for="i in 2" :key="i" >
            <el-container style=" border: 1px solid #eee;border-radius: 4px;background-color:#eee" v-if="(n-1)*2+i<=Object.keys(projectList).length" >
            <el-aside width="120px" style="margin:auto;text-align: center; ">
            <img :src="projectList.find(item => item.id == (n-1)*2+i).figurl" class="icon">
            </el-aside>
            <el-container>
             <el-main style="padding-left:0;">
               <div>
                   <span class="small-title" style="margin_bottom:10px">{{projectList.find(item => item.id == (n-1)*2+i).title}}</span>
               </div>
              <div>
                  <span style="font-weight:bold" class="card-text">Source:</span>
                  <span class="card-text">{{projectList.find(item => item.id == (n-1)*2+i).source}}</span>
              </div>
              <div>
                  <span style="font-weight:bold" class="card-text">Duration: </span>
                  <span class="card-text">{{projectList.find(item => item.id == (n-1)*2+i).duration}}</span>
              </div>
              <div>
                  <span style="font-weight:bold" class="card-text">Principal Investigator: </span>
                  <span class="card-text">{{projectList.find(item => item.id == (n-1)*2+i).principal}}</span>
              </div>

             </el-main>
            </el-container>
          </el-container>
        </el-col>
      </div>
        
      </el-row> -->
    </div>

    <footer-info/>
  </div>
</template>


<script>

import navBar from '@/components/NavBar'
import {getLocal} from '@/common/js/utils'

import footerInfo from '@/components/FooterInfo'
import {Toast} from 'vant'

import axios from '../utils/axios'

export default {
  name: 'research',
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
        "id": 1,
      'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration':"01-01-2021 to 01-01-2021",
      "principal": "Depeng Jin"
      },{
        "id": 2,
        'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration':"01-01-2021 to 01-01-2021",
      "principal": "Depeng Jin"
      },{
        "id": 3,
        'title':"Networking Brain for Urban Cyber-Twin System",
      'figurl': require("../assets/banner1.jpg"),
      'source':"Ministry of Science and Technology Research and Development Project",
      'duration':"01-01-2021 to 01-01-2021",
      "principal": "Depeng Jin"
    }]
    }
  },
  components: {
    navBar,
    footerInfo,
  },
  created() {

    // window.addEventListener('scroll', this.pageScroll)
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    });

   
    this.getProjects()
    
    Toast.clear()
  },
  methods: {
    // 滚动显示、隐藏header
    // pageScroll() {
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    // },
    async getProjects(){
      axios.get('/getProjects').then(res=>{
        console.log(res.research_project_list),
        this.projectList=res.research_project_list,
        console.log( this.projectList)
      })
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
  .el-row {

    margin-top: 20px;
    

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
  .icon {
    width: 70%;
  }

</style>
