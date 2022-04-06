import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const service = axios.create({});

// 请求拦截器
service.interceptors.request();
