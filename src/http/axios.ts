import axios from "axios";

const $axios = axios.create({
    baseURL:'https://api.unsplash.com/',
})

$axios.interceptors.request.use(
    (config) => {
        const token = import.meta.env.VITE_ACCESS_KEY
        
      if (token) {
        config.headers['Authorization'] = `Client-ID ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
)

export default $axios