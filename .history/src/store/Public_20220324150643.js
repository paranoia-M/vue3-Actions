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
      requestData: "",
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
      const response = fetch("https://api.apiopen.top/getJoke")
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      return response;
    },
    async handleRequest() {
      const data = await this.handleFetch();
      console.log(3000, data);
      this.requestData = data;
      return this.requestData;
    },
    handleLog() {
      console.log("action 方法");
    },
    handleArr() {
      return this.arr.push("我是新加的内容");
      // console.log(this.arr);
    },
  },
});
export default PublicStore;