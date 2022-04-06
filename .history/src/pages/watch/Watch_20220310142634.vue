<template>
  <div>
    <h1>watch</h1>

    <p><input v-model="question"></p>
  </div>

</template>

<script setup>
import { ref } from "@vue/reactivity";

const question = ref('')
</script>

<style>
</style>