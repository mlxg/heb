<template>
  <div class="content">
    <div class="center-layout">
      <!-- 侧边栏组件 -->
      <SideBar></SideBar>
      <!-- 侧边栏组件 -->
      <div class="cont-min">
        <ul class="min-tab">
          <li>
            <a href>实名信息认证</a>
          </li>
          <li class="on">
            <a href>修改手机号</a>
          </li>
          <li>
            <a href>修改密码</a>
          </li>
        </ul>
        <!-- 实名认证信息部分 -->
        <div class="tab-min">
          <p class="user-info">
            <span class="left-text">姓名</span>
            <span class="right-text">马维</span>
            <a class="btn btn-set" href>
              <i>
                <img src="~@/assets/img/account/icon_edit.png" alt />
              </i>
              <span>修改资料</span>
            </a>
          </p>
          <p class="user-info">
            <span class="left-text">证件类型</span>
            <span class="right-text">居民身份证</span>
          </p>
          <p class="user-info">
            <span class="left-text">证件号码</span>
            <span class="right-text">42**************16</span>
          </p>
          <p class="user-info">
            <span class="left-text">证件照片</span>
            <span class="right-img">
              <img src="~@/assets/img/account/frond.png" alt="身份证正面" />
              <img src="~@/assets/img/account/reverse.png" alt="身份证反面" />
            </span>
          </p>
          <p class="user-info">
            <span class="left-text">常驻地</span>
            <span class="right-text">广东省深圳市南山区</span>
          </p>
          <p class="user-info">
            <span class="left-text">开户行</span>
            <span class="right-text">中国银行</span>
          </p>
          <p class="user-info">
            <span class="left-text">银行账号</span>
            <span class="right-text">62************54</span>
          </p>
        </div>
        <!-- 实名认证修改信息部分 -->

        <div class="tab-min">
          <div class="set-user-info">
            <p class="tips">
              您需确保身份证号、银行账号准确无误，且与当前账号154****8983属于同一个所有者。
            </p>
            <p class="title">个人身份信息</p>
            <div class="set-user">
              <el-form
                ref="ruleForm"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="姓名" prop="age">
                  <el-input
                    v-model.number="ruleForm.age"
                    placeholder="请输入您的真实姓名"
                  ></el-input>
                </el-form-item>
                <el-form-item label="证件类型">
                  <el-select v-model="ruleForm.region" value="居民身份证">
                    <el-option
                      label="居民身份证"
                      value="居民身份证"
                    ></el-option>
                    <el-option label="侨胞证" value="侨胞证"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="证件号码" prop="age">
                  <el-input
                    v-model.number="ruleForm.age"
                    placeholder="请输入您的证件号"
                  ></el-input>
                </el-form-item>
                <el-form-item label="常驻地">
                  <el-select v-model="ruleForm.region" value="请选择所在地区">
                    <el-option label="北京" value="北京"></el-option>
                    <el-option label="上海" value="上海"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <p class="title bank">银行卡信息</p>
            <p class="tips-bank">
              银行卡用于佣金提现，户主需与以上身份证持有人一致，仅支持借记卡
            </p>
            <div class="set-user">
              <el-form
                ref="ruleForm"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="银行账号" prop="age">
                  <el-input
                    v-model.number="ruleForm.age"
                    placeholder="请输入借记卡卡号"
                  ></el-input>
                </el-form-item>
                <el-form-item label="开户行">
                  <el-select v-model="ruleForm.region" value="请选择开户行">
                    <el-option label="银行1" value="银行1"></el-option>
                    <el-option label="银行1" value="银行1"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox name="type">
                      <span class="text">
                        我同意
                        <a href>《兼职销售推荐购房须知》</a>和
                        <a href>《用户隐私协议》</a>
                      </span>
                    </el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="danger" @click="submitForm('ruleForm')"
                    >提交资料</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <!-- 修改手机号部分 -->
        <div class="tab-min">
          <div class="set-phone">
            <el-form
              ref="ruleForm"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="原手机验证码" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
                <a class="send-code" href>免费获取</a>
              </el-form-item>
              <el-form-item label="新手机号" prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  type="password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="原手机验证码" prop="checkPass">
                <el-input
                  v-model="ruleForm.checkPass"
                  type="password"
                  autocomplete="off"
                ></el-input>
                <a class="send-code" href>免费获取</a>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="submitForm('ruleForm')"
                  >保存</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 修改密码部分 -->
        <div class="tab-min">
          <ul class="set-password-tab">
            <li>
              <a href>密码验证</a>
            </li>
            <li class="on">
              <a href>短信验证</a>
            </li>
          </ul>
          <div class="set-password">
            <el-form
              ref="ruleForm"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="输入验证码" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
                <a class="send-code" href>发送验证码</a>
              </el-form-item>
              <el-form-item label="输入新密码" prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  type="password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="checkPass">
                <el-input
                  v-model="ruleForm.checkPass"
                  type="password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="submitForm('ruleForm')"
                  >保存</el-button
                >
              </el-form-item>
            </el-form>
            <p class="set-tips-text">*密码需包含数字、字母，且不少于8位；</p>
            <p class="set-tips-text">
              *以上信息修改后都将同步至恒大统一用户中心，请使用新密码登录恒大统一用户中心应用。
            </p>
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
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else if (value < 18) {
          callback(new Error('必须年满18岁'))
        } else {
          callback()
        }
      }, 1000)
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
        region: '',
        type: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
// 页面中部内容
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
  width: 842px;
  min-height: 532px;
  padding: 0 32px;
  background: #fff;
  border-radius: 8px;
  .min-tab {
    display: block;
    height: 58px;
    border-bottom: 4px solid #f9f9f9;
    box-sizing: content-box;
    li {
      display: block;
      float: left;
      margin-right: 40px;
      font-size: 16px;
      color: #a9a8ae;
      line-height: 58px;
      border-bottom: 4px solid #f9f9f9;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #a9a8ae;
      }
      &.on {
        border-bottom: 4px solid #e62e37;
        a {
          color: #e62e37;
          font-weight: bold;
        }
      }
    }
  }
  .tab-min {
    padding-top: 20px;
    // 实名信息认证
    .user-info {
      font-size: 14px;
      color: rgba(168, 169, 174, 1);
      line-height: 20px;
      margin-bottom: 21px;
      .left-text {
        text-align: right;
        display: inline-block;
        width: 58px;
        vertical-align: top;
        margin-left: 15px;
        margin-right: 25px;
      }
      .right-text {
        color: #44444f;
        text-align: left;
      }
      .right-img {
        img {
          display: inline-block;
          width: 150px;
          height: 90px;
          margin-right: 30px;
        }
      }
      .btn-set {
        float: right;
        display: block;
        width: 92px;
        height: 34px;
        border-radius: 4px;
        font-size: 14px;
        text-align: center;
        line-height: 34px;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: -9px;
          img {
            width: 100%;
            vertical-align: top;
          }
        }
      }
    }
    // 修改个人信息部分
    .set-user-info {
      .tips {
        margin-top: 8px;
        font-size: 14px;
        color: #a9a8ae;
        line-height: 20px;
      }
      .tips-bank {
        color: #44444f;
        line-height: 20px;
        margin-bottom: 24px;
      }
      .title {
        margin: 16px 0 26px;
        font-size: 20px;
        font-weight: 600;
        color: #44444f;
        line-height: 28px;
        &.bank {
          margin: 0px 0 12px;
        }
      }
    }
    .set-user {
      width: 446px;
      clear: both;
      margin-left: 54px;
    }

    // 修改密码区域
    .set-password-tab {
      float: left;
      display: block;
      margin-bottom: 38px;
      margin-left: 1px;
      li {
        position: relative;
        margin-left: -1px;
        display: block;
        float: left;
        width: 105px;
        height: 34px;
        border: 1px solid rgba(235, 235, 236, 1);
        text-align: center;
        background: #ffffff;
        a {
          display: block;
          width: 100%;
          font-size: 16px;
          color: rgba(168, 169, 174, 1);
          line-height: 34px;
        }
        &.on {
          background: #fafafa;
          a {
            color: #44444f;
          }
        }
      }
    }
    //修改手机号部分
    .set-phone {
      width: 446px;
      clear: both;
      margin-left: 54px;
    }
    //修改密码部分
    .set-password {
      width: 446px;
      clear: both;
      margin-left: 54px;

      .set-tips-text {
        font-size: 14px;
        color: #a8a9ae;
        line-height: 24px;
        white-space: nowrap;
      }
    }

    // 组件样式  form 定位
    /deep/.demo-ruleForm {
      margin-bottom: 32px;
    }
    // 组件样式 表单label文字
    /deep/.el-form-item__label {
      font-size: 14px;
      color: rgba(68, 68, 79, 1);
      line-height: 48px;
    }
    // 组件样式  表单
    /deep/.el-input__inner {
      width: 346px;
      height: 48px;
      border-radius: 4px;
      border: 1px solid rgba(207, 207, 212, 1);
      &::placeholder {
        color: rgba(169, 168, 174, 1);
      }
    }
    // 组件样式  错误提示文字
    /deep/.el-form-item__error {
      top: 24%;
      left: 107%;

      text-align: left;
      white-space: nowrap;
    }
    // 组件样式 错误提示图标
    /deep/.el-input__suffix {
      right: -24px;
    }
    // 组件样式  按钮
    /deep/.el-button {
      width: 216px;
      height: 48px;
      font-size: 16px;
      color: #ffffff;
    }
    // 组件样式 发送验证码按钮
    /deep/.el-form-item__content {
      .send-code {
        position: absolute;
        top: 14px;
        right: 18px;
        display: block;
        font-size: 14px;

        color: #e62e37;
        line-height: 20px;
      }
    }
    /deep/.el-select {
      .el-input__suffix {
        right: 12px;
      }
    }
    /deep/.el-checkbox-group {
      line-height: 48px;
      .text {
        color: #44444f;
        a {
          color: #e62e37;
        }
      }
    }
  }
}
</style>
