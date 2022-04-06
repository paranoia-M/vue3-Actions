export default {
  install: (app, options) => {
    //具体的插件代码
    // 按 key 名翻译文本内容的函数
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      });
    };
  },
};
