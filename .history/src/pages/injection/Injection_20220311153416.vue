<template>
  <div>
    <h1>
      父组件
      <inject-child></inject-child>
    </h1>
  </div>
</template>

<script setup>
/**
 *
 * 依赖注入
 *
 * 当我们需要从父组件向子组件传递数据时，会用到props，如果子组件的子组件也需要这个props，就要这样将props传递下* 去，如果层级很深，就要链式传递很多
 *
 * 为了解决这一问题就是用provide 和 inject； 共给 和 注入
 * 任何后代的组件树，无论层级有多深，都可以注入由父组件供给整条链路的依赖。
 *
 *
 *
 *
 *
 */

import InjectChild from "./InjectChild.vue";
</script>

<style>
</style>