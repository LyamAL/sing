
import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://223.3.67.250:8081' : 'http://223.3.67.250:8081'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'//请求体中的数据会以表单的形式发送到后端

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.status != 0) {
    console.log('res',res)
    if (res.data.message) Toast.fail(res.data.message)
    //if (res.data.status == 416) {
    //  router.push({ path: '/Home' })
    //}
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios
