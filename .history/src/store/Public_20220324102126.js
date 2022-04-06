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
      return state.count + 10000;
    },
    readAdd: number{

    }
  },
  actions: {
    handleFetch() {
      fetch("https://api.apiopen.top/getJoke")
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    },
    handleLog() {
      console.log("action 方法");
    },
  },
});
export default PublicStore;
