<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <div class="nav-list-logo"></div>
      <div class="nav-list-logo"><img src="../assets/logo.png"></div>
      <div class="nav-list-logo"></div>
      <router-link tag="li" class="nav-list-item active" to="home">
        <span>Home</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="research">
        <span>Research</span>
      </router-link>

      <el-dropdown :hide-on-click="false" class="nav-list-item">
            <span class="el-dropdown-link">Publications <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
        <el-dropdown-menu slot="dropdown" class="mymenu">
          <el-dropdown-item class="el-menu-item">
            <router-link tag="li" to="publications/direction"><span>By Topic</span></router-link>
          </el-dropdown-item>
          <el-dropdown-item class="el-menu-item">
            <router-link tag="li" to="publications/date"><span>By Date</span></router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <router-link tag="li" class="nav-list-item" to="people">
        <span>People</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="applications">
        <span>Applications</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="news">
        <span>News</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="about">
        <span>About</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="resource">
        <span>Resource</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      dropDownShow: false, // 控制下拉菜单显示
      leftMenuList: [ // 左侧菜单内容
        {activeName: 'Home', titleName: '主页', activeUrl: '/index'},
        {activeName: 'Infinity', titleName: 'Infinity', activeUrl: '/infinity'},
        {activeName: 'About', titleName: '关于', activeUrl: '/about'}
      ],
      rightMenuList: [ // 右侧菜单内容
        {activeName: 'Support', titleName: '赞助', activeUrl: '/support'}
      ],
      activeName: '' // 导航栏激活名称
    }
  },
  methods: {
    toActiveMenuItem(item) { // 激活导航菜单
      this.activeName = item.titleName
      this.$router.push(item.activeUrl)
      this.dropDownShow = false
    }
  }
}

</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.el-dropdown-link {
  cursor: pointer;
  color: #000;

  .el-icon-arrow-down {
    width: 4px;
    height: 4px;
    font-size: 4px;
  }

}

//设置了行高和字体大小、高度颜色
.el-menu-item {
  font-size: 12px;
  height: 25px;
  line-height: 25px;
  color: #000;
  transition: none !important;
}

//设置选中el-menu-item时的样式
.el-menu-item:hover {
  color: $theme-color !important;
  background-color: #fff !important;
}

.nav-bar {
  position: fixed;
  .wh(74%, 40px);
  z-index: 1000;
  transform: translateZ(0);
  margin: 10px 0;
  padding: 5px 0;
  left: 100px;

  .nav-list {
    width: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    height: 40px;

    .nav-list-logo {
      position: relative;
      display: flex;
      flex: 1;
      flex-direction: column;

      img {
        max-width: 50%;
        max-height: 50%;
        display: block;
        margin: auto;
      }
    }

    .nav-list-item {
      position: relative;
      border-bottom: transparent;
      transition: 0.4s;
      font-size: 12px;
      font-weight: bold;

      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #000;
      height: 40px;

      &.router-link-active {
        color: $theme-color;
      }

      span {
        font-size: 12px;
      }
    }

    .nav-list-item:before {
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
      width: 0;
      height: 100%;
      border-bottom: 3px solid $theme-color;
      transition: 0.2s all linear;
    }

    .nav-list-item:hover::before {
      width: 100%;
      top: 0;
      left: 0;
      transition-delay: 0.1s;
      border-bottom-color: $theme-color;
      z-index: -1;
    }

    .nav-list-item:hover ~ li::before {
      left: 0;
    }

    .nav-list-item:active {
      color: #fff;
    }
  }

}
</style>
