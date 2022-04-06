import { createApp } from "vue";
import App from "./App.vue";

// 全局注册组件
const app = new createApp();
createApp(App).mount("#app");
