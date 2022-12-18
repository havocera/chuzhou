import request from '../API/request'
import qs from 'qs'
// 登录接口请求
export function getLoginForm(name, pwd) {
  let data = {
    name,
    pwd
  }
  data = qs.stringify(data)
  return request({
    method: 'post',
    url: 'login',
    data
  })
}
