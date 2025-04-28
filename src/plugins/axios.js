import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:8080', // api url
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
    console.log(response)
    return response;
    // 回傳錯誤動作，可搭配 toast 顯示錯誤資訊
  },
  (error) => {
    return Promise.reject(error);
  }

);

export default service;
