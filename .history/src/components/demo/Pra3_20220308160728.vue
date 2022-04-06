<!--
 * @Author: your name
 * @Date: 2022-03-07 15:47:45
 * @LastEditTime: 2022-03-08 16:06:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-demo\src\components\demo\Pra3.vue
-->

<script setup>
import { ref } from "@vue/reactivity"
import { onMounted, onUpdated } from "@vue/runtime-core"
const message = ref('')
onMounted(() => {
  console.log('生命周期onMounted');
})
onUpdated(() => {
  console.log('生命周期onUpdated');
})
omUnmo

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