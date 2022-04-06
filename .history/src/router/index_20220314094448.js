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
    {
      path: "/list",
      name: "list",
      component: defineAsyncComponent(() => import(`../pages/list/List.vue`)),
    },
    {
      path: "/watch",
      name: "watch",
      component: defineAsyncComponent(() => import(`../pages/watch/Watch.vue`)),
    },
    {
      path: "/slot",
      name: "slot",
      component: defineAsyncComponent(() => import(`../pages/slot/Slot.vue`)),
    },
    {
      path: "/injection",
      name: "injection",
      component: defineAsyncComponent(() =>
        import(`../pages/injection/Injection.vue`)
      ),
    },
    {
      path: "/combination",
      name: "combination",
      component: defineAsyncComponent(() =>
        import(`../pages/combination/Combination.vue`)
      ),
    },
  ],
});

export default router;
