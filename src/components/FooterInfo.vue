<template>
  <div class="footer">
    <div class="info">
      <div style="font-size: 25px; padding-bottom:15px; font-weight: bold">SING</div>
      <div class="row"><i class="el-icon-office-building"></i>
        <span>
          东南大学九龙湖校区计算机科学与工程学院
        </span></div>
      <div class="row">
        <van-icon name="envelop-o"/>
        tianhe@seu.edu.cn, shuaiwang@seu.edu.cn
      </div>
      <div class="row">版权所有@ 东南大学智慧物联网研究中心(2020)</div>
    </div>
    <img src="../assets/logo_seu.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'FooterInfo',
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  transform: translateZ(0);

  .wh(100%, 150px);
  .fj(space-between);
  background: #4c733d;
  color: #F8F8F8;

  align-items: center;
  align-content: center;

  .info {
    margin-left: 18%;

  }

  .row {
    margin-bottom: 20px;
    font-size: 12px;

    &:last-child {
      margin-bottom: 0;
      margin-top: 13px;
      font-weight: bold;
    }
  }

  img {
    display: block;
    margin: auto;
  }
}

</style>
