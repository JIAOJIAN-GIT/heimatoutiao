import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
axios.interceptors.request.use(function (config) {
  // 执行成功时
  let token = window.localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`// 统一注入token
  return config
}, function () {})
export default axios
