<template>
  <div>
    <h3>attrs孙子组件</h3>
    <input type="text" @input="handleInput" />
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
  created() {
    this.inputValue = this.attrsState;
  },
  mounted() {
    console.log(this.$listener);
    console.log(this.$attrs);
  },
  methods: {
    handleInput() {
      this.$emit("changeData", this.inputValue);
    },
  },
};
</script>

<style>
</style>