<template>
  <div>
    <h2 class="header">插槽子元素header</h2>
    <slot name="header-top"></slot>
    <slot name="header-middle"></slot>
    <slot name="header-bottom"></slot>
  </div>
</template>

<script setup>
const blueColor = "blue";
</script>

<style>
.header {
  color: v-bind(blueColor);
}
</style>