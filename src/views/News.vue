<template>
  <div>
    <header class="home-header">
      <nav-bar/>
    </header>

    <div class="intro">
      <h3 style="font-weight: bold; font-size: 30px;">Academic News:</h3>
    </div>
    <div class="news">
      <div class="singe-news" v-for="news in academicList" v-bind:key="news.title">
        <img :src="'http://123.57.255.174:8080' + news.figurl" alt="">
        <div class="news-desc">
          <span>{{ news.title }}</span>
          <p>{{ news.detail }}</p>
          <span style="color: #303133; font-size: 15px; font-weight: lighter"><van-icon
            name="calendar-o"/>{{ news.time }}</span>
        </div>
      </div>
    </div>
    <div class="intro">
      <h3 style="font-weight: bold; font-size: 30px;">Entertainment News:</h3>
    </div>
    <div class="news">
      <div class="singe-news" v-for="news in entertainmentList" v-bind:key="news.title">
        <img :src="'http://123.57.255.174:8080' + news.figurl" alt="">
        <div class="news-desc">
          <span>{{ news.title }}</span>
          <p>{{ news.detail }}</p>
          <span style="color: #303133; font-size: 15px; font-weight: lighter"><van-icon
            name="calendar-o"/>{{ news.time }}</span>
        </div>
      </div>
    </div>
    <footer-info/>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import footerInfo from "@/components/FooterInfo";
import {Toast} from "vant";
import {getAcademicNews, getEntertainmentNews} from "@/service/news";

export default {
  name: 'News',
  data() {
    return {
      academicList: [],
      entertainmentList: [],
      // academicList: [{
      //   title: '学术动态1',
      //   figurl: require('../assets/news.png'),
      //   detail: 'very happy',
      //   time: '2022-01-01'
      // }, {
      //   title: '学术动态2',
      //   figurl: require('../assets/news.png'),
      //   detail: 'very happy too',
      //   time: '2021-01-01'
      // }, {
      //   title: '学术动态3',
      //   figurl: require('../assets/news.png'),
      //   detail: 'very happy toooo',
      //   time: '2020-01-01'
      // }],
      // entertainmentList: [{
      //   title: '娱乐动态1',
      //   figurl: require('../assets/news.png'),
      //   detail: 'very happy',
      //   time: '2022-01-01'
      // }, {
      //   title: '娱乐动态2',
      //   figurl: require('../assets/news.png'),
      //   detail: 'very happy too',
      //   time: '2021-01-01'
      // }, {
      //   title: '娱乐动态3',
      //   figurl: require('../assets/news.png'),
      //   detail: 'very happy toooo',
      //   time: '2020-3-01'
      // }],
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
      const {data: academicList} = await getAcademicNews()
      const {data: entertainmentList} = await getEntertainmentNews()
      this.academicList = academicList.Academic_News;
      this.entertainmentList = entertainmentList.Entertain_News
      console.log(this.academicList)
      console.log(this.entertainmentList)
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

.news {
  .fj(center);
  background-color: #fefefe;
  width: 72%;
  margin-left: 15%;
  flex-direction: column;
  color: #4d5156;

  .singe-news {
    .fj(space-between);
    margin: 16px 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    flex-direction: row;

    .news-desc {
      width: 70%;
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
        font-size: 14px;
        color: #4d5156;
        padding: 15px;
        text-align: justify;

      }
    }

    img {
      .wh(260px, 150px);
      border-radius: 8px;
      margin: 10px;
    }


  }
}

//.entertain-news {
//  .fj(space-around);
//  background-color: #fefefe;
//  width: 72%;
//  margin-left: 15%;
//  padding-bottom: 15px;
//  flex-wrap: wrap;
//  color: #4d5156;
//
//  .singe-news {
//    .fj(space-around);
//    width: 28%;
//    color: #4d5156;
//    margin: 0 16px;
//    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
//    flex-direction: column;
//
//    div {
//      .fj(center);
//      flex-direction: column;
//    }
//
//    img {
//      .wh(100%, 100%);
//      border-radius: 8px;
//      margin: 10px;
//    }
//
//    span {
//      color: #000000;
//      font-weight: bold;
//      font-size: 13px;
//      text-align: left;
//      padding: 10px
//    }
//
//    .time {
//      font-size: 13px;
//      color: #999;
//    }
//
//    p {
//      width: 70%;
//      font-size: 12px;
//      color: #4d5156;
//      padding: 15px
//    }
//  }
//}
</style>
