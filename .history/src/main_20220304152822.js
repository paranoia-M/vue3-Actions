import { createApp, Vue } from "vue";
import App from "./App.vue";

// 全局注册组件
const app = Vue.createApp({});
app.component("my-component", {
  data() {
    return {
      name: "zzs",
    };
  },

  template: `<div>{{name}}</div>`,
});
createApp(App).mount("#app");
