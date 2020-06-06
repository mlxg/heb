<template>
  <div class="prod-item">
    <img src="~@/assets/img/home/test1.png" class="image" />
    <div>
      <div class="title">深圳恒大城</div>
      <div class="currency pmt-10">
        <span class="price">
          8888
          <span class="unit">元/㎡</span>
        </span>
        <button class="pay-btn btn fr">网上认购</button>
      </div>
      <div class="local pmt-10">
        <span class="area">建面 95-135㎡</span>
        <span class="city fr"
          ><i class="el-icon-location-outline"></i>深圳市</span
        >
      </div>
      <div class="address">坪山中心/双地铁/公园社区</div>
      <div class="tags pmt-10">
        <span class="prod-tag">公园旁</span>
        <span class="prod-tag">大型社区</span>
        <span class="prod-tag">综合体</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.prod-item {
  .pmt-10 {
    margin-top: 10px;
  }
  .image {
    border-radius: 4px;
    width: 100%;
  }
  .title {
    font-size: 20px;
    color: #44444f;
    font-weight: 600;
    margin-top: 4px;
  }
  .currency {
    .price {
      font-size: 20px;
      font-weight: bold;
      color: rgba(221, 0, 15, 1);
      .unit {
        font-size: 12px;
        font-weight: 400;
        color: rgba(221, 0, 15, 1);
      }
    }
    .pay-btn {
      width: 78px;
      height: 27px;
      background: rgba(230, 46, 55, 1);
      border-radius: 4px;
      text-align: center;
      line-height: 27px;
    }
  }
  .local {
    .area {
      font-size: 12px;
      font-weight: 400;
      color: rgba(68, 68, 79, 1);
    }
    .city {
      font-size: 12px;
      font-weight: 400;
      color: rgba(168, 169, 174, 1);
    }
  }
  .address {
    font-size: 12px;
    font-weight: 400;
    color: rgba(168, 169, 174, 1);
    margin-top: 5px;
  }

  .tags {
    .prod-tag {
      display: inline-block;
      width: 78px;
      height: 22px;
      background: rgba(133, 122, 107, 0.08);
      border-radius: 2px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(141, 130, 125, 1);
      text-align: center;
      line-height: 22px;
      margin-right: 4px;
    }
  }
}
</style>
