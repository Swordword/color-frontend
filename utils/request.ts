import axios from 'axios'

const isDevelopment = process.env.NODE_ENV === 'development'

const instance = axios.create({
  baseURL: isDevelopment ? 'http://127.0.0.1:8080/v1' : '',
  withCredentials: true,
  timeout: 80 * 1000,
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (response) => {
    console.log('response.status', response.status)
    const res = response.data
    return Promise.resolve(res)
  },
  (error) => {
    throw new Error(error)
  }
)

export default instance
