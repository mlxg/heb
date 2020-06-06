/**
 * 城市/楼盘/认购相关接口，
 */
import { post } from '~/utils/request'

// 热门楼盘
export const apiGetPopularBuildings = (data) =>
  post('/backapi/prod/popular/app/list', data)

// 获取楼盘详情信息
export const apiGetDetailsBaseInfo = (data) =>
  post('/backapi/prod/prod/details/baseInfo/' + data)

// 热卖户型
export const apiGetDetailsHotLayout = (data) =>
  post('/backapi/prod/prod/details/hotLayout/' + data)

// 特价房源
export const apiGetDetailsSpecial = (data) =>
  post('/backapi/prod/prod/details/discount/' + data)
// 楼盘相册
export const apiGetDetailsSpics = (prodId) =>
  post('/backapi/prod/prod/details/pics/' + prodId)

// 周边配套
export const apiGetSupporting = (prodId) =>
  post('/backapi/prod/prod/details/supporting/' + prodId)

// 猜你喜欢
export const apiGetGuessBuilding = (data) =>
  post('/backapi/prod/prod/guessBuilding', data)

// 楼盘筛选标签
export const apiQueryAllFilterLabel = (place) =>
  post(`/backapi/prod/labelInfo/queryAllFilterLabel/${place}`) // 1 首页,  2 楼盘频道

// 楼盘列表
export const apiQueryAppProductListByParam = (data) =>
  post('/backapi/prod/prod/queryAppProductListByParam', data)

// 为您推荐楼盘列表
export const apiRecommendBuilding = (data) =>
  post('/backapi/prod/prod/recommendBuilding', data)

// 获取楼盘省市列表信息
export const apiGetPcMapperByLevel = (level) =>
  post('/backapi/prod/baseInfo/getPcMapperByLevel/' + level)

// 热门标签
export const apiGetHotLabels = (data) =>
  post('/backapi/prod/labelInfo/hotLabel', data)

// 获取有楼盘的省
export const getProvPcMapperDto = (data) =>
  post('/backapi/prod/baseInfo/getProvPcMapperDto', data)

// 获取某省的楼盘
export const getProductsByProvId = (ProvId) =>
  post(`/backapi/prod/baseInfo/getProductsByProvId/${ProvId}`)

// 置业顾问列表
export const apiZygwList = (data) => post('/backapi/prod/prod/zygwList', data)

// 置业顾问详情
export const apiZygwDetail = (data) =>
  post('/backapi/prod/prod/zygwDetail', data)
