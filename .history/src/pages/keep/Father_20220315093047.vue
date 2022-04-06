<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

<script setup>
import { shallowRef } from "@vue/reactivity";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";

const current = shallowRef(ChildA);
</script>

<style>
</style>