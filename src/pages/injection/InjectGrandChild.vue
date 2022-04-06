<template>
  <div>
    <h3>孙子组件</h3>
    {{ value }}
    <button @click="newValue">更新后的供给</button>
  </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";

const { value, newValue } = inject("key");
</script>

<style>
</style>