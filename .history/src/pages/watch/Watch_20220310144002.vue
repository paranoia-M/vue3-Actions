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


/**
 * 
 * 更改dom，根据异步操作的结果去修改另一处的状态时可以使用watch函数在每次响应式状态发生变化时触发的回调
 * 
 * watch的第一个参数:
 */
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = '思考中...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
  console.log(answer.value);
})

</script>

<style>
</style>