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
  ],
});

export default router;
