<template>
  <section class="house-type">
    <ul class="shape">
      <li>五室两厅两卫</li>
      <li>三室两厅两卫</li>
      <li>两室两厅一卫</li>
    </ul>
    <ul class="sort">
      <li>图片 (4)</li>
      <li>视频 (4)</li>
      <li>VR (4)</li>
    </ul>
    <div class="carousel-wrap">
      <el-carousel
        :interval="5000"
        arrow="always"
        :height="imgHeight"
        indicator-position="none"
      >
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="carousel-type"></div>
  </section>
</template>

<script>
export default {
  name: 'HouseType',
  props: {
    imgHeight: {
      type: String,
      default: '570px'
    }
  }
}
</script>

<style scoped lang="less">
@import 'assets/css/mixin';
.house-type {
  width: 935px;
  margin: 24px auto 50px;
  ul {
    text-align: center;
    margin-bottom: 24px;
    &.shape {
      li {
        .sc(20px, @globalGrey);
        .fixLastMargin(44px);

        display: inline-block;
        &.cur,
        &:hover {
          cursor: pointer;
          color: @globalBlack;
        }
      }
    }
    &.sort {
      li {
        .fixLastMargin(24px);
        .sc(16px, @globalGrey);
        line-height: 34px;
        width: 121px;
        /*height: 38px;*/
        border-radius: 6px;
        border: 1px solid rgba(169, 168, 174, 1);

        display: inline-block;
        &.cur,
        &:hover {
          cursor: pointer;
          color: #ffffff;
          background: rgba(230, 46, 55, 1);
          border: 0;
        }
      }
    }
  }
  .carousel-wrap {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .carousel-type {
  }
}
</style>
