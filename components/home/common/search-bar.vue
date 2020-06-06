<template>
  <div ref="searchBar" class="search-bar">
    <el-input
      v-model="keyword"
      class="search-input"
      placeholder="请输入楼盘名或城市名开始找房"
      prefix-icon="el-icon-search"
      @focus="getFocus"
    >
      <el-button slot="append" class="search-btn">开始找房</el-button>
      <div v-show="showList" slot="prepend" class="search-list-wrap">
        <div class="history-wrap">
          <div class="h-title">
            历史搜索
            <span class="right-tip">清除</span>
          </div>
          <ul class="history-list list-wrap">
            <li
              v-for="(item, index) in historyList"
              :key="index"
              class="list-item"
            >
              {{ item }}
            </li>
            <li class="wrap-gap"></li>
          </ul>
        </div>
        <div class="hot-wrap">
          <div class="h-title">
            热门搜索
            <span class="right-tip"
              ><i class="el-icon-refresh-left"></i>换一换</span
            >
          </div>
          <ul class="hot-list list-wrap">
            <li v-for="(item, index) in hotList" :key="index" class="list-item">
              {{ item }}
            </li>
            <li class="wrap-gap"></li>
          </ul>
        </div>
      </div>
    </el-input>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      keyword: '', // 关键字
      hotList: ['123', 'abc'], // 热门搜索
      historyList: ['456', 'def'], // 历史搜索
      showList: false
    }
  },
  methods: {
    getFocus() {
      this.showList = true
      document.removeEventListener('click', this.closeListWrap)
      document.addEventListener('click', this.closeListWrap)
    },
    closeListWrap(e) {
      if (this.$refs.searchBar && !this.$refs.searchBar.contains(e.target)) {
        this.showList = false
        document.removeEventListener('click', this.closeListWrap)
      }
    },
    searchClick() {
      console.log(11)
    }
  }
}
</script>
<style lang="less" scoped>
.search-bar {
  width: 100%;
  box-shadow: 0px 7px 7px 0px rgba(230, 230, 230, 0.5);
  border-radius: 8px;
  .search-input {
    /deep/ .el-input__inner {
      height: 64px;
      line-height: 64px;
      font-size: 16px;
      padding-left: 50px;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    /deep/ .el-input__prefix {
      margin-left: 20px;
      transform: none !important;
    }
    /deep/ .el-input-group__append {
      width: 270px;
      font-size: 20px;
      background: #e62e37;
      border-radius: 0px 6px 6px 0px;
      color: rgba(255, 255, 255, 1);
      line-height: 28px;
      text-align: center;
      padding: 0;
      .search-btn {
        width: 100%;
        height: 64px;
        line-height: 44px;
      }
      &:hover,
      &:active {
        background-color: #d31c25;
      }
    }
    /deep/ .el-input-group__prepend {
      position: absolute;
      width: calc(100% - 270px);
      top: 64px;
      background: #fff;
      border: none;
      padding: 0;
      z-index: 99;
    }
    .h-title {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(168, 169, 174, 1);
      padding: 0 18px 0 20px;
      .right-tip {
        float: right;
        cursor: pointer;
        .el-icon-refresh-left {
          margin-right: 2px;
        }
      }
    }
    .search-list-wrap {
      border: 1px solid #eee;
    }
    .history-wrap {
      .h-title {
        background: rgba(244, 247, 249, 1);
      }
    }
    .hot-wrap {
      .hot-list {
        color: #e62e37;
      }
    }
    .list-wrap {
      font-size: 16px;
      font-weight: 500;
      padding: 0 20px;
      color: rgba(68, 68, 79, 1);
      .list-item {
        padding: 6px 0;
        cursor: pointer;
        &:hover {
          background-color: #fbfbfb;
        }
      }
      .wrap-gap {
        height: 2px;
        background-color: #f4f7f9;
      }
    }
  }
}
</style>
