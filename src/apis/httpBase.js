import axios from 'axios'
import { Message } from 'element-ui'
import $router from '@/router'
const baseConfig = {
  // 'baseURL': process.env.VUE_APP_BASE_API,
  'tiemout': 10000,
  'headers': {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }
}

const myAxios = axios.create(baseConfig)

// 请求前拦截
myAxios.interceptors.request.use(
  config => {
    if(sessionStorage.getItem('token')){
      config.headers.token = sessionStorage.getItem('token')
    }
    return config
  },
  error =>{
    Promise.reject(error)
  }
)
// 请求后拦截
myAxios.interceptors.response.use(
  response => {
    if(response.data.sucess === true){
      return response.data
    }
    Message({
      'message': response.data.message,
      'type': 'error',
      'duration': 5000
    })
    return Promise.reject(response.data)

  },
  error =>{
    Promise.reject(error)
  }
)
export default myAxios