<template>
  <div>
    <h1>watch</h1>

    <p>Ask a yes/no question:<input v-model="question"></p>
    {{x}}
    {{y}}
    {{obj.name}}
    <button @click="calculate">计算</button>
  </div>

</template>

<script setup>
import { ref, reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const question = ref('')
const answer = ref('question 的回答')
const x = ref(0)
const y = ref(0)
const obj = reactive({ name: 'zzs' })

const calculate = (() => {
  x.value++
  y.value--
  obj.name = 'zeb'
})
/**
 * watch
 * 更改dom，根据异步操作的结果去修改另一处的状态时可以使用watch函数在每次响应式状态发生变化时触发的回调
 * 
 * watch的第一个参数:可以是不同形式的'来源'，可以是一个ref，一个reactive，一个getter函数，或多个来源组成的数组
 * 
 * 深层侦听器:直接给watch传一个响应式对象，会隐式的创建一个深层侦听器，该回调函数在所有嵌套的变更时都会被触发，与getter的差异在于getter是在一个reactive对象里面的某个属性发生改变时才会触发回调，当然，如果给getter加上{deep:true}也可以变成深层响应
 * 
 * watchEffect
 * watch是懒执行的，
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

// getter函数 (监听reactive 的某个对象，可以加上{deep: true}变为深层侦听器)
watch(() => obj.name, (newName, oldName) => {
  console.log(newName, oldName);
}, { deep: true })

// 多个来源组成的数组 ()
watch([x, () => y.value], (newX, newY) => {
  console.log(`x is ${newX} and y is ${newY}`);
})

</script>

<style>
</style>