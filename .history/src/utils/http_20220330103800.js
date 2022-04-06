// 针对各种请求的封装

import request from "./request";
const http = {
  get(url, params) {
    const config = {
      method: "get",
    };
  },
  post(url, params) {},
  put(url, params) {},
  delete(url, params) {},
};

export default http;
