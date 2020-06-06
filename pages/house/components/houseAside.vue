<template>
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
          <img alt="换一换" src="@/assets/img/house/icon_toggle.png" />换一换
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
</template>

<script>
export default {
  name: 'HouseAside'
}
</script>

<style scoped lang="less">
@import 'assets/css/mixin';
.house-aside {
  width: 325px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 22px -4px rgba(227, 227, 227, 1);
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px 22px 22px;

  header {
    .sc(24px, @globalBlack);
    margin: 0 0 20px 0;
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
</style>
