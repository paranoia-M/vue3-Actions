 <!--
 * @Author: your name
 * @Date: 2022-03-07 15:47:45
 * @LastEditTime: 2022-03-09 09:58:13
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
/**
 * 
 * 将vue2的生命周期钩子更新到vue3
 * 1. beforeCreate --> setup()
 *    vue2:用于创建所有的响应数据和事件，因此他无法访问组件的任何响应数据和事件
 * 2. created --> setup()
 *    vue2:在组件创建时访问
 * 3. beforeMount --> onBeforeMount
 * 4. mounted --> onMounted
 * 5. beforeUpdate --> onBeforeUpdate
 * 6. updated --> onUpdate
 * 7. beforeDestroy -->  onBeforeUnmount
 * 8. destroyed -->  onUnmounted
 * 9. errorCaptured --> onErrorCaptured
 */
onBeforeMount(() => {
  console.log('生命周期onBeforeMount: 在挂载之前被调用，相关的render函数首次被调用');
})
onMounted(() => {
  console.log('生命周期onMounted：组件挂载时被调用');
})
onBeforeUpdate(() => {
  console.log('生命周期onBeforeUpdate：数据更新时调用，发生在虚拟dom打补丁之前，适合在更新之前访问现有的dom，如手动移除已经添加的事件监听器');
})
onUpdated(() => {
  console.log('生命周期onUpdated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁');
})
onBeforeUnmount(() => {
  console.log('生命周期onBeforeUnmount');
})
onUnmounted(() => {
  console.log('生命周期onUnmounted：卸载组件实例之前调用');
})
onErrorCaptured(() => {
  console.log('生命周期onErrorCaptured：当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。');
})

onActivated(() => {
  console.log('生命周期onActivated：被 keep-alive 缓存的组件激活时调用');
})
onDeactivated(() => {
  console.log('生命周期onDeactivated： 被 keep-alive 缓存的组件停用时调用');
})

onRenderTracked(() => {
  console.log('生命周期onRenderTracked');
})
onRenderTriggered(() => {
  console.log('生命周期onRenderTriggered');
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