<template>
  <div>
    <h3>子组件</h3>
    <button @click="childSendState">子组件发送数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childState: "我是子组件的数据",
      childRefState: "我是子组件ref绑定的数据",
    };
  },
  props: ["parentState"],
  mounted() {
    console.log(this.parentState);
    console.log(this.$parent);
  },
  methods: {
    childSendState() {
      this.$emit("childSendState", this.childState);
    },
  },
};
</script>

<style>
</style>