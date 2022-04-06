<template>
  <div>
    <h1>watch</h1>

    <p>Ask a yes/no question:<input v-model="question"></p>
  </div>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const question = ref('')
const answer = ref('question 的回答')

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = '思考中...'
    try { }
  }
})
</script>

<style>
</style>