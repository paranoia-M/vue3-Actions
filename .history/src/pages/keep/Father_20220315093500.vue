<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="ChildA" /> A</label>
    <label><input type="radio" v-model="current" :value="ChildB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

<script setup>
/**
 *
 * 默认情况下keep-alive会不做区分的缓存它之中的任何组件，但我们可以通过 include 和 exclude prop 来定制该行为，这两个 prop 的值都是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两个类型的一个数组：
 *
 * 我们可以通过传入 max prop 来限制组件缓存的最大数量
 */
import { shallowRef } from "@vue/reactivity";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";

const current = shallowRef(ChildA);
</script>

<style>
</style>