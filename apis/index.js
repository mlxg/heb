import * as userApi from './user'
import * as prodApi from './prod'
import * as brokerApi from './broker'

export default {
  ...userApi,
  ...prodApi,
  ...brokerApi
}
