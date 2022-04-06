<template>
  <div>
    <h1>插槽父元</h1>
    <slot-item>slot插槽内容</slot-item>
  </div>
</template>

<script setup>
/**
 * 插槽内容可以访问到父组件的数据，无法发访问到子组件的数据，
 * 任何父组件
 */
import SlotItem from "./SlotItem.vue";
</script>

<style>
</style>