 <!--
 * @Author: your name
 * @Date: 2022-03-07 15:47:45
 * @LastEditTime: 2022-03-09 09:40:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-demo\src\components\demo\Pra3.vue
-->

<script setup>
import { ref } from "@vue/reactivity"
import {
  onMounted, onUnmounted, onUpdated, onBeforeMount, onBeforeUpdate, onRenderTriggered, onBeforeUnmount, onErrorCaptured, onRenderTracked, onActivated, onDeactivated, onServerPrefetch
} from "@vue/runtime-core"
const message = ref('')
/* 创建 */
/* 挂载 */
/* 更新 */
/* 销毁 */
onBeforeMount(() => {
  console.log('生命周期onBeforeMount: 在挂载之前被调用，相关的render函数首次被调用');
})
onMounted(() => {
  console.log('生命周期onMounted：组件挂载时被调用');
})
onBeforeUpdate(() => {
  console.log('生命周期onBeforeUpdate：数据更新时调用，发生在虚拟dom打补丁之前，');
})
onUpdated(() => {
  console.log('生命周期onUpdated');
})
onUnmounted(() => {
  console.log('生命周期onUnmounted');
})
onBeforeUnmount(() => {
  console.log('生命周期onBeforeUnmount');
})
onErrorCaptured(() => {
  console.log('生命周期onErrorCaptured');
})
onRenderTracked(() => {
  console.log('生命周期onRenderTracked');
})
onRenderTriggered(() => {
  console.log('生命周期onRenderTriggered');
})
onActivated(() => {
  console.log('生命周期onActivated');
})
onDeactivated(() => {
  console.log('生命周期onDeactivated');
})
onServerPrefetch(() => {
  console.log('生命周期onServerPrefetch');
})

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
</style> */