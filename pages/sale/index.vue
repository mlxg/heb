<template>
  <div class="sale">
    <div class="center-layout">
      <div class="header-box">
        <div class="header-location">
          <img src="~@/assets/img/account/logo.png" class="sale-logo" />
          <el-button class="location"
            >深圳 <img src="~@/assets/img/home/icon_basic_location.png" />
          </el-button>
        </div>
        <div class="ipt-box">
          <el-input
            placeholder="请输入楼盘名或城市名开始找房"
            prefix-icon="el-icon-search"
          >
            <template slot="append">开始找房</template>
          </el-input>
        </div>
      </div>
      <p class="border-bottom"></p>
      <section class="sale_cur">
        <nav>恒大宝 &#62;<span class="cur">深圳</span></nav>
      </section>
      <div class="sale-container">
        <div class="houseType">
          <el-tabs type="border-card">
            <el-tab-pane label="高层"></el-tab-pane>
            <el-tab-pane label="洋房"></el-tab-pane>
            <el-tab-pane label="低密度产品"></el-tab-pane>
            <el-tab-pane label="公寓 | 商铺 | 写字楼"></el-tab-pane>
          </el-tabs>
          <div class="sale-phone">
            <p class="sale-tips">公告</p>
            <p>咨询热线：0755-88888888</p>
          </div>
        </div>
        <div class="screening">
          <div class="screening-top">
            <p class="scr-default">默认排序</p>
            <div class="store-select">
              <div class="updown">
                <i class="el-icon-caret-top"></i>
                <i class="el-icon-caret-bottom"></i>
              </div>
              <p>楼层</p>
            </div>
            <div class="store-select">
              <div class="updown">
                <i class="el-icon-caret-top"></i>
                <i class="el-icon-caret-bottom"></i>
              </div>
              <p>总价</p>
            </div>
            <div class="store-select">
              <div class="updown">
                <i class="el-icon-caret-top"></i>
                <i class="el-icon-caret-bottom"></i>
              </div>
              <p>单价</p>
            </div>
            <p class="src-total">总价</p>
            <input type="number" class="range-total" />
            <i class="el-icon-minus"></i>
            <input type="number" class="range-total" />
            <el-checkbox>只看在售</el-checkbox>
          </div>
          <div class="screening-bottom">
            <div class="htitle-bar">
              <span class="num-actived">全部（39）</span>
              <span>四房两厅两卫（8）</span>
              <span>三房两厅一卫（8）</span>
              <span>二房一厅一卫（8）</span>
            </div>
          </div>
        </div>
        <!-- 无筛选数据 -->
        <!-- <div class="no-data">
          <img src="@/assets/img/building/no_data.png" alt="" class="pic" />
          <p class="txt">很抱歉！没有找到您想要的楼盘，为您推荐其他类似楼盘</p>
        </div> -->
        <div class="sale-list">
          <div class="list-left">
            <img
              src="~@/assets/img/building/default_pic.png"
              class="house-img"
            />
            <div class="listL-detail">
              <div class="detail-frist detail">
                <p class="Sdetail-title">2-1单元-2栋22D室</p>
                <p class="Sdetail-square">建面约132㎡</p>
              </div>
              <div class="detail-second detail">
                <p class="Sdetail-total">
                  <span>总价</span><span class="num-red">895</span
                  ><span class="font-red">万元</span>
                </p>
                <p class="Sdetail-price">
                  单价<span class="num-red">42202</span
                  ><span class="font-red">元/㎡</span>
                </p>
              </div>
              <div class="detail-third detail">
                <p class="Sdetail-houseT">
                  <span class="font-gray">户型</span><span>四房两厅两卫</span>
                </p>
                <p class="Sdetail-fitment">
                  <span class="font-gray">装修</span><span>豪装</span>
                </p>
              </div>
              <p class="goBuy">立即抢购</p>
            </div>
          </div>
          <!-- 优选顾问 分享 -->
          <div class="house-aside">
            <header>
              恒大城
              <em>热销楼盘</em>
            </header>
            <ul>
              <li><span>产品类型</span>住宅、公寓、别墅</li>
              <li><span>楼盘地址</span>深圳市龙岗区坪山中心恒大城</li>
              <li>
                <span>楼盘户型</span>3室2厅、4室2厅、5室2厅
                <a href="/">全部户型</a>
              </li>
            </ul>
            <div class="aside-more">
              <a href="/">
                查看更多楼盘详情
                <span></span>
              </a>
            </div>
            <div class="hr"></div>
            <div class="adviser">
              <header>
                优选顾问
                <span>
                  <img
                    alt="换一换"
                    src="@/assets/img/house/icon_toggle.png"
                  />换一换
                </span>
              </header>
              <ul>
                <li>
                  <img src alt />
                  <span>王道胜</span>
                  <em>向他咨询</em>
                </li>
                <li>
                  <img src alt />
                  <span>王道胜</span>
                  <em>向他咨询</em>
                </li>
                <li>
                  <img src alt />
                  <span>王道胜</span>
                  <em>向他咨询</em>
                </li>
              </ul>
            </div>
            <div class="hr"></div>
            <div class="aside-footer">
              <a> <img src="@/assets/img/house/icon_share.png" alt />分享 </a>
            </div>
          </div>
        </div>
        <div class="pages">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[10]"
            background
            :page-size="10"
            layout="  prev, pager, sizes,jumper"
            :total="90"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/global.less';
.house-aside {
  margin-right: 5px;
  width: 325px;
  /*height:559px;*/
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 22px -4px rgba(227, 227, 227, 1);
  border-radius: 8px;
  padding: 24px 22px 22px;

  header {
    .sc(24px, @globalBlack);
    margin: 0 0 20px 0;
  }

  ul {
    li {
      margin: 0 3px;

      span {
        color: @globalGrey;
        width: 70px;
        display: inline-block;
        padding-bottom: 12px;
      }

      a {
        margin-left: 20px;
        color: @globalGrey;
        text-decoration: underline;
      }
    }
  }

  .hr {
    margin: 16px 0 18px 0;
    height: 1px;
    background: rgba(216, 216, 216, 1);
  }

  .adviser {
    header {
      .fs(20px);
      position: relative;

      span {
        cursor: pointer;
        .sc(14px, #a9a8ae);
        position: absolute;
        right: 0;

        img {
          margin-right: 5px;
          vertical-align: -3px;
        }
      }
    }

    ul {
      li {
        display: inline-block;
        margin-right: 48px;

        &:last-child {
          margin-right: 0;
        }

        text-align: center;
        .wh(68px, 124px);

        img {
          display: inline-block;
          .wh(68px, 68px);
          background: @globalNull;
          .borderRadius(34px);
        }

        span {
          .sc(14px, @globalBlack);
          margin-top: 6px;
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

  .aside-footer {
    text-align: center;

    a {
      .sc(16px, @globalBlack);

      img {
        vertical-align: -3px;
        margin-right: 5px;
      }
    }
  }
}
.no-data {
  margin-top: 105px;
  text-align: center;
  .pic {
    display: block;
    margin: 0 auto;
    width: 142px;
  }
  .txt {
    font-size: 20px;
    font-weight: 500;
    color: rgba(68, 68, 79, 1);
    line-height: 28px;
    margin-top: 32px;
  }
}
.pages {
  padding: 69px 0px 86px 0px;
  text-align: center;
  /deep/ .el-pagination.is-background .el-pager li {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid rgba(217, 217, 217, 1);
    margin: 0 8px;
    background-color: rgba(255, 255, 255, 1);
  }
  /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #e62e37 !important;
  }
  /deep/ .el-pagination__sizes .el-input .el-input__inner {
    font-size: 14px;
    height: 32px;
    line-height: 32px;
  }
  /deep/ .el-pagination__editor.el-input .el-input__inner {
    height: 32px;
  }

  /deep/ .el-pagination__jump {
    margin-left: -7px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
  }
  /deep/ .el-pager li:hover,
  /deep/ .el-pagination button:hover {
    color: #000000 !important;
  }
}
.border-bottom {
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
}
.sale-container {
  .sale-list {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    .list-left {
      display: flex;
      .house-img {
        width: 253px;
        height: 190px;
        margin-right: 40px;
      }
      .detail {
        display: flex;
      }
      .detail-frist {
        font-size: 24px;
        font-weight: 500;
        color: rgba(68, 68, 79, 1);
        margin-bottom: 18px;
        .Sdetail-title {
          margin-right: 25px;
        }
      }
      .detail-second {
        font-weight: 400;
        color: rgba(68, 68, 79, 1);
        .Sdetail-total {
          margin-right: 31px;
        }
        span {
          font-size: 16px;
        }
        .num-red {
          font-size: 28px;
          font-weight: bold;
          font-family: Verdana-Bold, Verdana;
          color: rgba(230, 46, 55, 1);
          padding: 0 8px 0 12px;
        }
        .font-red {
          color: rgba(230, 46, 55, 1);
          font-size: 16px;
        }
      }
      .detail-third {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #44444f;
        margin-top: 8px;
        margin-bottom: 33px;
        .Sdetail-houseT {
          margin-right: 52px;
        }
        .font-gray {
          color: #a8a9ae;
          padding-right: 11px;
        }
      }
      .goBuy {
        width: 163px;
        height: 40px;
        background: rgba(230, 46, 55, 1);
        border-radius: 4px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: 40px;
      }
    }
  }
  .screening {
    height: 138px;
    background: rgba(251, 251, 251, 1);
    border: 1px solid rgba(223, 223, 223, 1);
    .screening-bottom {
      margin-left: 30px;
      height: 65px;
      display: flex;
      align-items: center;
      .num-actived {
        color: #e62e37;
      }
      span {
        margin-right: 32px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(68, 68, 79, 1);
      }
    }
    .screening-top {
      margin-left: 32px;
      display: flex;
      align-items: center;
      color: #44444f;
      font-size: 16px;
      width: 1133px;
      height: 70px;
      border-bottom: 1px solid #ebebec;
      /deep/.el-checkbox__inner {
        width: 12px;
        height: 12px;
        border: 1px solid rgba(151, 151, 151, 1);
        margin-left: 20px;
        margin-top: -6px;
      }
      /deep/.el-checkbox__input {
        vertical-align: text-top;
      }
      /deep/.el-checkbox__label {
        font-size: 16px;
        padding-left: 5px;
      }
      /deep/.el-checkbox {
        color: #44444f;
      }
      .scr-default {
        margin-right: 31px;
      }
      .src-total {
        margin: 0px 17px 0px 30px;
      }
      .el-icon-minus {
        font-size: 17px;
        margin: 0 13px;
      }
    }
    .range-total {
      width: 81px;
      height: 28px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(169, 168, 174, 1);
    }
    .store-select {
      margin-right: 12px;
      display: flex;
      align-items: center;
      width: 76px;
      height: 30px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(235, 235, 236, 1);
      .updown {
        margin: 0px 8px;
        display: flex;
        flex-direction: column;
        .el-icon-caret-top {
          line-height: 0.5;
        }
        .el-icon-caret-bottom {
          line-height: 0.5;
        }
      }
    }
  }
  margin-top: 33px;
  .houseType {
    display: flex;
    justify-content: space-between;
    padding-right: 37px;
    height: 61px;
    background-color: #fbfbfb;
    border-bottom: 2px solid #e62e37;
    margin-bottom: 17px;
    .sale-phone {
      height: 62px;
      display: flex;
      align-items: center;
      color: #44444f;
      .sale-tips {
        text-align: center;
        width: 72px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(38, 96, 177, 1);
        line-height: 22px;
      }
    }
    /deep/ .el-tabs .is-top:hover {
      color: #44444f;
    }
  }

  /deep/ .el-tabs__item {
    padding: 0 55px;
    height: 62px;
    line-height: 62px;
    font-size: 20px;
    font-weight: 400;
    color: rgba(68, 68, 79, 1);
    background-color: #fbfbfb;
  }
  /deep/
    .el-tabs--top.el-tabs--border-card
    > .el-tabs__header
    .el-tabs__item:nth-child(2) {
    padding-left: 55px;
  }
  /deep/ .el-tabs--border-card > .el-tabs__header {
    border-bottom: none;
  }
  /deep/
    .el-tabs--top.el-tabs--border-card
    > .el-tabs__header
    .el-tabs__item:last-child {
    padding-right: 55px;
  }
  /deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background: rgba(230, 46, 55, 1);
    border-right-color: none;
    border-left-color: none;
  }
  .el-tabs--border-card {
    border: none;
    box-shadow: none;
  }
}
.sale_cur {
  margin-top: 16px;
  nav {
    .sc(16px, #a2a0b4);

    .cur {
      .sc(16px, #44444f);
    }
  }
}

.header-box {
  .header-location {
    display: flex;
    height: 116px;
    align-items: center;
    .sale-logo {
      width: 180px;
      height: 56px;
      margin-right: 23px;
    }
    .location {
      width: 73px;
      height: 28px;
      border: 1px solid rgba(162, 160, 180, 1);
      border-radius: 4px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(68, 68, 79, 1);
      padding: 0px 0px;
      .el-button {
        padding: 0px 0px;
      }
    }
  }
  display: flex;
  height: 116px;
  align-items: center;
  justify-content: space-between;
  .ipt-box {
    width: 614px;

    /deep/ .el-input__inner {
      height: 100%;
      height: 54px;
      background: rgba(242, 242, 242, 1);
      border: none;
      box-sizing: border-box;
      font-size: 16px;
      padding-left: 35px;
    }

    /deep/ .el-input__icon {
      line-height: 57px;
      font-size: 16px;
    }

    /deep/ .el-input-group__append {
      height: 100%;
      height: 54px;
      border: none;
      width: 192px;
      box-sizing: border-box;
      text-align: center;
      background: #e62e37;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
