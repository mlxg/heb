<template>
  <div class="buildDetail-container">
    <section class="build-detail">
      <nav>恒房通 &#62; 深圳 &#62; <span class="cur">恒大城</span></nav>
      <header>
        恒大城
        <em>热销楼盘</em>
        <span>
          售楼电话：
          <b>0755-88888888</b>
        </span>
      </header>
      <div class="build-preview">
        <div class="prev-view">
          <el-carousel
            :interval="5000"
            arrow="always"
            :height="imgHeight"
            indicator-position="none"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>
                {{ item }}
              </h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="prev-list">
          <ul>
            <li>
              <a href>
                <img src alt />
                <span>视频(1)</span>
              </a>
            </li>
            <li>
              <a href>
                <img src alt />
                <span>视频(1)</span>
              </a>
            </li>
            <li>
              <a href>
                <img src alt />
                <span>视频(1)</span>
              </a>
            </li>
            <li>
              <a href>
                <img src alt />
                <span>视频(1)</span>
              </a>
            </li>
            <li>
              <a href>
                <img src alt />
                <span>视频(1)</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="build-introduce">
          <div class="intro-price">
            <b>38000</b>
            <em>元/m²</em> 参考均价
            <span>
              <img src="@/assets/img/house/icon_share.png" alt />分享
            </span>
          </div>
          <div class="intro-type">
            <ul>
              <li>中式园林</li>
              <li>中式园林</li>
              <li>中式园林</li>
            </ul>
          </div>
          <div class="intro-info">
            <ul>
              <li><span>产品类型</span>住宅、公寓、别墅</li>
              <li><span>楼盘地址</span>深圳市龙岗区坪山中心恒大城</li>
              <li>
                <span>楼盘户型</span>3室2厅、4室2厅、5室2厅
                <a href="/">查看全部户型 &#62;</a>
              </li>
            </ul>
          </div>
          <div class="intro-more">
            <a href="/">查看更多楼盘详情 &#62;</a>
          </div>
          <div class="hr"></div>
          <div class="intro-code">
            <div>
              <img src alt />
              扫码在线咨询
            </div>
            <div>
              <img src alt />
              关注楼盘公众号
            </div>
          </div>
          <div class="intro-btn">
            <span class="sub">
              <a href>网上认购</a>
            </span>
            <span class="recommend">
              <a href>立即推荐</a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <div id="boxFixed" class="house-tab" :class="{ 'is-fixed': isFixed }">
      <section>
        <ul>
          <li
            v-for="item in tabList"
            :key="item.id"
            :class="active == item.id ? 'cur' : ''"
            @click="handelSelectTab(item.id)"
          >
            {{ item.name }}
          </li>
        </ul>
        <span v-if="!isFixed">
          <img alt src="@/assets/img/house/icon_phone.png" />
          售楼热线：0755-88888888
        </span>
        <span v-if="isFixed">
          <a href="">网上认购</a><a href="">立即推荐</a
          ><a
            ><img src="@/assets/img/house/icon_tel.png" alt="" /><span
              >咨询热线 <br />
              0755-88888888</span
            ></a
          >
        </span>
      </section>
    </div>
    <section class="build-detail house-show">
      <HouseAside></HouseAside>
      <div class="house-main">
        <div class="house-warp">
          <div class="house-plane tab-content">
            <header>总规划平面示意图</header>
            <div>
              <img src alt />
            </div>
          </div>
          <div class="house-type tab-content">
            <header>户型介绍</header>
            <ul>
              <li>
                <a href>
                  <img src alt />
                  <span class="house-type-title">户型：五室两厅两卫</span>
                  <span>建筑面积：156㎡</span>
                  <span>精致四房 居家典雅</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src alt />
                  <span class="house-type-title">户型：五室两厅两卫</span>
                  <span>建筑面积：156㎡</span>
                  <span>精致四房 居家典雅</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src alt />
                  <span class="house-type-title">户型：五室两厅两卫</span>
                  <span>建筑面积：156㎡</span>
                  <span>精致四房 居家典雅</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="house-type house-source tab-content">
            <header>
              特价房源 <span><a href="">查看更多 &#62;</a></span>
            </header>
            <nav>
              本周推出10套一口价特惠房源，90-120m²湖景美宅，总价90万起，最高优惠21万元，限时优惠欲购从速！
            </nav>
            <ul>
              <li>
                <a href>
                  <img src alt />
                  <span class="house-type-title">2-1单元-2栋2201室</span>
                  <span>三室两厅两卫：101m²</span>
                  <span class="prev">精致四房 居家典雅</span>
                  <span class="sale">
                    特价：
                    <em>133.32万</em>
                  </span>
                </a>
              </li>
              <li>
                <a href>
                  <img src alt />
                  <span class="house-type-title">2-1单元-2栋2201室</span>
                  <span>三室两厅两卫：101m²</span>
                  <span class="prev">精致四房 居家典雅</span>
                  <span class="sale">
                    特价：
                    <em>133.32万</em>
                  </span>
                </a>
              </li>
              <li>
                <a href>
                  <img src alt />
                  <span class="house-type-title">2-1单元-2栋2201室</span>
                  <span>三室两厅两卫：101m²</span>
                  <span class="prev">精致四房 居家典雅</span>
                  <span class="sale">
                    特价：
                    <em>133.32万</em>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="house-news tab-content">
            <header>楼盘动态</header>
            <HouseNews></HouseNews>
          </div>
          <div class="house-location tab-content">
            <header>楼盘位置</header>
            <div class="map">
              <Map :map-data="mapData"></Map>
            </div>
          </div>
          <div class="house-around tab-content">
            <header>周边配套</header>
            <ul>
              <li>
                <span>教育资源</span>
                汕尾恒大悦珑湾（御景湾组团）项目自带18班幼儿园，周边有东涌中心小学、东涌小学、品清湖小学，石洲中学、田家炳中学等，从小学到幼儿园一应俱全。
              </li>
              <li>
                <span>周边配套</span>
                汕尾恒大悦珑湾（御景湾组团）项目自带18班幼儿园，周边有东涌中心小学、东涌小学、品清湖小学，石洲中学、田家炳中学等，从小学到幼儿园一应俱全。
              </li>
              <li>
                <span>医疗资源</span>
                汕尾恒大悦珑湾（御景湾组团）项目自带18班幼儿园，周边有东涌中心小学、东涌小学、品清湖小学，石洲中学、田家炳中学等，从小学到幼儿园一应俱全。
              </li>
              <li>
                <span>商业资源</span>
                汕尾恒大悦珑湾（御景湾组团）项目自带18班幼儿园，周边有东涌中心小学、东涌小学、品清湖小学，石洲中学、田家炳中学等，从小学到幼儿园一应俱全。
              </li>
            </ul>
          </div>
          <div class="adviser-list tab-content">
            <header>优选顾问</header>
            <ul>
              <li>
                <img src alt />
                <span>王道到</span>
                <em>向TA咨询</em>
              </li>
              <li>
                <img src alt />
                <span>王道到</span>
                <em>向TA咨询</em>
              </li>
              <li>
                <img src alt />
                <span>王道到</span>
                <em>向TA咨询</em>
              </li>
              <li>
                <img src alt />
                <span>王道到</span>
                <em>向TA咨询</em>
              </li>
            </ul>
          </div>
        </div>
        <div class="house-relevant tab-content">
          <header>猜你喜欢</header>
          <ul>
            <li>
              <a href>
                <img src alt />
                <article>北京恒大山水城</article>
                <span>中式园林</span>
                <span>核心商圈</span>
                <span>空港新城</span>
                <footer>
                  北京 220-230㎡
                  <span class="price"> <em>62101</em>元/m² </span>
                </footer>
              </a>
            </li>
            <li>
              <a href>
                <img src alt />
                <article>北京恒大山水城</article>
                <span>中式园林</span>
                <span>核心商圈</span>
                <span>空港新城</span>
                <footer>
                  北京 220-230㎡
                  <span class="price"> <em>62101</em>元/m² </span>
                </footer>
              </a>
            </li>
            <li>
              <a href>
                <img src alt />
                <article>北京恒大山水城</article>
                <span>中式园林</span>
                <span>核心商圈</span>
                <span>空港新城</span>
                <footer>
                  北京 220-230㎡
                  <span class="price"> <em>62101</em>元/m² </span>
                </footer>
              </a>
            </li>
            <li>
              <a href>
                <img src alt />
                <article>北京恒大山水城</article>
                <span>中式园林</span>
                <span>核心商圈</span>
                <span>空港新城</span>
                <footer>
                  北京 220-230㎡
                  <span class="price"> <em>62101</em>元/m² </span>
                </footer>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="find-more">
        <a href>查看更多楼盘</a>
      </div>
    </section>
  </div>
</template>
<script>
import HouseAside from '@/pages/house/components/houseAside'
import HouseNews from '@/pages/house/components/houseNews'
import Map from '@/components/common/map'

export default {
  components: {
    HouseAside,
    HouseNews,
    Map
  },
  props: {
    imgHeight: {
      type: String,
      default: '358px'
    }
  },
  data() {
    return {
      // tab标签联动
      isFixed: false,
      offsetTop: 0,
      active: '1',
      arrDom: '',
      tabList: [
        {
          id: 1,
          name: '总规图'
        },
        {
          id: 2,
          name: '户型介绍'
        },
        {
          id: 3,
          name: '特价房源'
        },
        {
          id: 4,
          name: '楼盘动态'
        },
        {
          id: 5,
          name: '楼盘位置'
        },
        {
          id: 6,
          name: '周边配套'
        },
        {
          id: 7,
          name: '优选顾问'
        },
        {
          id: 8,
          name: '猜你喜欢'
        }
      ],

      mapData: {
        longitude: 113.845282,
        latitude: 22.613041,
        title: '1',
        description: '1'
      }
    }
  },
  mounted() {
    this.arrDom = document.getElementsByClassName('tab-content')
    window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(() => {
      this.offsetTop = document.querySelector('#boxFixed').offsetTop
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        window.documentElement.scrollTop ||
        document.body.scrollTop

      this.isFixed = scrollTop > this.offsetTop

      for (let i = 0; i < this.arrDom.length; i++) {
        if (this.arrDom[this.arrDom.length - 1].offsetTop - scrollTop > 10) {
          if (
            this.arrDom[i].offsetTop - scrollTop <= 10 &&
            this.arrDom[i + 1].offsetTop - scrollTop > 10
          ) {
            this.active = i
          }
        } else {
          this.active = this.arrDom.length
        }
      }
    },
    handelSelectTab(id) {
      window.scroll(0, this.arrDom[id - 1].offsetTop + 700)
    }
  }
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
  margin: 0 auto 50px;

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

  .build-preview {
    position: relative;
    height: 464px;
    .prev-view {
      background: #f1f1f1;
      .wh(580px, 358px);
      margin-bottom: 15px;
    }

    .prev-list {
      ul {
        li {
          position: relative;
          .wh(104px, 90px);
          display: inline-block;
          background: #f1f1f1;
          margin-right: 12px;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            span {
              opacity: 1;
              background: rgba(230, 46, 55, 1);
            }
          }

          span {
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: center;
            line-height: 30px;
            .wh(104px, 29px);
            background: rgba(0, 0, 0, 1);
            opacity: 0.5;
            .sc(14px, #fff);
          }
        }
      }
    }
  }

  .build-introduce {
    position: absolute;
    right: 0;
    top: 0;
    .fs(16px);
    vertical-align: bottom;

    .wh(596px, 464px);
    box-shadow: 0 4px 22px -4px rgba(227, 227, 227, 1);
    .borderRadius(8px);

    .intro-price {
      position: relative;
      height: 40px;
      padding: 18px 40px 0 40px;
      margin-bottom: 18px;

      b {
        .sc(36px, #e62e37);
      }

      em {
        margin-right: 10px;
        color: #e62e37;
      }

      span {
        .pbr();
        right: 40px;
        cursor: pointer;

        img {
          vertical-align: -3px;
          margin-right: 5px;
        }
      }
    }

    .intro-type {
      padding: 0 40px;

      ul {
        li {
          display: inline-block;
          .sc(12px, #857a6b);
          line-height: 24px;
          text-align: center;
          .wh(70px, 24px);
          background: rgba(133, 122, 107, 0.08);
          margin-right: 5px;
          border-radius: 2px;
        }
      }
    }

    .intro-info {
      padding: 18px 40px 0 40px;
      .sc(14px, @globalBlack);
      position: relative;

      ul {
        li {
          span {
            color: @globalGrey;
            width: 70px;
            display: inline-block;
            padding-bottom: 12px;
          }
        }
      }

      a {
        margin-left: 20px;
        color: @globalGrey;
      }
    }

    .intro-more {
      padding: 0 40px 12px 40px;

      a {
        .sc(14px, #2660b1);
      }
    }

    .hr {
      margin: 0 40px;
      height: 1px;
      background: rgba(216, 216, 216, 1);
    }

    .intro-code {
      padding: 18px 40px 0 40px;

      div {
        .sc(14px, @globalBlack);
        display: inline-block;
        margin-right: 10px;
        .wh(100px, 100px);
        text-align: center;

        img {
          margin: 0 auto;
          display: block;
          .wh(80px, 80px);
          background: @globalNull;
          margin-bottom: 6px;
        }
      }
    }

    .intro-btn {
      span {
        display: inline-block;
        text-align: center;
        line-height: 54px;

        .wh(216px, 54px);
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 4px 22px -4px rgba(227, 227, 227, 1);
        border-radius: 8px;
        margin-right: 28px;

        &:last-child {
          margin-right: 0;
        }

        a {
          color: #fff;
        }

        cursor: pointer;
      }

      padding: 18px 40px 0 40px;

      .sub {
        background: #e62e37;
      }

      .recommend {
        background: #ff9131;
      }
    }
  }
}

.house-tab {
  width: 100%;
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
        margin: 0 5px;
        cursor: pointer;
        &.cur {
          border-bottom: 4px solid #e62e37;
        }
      }
    }

    span {
      .pbr();

      img {
        vertical-align: -5px;
      }
      a {
        .fs(14px);
        display: inline-block;
        text-align: center;
        width: 158px;

        color: #ffffff;
        &:first-child {
          background: #e62e37;
        }
        &:nth-child(2) {
          background: #ff9131;
        }
        &:nth-child(3) {
          position: relative;
          text-align: center;
          display: inline-block;
          width: 48px;
          background: #f47200;
          &:hover {
            span {
              display: inline-block;
            }
          }
          span {
            display: none;
            .fs(12px);
            text-align: center;
            padding-top: 5px;
            line-height: 20px;
            width: 120px;
            height: 48px;
            position: absolute;
            color: @globalBlack;
            bottom: -64px;
            left: -36px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
            border-radius: 3px;
            background: #ffffff;
            &:before {
              content: '';
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #ffffff;
              position: absolute;
              top: -10px;
              left: 50px;
            }
          }
        }
      }
    }
  }
}

.house-show {
  position: relative;

  .house-main {
    header {
      .sc(28px, @globalBlack);
      margin: 50px 0 24px 0;
    }

    .house-warp {
      width: 718px;
    }

    .house-plane {
      div {
        .wh(718px, 290px);
        background: @globalNull;
      }
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

    .house-location {
      .map {
        .wh(718px, 309px);
        background: @globalNull;
      }
    }

    .house-around {
      ul {
        li {
          margin-bottom: 20px;

          span {
            margin-bottom: 8px;
            display: block;
            .fs(20px);
          }
        }
      }
    }

    .adviser-list {
      ul {
        li {
          display: inline-block;
          margin-right: 32px;

          &:last-child {
            margin-right: 0;
          }

          padding-top: 30px;
          text-align: center;
          width: 144px;
          height: 184px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 4px 22px -4px rgba(227, 227, 227, 1);
          margin-right: 32px;

          &:last-child {
            margin-right: 0;
          }

          img {
            margin: 0 auto;
            background: @globalNull;
            .borderRadius(34px);
            .wh(68px, 68px);
            display: block;
          }

          span {
            margin: 8px 0 12px 0;
            display: block;
            .fs(14px);
          }

          em {
            cursor: pointer;
            .sc(12px, #2660b1);
            width: 64px;
            height: 24px;
            background: rgba(244, 249, 255, 1);
            border-radius: 2px;
            border: 1px solid rgba(201, 223, 255, 1);
            padding: 2px 4px;
          }
        }
      }
    }

    .house-relevant {
      ul {
        li {
          width: 256px;
          display: inline-block;
          .fixLastMargin(54px);

          a {
            color: @globalBlack;

            img {
              display: inline-block;
              .wh(256px, 192px);
              background: @globalNull;
            }

            article {
              margin: 16px 0 8px 0;
              .fs(20px);
            }

            span {
              display: inline-block;
              .wh(65px, 18px);
              font-size: 12px;
              color: #857a6b;
              line-height: 18px;
              text-align: center;

              background: rgba(133, 122, 107, 0.08);
              margin-right: 5px;
              border-radius: 2px;
            }

            footer {
              position: relative;
              margin-top: 22px;
              color: @globalGrey;

              span {
                position: absolute;
                right: 0;
                text-align: right;
                width: 100%;

                &.price {
                  .sc(12px, #dd000f);
                  background: none;
                }

                em {
                  .fs(20px);
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }

  .find-more {
    margin: 40px 0 50px;
    a {
      .sc(16px, @globalBlack);
      display: block;
      text-align: center;
      line-height: 46px;
      border: 1px solid rgba(235, 235, 236, 1);
    }
  }
}
.is-fixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
