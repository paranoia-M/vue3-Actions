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
 * 默认情况下keep-alive会不做区分的缓存
 */
import { shallowRef } from "@vue/reactivity";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";

const current = shallowRef(ChildA);
</script>

<style>
</style>