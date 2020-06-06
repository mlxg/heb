/**
 * 经纪人（会员）相关接口
 */
import { post } from '~/utils/request'

// 我的佣金状态统计
export const apiBrokerageNum = () =>
  post('/appapi/broker/recommend/v1/brokerageNum')

// 我的佣金
export const apiBrokerage = (data) =>
  post('/appapi/broker/recommend/v1/brokerage', data)

// 我的佣金明细
export const apiBrokerageDetail = (data) =>
  post('/appapi/broker/recommend/v1/brokerageDetail', data) // 佣金明细

// 会员等级和权益信息
export const apiGetMemberLevelAndEquity = () =>
  post('/appapi/broker/personal/v1/getMemberLevelAndEquity')

// 我的客户推荐列表
export const apiRecommendList = (data, config) =>
  post('/appapi/broker/recommend/v1/recommendList', data, config)
// 我的客户推荐状态统计
export const apiRecommendCount = () =>
  post('/appapi/broker/recommend/v1/recommendCount')
// 我的客户推荐成交状态统计
export const apiRecommendDealCount = () =>
  post('/appapi/broker/recommend/v1/recommendDealCount')
// 我的推荐进展
export const apiRecommendProgress = (data) =>
  post('/appapi/broker/recommend/v1/recommendProgress', data)
// 延长保护期
export const apiActivate = (data) =>
  post('/appapi/broker/recommend/v1/activateVisited', data)
// 佣金比例label
export const apiRateList = (data) =>
  post('/appapi/broker/recommend/v1/rateList', data)
// 佣金比例转换
export const apiSetBrokerageMortgage = (data) =>
  post('/appapi/broker/recommend/v1/setBrokerageMortgage', data)
// 删除已经过期的推荐
export const apiDelRecommend = (data) =>
  post('/appapi/broker/recommend/v1/deleteCst', data)

// 根据数据类型列表查询字典数据
export const apiQueryProductByTypes = (data) =>
  post(`/backapi/dictionary/appapi/sysconfig/v1/queryProductByTypes`, data)

// 推荐信息录入
export const apiRecommendCustomer = (data) =>
  post('/appapi/broker/recommend/v1/recommendCustomer', data)
