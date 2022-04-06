<template>
  <div>
    <h2>插槽子元素footer</h2>
    <slot :></slot>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const footerMsg = ref("子组件的数据");
</script>

<style>
</style>