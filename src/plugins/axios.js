import axios from 'axios';
// import { useToast } from '@/plugins/toast/toast-plugin.js'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // api url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 40000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const { data } = response
    return data.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }

);

export default service;
