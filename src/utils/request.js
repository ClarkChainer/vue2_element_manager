// 基于axios封装的请求
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request部分
request.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// response部分
request.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default request
