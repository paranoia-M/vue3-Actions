import { createPinia } from "pinia";

function SecretPiniaPlugin(context) {
  console.log(context);
  return { secret: "我是pinia的插件" };
}

const pinia = createPinia();
pinia.use(SecretPiniaPlugin);
pinia.use(({ store }) => {
  store.hello = "world";
});
