import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { defineAsyncComponent } from "vue";

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: defineAsyncComponent(() =>
        import(`../components/Component.vue`)
      ),
    },
    {
      path: "/*",
      redirect: "/",
    },
    //父组件向子组件传递事件处理函数
    {
      path: "/list",
      name: "list",
      component: defineAsyncComponent(() => import(`../pages/list/List.vue`)),
    },
    // watch 监听
    {
      path: "/watch",
      name: "watch",
      component: defineAsyncComponent(() => import(`../pages/watch/Watch.vue`)),
    },
    // 插槽使用
    {
      path: "/slot",
      name: "slot",
      component: defineAsyncComponent(() => import(`../pages/slot/Slot.vue`)),
    },
    // 依赖注入
    {
      path: "/injection",
      name: "injection",
      component: defineAsyncComponent(() =>
        import(`../pages/injection/Injection.vue`)
      ),
    },
    // 可组合函数
    {
      path: "/combination",
      name: "combination",
      component: defineAsyncComponent(() =>
        import(`../pages/combination/Combination.vue`)
      ),
    },
    // 自定义指令
    {
      path: "/define",
      name: "define",
      component: defineAsyncComponent(() =>
        import(`../pages/define/DefineV.vue`)
      ),
    },
  ],
});

export default router;
