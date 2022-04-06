<template>
  <div>
    <h1>watch</h1>

    <p>Ask a yes/no question:<input v-model="question"></p>
  </div>

</template>

<script setup>
import { ref } from "@vue/reactivity";

const question = ref('')
const answer = ref('')
</script>

<style>
</style>