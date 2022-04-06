<template>
  <div>
    <h3>子组件</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childState: "我是子组件的数据",
    };
  },
  props: ["parentState"],
  mounted() {
    console.log(this.parentState);
  },
  methods: {
    childSendState() {},
  },
};
</script>

<style>
</style>