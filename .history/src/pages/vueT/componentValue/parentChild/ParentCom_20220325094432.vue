<template>
  <div>
    <h3>父组件</h3>
    <children-com :parentState="parentState" @childSendState=""></children-com>
  </div>
</template>

<script>
import ChildrenCom from "./ChildrenCom.vue";
export default {
  data() {
    return {
      parentState: "我是父组件的数据",
    };
  },
  components: {
    ChildrenCom,
  },
};
</script>

<style>
</style>
