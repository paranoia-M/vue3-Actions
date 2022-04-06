<template>
  <div>
    <h1>插槽父元</h1>
    <slot-header
      ><template>
        <div>slot header插槽内容</div>
      </template></slot-header
    >
    <slot-item>slot插槽内容</slot-item>
    <slot-footer>slot footer插槽内容</slot-footer>
  </div>
</template>

<script setup>
/**
 * 插槽内容可以访问到父组件的数据，无法发访问到子组件的数据，
 * 任何父组件模板中的东西都是被编译到父组件的作用域中，而任何子组件模板中的东西都只被编译到子组件的作用域中
 *
 * 具名插槽
 *
 *
 */
import SlotFooter from "./SlotFooter.vue";
import SlotHeader from "./SlotHeader.vue";
import SlotItem from "./SlotItem.vue";
</script>

<style>
</style>