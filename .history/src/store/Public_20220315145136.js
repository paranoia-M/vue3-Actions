import { defineStore } from "pinia";

export const PublicStore = defineStore("Public", {
  state: () => {
    return {
      count: 0,
      name: "zzs&&zwb",
      isAdmin: true,
    };
  },
  getters: {},
});
