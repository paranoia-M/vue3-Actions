import { createApp } from "vue";
import App from "./App.vue";

// 全局注册组件
const app = new createApp();
app.component("my-component", {});
createApp(App).mount("#app");
