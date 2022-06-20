<template>
<div  v-show="isLogin===true">
    <header class="home-header wrap">
      <nav-bar/>
    </header>
    <div class="resource"  >
        <el-container>
        <el-aside width="200px" style="height:100%">
            <el-menu @select="filterPaper">
            <el-menu-item index="all">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    全部年份
                </template>
            </el-menu-item>
            <el-menu-item :index="year" v-for="(year, index) in yearList" :key="index">
                <template slot="title">
                    {{year}}
                </template>
            </el-menu-item>
            </el-menu>
            <el-menu @select="filterPaper">
            <el-menu-item index="all">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    全部类型
                </template>
            </el-menu-item>
            <el-menu-item :index="meeting">
                <template slot="title">
                    会议
                </template>
            </el-menu-item>
            </el-menu>
        </el-aside>
            <el-main style="height: 800px">
                <el-timeline>
                    <el-timeline-item :timestamp="item.time" placement="top" v-for="(item, index) in items" :key="index">
                        <el-card v-show="item.type==='meeting'">
                        <div slot="header" class="clearfix">
                            <span>
                                <span style="margin-right: 20px">
                                    
                                </span>
                                <strong>{{item.title}}</strong>
                            </span>
                        </div>
                        
                        <div>
                            <span>
                                <span style="margin-right: 20px">
                                    <svg class="ali-icon" aria-hidden="true">
                                        <use xlink:href="#ali-icon-huabanfuben"></use>
                                    </svg>
                                </span>
                                <strong>详细:</strong>&nbsp; {{item.detail}}
                            </span> &nbsp;&nbsp;
                        </div>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-main>
        </el-container>
    </div>
   
 <footer-info/>
</div>
</template>

<script>
    import axios from "axios"
    import navBar from '@/components/NavBar'
    import {getLocal} from '@/common/js/utils'

    import footerInfo from '@/components/FooterInfo'
    export default {
        name: "PaperList",
        data(){
            return{
                items: [],
                source: [],
                yearList: [],
                type:"meeting",
                isLogin: false,
            }
        },
        components: {     
            navBar,
            footerInfo
        },
        computed:{
            baseUrl(){
              return this.$store.state.app.baseUrl
            }
        },
        async mounted() {},
        created() {
            const token = getLocal('token')
            if (token) {
            this.isLogin = true
            }else{
                 this.$router.push("/ResourceLogin")
                 return
            }
            /*
            axios.get(this.baseUrl+"/api/paper").then(res=>{
                let temp = res.data.data;
                temp.sort(this.cmp("date"));
                this.items = temp;
                this.source = temp;
                this.yearList = this.getYearList(temp);
            })*/

            let temp =[
                {"id": 1,
				"type":"meeting",
				"title": "Networking Brain for Urban Cyber-Twin System",
				"resources": [
					{
					"url":"https://qa.apipost.cn/t/houduan"
					}
				],
				"detail": "Ministry of Science and Technology Research and Development Project",
				"time": "01-01-2021"}
            ]
            temp.sort(this.cmp("time"));
            
            this.items = temp;
            this.source = temp;
            this.yearList = this.getYearList(temp);
        },
        methods:{
            filterPaper(year, _){
                if(year === 'all') {
                    this.items = this.source;
                    return
                }
                let temp = [];
                for(let i = 0; i < this.source.length; i++){
                    if(this.source[i].year === year){
                        temp.push(this.source[i])
                    }
                }
                this.items = temp
            },
            getYearList(src){
                let years = new Set();
                for(let i=0; i < src.length; i++){
                    let year = src[i]["time"].split("-")[2];
                    years.add(year);
                    this.source[i]['year'] = year
                }
                return Array.from(years)
            },
            cmp(p){
                return function (a, b) {
                    let x = parseInt(a[p].replace('-',''));
                    let y = parseInt(b[p].replace('-',''));
                    return y - x
                }
            }
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
  .resource{
        margin:auto; width:90%;margin-top:60px; padding-bottom: 15px;
    }
  .item {
        float: right;
        padding: 3px 0;
        margin: 0 10px;
    }
    a {
        text-decoration:none;
        color:inherit;
    }
    .link{
        height:30px;
        line-height:30px;
    }
    .ali-icon {
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
</style>