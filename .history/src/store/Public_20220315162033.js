import { defineStore } from "pinia";

const PublicStore = defineStore("Public", {
  state: () => {
    return {
      // 所有在这些属性都将自动推断类型
      count: 0,
      name: "zzs&&zwb",
      isAdmin: true,
      newObj: [],
      data: [],
    };
  },
  getters: {
    handleAdd: (state) => {
      return state.count + 1;
    },
  },
  actions: {
    handleFetch: (state) => {
      fetch("https://api.apiopen.top/getJoke")
        .then((res) => res.json())
        .then((data) => {
          state.data = data;
        });
      return state.data;
    },
  },
});
export default PublicStore;
