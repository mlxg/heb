<template>
  <el-dialog :visible.sync="dialogFormVisible">
    <!-- 登录 -->
    <section v-if="isLogin" class="login-box">
      <div class="hd">
        <h2 class="title">登录</h2>
        <p class="sub-title">
          没有账号
          <span class="link">去注册</span>
          <span class="fr" @click="forgetPwd">忘记密码？</span>
        </p>
      </div>
      <div class="bd">
        <div class="nav-tabs">
          <div class="nav-tabs">
            <div
              v-for="(item, index) in navList"
              :key="index"
              :class="{ active: loginMode === index }"
              class="nav"
              @click="loginMode = index"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="con">
          <el-form ref="loginForm" :model="loginForm" :rules="rules">
            <el-form-item prop="phone">
              <el-input
                v-model="loginForm.phone"
                type="tel"
                placeholder="请输入手机号"
              />
            </el-form-item>
            <el-form-item v-if="loginMode === 0" prop="pwd" class="mb0">
              <el-input
                v-model="loginForm.pwd"
                type="password"
                placeholder="请输入密码"
              />
            </el-form-item>

            <el-form-item
              v-else-if="loginMode === 1"
              prop="captcha"
              class="mb0"
            >
              <el-input
                v-model="loginForm.captcha"
                type="number"
                placeholder="请输入验证码"
              />
              <button class="send-btn">
                <span v-if="countDown === 0" class="default">发送验证码</span>
                <span v-else class="countdown">{{ countDown }}s</span>
              </button>
            </el-form-item>
            <el-form-item class="habit-box">
              <el-checkbox v-model="rememberMe" class="fl">
                记住账号
              </el-checkbox>
              <el-checkbox v-model="loginWeek" class="fr">
                7天内免登录
              </el-checkbox>
            </el-form-item>
            <el-form-item class="mb0">
              <el-button
                class="btn block login-btn"
                type="primary"
                @click="toLogin('loginForm')"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="note-box">
          登录即代表同意
          <span class="link">《XXX用户协议》</span>
          及
          <span class="link">《XXX隐私政策》</span>
        </div>
      </div>
    </section>

    <!-- 注册/忘记密码 -->
    <section v-else class="register-box">
      <div class="hd">
        <template v-if="isRegister">
          <h2 class="title">手机号码注册</h2>
          <p class="sub-title">
            已有账号
            <span class="link">去登录</span>
          </p>
        </template>
        <template v-else>
          <h2 class="title">找回密码</h2>
          <p class="sub-title">
            <span class="return">&lt; 返回帐号密码登录</span>
          </p>
        </template>
      </div>
      <div class="bd">
        <el-form ref="registerForm" :model="registerForm" :rules="rules">
          <el-form-item label="请输入手机号" prop="phone">
            <el-input
              v-model="registerForm.phone"
              type="tel"
              placeholder="请输入手机号"
            />
          </el-form-item>
          <el-form-item label="请输入短信验证码" prop="captcha">
            <el-input
              v-model="registerForm.captcha"
              type="number"
              placeholder="请输入短信验证码"
            />
            <button class="send-btn">
              <span v-if="countDown === 0" class="default">发送验证码</span>
              <span v-else class="countdown">{{ countDown }}s</span>
            </button>
          </el-form-item>
          <el-form-item label="请设置登录密码" prop="resetPwd">
            <el-input
              v-model="registerForm.resetPwd"
              type="password"
              placeholder="密码需包含数字、字母，且不少于8位"
            />
          </el-form-item>
          <el-form-item label="请再次确登录密码" prop="checkPwd">
            <el-input
              v-model="registerForm.checkPwd"
              type="password"
              placeholder="请再次确认登录密码"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="registerForm.agree" class="note">
              已经阅读并同意<span class="link">《恒房通官网隐私保护政策》</span>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              class="btn block"
              type="primary"
              @click="submitForm('registerForm')"
            >
              {{ isRegister === true ? '注册' : '修改密码' }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </el-dialog>
</template>

<script>
const PhoneRegex = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

export default {
  data() {
    const checkPhone = (rule, value, callback) => {
      if (!PhoneRegex.test(value)) {
        callback(new Error('请输入正确手机号'))
      } else {
        callback()
      }
    }
    // const loginPwd = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'))
    //   } else {
    //     if (this.loginForm.pwd !== '') {
    //       this.$refs.loginForm.validateField('pwd')
    //     }
    //     callback()
    //   }
    // }
    // const loginCaptcha = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'))
    //   } else if (value !== this.ruleForm.captcha) {
    //     callback(new Error('两次输入密码不一致!'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      dialogFormVisible: false,
      isLogin: false,
      isRegister: false,
      loginMode: 0,
      navList: [{ name: '账号密码登录' }, { name: '手机验证码登录' }],
      countDown: 0,
      rememberMe: false,
      loginWeek: false,
      loginForm: {
        phone: '',
        captcha: '',
        pwd: ''
      },
      registerForm: {
        phone: '',
        captcha: '',
        resetPwd: '',
        checkPwd: '',
        agree: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            validator: checkPhone,
            message: '请输入正确的手机号',
            trigger: 'blur'
          }
        ],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        resetPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        checkPwd: [
          { required: true, message: '请输入确认密码', trigger: 'blur' }
        ],
        captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    forgetPwd() {
      // 忘记密码
      console.log('忘记密码')
    },
    toLogin(formName) {
      switch (String(this.loginMode)) {
        case '0': // 账号密码登录
          this.pwdLogin(formName)
          break
        case '1': // 短信验证码登录
          this.captchaLogin(formName)
          break
        default:
      }

      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    pwdLogin(formName) {
      console.log('账号密码登录', formName)
    },
    captchaLogin(formName) {
      console.log('短信验证码登录', formName)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/global.less';

/deep/ .el-dialog {
  .center;
  margin-top: 0 !important;
  width: 530px;
  border-radius: 8px;
  overflow: hidden;

  &__header,
  &__body {
    padding: 0;
  }

  &__headerbtn {
    top: 20px;
    right: 30px;
    font-size: 22px;
    line-height: 24px;
    font-weight: bold;

    .el-dialog__close {
      color: rgba(169, 168, 174, 1);

      &:hover {
        color: rgba(131, 130, 136, 1);
      }
    }
  }
}

/deep/ .el-form-item {
  position: relative;
  margin-bottom: 24px;

  &.is-error {
    margin-bottom: 16px;
  }

  &.mb0 {
    margin-bottom: 0;
  }

  &__label {
    margin-bottom: 16px;
    position: relative;
    padding-right: 24px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(68, 68, 79, 1);
    line-height: 28px;

    &::before {
      position: absolute;
      top: 4px;
      right: 0;
      font-weight: bold;
      font-size: 24px;
    }
  }

  &__error {
    position: relative;
    top: 0;
    padding-top: 8px;
    color: rgba(255, 0, 12, 1);
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }

  &__content {
    font-size: 14px;
    color: rgba(68, 68, 79, 1);
    line-height: 20px;
    text-align: center;
  }

  .el-input__inner {
    height: 52px;
    padding: 0 20px;
    line-height: 52px;
    border-color: rgba(207, 207, 212, 1);
    border-radius: 4px;
  }
}

.login-box,
.register-box {
  // &:extend(.center);
  width: 530px;
  background-color: #fff;
  font-size: 16px;
  line-height: 22px;
  color: rgba(68, 68, 79, 1);

  /deep/ .el-checkbox__label {
    font-size: 16px;
    line-height: 22px;
    color: rgba(68, 68, 79, 1);
  }

  .link {
    color: #e62e37;
  }

  .hd {
    padding: 20px 62px 22px;
    border-bottom: solid 1px #ebebec;

    .title {
      margin-bottom: 10px;
      font-size: 28px;
      font-weight: bold;
      color: rgba(68, 68, 79, 1);
      line-height: 32px;
    }
  }

  .bd {
    padding: 28px 66px 46px;

    .nav-tabs {
      height: 50px;
      border-bottom: solid 1px #ebebec;
      font-size: 20px;
      font-weight: bold;
      line-height: 28px;
    }

    .nav {
      position: relative;
      height: 50px;
      margin-bottom: 30px;
      &:extend(.fl);
      margin-right: 32px;
      color: rgba(169, 168, 174, 1);
      cursor: pointer;

      &:hover {
        color: rgba(131, 130, 136, 1);
      }

      &.active {
        color: rgba(68, 68, 79, 1);

        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 5px;
          background-color: rgba(230, 46, 55, 1);
        }
      }
    }
  }

  .habit-box {
    margin: 18px 0 28px;
  }

  .el-form-item {
    .send-btn {
      position: absolute;
      top: 0;
      right: 28px;
      width: 90px;
      padding: 0;
      text-align: center;
      color: rgba(230, 46, 55, 1);
      font-size: 16px;
      line-height: 52px;
      border-width: 0;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .btn.block {
    width: 390px;
    height: 64px;
    box-shadow: 0 9px 12px -4px rgba(255, 210, 212, 1);
    border-radius: 6px;
    font-size: 22px;
  }

  .login-btn {
    margin-bottom: 18px;
  }
}

.register-box {
  .el-form-item .send-btn {
    top: 45px;
  }
}
</style>
