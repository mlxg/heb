<template>
  <section class="house-info">
    <table>
      <tbody>
        <tr>
          <td>开盘日期</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>产品类型</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>装修状况</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>占地面积</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>产 权</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>绿 化 率</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>容 积 率</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>总 户 数</td>
          <td>住宅，公寓，别墅</td>
        </tr>
        <tr>
          <td>物业公司</td>
          <td>住宅，公寓，别墅</td>
        </tr>

        <tr>
          <td>楼盘特色</td>
          <td>
            珠海恒大珺睿是世界500强恒大地产集团首进珠海的第一个商办项目，项目地处珠海市迎宾大道旁，可直通拱北口岸。占地约7606.12m²，总建筑面积约9.9万m²，项目总高度约208米，打造珠海市新地标，高端精英会所及空中泳池，品质生活触手可得。
          </td>
        </tr>
      </tbody>
    </table>

    <div class="info-aside">
      <article>楼盘相册 <span>查看全部楼盘照片 &#62;</span></article>
      <div class="img-top">
        <img src="" alt="" />
        <span>效果图</span>
      </div>
      <div class="img-bottom">
        <div>
          <img src="" alt="" />
          <span>实景图</span>
        </div>
        <div>
          <img src="" alt="" />
          <span>总规图</span>
        </div>
      </div>
    </div>
  </section></template
>

<script>
export default {
  name: 'HouseInfo'
}
</script>

<style scoped lang="less">
@import 'assets/css/mixin';
.house-info {
  .fs(16px);
  position: relative;

  table {
    width: 740px;
    border-collapse: separate;
    border-spacing: 10px;

    tr {
      line-height: 24px;

      td:first-child {
        vertical-align: top;
        width: 80px;
        color: @globalGrey;
      }
    }
  }

  .info-aside {
    img {
      background: @globalNull;
      display: inline-block;
    }

    width: 330px;
    position: absolute;
    right: 0;
    top: 0;

    article {
      margin-bottom: 20px;
      position: relative;
      .fs(20px);
      span {
        .pbr();
        .sc(14px, @globalGrey);
      }
    }

    .img-top {
      position: relative;
      img {
        .wh(328px, 162px);
      }

      span {
        color: #ffffff;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 29px;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
      }
    }

    .img-bottom {
      margin-top: 2px;
      div {
        .fixLastMargin(1px);
        position: relative;
        display: inline-block;
        .wh(162px, 162px);
        img {
          .wh(162px, 162px);
        }
        span {
          color: #ffffff;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 29px;
          background: rgba(0, 0, 0, 0.5);
          text-align: center;
        }
      }
    }
  }
}
</style>
