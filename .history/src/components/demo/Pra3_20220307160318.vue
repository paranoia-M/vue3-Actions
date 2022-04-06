
<script setup>
import { ref } from "@vue/reactivity"

const message = ref('')
return message
</script>
<template>
  <div>
    <p>表单相关</p>
    <p>输入的信息: {{message}}</p>
    <input type="text" placeholder="请输入" v-model="message">
    <input type="checkbox" id="checkbox" v-model="message">
    <label for="checkbox">{{ message }}</label>
  </div>
</template>
<style>
</style>