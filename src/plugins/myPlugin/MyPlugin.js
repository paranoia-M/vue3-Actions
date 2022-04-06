export default {
  install: (app, options) => {
    //具体的插件代码
    // 按 key 名翻译文本内容的函数
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };

    //插件中的依赖共给/注入
    // 在插件中，我们可以通过 provide 来为插件用户供给一些内容。举个例子，我们可以将 options 参数提供给整个应用，以便各个组件都能使用这个翻译字典对象。

    app.provide("MyPlugin", options);
  },
};
