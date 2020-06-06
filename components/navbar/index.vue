<template>
  <div>
    <div class="header-menu">
      <div class="center-layout">
        <p class="head-left-wrap">
          <a href>首页</a>
          <a href>全部楼盘</a>
        </p>
        <p class="head-right-wrap">
          <a href>下载APP</a>
          <a href>会员专区</a>
          <a href>意向登记</a>
          <a href>个人中心</a>
          <span class="on-login">
            <i> <img src="~@/assets/img/account/default_img.png" alt /> </i
            >158****1313
            <a href>退出</a>
          </span>
        </p>
      </div>
    </div>
    <div class="header-nav">
      <div class="center-layout">
        <h2 class="logo-wrap">
          <img
            class="logo-img"
            src="~@/assets/img/global/logo.png"
            alt="恒大宝"
          />
          <span class="logo-text">个人中心</span>
        </h2>
        <p class="right-wrap">
          <a class="btn btn-recommend" href>立即推荐</a>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
// 顶部菜单栏
.header-menu {
  width: 100%;
  height: 52px;
  background-color: #1d2c39;
  border: 1px solid rgba(232, 232, 232, 1);
  box-sizing: content-box;
  font-size: 16px;

  line-height: 52px;
  a {
    display: inline-block;
    height: 52px;
    line-height: 52px;
    color: #ffffff;
    &:hover {
      color: #e62e37;
    }
  }
  .head-left-wrap {
    float: left;
    a {
      margin-right: 40px;
    }
  }
  .head-right-wrap {
    float: right;
    a {
      margin-left: 40px;
    }
    .on-login {
      vertical-align: middle;
      margin-left: 35px;
      color: #ffffff;
      i {
        display: inline-block;
        width: 22px;
        height: 22px;
        vertical-align: -14px;
        margin-right: 6px;
        img {
          width: 100%;
          vertical-align: top;
        }
      }
      a {
        margin-left: 8px;
      }
    }
  }
}
// 顶部导航
.header-nav {
  width: 100%;
  height: 85px;
  border-bottom: 1px #f2f2f2 solid;
  overflow: hidden;
  .logo-wrap {
    float: left;

    .logo-img {
      display: block;
      float: left;
      width: 180px;
      height: 56px;
      margin: 13px 24px 0 0;
    }
    .logo-text {
      display: block;
      float: left;
      height: 32px;
      margin-top: 27px;
      line-height: 32px;
      font-size: 24px;
      color: rgba(68, 68, 79, 1);
    }
  }
  .right-wrap {
    float: right;
    margin: 27px 0 0 0;
    .btn-recommend {
      display: inline-block;
      width: 162px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
    }
  }
}
</style>
