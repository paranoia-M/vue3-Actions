<template>
  <div>
    <h3>父组件</h3>
    <children-com></children-com>
  </div>
</template>

<script>
import ChildrenCom from "./ChildrenCom.vue";
export default {
  components: {
    ChildrenCom,
  },
};
</script>

<style>
</style>
