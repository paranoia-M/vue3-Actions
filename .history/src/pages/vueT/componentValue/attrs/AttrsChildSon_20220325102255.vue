<template>
  <div>
    <h3>attrs孙子组件</h3>
    <input type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  props: { attrsState: { String } },
  mounted() {
    console.log(this.attrsState);
  },
};
</script>

<style>
</style>