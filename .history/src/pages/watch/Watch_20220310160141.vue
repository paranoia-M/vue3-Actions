<template>
  <div>
    <h1>watch</h1>

    <p>Ask a yes/no question:<input v-model="question"></p>
    {{x}}
    {{y}}
    <button @click="calculate">计算</button>
  </div>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const question = ref('')
const answer = ref('question 的回答')
const x = ref(0)
const y = ref(0)

const calculate = (() => {
  x.value++
  y.value--
})
/**
 * 
 * 更改dom，根据异步操作的结果去修改另一处的状态时可以使用watch函数在每次响应式状态发生变化时触发的回调
 * 
 * watch的第一个参数:可以是不同形式的'来源'，可以是一个ref，一个reactive，一个getter函数，或多个来源组成的数组
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

// 单个 ref (监听ref对象)
watch(x, (newX, oldX) => {
  console.log(newX, oldX);
})

// getter函数 (监听reactive对象)
watch(() => x.value + y.value, (sum) => {
  console.log(sum);
})

// 多个来源组成的数组 (缉拿听)
watch([x, () => y.value], (newX, newY) => {
  console.log(`x is ${newX} and y is ${newY}`);
})

</script>

<style>
</style>