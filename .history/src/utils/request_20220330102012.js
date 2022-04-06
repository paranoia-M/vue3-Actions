import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 3 * 1000,
});

// 请求拦截器
service.interceptors.request.use((config) => {
  config.data = JSON.stringify(config.data);
  config.headers;
});

// 响应拦截
service.interceptors.response.use((response) => {});

export default service;
