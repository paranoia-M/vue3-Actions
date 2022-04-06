import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 3 * 1000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-type": "application/x-www-form-urlencoded",
    };

    const token = getCookie("名称");
    if (token) {
      config.params = { token: token };
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.config.responseType !== "blob") {
      if (res.code !== 0) {
        Message({
          message: res.msg || "Error",
          type: "error",
          duration: 3 * 100,
        });
        return Promise.reject(new Error(res.msg || "Error"));
      } else {
        return res;
      }
    }
    return res;
  },
  (error) => {
    let res = error.response;
    if()
  }
);

export default service;
