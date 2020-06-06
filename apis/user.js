/**
 * 用户账号相关接口
 */
import { post } from '~/utils/request'

// 注册
export const apiRegister = (data) =>
  post('/appapi/broker/uucas/v1/register', data, {
    isLogin: false
  })

// 登录
export const apiLogin = (data) =>
  post('/appapi/broker/uucas/v1/loginUucas', data, {
    isLogin: false
  })

// 验证码登录
export const apiLoginByCaptcha = (data) =>
  post('/appapi/broker/uucas/v1/loginByCode', data)

// 退出
export const apiLogout = (data) => post('/broker/uucas/v1/logout', data)

// 获取用户资料
export const getProfile = () => post('/appapi/broker/member/v1/getProfile')

// 获取短信验证码
export const apiGetCaptcha = (
  data,
  config = {
    headers: { unionId: '', isLogin: false }
  }
) => post('/appapi/broker/uucas/v1/getVerificationCode', data, config)

// 获取认证证件类型选项
export const apiCardType = (data) =>
  post('/appapi/broker/config/v1/getIdCardTypeConfig', data)

// 修改认证信息
export const apiCertModifyProfile = (data) =>
  post('/appapi/broker/member/v1/certModifyProfile', data)

// 滑块功能联调
export const apiDragImg = (data) =>
  post('/appapi/broker/uucas/v1/captchaValidate', data)

// 修改手机号R
export const apiUpdatePhone = (data) =>
  post('/appapi/broker/member/v1/modifyPhoneNumberBySecret', data)

// 修改密码
export const apiResetPassword = (data) =>
  post('/appapi/broker/uucas/v1/resetPassword', data)

// 旧密码方式修改密码
export const apiModifyPassword = (data) =>
  post('/appapi/broker/member/v1/modifyPassword', data)
