<template>
  <div class="header-menu">
    <el-row>
      <el-col :span="10" class="logo-wrap">
        <img
          class="logo-img"
          src="~@/assets/img/global/logo.png"
          alt="恒大宝"
        />
        <span class="location"
          >深圳<img
            src="~@/assets/img/home/icon_basic_location.png"
            alt="location"
        /></span>
      </el-col>
      <el-col :span="12">
        <ul class="home-menu">
          <li :class="activeIndex === 0 ? 'is-active' : ''">首页</li>
          <li :class="activeIndex === 1 ? 'is-active' : ''" disabled>
            全部楼盘
          </li>
          <li :class="activeIndex === 2 ? 'is-active' : ''" class="qrcode-wrap">
            下载APP
            <span class="qrcode-pop">
              <img src="~@/assets/img/home/hdb_qrcode.png" alt="恒大宝二维码" />
              <div class="qrcode-pop-text">
                <p>扫码或在应用市场</p>
                <div>下载<span class="light">恒大宝APP</span></div>
              </div>
            </span>
          </li>
          <li :class="activeIndex === 3 ? 'is-active' : ''">会员专区</li>
          <li :class="activeIndex === 4 ? 'is-active' : ''">意向登记</li>
          <li :class="activeIndex === 5 ? 'is-active' : ''">登录/注册</li>
        </ul>
      </el-col>
      <el-col :span="24" class="menu-border"></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  layout: 'index',
  components: {},
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    handleSelect() {
      console.log(1)
    }
  }
}
</script>
<style lang="less" scoped>
// 顶部菜单栏-首页
.header-menu {
  width: 100%;
  height: 98px;
  background: rgba(255, 255, 255, 1);

  font-size: 22px;

  line-height: 98px;
  .logo-wrap {
    text-align: center;
    .logo-img {
      vertical-align: middle;
    }
    .location {
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #d1d1d1;
      margin-left: 25px;
      padding: 3px 13px;
      vertical-align: bottom;
    }
  }

  .home-menu {
    border: none;
    display: flex;
    justify-content: space-between;
    li {
      cursor: pointer;
      font-size: 22px;
      height: 98px;
      line-height: 98px;
      color: #44444f;
      &.is-active {
        color: #e62e37;
        border-bottom: 2px solid #e62e37;
      }
      &:hover {
        color: #f1797f;
      }
    }
  }
  .qrcode-wrap {
    position: relative;
    .qrcode-pop {
      display: none;
      position: absolute;
      top: 78px;
      left: calc(50% - 120px);
      .qrcode-pop-text {
        position: absolute;
        font-size: 19px;
        bottom: 70px;
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
    &:hover .qrcode-pop {
      display: block;
    }
  }
  .menu-border {
    height: 4px;
    background: linear-gradient(
      220deg,
      rgba(24, 24, 120, 1) 0%,
      rgba(230, 46, 55, 1) 60%
    );
  }
}
</style>
