<template>
  <div class="side-bar">
    <p class="user-img">
      <img src="~@/assets/img/account/default_img.png" alt="用户头像" />
    </p>
    <p class="user-name">王道胜</p>
    <p class="user-tag">
      <img src="~@/assets/img/account/vip_gold.png" alt="黄金会员" />
    </p>
    <!-- 自尊会员 暂时HIDE隐藏 -->
    <p class="user-tag hide">
      <img src="~@/assets/img/account/vip_purple.png" alt="至尊会员" />
    </p>
    <!-- 钻石会员 暂时HIDE隐藏 -->
    <p class="user-tag hide">
      <img src="~@/assets/img/account/vip_black.png" alt="钻石会员" />
    </p>

    <ul class="side-tab">
      <li>
        <a href>首页</a>
      </li>
      <li>
        <a href>我的权益</a>
      </li>
      <li>
        <a href>我的佣金</a>
      </li>
      <li class="on">
        <a href>我的客户</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.side-bar {
  float: left;
  width: 261px;
  min-height: 566px;
  background: #fff;
  border-radius: 8px;
  margin-right: 30px;
  text-align: center;
  .user-img {
    width: 68px;
    height: 68px;
    overflow: hidden;
    border-radius: 50%;
    margin: 30px auto 0;
  }
  .user-name {
    font-size: 20px;
    margin-top: 12px;
    height: 20px;
    line-height: 20px;
    font-weight: 500;
    color: rgba(68, 68, 79, 1);
    line-height: 20px;
    img {
      width: 100%;
    }
  }
  .user-tag {
    margin-top: 8px;
    height: 32px;
    text-align: center;
    padding-bottom: 34px;
    border-bottom: 1px #ebebec solid;
    box-sizing: content-box;
    img {
      display: inline-block;
      width: 109px;
      height: 32px;
    }
  }
  .side-tab {
    display: block;
    margin-top: 19px;
    padding: 0 16px;
    li {
      display: block;
      width: 231px;
      height: 50px;
      background: #fff;
      border-radius: 8px;
      margin-bottom: 20px;
      a {
        display: block;
        width: 100%;
        font-size: 16px;
        color: #44444f;
        line-height: 50px;
        &:hover,
        &:active {
          color: #e62e37;
        }
      }
      &.on {
        background: #e62e37;
        a {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
