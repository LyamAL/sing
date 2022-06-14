<template>
  <div class="nav-bar">
    <div class="nav-list">
      <div class="logo"><img class="logoimg" src="../assets/logo.png" alt=""></div>
      <div class="navbar-list" v-if="Object.keys(topNavItems).length!==0">
        <div v-for="(menu,id) in topNavItems" :key="id" class="nav-list-item">
          <div v-if="menu.hasChild">
            <el-dropdown :hide-on-click="false">
                       <span class="el-dropdown-link">{{ menu.title }}
                         <i class="el-icon-arrow-down el-icon--right"></i>
                       </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="el-menu-item" v-for="child in menu.children" v-bind:key="child">
                  <router-link tag="li" :to="child.path"><span>{{ child.title }}</span>
                  </router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div v-else>
            <router-link tag="li" :to="menu.path"><span>{{ menu.title }}</span></router-link>
          </div>
        </div>
      </div>
      <el-menu class="side-menu" v-else :collapse="false">
        <el-submenu>
          <template slot="title">
            <i class="el-icon-more"></i>
          </template>
          <el-collapse>
            <div v-for="menu in rightNavItems" v-bind:key="menu" class="collapse_item">
              <el-collapse-item v-if="menu.hasChild" :title="menu.title" :name="menu.index">
                <div v-for="child in menu.children" v-bind:key="child">
                  <router-link tag="li" :to="child.path"><span>{{ child.title }}</span>
                  </router-link>
                </div>
              </el-collapse-item>
              <router-link v-else tag="li" :to="menu.path"><span>{{ menu.title }}</span></router-link>
            </div>
          </el-collapse>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  activeIndex: '1',
  data() {
    return {
      screenWidth: document.body.clientWidth, //存储窗口大小,保存初始打开页面时的宽度
      navItems: [
        {
          title: "Home", path: "/home",
          hasChild: false,
        },
        {
          title: "Research", path: "/research",
          hasChild: false,
        },
        {
          title: "Publication", path: "/publication",
          hasChild: true,
          children: [
            {
              title: "By Topic",
              path: "/publication/topic"
            },
            {
              title: "By Date",
              path: "/publication/date"
            }
          ]
        },
        {
          title: "People", path: "/people",
          hasChild: false,
        },
        {
          title: "Application", path: "/application",
          hasChild: false,

        },
        {
          title: "About", path: "/about",
          hasChild: false,
        },
        {
          title: "Resource", path: "/resource",
          hasChild: false,
        },
      ],
    }
  },

  mounted() {
    //将最新的可用屏幕宽度赋给screenWidth
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth
    }
  },
  watch: {
    screenWidth(newValue) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = newValue;
        this.timer = true;
        setTimeout(() => {
          console.log(this.screenWidth);
          this.timer = false;
        }, 400);
      }
    }
  },
  computed: {
    topNavItems: function () {
      return this.screenWidth >= 600 ? this.navItems : {};
    },
    rightNavItems: function () {
      return this.screenWidth < 600 ? this.navItems : {};
    },
  },

}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.router-link-active {
  color: @theme-color;
}

.el-dropdown-link {
  cursor: pointer;
  color: #000;

  .el-icon-arrow-down {
    width: 4px;
    height: 4px;
    font-size: 4px;
  }

  .el-dropdown-link:hover {
    color: @theme-color;
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
  color: @theme-color !important;
  background-color: #fff !important;
}


/deep/ .el-collapse-item__header {
  font-weight: bold;
  font-size: 12px;
  border-bottom: transparent;
}

/deep/ .el-collapse {
  width: 250px;
}

/deep/ .el-collapse-item__header:hover {
  color: @theme-color;
}

/deep/ .el-collapse-item__content {
  padding-bottom: 5px;

  span {
    font-size: 11px;
    margin-bottom: 5px;
    text-align: left;
  }
}

.collapse_item {
  margin: 4px 20px;
  text-align: left;
  vertical-align: center;
  color: #303133;
  background-color: white;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  border-bottom: transparent;

}

.collapse_item:hover {
  color: @theme-color !important;
}

.nav-bar {
  position: relative;
  background-color: #fff;
  .wh(100%, 40px);
  z-index: 1000;
  transform: translateZ(0);

  .nav-list {
    margin: 0 15%;
    .fj(space-between);
    flex-direction: row;
    padding: 0;

    .logo {
      display: flex;
      .wh(40px, 40px);
      flex-direction: column;

      .logoimg {
        max-width: 60%;
        max-height: 60%;
        display: block;
        margin: auto;
      }
    }

    .navbar-list {
      position: relative;
      border-bottom: transparent;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;

      .nav-list-item {
        position: relative;
        flex-shrink: 0;
        list-style: none;

        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: linear;

        padding: 0 10px;
        border-bottom: transparent;
        transition: 0.4s;
        font-size: 11px;
        font-weight: bold;
        text-align: center;
        color: #000;


        span {
          font-size: 11px;
        }
      }

      .nav-list-item:before {
        content: "";
        position: absolute;
        top: 0;
        left: 87%;
        width: 0;
        height: 100%;
        border-bottom: 3px solid @theme-color;
        transition: 0.2s all linear;
      }

      .nav-list-item:hover {
        color: @theme-color;
      }

      .nav-list-item:hover::before {
        width: 100%;
        top: 0;
        left: 0;
        transition-delay: 0.1s;
        border-bottom-color: @theme-color;
        z-index: -1;
      }

      .nav-list-item:hover ~ li::before {
        left: 0;
      }

      .nav-list-item:active {
        color: @theme-color;
      }
    }

    .side-menu {
      right: 0;
      position: absolute;
    }

    .side-menu /deep/ .el-submenu__title {
      display: flex;
      height: 40px;
      align-items: center;
      align-content: center;
      justify-content: center;
    }
  }

}
</style>
