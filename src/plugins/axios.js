import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: '', // api url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 40000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 驗證 token 動作
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use((response) => {
    console.log(response)
    // 回傳錯誤動作，可搭配 toast 顯示錯誤資訊
  },
  (error) => Promise.reject(error),
);

export default service;
