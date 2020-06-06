<template>
  <div class="content">
    <div class="center-layout">
      <!-- 侧边栏组件 -->
      <SideBar></SideBar>
      <!-- 侧边栏组件 -->
      <div class="cont-min">
        <div class="client-top">
          <div class="title-wrap">
            <h2 class="title">我的客户</h2>
          </div>
          <div class="client-select">
            <el-form
              :inline="true"
              :model="formInline"
              label-width="30px"
              class="demo-form-inline"
            >
              <el-form-item class="client" label="客户">
                <el-input
                  v-model="formInline.user"
                  placeholder="客户姓名/手机号"
                ></el-input>
              </el-form-item>

              <el-form-item class="recommetd" label="">
                <el-select v-model="formInline.region" placeholder="推荐时间">
                  <el-option label="推荐时间" value="0"></el-option>
                  <el-option label="到访时间" value="1"></el-option>
                  <el-option label="认购时间" value="2"></el-option>
                  <el-option label="签约时间" value="3"></el-option>
                  <el-option label="过期时间" value="4"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="chouse-time" label="">
                <el-col :span="11">
                  <el-date-picker
                    v-model="formInline.date1"
                    type="date"
                    placeholder="选择日期"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker
                    v-model="formInline.date2"
                    type="date"
                    placeholder="选择日期"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
              </el-form-item>

              <el-form-item class="chenck-btn">
                <el-button type="danger" @click="onSubmit">查询</el-button>
                <a class="rest-btn" href=""
                  ><i class="icon-rest"
                    ><img
                      src="~@/assets/img/account/vip/icon_rest.png"
                      alt=""/></i
                  >重置</a
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="client-info">
          <ul class="title-wrap">
            <li class="on"><a href="">未到访(3)</a></li>
            <li><a href="">未到访(3)</a></li>
            <li><a href="">未到访(3)</a></li>
            <li><a href="">未到访(3)</a></li>
          </ul>
          <div class="info-data">
            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                align="center"
                prop="clientname"
                label="客户姓名"
                width="80"
              >
                <template>
                  <el-button type="text" size="small"
                    ><i class="icon-prolong"
                      ><img
                        src="~@/assets/img/account/vip/icon_prolong.png"
                        alt=""/></i
                    >{{ tableData[0].clientname }}</el-button
                  >
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="phonenumber"
                label="手机号码"
                width="105"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="buildproject"
                label="推荐项目"
                width="132"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="buildsale"
                label="置业顾问"
                width="146"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="protecttime"
                label="保护期剩余天数"
                width="108"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="overduetime"
                label="过期时间"
                width="92"
              >
              </el-table-column>
              <el-table-column align="center" label="操作" width="175">
                <template>
                  <el-button type="text" size="small">延长保护期</el-button>
                  <el-button type="text" size="small">推荐至其他项目</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-pagination
              background
              align="center"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="  prev, pager, next, sizes,jumper"
              :total="50"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/pages/account/components/sidebar'
export default {
  components: {
    SideBar
  },
  data() {
    return {
      formInline: {
        user: '',
        region: '',
        date1: '',
        date2: ''
      },
      tableData: [
        {
          clientname: '张学友',
          phonenumber: '18000008888',
          buildproject: '成都恒大天府半岛',
          buildsale: '何书桓 19976543456',
          protecttime: '30天',
          overduetime: '2020/05/24'
        },
        {
          clientname: '张学友',
          phonenumber: '18000008888',
          buildproject: '成都恒大天府半岛',
          buildsale: '何书桓 19976543456',
          protecttime: '30天',
          overduetime: '2020/05/24'
        },
        {
          clientname: '张学友',
          phonenumber: '18000008888',
          buildproject: '成都恒大天府半岛',
          buildsale: '何书桓 19976543456',
          protecttime: '30天',
          overduetime: '2020/05/24'
        },
        {
          clientname: '张学友',
          phonenumber: '18000008888',
          buildproject: '成都恒大天府半岛',
          buildsale: '何书桓 19976543456',
          protecttime: '30天',
          overduetime: '2020/05/24'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  min-height: 700px;
  padding-top: 32px;
  padding-bottom: 48px;
  background: #f6f6f6;
  overflow: hidden;
}
.cont-min {
  float: left;
  min-height: 532px;
  width: 908px;
  border-radius: 8px;
}
.client-top {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 15px;
  .title-wrap {
    padding: 0 29px 0 29px;
    height: 63px;
    line-height: 63px;
    border-bottom: 1px #ebebec solid;
    .title {
      font-size: 20px;
    }
  }
  .client-select {
    height: 82px;
    padding: 0 0 0 32px;
    line-height: 82px;
    overflow: hidden;
    font-size: 0;
  }
}
.client-info {
  background: #ffffff;
  min-height: 361px;
  padding: 0 32px 26px;
  border-radius: 8px;
  overflow: hidden;
  .title-wrap {
    display: block;
    margin-bottom: 14px;
    border-bottom: 4px #f9f9f9 solid;
    height: 54px;
    line-height: 54px;
    font-size: 16px;
    color: #afafaf;
    box-sizing: content-box;

    li {
      display: block;
      float: left;
      margin-right: 58px;
      border-bottom: 4px #f9f9f9 solid;
      a {
        line-height: 54px;
        width: 100%;
        height: 100%;
        display: inline-block;
        color: #afafaf;
      }
      &.on {
        border-bottom: 4px #e62e37 solid;
        a {
          color: #e62e37;
        }
      }
    }
  }
  .info-data {
    .el-table {
      min-height: 245px;
      margin-bottom: 26px;
    }
  }
}
// 组件样式调整
/deep/.el-form--inline .el-form-item__content {
  vertical-align: middle;
}

// 表格组件样式
/deep/.el-table td {
  padding: 8px 0;
  border: none;
  font-size: 14px;
  color: #44444f;
  white-space: nowrap;
  .cell {
    white-space: nowrap;
    overflow: visible;
  }
}
/deep/.el-table th.is-leaf {
  padding: 8px 0;
  border: none;
  background: #f9f9f9;
  color: #44444f;
  font-weight: bold;
  white-space: nowrap;
  .cell {
    white-space: nowrap;
    overflow: visible;
  }
}
/deep/.el-table__header-wrapper {
  margin-bottom: 14px;
}

/deep/.el-table::before {
  content: '';
  border: none;
  background: transparent;
}

/deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #e62e37;
  border: 1px solid #e62e37;
  color: #ffffff;
}
/deep/.el-pagination.is-background .el-pager li:hover {
  color: #e62e37;
}
/deep/.el-pagination.is-background .el-pager li,
/deep/.el-pagination.is-background .btn-next,
/deep/.el-pagination.is-background .btn-prev {
  margin: 0 5px;
  background-color: #ffffff;
  color: #606266;
  min-width: 30px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 100;
  border: 1px solid #d9d9d9;
}

/deep/.el-pagination .el-input--mini .el-input__inner,
/deep/.el-pagination button,
/deep/.el-pagination span:not([class*='suffix']),
/deep/.el-pagination__editor.el-input .el-input__inner,
/deep/.el-pagination__editor {
  height: 32px;
  line-height: 32px;
}
/deep/.el-select .el-input.is-focus .el-input__inner {
  border: 1px solid #cfcfd4;
}
/deep/.el-pagination__sizes .el-input .el-input__inner:hover {
  border: 1px solid #cfcfd4;
}
/deep/.el-input.is-active .el-input__inner,
/deep/.el-input__inner {
  border: 1px solid #cfcfd4;
}
/deep/.el-input__inner:focus {
  border: 1px solid #cfcfd4;
}
</style>
<style lang="less">
.client {
  margin-right: 28px !important;
  .el-form-item__content {
    width: 200px;
    height: 40px;
    line-height: 40px;
  }
  .el-form-item__label {
    padding: 0;
    white-space: nowrap;
    margin-right: 10px;
  }
}
.recommetd {
  margin-right: 12px !important;
  .el-form-item__content {
    width: 112px;
  }
}
.chouse-time {
  margin-right: 18px !important;
  .el-form-item__content {
    width: 260px;
  }
  .line {
    text-align: center;
  }
}
.chenck-btn {
  font-size: 0;

  .el-form-item__content {
    .el-button {
      width: 112px;
    }
    .rest-btn {
      margin-left: 20px;

      font-size: 14px;
      color: #a8a9ae;
      i {
        width: 12px;
        height: 12px;
        margin-right: 3px;
        vertical-align: -13px;
      }
    }
  }
}
.el-button--text {
  color: #2660b1;
}
.el-table_1_column_1 {
  .el-button--text {
    text-decoration: underline;
  }
  .icon-prolong {
    width: 16px;
    height: 17px;
    vertical-align: 3px;
    margin-right: 3px;
  }
}

// 分页器 样式
.el-select-dropdown__item.selected {
  color: #44444f;
  font-weight: 700;
}
.el-date-table td.today span,
.el-date-table td.available:hover {
  color: #44444f;
}
.el-date-table td.current:not(.disabled) span {
  background-color: #e62e37;
}
.el-date-table th {
  text-align: center;
}
</style>
