<template>
  <div>
    <header class="home-header">
      <nav-bar/>
    </header>
    <div class="intro">
      <h3 style="font-weight: bold; font-size: 30px;">Selected Publications:</h3>
      <span style="font-size: 23px; padding-bottom: 15px;">Publication by topic is available
      <router-link style="color: #3895bf" to="/publication/topic">here</router-link>
      and Publication by date is available
      <router-link style="color: #3895bf" to="/publication/date">here</router-link>.</span>
    </div>
    <div class="tabs">
      <el-tabs type="border-card" @tab-click="handleClick" v-model="activeName">
        <el-tab-pane label="All" name="All">
          <van-list v-if="activeName === 'All'">
            <van-cell v-for="(paper,index) in paperList" :key="paper">  <strong>{{index + 1}}. {{ paper.title }}.
              <a :href="'http://123.57.255.174:8080' + paper.url" style="color: #3895bf">[PDF]</a>
            </strong><br>&#12288;&#12288;{{paper.author}}, <strong>{{ paper.publication }}</strong>,
              {{paper.year}}, <strong>{{paper.note}}</strong>
            </van-cell>
          </van-list>
        </el-tab-pane>
        <el-tab-pane v-for="topic in topicList" :label="topic" v-bind:key="topic" :name="topic">
          <van-list v-if="activeName === topic">
            <van-cell v-for="(paper,index) in paperList" :key="paper">  <strong>{{index + 1}}. {{ paper.title }}.
              <a :href="'http://123.57.255.174:8080' + paper.url" style="color: #3895bf">[PDF]</a>
            </strong><br>&#12288;&#12288;{{paper.author}}, <strong>{{ paper.publication }}</strong>,
              {{paper.year}}, <strong>{{paper.note}}</strong>
            </van-cell>
          </van-list>
        </el-tab-pane>
      </el-tabs>
    </div>
    <footer-info/>
  </div>
</template>

<script>
import {Toast} from 'vant'
import navBar from "@/components/NavBar";
import footerInfo from "@/components/FooterInfo";
import {getAllPapers} from '@/service/publication'

export default {
  name: "publicationTopic",
  components: {
    navBar,
    footerInfo,
  },
  data() {
    return {
      activeName: 'All',
      paperList: [],
      source: [],
      topicList: [],
      // paperList: [
      //   {
      //     date: '2016-03-03',
      //     topic: 'Big Data',
      //     year: 2016,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'IEEE',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2019-03-03',
      //     topic: 'IoT',
      //     year: 2019,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'ICMP',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2019-03-04',
      //     topic: 'Big Data',
      //     year: 2019,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'AAAI',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2019-04-03',
      //     topic: 'IoT',
      //     year: 2019,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'IEEE',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //
      //   {
      //     date: '2020-03-04',
      //     topic: 'Big Data',
      //     year: 2020,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'AAAI',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2020-09-04',
      //     topic: 'Whatever',
      //     year: 2020,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'ICMP',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2021-03-03',
      //     topic: 'IoT',
      //     year: 2021,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'KDD',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2022-03-03',
      //     topic: 'Whatever',
      //     year: 2022,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'ICMP',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      // ],
      // source: [
      //   {
      //     date: '2016-03-03',
      //     topic: 'Big Data',
      //     year: 2016,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'IEEE',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2019-03-03',
      //     topic: 'IoT',
      //     year: 2019,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'ICMP',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2019-03-04',
      //     topic: 'Big Data',
      //     year: 2019,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'AAAI',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2019-04-03',
      //     topic: 'IoT',
      //     year: 2019,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'IEEE',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //
      //   {
      //     date: '2020-03-04',
      //     topic: 'Big Data',
      //     year: 2020,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'AAAI',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2020-09-04',
      //     topic: 'Whatever',
      //     year: 2020,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'ICMP',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2021-03-03',
      //     topic: 'IoT',
      //     year: 2021,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'KDD',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      //   {
      //     date: '2022-03-03',
      //     topic: 'Whatever',
      //     year: 2022,
      //     title: 'Hierarchical Reinforcement Learning for Scarce Medical Resource Allocation with Imperfect Information',
      //     publication: 'ICMP',
      //     author: 'Wang,Li,Zhang',
      //     url: 'https://dl.acm.org/doi/pdf/10.1145/3447548.3467181'
      //   },
      // ],
      // topicList: ["IoT", "Big Data", "Whatever"],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      Toast.loading({message: '加载中...', forbidClick: true});
      const {data: list} = await getAllPapers()
      let temp = list.publication_list
      console.log(temp)
      temp.sort(this.cmp("date"));
      this.source = temp;
      this.paperList = temp
      this.yearList = this.getYearList(temp);
      this.topicList = this.getTopicList(temp);
      Toast.clear()
    },
    getTopicList(src) {
      let topics = new Set();
      for (let i = 0; i < src.length; i++) {
        let topic = src[i]['topic'];
        topics.add(topic);
      }
      return Array.from(topics)
    },
    filterPaper(topic) {
      let temp = [];
      for (let i = 0; i < this.source.length; i++) {
        if (this.source[i].topic === topic) {
          temp.push(this.source[i])
        }
      }
      this.paperList = temp
    },
    handleClick(tab) {
      let topic = tab.label
      if (topic === 'All') {
        this.paperList = this.source;
        return
      }
      this.filterPaper(topic)
      this.activeName = tab.label
    },
    getYearList(src) {
      let years = new Set();
      for (let i = 0; i < src.length; i++) {
        let year = src[i]["date"].split("-")[0];
        years.add(year);
        this.source[i]['year'] = year
      }
      return Array.from(years)
    },
    cmp(p) {
      return function (a, b) {
        let x = parseInt(a[p].replace('-', ''));
        let y = parseInt(b[p].replace('-', ''));
        return y - x
      }
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

.intro {
  .fj(flex-start);
  width: 72%;
  padding-left: 15%;
  padding-top: 40px;
  padding-bottom: 25px;
  color: #4d5156;
  flex-direction: column;
  text-align: left;
}

.tabs {
  .fj(flex-start);
  width: 90%;
  margin-left: 5%;
  margin-bottom: 30px;

  color: #4d5156;
  background-color: #fefefe;

  flex-direction: column;
  text-align: left;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
