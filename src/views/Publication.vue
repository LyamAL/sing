<template>
  <div>
    <header class="home-header">
      <nav-bar/>
    </header>
  </div>
</template>

<script>
import {Toast} from 'vant'
import navBar from "@/components/NavBar";

export default {
  data() {
    return {
      detail: {}
    }
  },
  components: {
    navBar,
  },

  computed: {}
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
</style>
