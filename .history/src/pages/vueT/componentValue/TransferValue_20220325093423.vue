<template>
  <div>
    {{ msg }}
    <div class="box">
      <parent-child></parent-child>
    </div>
  </div>
</template>

<script>
import parentChild from "./parentChild/index.vue";
export default {
  data() {
    return {
      msg: "我是vue2里面的组件传值",
    };
  },
  components: {
    parentChild,
  },
};
</script>

<style scoped>
.box {
  border: red solid 1px;
}
</style>