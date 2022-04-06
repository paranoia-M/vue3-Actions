import { createApp, h } from "vue";
import App from "./App.vue";
// import * as Vue from "vue";

// console.log(Vue);
const app = createApp(App).mount("#app");
console.log(app.use());

// 应用配置
// app.config.errorHandle = (err) => {
//   console.log(err);
// };
// 等价于
// createApp(
//   {
//     data() {
//       return {
//         data: "main的数据",
//       };
//     },
//     render: () => h(App),
//   },
//   { data: "main改变后的数据" }
// ).mount('#app');

// 等价于
// createApp(App).use(router).use(store).mount('#app')
