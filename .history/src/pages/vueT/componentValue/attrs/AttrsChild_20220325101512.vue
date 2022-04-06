<template>
  <div>
    <h3>attrs子组件</h3>
    <attrs-child-son></attrs-child-son>
  </div>
</template>

<script>
import AttrsChildSon from "./AttrsChildSon.vue";
export default {
  components: { AttrsChildSon },
};
</script>

<style>
</style>