import { defineStore } from "pinia";

const PublicStore = defineStore("Public", {
  state: () => {
    return {
      // 所有在这些属性都将自动推断类型
      count: 0,
      name: "zzs&&zwb",
      isAdmin: true,
      newObj: [],
    };
  },
  getters: {
    handleAdd: (state) => {
      return state.count + 1;
    },
  },
  actions: {},
});
export default PublicStore;
