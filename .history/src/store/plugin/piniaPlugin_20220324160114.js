import { createPinia } from "pinia";

function SecretPiniaPlugin() {
  return { secret: "我是pinia的插件" };
}

const pinia = createPinia();
