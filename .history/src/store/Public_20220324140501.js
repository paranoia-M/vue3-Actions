import { defineStore } from "pinia";

const PublicStore = defineStore("Public", {
  state: () => {
    return {
      // 所有在这些属性都将自动推断类型
      count: 0,
      name: "zzs&&zwb",
      isAdmin: true,
      newObj: [],
      arr: ["你好", "再见", "晚上好"],
    };
  },
  getters: {
    handleAdd: (state) => {
      return state.count + 10000;
    },
    changeAdd() {
      console.log(" getter 里面的this", this);
      return this.handleAdd + 99;
    },
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
    handleArr() {
      // return state.arr.push("我是新加的内容");
      console.log(this.state);
    },
  },
});
export default PublicStore;
