<template>
  <div>
    <h2>子组件</h2>
    {{ title }}
    {{ $attrs }}
    <button v-bind="$attrs" @click="$emit('changeColor')">改变颜色</button>
    <slot class="slot"></slot>
  </div>
</template>

<script setup>
import { useAttrs } from "@vue/runtime-core";

defineProps(["title"]);

const attrs = useAttrs();
console.log(attrs);
</script>

<style>
</style>