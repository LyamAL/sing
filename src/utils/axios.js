import axios from 'axios'
import {Toast} from 'vant'
import router from '../router'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://123.57.255.174:8083' : 'http://123.57.255.174:8083'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'//请求体中的数据会以表单的形式发送到后端

axios.interceptors.response.use(res => {
  // console.log(res)
  // 请求成功对响应数据做处理，此处返回的数据是axios.then(res)中接收的数据
  if (res.status === 0 || res.status === 200) {
    // code值为 0 或 200 时视为成功
    return Promise.resolve(res)
  }
  return Promise.reject(res)
}, err => {
  // console.log(err)
  Toast.fail('服务端异常！')
  return Promise.reject(err)
})

export default axios
