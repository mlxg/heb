<template>
  <div class="city">
    <div class="ipt-box">
      <el-input
        v-model="input"
        placeholder="请输入城市名"
        prefix-icon="el-icon-search"
      >
        <template slot="append">搜索</template>
      </el-input>
    </div>
    <div class="title-bar">
      <div
        class="tab1"
        :class="{ action: tabIndex === 0 }"
        @click="tabIndex = 0"
      >
        按省份选择城市
      </div>
      <div
        class="tab2"
        :class="{ action: tabIndex === 1 }"
        @click="tabIndex = 1"
      >
        按拼音首字母选择城市
      </div>
    </div>
    <div class="city-box">
      <div v-show="tabIndex === 0" class="province-city">
        <div v-for="(province, i) in provinceList" :key="i" class="city-line">
          <span class="city-label">{{ province.label }}</span>
          <span class="city-province">{{ province.text }}</span>
          <div class="city-list">
            <div
              v-for="(city, k) in province.children"
              :key="k"
              class="city-item"
            >
              {{ city.cityName }}
            </div>
          </div>
        </div>
      </div>
      <div v-show="tabIndex === 1" class="pinyin-city">
        <div v-for="(item, i) in cityList" :key="i" class="city-line">
          <span class="city-label">{{ item.label }}</span>
          <div
            v-for="(el, k) in item.children"
            :key="k"
            class="city-item"
            @click="chooseCity(el)"
          >
            {{ el.cityName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataLetterSort } from '../../utils/utils'
import cityList from './city'
export default {
  data() {
    return {
      input: '',
      tabIndex: 0,
      cityList: [],
      provinceList: []
    }
  },
  mounted() {
    this.getCityList()
  },
  methods: {
    getCityList() {
      const provinceObj = {}
      cityList.forEach((city) => {
        provinceObj[city.province] = provinceObj[city.province] || {
          text: city.province,
          children: [],
          label: city.pPinyin ? city.pPinyin.substr(0, 1).toUpperCase() : 'A'
        }
        provinceObj[city.province].children.push(city)
      })
      for (const prop in provinceObj) {
        provinceObj[prop].children.sort((a, b) => {
          return (
            a.pinyin
              .substr(0, 1)
              .toUpperCase()
              .charCodeAt() -
            b.pinyin
              .substr(0, 1)
              .toUpperCase()
              .charCodeAt()
          )
        })
        this.provinceList.push(provinceObj[prop])
      }
      this.provinceList.sort((a, b) => {
        return a.label.charCodeAt() - b.label.charCodeAt()
      })
      this.cityList = dataLetterSort(cityList, 'pinyin')
    },
    chooseCity(city) {
      console.log(city)
    }
  }
}
</script>

<style lang="less" scoped>
// @import '@/assets/css/global.less';
.city {
  width: 1200px;
  margin: 0 auto;
  font-size: 16px;

  .ipt-box {
    margin-top: 28px;
    width: 792px;

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
      font-size: 18px;
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

  .title-bar {
    width: 100%;
    height: 62px;
    margin-top: 32px;
    border-bottom: 2px solid #e62e37;
    box-sizing: border-box;

    div {
      display: inline-block;
      line-height: 62px;
      text-align: center;
      font-size: 20px;
      color: #44444f;

      &.action {
        background: #e62e37;
        color: #fff;
      }
    }

    .tab1 {
      width: 278px;
    }
    .tab2 {
      width: 308px;
    }
  }

  .city-box {
    margin: 32px 0 16px 0;
    .province-city {
      .city-line {
        padding-left: 80px;
        position: relative;
        display: flex;
      }

      .city-label {
        position: absolute;
        height: 28px;
        line-height: 28px;
        padding: 8px 0;
        left: 26px;
        font-weight: 600;
        color: #838288;
        font-size: 18px;
      }
      .city-province {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        width: 162px;
        color: #44444f;
        font-size: 20px;
        font-weight: 500;
        margin-right: 20px;
        padding: 8px 0;
      }
      .city-list {
        display: inline-block;
        white-space: normal;
        width: calc(100% - 200px);
      }
      .city-item {
        display: inline-block;
        line-height: 28px;
        height: 28px;
        margin-right: 12px;
        padding: 8px 10px;
        cursor: pointer;
        font-size: 14px;
        &:hover {
          background: rgba(230, 46, 55, 0.1);
        }
      }
    }
    .pinyin-city {
      .city-line {
        padding-left: 70px;
        position: relative;
      }

      .city-label {
        position: absolute;
        height: 28px;
        line-height: 28px;
        left: 26px;
        padding: 8px 0;
        font-weight: 600;
        color: #838288;
        font-size: 18px;
      }

      .city-item {
        display: inline-block;
        line-height: 28px;
        margin-right: 12px;
        padding: 8px 10px;
        cursor: pointer;
        font-size: 14px;
        &:hover {
          background: rgba(230, 46, 55, 0.1);
        }
      }
    }
  }
}
</style>
