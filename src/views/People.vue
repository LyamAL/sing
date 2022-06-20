
<template>
  <div >
    <header class="home-header wrap">
      <nav-bar/>
    </header>

    
    <div  class="people"   v-if="activeIndex=='faculty'">
      <div class="big-title">
          <span type="text" >Faculty </span>

      </div >
       <div v-for="n in Object.keys(facultyList).length" :key="n">
          <el-row :gutter="0">
              <el-col :span=24 >
                <el-card shadow="always">
                    <el-container>
                        <el-aside width="200px" style="margin:auto;text-align: center; ">
                            <img @click="goToUrl(facultyList.find(item => item.id == n).url)" :src="facultyList.find(item => item.id == n).photo" alt="picture missed" class="image"/>
                        </el-aside>
                         <el-container>
                            <el-main style="padding:10px">
                                <div style="margin-bottom:10px">
                                    <span class="small-title">{{facultyList.find(item => item.id == n).title}}</span>
                                </div>
                                <div>
                                    <span class="small-title">{{facultyList.find(item => item.id == n).name}}</span>
                                </div>
                                <el-divider></el-divider>
                                <div slot="header">
                            `  <b style="font-size:19px">{{facultyList.find(item => item.id == n).name}}</b>
                                </div>
                                <div style="font-size:15px; " class="card-text" v-html="facultyList.find(item => item.id == n).desc"></div>`
                            </el-main>
                        </el-container>
                    </el-container>
                </el-card>
              </el-col>
          </el-row>
        </div>
      
    </div>
    <footerInfo/>
  </div>
</template>



<script>
import navBar from '@/components/NavBar'
import footerInfo from '@/components/FooterInfo'
export default {
  name: "people",
  props: [],
  data() {
    return {
      facultyList: [
          {
            id: 1,
            title:"Professor",
            name: "Tian He",
            photo: require("../assets/people/hetian.jpg"),
            url: "http://www-users.cs.umn.edu/~tianhe/index.html",
            desc:
              "IEEE/ACM Fellow<br/>" +
                    "Director, Smart Internet of Things Research Center, Southeast University<br/><br/>" +
                    "<b>Research Interests:</b> Artificial Intelligence, Wireless Coexistence, Posture/Behavior Estimation, " +
                    "Social Interaction Monitoring, " +
                    "Large-Scale Intelligent Transportation Systems (road network efficiency and safety), " +
                    "Rechargeable Sensor Systems/Battery Array Management/Safe Charging.<br/><br/>" +
                    "<b>Email:</b> tianhe@seu.edu.cn"
          },
          {
            id: 2,
            title:"Professor",
            name: "Shuai Wang",
            photo: require("../assets/people/wangshuai.jpg"),
            url: "https://scholar.google.com/citations?hl=zh-CN&user=gfDfZqAAAAAJ&view_op=list_works&sortby=pubdate",
            desc:
              "Young Chief Professor, School of Computer Science and Engineering, Southeast University<br/>Executive Director, Smart Internet of Things Research Center, Southeast University" +
                    "<br/><br/><b>Research Interests:</b> Artificial Intelligence, Data Mining, Internet of Things, " +
                    "Wireless Networks And Sensors.<br/><br/>" +
                    "<b>Email: </b>shuaiwang@seu.edu.cn"
                    // "Email: shuaiwang@seu.edu.cn<br/>Phone Number: 17867966559"
          },
          {
            id: 3,
            title:"Associate Professor",
            name: "Weiwei Chen",
            photo: require("../assets/people/chenweiwei.jpg"),
            url: "",
            desc:
                    "Associate Professor, School of Computer Science and Engineering, Southeast University" +
                    "<br/><br/><b>Research Interests: </b>Internet of Things, Wireless Communications, Mobile Edge Computing<br/><br/>" +
                    "<b>Email: </b>chen_weiwei@seu.edu.cn"
          }
        ],
      student: [],
      activeIndex: "faculty"
    };
  },
  components: {
    navBar,
    footerInfo,
  },
  methods: {
    goToUrl(url){
      window.location.href = url;
    }
  }
};
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

    .people{
        margin:auto; width:72%;margin-top:60px; padding-bottom: 15px;
    }
    .el-row {
        margin-top: 20px;
    }


    .el-divider--horizontal{
        margin: 8px 0;
        background: 0 0;
        border-top: 2px dashed rgba(56,149,191 ,0.25);
    }
    .el-card{
        margin: 0;
        width: 90%;
        border: 0ch;
    }


    .image {
        width: 90%;
        display: block;
    }
</style>