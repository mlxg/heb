<template>
  <div class="fc-foorer">
    <div class="foot-top center-layout">
      <div class="dcode-wrap">
        <img
          class="dcode-img"
          src="~@/assets/img/account/fllow_hdb.png"
          alt="关注恒大宝"
        />
        <p class="dcode-title">关注恒大宝</p>
        <p>特价房早知道</p>
      </div>
      <div class="dcode-wrap">
        <img
          class="dcode-img"
          src="~@/assets/img/account/flos_decode.png"
          alt="微信扫码"
        />
        <p class="dcode-title">微信扫码</p>
        <p>打开“恒大宝”小程序</p>
      </div>
      <div class="dcode-wrap">
        <img
          class="dcode-img"
          src="~@/assets/img/account/dcode.png"
          alt="扫码或在应用市场下载"
        />
        <p class="dcode-title">扫码或在应用市场</p>
        <p>搜索“恒大宝”下载</p>
      </div>
    </div>
    <div class="foot-bottom center-layout">
      <p>
        恒大集团 ©版权所有 Evergrande Group 备案号：粤ICP09102163号
        <a href>恒大官网</a>
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.center-layout {
  width: 1207px;
  margin: 0 auto;
}
.fc-footer {
  background: #f9f9f9;

  height: 234px;
}
.foot-top {
  height: 128px;
  padding-top: 29px;
  overflow: hidden;
  .dcode-wrap {
    width: 300px;
    float: left;
    font-size: 18px;
    margin: 0 50px;
    color: #989ca3;

    .dcode-img {
      display: block;
      float: left;
      margin-right: 15px;
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
    .dcode-title {
      color: rgba(68, 68, 79, 1);
      font-size: 18px;
      margin: 22px 0 4px 0;
      font-weight: 500;
    }
  }
}

.foot-bottom {
  height: 74px;
  line-height: 74px;
  text-align: center;
  color: #989ca3;
  border-top: 1px solid #c6c8ca;
  a {
    margin-left: 15px;
    color: rgba(68, 68, 79, 1);
  }
}
</style>
