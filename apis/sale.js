/**
 * 认筹认购相关接口（欧电云）
 */

import { post, get } from '~/utils/request'

const API_PREFIX = `http://middleend-sit-mo2o.test.h.cn`

// 获取房源列表
// ?productType=1&houseTypes=&unitPriceRange=&totalPriceRange=&sortType=10&stockStatus=&pageNo=1&pageSize=10&storeId=230000000028
export const queryHouseList = (params) => {
  get(`${API_PREFIX}/search/rest/searchList.do`, { params })
}

// 获取户型信息
export const getBuildingOpenTime = (params) => {
  return post(
    `${API_PREFIX}/ouser-web/api/store/getBuildingOpenTime.do`,
    params
  )
}
