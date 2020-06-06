import cookieUtil from '~/utils/cookie'
import config from '~/config'

export const state = () => ({
  token: '',
  unionId: '',
  city: {
    cityCode: config.DEFAULT_CITYCODE,
    cityName: config.DEFAULT_CITYNAME
  },
  userInfo: {}
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload
  },
  setUnionId(state, payload) {
    state.unionId = payload
  },
  setCity(state, payload) {
    state.city = payload
  },
  setUserInfo(state, payload) {
    state.userInfo = payload
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const cookieObj = cookieUtil.parse(req.headers.cookie)
    const { token, unionId, cityCode, cityName } = cookieObj
    commit('setToken', token)
    commit('setUnionId', unionId)
    if (cityCode && cityName) {
      commit('setCity', { cityCode, cityName })
    }
  }
}
