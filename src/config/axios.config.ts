// axiosConfig.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 10000, // Thời gian timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Xử lý lỗi toàn cục
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error occurred:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
