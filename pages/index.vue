<template>
  <div class="container">
    <div class="dowload-qrcode">
      <span class="dowload-title">下载恒大宝app</span>
      <div class="qrcode-pop">
        <img src="~@/assets/img/home/hdb_qrcode_left.png" alt="恒大宝二维码" />
        <div class="qrcode-pop-text">
          <p>扫码或在应用市场</p>
          <div>下载<span class="light">恒大宝APP</span></div>
        </div>
      </div>
    </div>
    <el-backtop target=".container"></el-backtop>
    <home-navbar></home-navbar>
    <home-index></home-index>
  </div>
</template>

<script>
import api from '~/apis'
import HomeNavbar from '~/components/home/navbar.vue'
import HomeIndex from '~/components/home/index.vue'

export default {
  layout: 'index',
  components: { HomeNavbar, HomeIndex },
  async asyncData() {
    const { data } = await api.apiGetPopularBuildings({ cityName: '深圳' })
    return {
      buildingList: data
    }
  },
  async mounted() {
    // const { data } = await api.apiGetPopularBuildings({ cityName: '深圳' })
    // this.buildingList = data
  },
  head() {
    return {
      title: '恒大宝-首页'
    }
  }
}
</script>

<style lang="less" scoped>
.dowload-qrcode {
  position: fixed;
  top: calc(50% - 150px);
  left: 0;
  z-index: 100;
  .dowload-title {
    display: inline-block;
    width: 20px;
    font-size: 19px;
    font-weight: bold;
    color: #44444f;
    word-break: break-all;
    padding: 16px;
    background: rgba(250, 250, 250, 1);
    border: 1px solid rgba(232, 232, 232, 1);
    margin-right: -18px;
    vertical-align: top;
    margin-top: 9px;
  }
  .qrcode-pop {
    display: inline-block;
  }
  .qrcode-pop-text {
    position: absolute;
    font-size: 19px;
    bottom: 25px;
    width: 100%;
    color: #44444f;
    text-align: center;
    line-height: 24px;
    font-weight: 500;
    .light {
      color: #e62e37;
    }
  }
}
</style>
