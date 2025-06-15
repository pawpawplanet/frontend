import axios from 'axios';
import { useToast } from '@/plugins/toast/toast-plugin.js'

const toast = useToast()

// create an axios instance
const servicePage = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // api url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 40000, // request timeout
});

// request interceptor
servicePage.interceptors.request.use(
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
servicePage.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.status !== 'success') {
      toast.show(data.message, 'error')
    }
    return data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }

);

export default servicePage;
