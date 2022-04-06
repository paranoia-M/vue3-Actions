import { defineStore } from "pinia";

export const PublicStore = defineStore("Public", {
  state: () => {
    return {
      // 所有在这些属性都将自动推断类型
      count: 0,
      name: "zzs&&zwb",
      isAdmin: true,
    };
  },
  getters: {},
});
