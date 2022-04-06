<template>
  <div>
    <h3>孙子组件</h3>
    {{ key }}
  </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";

const key = inject("key");
console.log(key.value);
</script>

<style>
</style>