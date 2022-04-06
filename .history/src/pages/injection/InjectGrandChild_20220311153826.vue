<template>
  <div>
    <h3>孙子组件</h3>
  </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";

const key = inject("key");
</script>

<style>
</style>