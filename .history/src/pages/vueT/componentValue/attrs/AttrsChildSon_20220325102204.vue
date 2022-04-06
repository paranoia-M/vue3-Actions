<template>
  <div>
    <h3>attrs孙子组件</h3>
    <input type="text" />
  </div>
</template>

<script>
export default {
  props: {attrsState: {String}}
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style>
</style>