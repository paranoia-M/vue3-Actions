<template>
  <div>
    <h3>attrs父组件</h3>
    <attrs-child @changeData :attrsState="attrsState"></attrs-child>
  </div>
</template>

<script>
import AttrsChild from "./AttrsChild.vue";
export default {
  data() {
    return {
      attrsState: "我是attrs父组件里面的数据",
    };
  },
  components: { AttrsChild },
  methods: {
    changeData(value) {
      this.attrsState = value;
    },
  },
};
</script>

<style>
</style>