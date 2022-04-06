import { createApp, h } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// 等价于
createApp({
  // 你想在这里绑定vue options的各个属性
  data() {
    return {
      name: '村花'
    }
  },
  method: {},
  computed: {},
  ...
  // 最后把你首屏渲染的App放上去,注意这里的h需要你去vue里解构出来
  render: () => h(App)
}, {name: '靓仔'}).mount('#app')