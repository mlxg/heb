<template>
  <div class="buildDetail-container">
    <section class="build-detail">
      <nav>恒房通 &#62; 深圳 &#62; <span class="cur">恒大城</span></nav>
      <header>
        恒大城
        <em>热销楼盘</em>
      </header>
    </section>

    <div class="house-tab">
      <section>
        <ul>
          <li>楼盘主页</li>
          <li>楼盘动态</li>
          <li>户型介绍</li>
          <li>楼盘相册</li>
          <li>详细信息</li>
        </ul>
        <span>
          <img alt src="@/assets/img/house/icon_phone.png" />
          售楼热线：0755-88888888
        </span>
      </section>
    </div>

    <section class="build-detail house-show">
      <!--      侧边-->
      <HouseAside></HouseAside>
      <div class="house-main">
        <div class="house-warp">
          <!--    楼盘动态-->
          <HouseNews></HouseNews>
          <!--    楼盘相册-->
          <HouseImgs></HouseImgs>
          <!--    户型介绍-->
          <HouseType></HouseType>
          <!--    详细信息-->
          <HouseInfo></HouseInfo>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HouseNews from '@/pages/house/components/houseNews'
import HouseAside from '@/pages/house/components/houseAside'
import HouseImgs from '@/pages/house/components/houseImgs'
import HouseInfo from '@/pages/house/components/houseInfo'
import HouseType from '@/pages/house/components/houseType'

export default {
  components: {
    HouseAside,
    HouseNews,
    HouseType,
    HouseInfo,
    HouseImgs
  },

  data() {
    return {}
  },
  computed: {},
  mounted() {}
}
</script>

<style scoped lang="less">
@import 'assets/css/mixin';
@import 'assets/css/global';

.buildDetail-container {
  padding-top: 18px;
}
nav {
  .sc(16px, #a2a0b4);
  .cur {
    .sc(16px, #44444f);
  }
}

.build-detail {
  width: 1200px;
  margin: 0 auto;

  header {
    position: relative;
    .sc(40px, #44444f);
    margin: 15px 0 20px;

    em {
      margin-left: 10px;
      text-align: center;
      .sc(14px, #fff);
      line-height: 24px;
      .wh(72px, 24px);
      display: inline-block;
      background: linear-gradient(
        315deg,
        rgba(223, 8, 18, 1) 0%,
        rgba(255, 130, 78, 1) 100%
      );
      border-radius: 1px;
    }

    span {
      position: absolute;
      right: 0;
      bottom: 0;
      .sc(24px, #44444f);

      b {
        color: #0082f8;
        font-weight: bold;
      }
    }
  }
}

.house-tab {
  margin-top: 12px;
  height: 58px;
  line-height: 58px;
  background: #fbfbfb;
  .sc(16px, @globalBlack);

  section {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    ul {
      li {
        height: 58px;
        display: inline-block;
        padding: 0 10px;
        margin: 0 18px;

        &:hover {
          cursor: pointer;
          border-bottom: 4px solid #e62e37;
        }
      }
    }

    span {
      .pbr();

      img {
        vertical-align: -3px;
      }
    }
  }
}

.house-show {
  position: relative;
  margin-bottom: 50px;
  min-height: 500px;
}

.house-main {
  header {
    .sc(28px, @globalBlack);
    margin: 0 0 24px 0;
    padding-top: 50px;
  }
  .house-type {
    ul {
      li {
        vertical-align: top;
        display: inline-block;
        width: 203px;
        margin-right: 50px;
        &:last-child {
          margin-right: 0;
        }
        img {
          display: inline-block;
          background: @globalNull;
          .wh(203px, 152px);
        }
        span {
          color: @globalBlack;
          padding-bottom: 8px;
          display: block;
          .fs(16px);
          &.house-type-title {
            margin-top: 24px;
            .fs(20px);
          }
          &.prev {
            text-decoration: line-through;
            .sc(14px, #a8a9ae);
          }
          &.sale {
            em {
              color: #e62e37;
            }
          }
        }
      }
    }
  }

  .house-source {
    header {
      span {
        a {
          .sc(14px, @globalGrey);
          line-height: 50px;
        }
      }
    }

    nav {
      .sc(14px, @globalBlack);
      margin-bottom: 24px;
    }
  }
}
</style>
