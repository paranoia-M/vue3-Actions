<template>
  <div>
    <h1>vue内置组件</h1>
    <button @click="isTrue = !isTrue">转换</button>
    <Transition>
      <p v-show="isTrue">hello</p>
    </Transition>
  </div>
</template>

<script setup>
/**
 * vue提供了两个内置组件
 *<Transition> 会在一个元素或组件进入和离开 DOM 时应用动画
 *
 * 它可以在一般元素以及通过默认插槽传递的组件上应用进入和离开动画。进入或离开可以由以下其中一种触发：
 * v-if 所带来的条件渲染
 * v-show 所带来的条件显示
 * 由特殊元素 <component> 切换的动态组件
 *
 * 当一个<Transition>组件中的元素被插入或移除时，会发生一下这些事
 * vue会自动检测目标元素是否应用了css过渡或动画，如果是则一些css过度类会在适当的实际被添加和移除
 * 如果有作为监听器的js钩子，这些钩子函数会在适当的时机被调用
 * 如果没有探测到css过度
 *
 */

import { ref } from "@vue/reactivity";

const isTrue = ref(true);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>