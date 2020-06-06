<template>
  <div class="content">
    <div class="center-layout">
      <!-- 侧边栏组件 -->
      <SideBar></SideBar>
      <!-- 侧边栏组件 -->
      <div class="cont-min">
        <div class="vip-introduce-wrap">
          <div class="introduce hight_brokerage">
            <p class="title">高额佣金</p>
            <p>推荐成交即获高额佣金</p>
          </div>
          <div class="introduce pay_brokerage">
            <p class="title">佣金快速结算</p>
            <p>佣金快速结算，线上5个工作日支付到账</p>
          </div>
          <div class="introduce serve">
            <p class="title">一站式服务</p>
            <p>
              VR实景看房，专属销售线上服务，在线轻松查看全国房源信息，一键网上认购
            </p>
          </div>
        </div>
        <div class="vip-info-wrap">
          <div class="title-wrap">
            <h3 class="title">我的佣金</h3>
            <a class="r-link" href="">产看明细 &gt;</a>
          </div>
          <div class="data-wrap">
            <div class="money">
              <p class="number">1,038,200.00</p>
              <p class="text">
                <i class="icon"
                  ><img
                    src="~@/assets/img/account/vip/icon_brokerage.png"
                    alt=""/></i
                >累计佣金（元）
              </p>
            </div>
            <div class="money">
              <p class="number">1,038,200.00</p>
              <p class="text">
                <i class="icon"
                  ><img
                    src="~@/assets/img/account/vip/icon_brokerage.png"
                    alt=""/></i
                >已发佣金（元）
              </p>
            </div>
            <div class="money">
              <p class="number gray">1,038,200.00</p>
              <p class="text">
                <i class="icon"
                  ><img
                    src="~@/assets/img/account/vip/icon_pay_brokerage.png"
                    alt=""/></i
                >待发佣金（元）
              </p>
            </div>
          </div>
        </div>

        <div class="vip-info-wrap">
          <div class="title-wrap">
            <h3 class="title">我的客户</h3>
            <a class="r-link" href="">产看明细 &gt;</a>
          </div>
          <div class="data-wrap">
            <div class="myclient">
              <p class="number">36</p>
              <p class="text">未到访</p>
            </div>
            <div class="myclient">
              <p class="number">60</p>
              <p class="text">已到访</p>
            </div>
            <div class="myclient">
              <p class="number">200</p>
              <p class="text">已认购</p>
            </div>
            <div class="myclient">
              <p class="number">130</p>
              <p class="text">已签约</p>
            </div>
            <div class="myclient">
              <p class="number">200</p>
              <p class="text">已过期</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/pages/account/components/sidebar'
export default {
  components: {
    SideBar
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  min-height: 700px;
  padding-top: 32px;
  padding-bottom: 48px;
  background: #f6f6f6;
  overflow: hidden;
}
.cont-min {
  float: left;
  min-height: 532px;
  width: 908px;
  border-radius: 8px;
}
// 会员中心部分

.vip-introduce-wrap {
  width: 1000px;
  height: 128px;
  padding-bottom: 6px;
  box-sizing: content-box;
  .introduce {
    float: left;
    width: 158px;
    height: 128px;
    padding: 0 103px 0 29px;
    font-size: 12px;
    color: #a8a9ae;
    line-height: 17px;
    &.hight_brokerage {
      margin-left: -10px;
      margin-right: 28px;
      background: url(~@/assets/img/account/vip/hight_brokerage.png) no-repeat
        center;
    }
    &.pay_brokerage {
      margin-right: 28px;
      background: url(~@/assets/img/account/vip/pay_brokerage.png) no-repeat
        center;
    }
    &.serve {
      background: url(~@/assets/img/account/vip/serve.png) no-repeat center;
    }
    .title {
      margin: 14px 0 1px 0;
      height: 32px;
      font-size: 20px;
      color: #44444f;
      line-height: 32px;
    }
  }
}

.vip-info-wrap {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 27px;
  .title-wrap {
    padding: 0 21px 0 31px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    border-bottom: 1px #ebebec solid;
    .title {
      float: left;
      width: 200px;
      font-size: 20px;
      color: #44444f;
    }
    .r-link {
      display: block;
      float: right;
      color: #a8a9ae;
    }
  }

  .data-wrap {
    height: 152px;
    text-align: center;
    .money {
      width: 302px;
      display: block;
      float: left;
    }
    .number {
      margin-top: 42px;
      margin-bottom: 12px;
      font-size: 32px;
      font-weight: bold;
      color: #e62e37;
      line-height: 32px;
      &.gray {
        color: #9097ab;
      }
    }
    .text {
      font-size: 14px;
      color: #44444f;
      i {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        vertical-align: -2px;
      }
    }
    .myclient {
      width: 181px;
      float: left;
      .number {
        margin-top: 38px;
        margin-bottom: 8px;
        color: #44444f;
      }
      .text {
        color: #777587;
      }
    }
  }
}
</style>
