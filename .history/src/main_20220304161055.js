import { createApp, h } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// 等价于
createApp(
  {
    data() {
      return {
        data: "main的数据",
      };
    },
    render: () => h(App),
  },
  { data: "main改变后的数据" }
);
