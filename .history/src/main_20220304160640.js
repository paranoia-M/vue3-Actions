import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// 等价于
createApp({
  data: "main的数据",
});
