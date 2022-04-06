<template>
  <div>
    <p>可组合函数，鼠标跟踪功能 {{ x }},{{ y }}</p>
  </div>
</template>

<script setup>
/**
 *
 * 可组合函数
 *
 * 可组合函数是一个利用vue组合式api来封装和复用有逻辑状态的函数
 *
 */
import { useMouse } from "./common/Mouse.vue";

const { x, y } = useMouse();
</script>

<style>
</style>
