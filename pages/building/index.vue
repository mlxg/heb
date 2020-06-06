<template>
  <div class="building-list">
    <div class="bread-crumbs">
      <a href="#">恒大宝</a> &gt; <span>深圳</span>
    </div>
    <div class="search-box">
      <div class="items-box">
        <div class="label">类型</div>
        <div class="info">
          <el-checkbox-group v-model="checkedType">
            <el-checkbox v-for="type in typeList" :key="type" :label="type">
              {{ type }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="items-box">
        <div class="label">单价</div>
        <div class="info">
          <el-checkbox-group v-model="checkedType">
            <el-checkbox v-for="type in typeList" :key="type" :label="type">
              {{ type }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="items-box">
        <div class="label">户型</div>
        <div class="info">
          <el-checkbox-group v-model="checkedType">
            <el-checkbox v-for="type in typeList" :key="type" :label="type">
              {{ type }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <div class="more-box">
        <p class="more">
          更多筛选条件
          <img src="@/assets/img/building/icon_down.png" alt="" class="icon" />
        </p>
      </div>
    </div>

    <div class="search-result-title">
      <h2 class="title">
        为您找到<em>350</em>个楼盘
        <p class="clear-options">
          <img src="@/assets/img/building/icon_clear.png" alt="" class="icon" />
          清空条件
        </p>
      </h2>
      <div class="options-box">
        <div class="label">已选</div>
        <div class="option">
          3万-4万
          <img src="@/assets/img/building/icon_del.png" alt="" class="del" />
        </div>
        <div class="option">
          低密度产品
          <img src="@/assets/img/building/icon_del.png" alt="" class="del" />
        </div>
        <div class="option">
          三室
          <img src="@/assets/img/building/icon_del.png" alt="" class="del" />
        </div>
      </div>
    </div>

    <div class="no-data">
      <img src="@/assets/img/building/no_data.png" alt="" class="pic" />
      <p class="txt">很抱歉！没有找到您想要的楼盘，为您推荐其他类似楼盘</p>
    </div>

    <h2 class="title">为您推荐</h2>

    <div class="list-wrap">
      <div class="list-box">
        <div class="view">
          <img src="@/assets/img/building/default_pic.png" alt="" class="pic" />
        </div>
        <div class="info">
          <div class="hd">
            <h3 class="title">恒大城</h3>
            <div class="hot">热销楼盘</div>
          </div>
          <div class="bd">
            <div class="text">
              <div class="label">产品类型</div>
              <div class="txt">住宅、公寓、别墅</div>
            </div>
            <div class="text">
              <div class="label">楼盘地址</div>
              <div class="txt">深圳市龙岗区坪山中心恒大城</div>
            </div>
            <div class="text">
              <div class="label">楼盘户型</div>
              <div class="txt">3室2厅、4室2厅、5室2厅</div>
            </div>
          </div>
          <div class="tags">
            <span class="tag">中式园林</span>
            <span class="tag">核心商圈</span>
            <span class="tag">空港新城</span>
          </div>

          <div class="right-top">
            <p class="price-box">
              参考均价 <span class="price"><strong>38000</strong>元/㎡</span>
            </p>
            <p class="tel">售楼热线 0755-88888888</p>
          </div>

          <a class="btn subscribe-btn">网上认购</a>
        </div>
      </div>
    </div>
    <login-box v-show="isLogin"></login-box>
  </div>
</template>

<script>
import loginBox from '@/components/login/index'
export default {
  components: {
    loginBox
  },
  data() {
    return {
      isLogin: false,
      typeList: ['高层', '中层', '超高层', '低密度产品', '洋房'],
      checkedType: []
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/global.less';

/deep/ .el-checkbox {
  &__label {
    padding-left: 4px;
    font-size: 16px;
    color: rgba(68, 68, 79, 1);
    line-height: 22px;
  }
}

.building-list {
  width: 1200px;
  margin: 0 auto;

  .bread-crumbs {
    margin: 16px 0;
    font-size: 16px;
    color: rgba(68, 68, 79, 1);
    line-height: 22px;

    a {
      color: rgba(169, 168, 174, 1);
    }
  }

  .search-box {
    margin-bottom: 32px;
    padding: 16px 28px;
    background: rgba(251, 251, 251, 1);
    border: 1px solid rgba(223, 223, 223, 1);
    font-size: 16px;
    color: rgba(68, 68, 79, 1);
    line-height: 22px;

    .items-box {
      &:extend(.clearfix);

      & + .items-box {
        margin-top: 22px;
      }
    }

    .label {
      /* &:extend(.fl);*/
      &:extend(.fl);
      font-weight: bold;
    }

    .info {
      margin-left: 72px;
    }

    .more-box {
      margin-top: 20px;
      font-size: 14px;
      line-height: 20px;
      text-align: center;

      .more {
        display: inline-block;
        cursor: pointer;
        color: rgba(169, 168, 174, 1);

        &:hover,
        &:active {
          color: rgba(131, 130, 136, 1);
        }
      }

      .icon {
        position: relative;
        top: 4px;
        width: 20px;
      }
    }
  }

  h2.title {
    height: 40px;
    margin-bottom: 40px;
    padding-bottom: 8px;
    font-size: 28px;
    color: rgba(68, 68, 79, 1);
    line-height: 40px;
    font-weight: bold;
    border-bottom: 1px solid #ebebec;
  }

  .search-result-title {
    .title {
      margin-bottom: 22px;

      em {
        margin: 0 10px;
        font-weight: bold;
        color: rgba(230, 46, 55, 1);
      }
    }

    .clear-options {
      &:extend(.fr);
      font-size: 20px;
      color: rgba(68, 68, 79, 1);
      line-height: 28px;
      cursor: pointer;
      font-weight: normal;

      .icon {
        position: relative;
        top: 6px;
        width: 24px;
        height: 24px;
        margin-right: 2px;
      }
    }

    .options-box {
      height: 38px;
      margin-bottom: 48px;
      line-height: 38px;

      .label,
      .option {
        &:extend(.fl);
      }

      .label {
        margin-right: 24px;
      }

      .option {
        position: relative;
        min-width: 150px;
        margin-right: 16px;
        padding: 0 14px 0 16px;
        background: rgba(251, 251, 251, 1);
        border: 1px solid rgba(223, 223, 223, 1);
        line-height: 36px;
      }

      .del {
        display: block;
        position: absolute;
        top: 10px;
        right: 14px;
        width: 17px;
        height: 17px;
        cursor: pointer;
      }
    }
  }

  .list-box {
    height: 192px;
    margin-bottom: 48px;

    .view {
      &:extend(.fl);
      width: 256px;
      height: 192px;
      border-radius: 6px;
      overflow: hidden;

      .pic {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .info {
      position: relative;
      margin-left: 284px;
      padding-right: 270px;
    }

    .hd {
      height: 32px;
      margin-bottom: 12px;
    }

    .title {
      &:extend(.fl);
      margin-right: 8px;
      font-size: 24px;
      font-weight: bold;
      color: rgba(68, 68, 79, 1);
      line-height: 32px;
    }

    .hot {
      &:extend(.fl);
      display: block;
      margin-top: 4px;
      padding: 0 8px;
      background: linear-gradient(
        45deg,
        rgba(255, 130, 78, 1) 0%,
        rgba(223, 8, 18, 1) 100%
      );
      color: #fff;
      font-size: 14px;
      line-height: 24px;
      border-radius: 2px;
    }

    .bd {
      height: 124px;
    }

    .text {
      margin-bottom: 12px;
      font-size: 14px;
      color: rgba(68, 68, 79, 1);
      line-height: 20px;
    }

    .label {
      &:extend(.fl);
      color: rgba(168, 169, 174, 1);
    }

    .txt {
      margin-left: 68px;
    }

    .tags {
      font-size: 12px;
      color: rgba(141, 130, 125, 1);
      line-height: 24px;
    }

    .tag {
      display: inline-block;
      padding: 0 12px;
      background: rgba(133, 122, 107, 0.08);
      border-radius: 2px;

      & + .tag {
        margin-left: 10px;
      }
    }
  }

  .right-top {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
    line-height: 22px;
    color: rgba(169, 168, 174, 1);
    text-align: right;

    .price-box {
      color: rgba(68, 68, 79, 1);
      line-height: 44px;

      .price {
        color: rgba(230, 46, 55, 1);
      }

      strong {
        font-size: 36px;
        font-weight: bold;
      }
    }
  }

  .subscribe-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 216px;
    height: 54px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 54px;
    text-align: center;
  }

  .no-data {
    margin-bottom: 40px;

    .pic {
      display: block;
      width: 142px;
      margin: 0 auto 32px;
    }

    .txt {
      font-size: 20px;
      font-weight: bold;
      color: rgba(68, 68, 79, 1);
      line-height: 28px;
      text-align: center;
    }
  }
}
</style>
