import axios from 'axios'
const service = axios.create({
  baseURL: 'https://czapi.wtycms.cn/',
  timeout: 5000     //访问超时的时间限制
});
export default service;