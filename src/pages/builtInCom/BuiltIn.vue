<template>
  <div>
    <h1>vue内置组件</h1>
    <button @click="isTrue = !isTrue">转换</button>
    <Transition name="slide-fade">
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
 * 如果没有探测到css过渡或动画，没有提供js钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧上执行。
 *
 *
 * TransitionGroup·过渡组
 * 是一个内置组件，设计用于呈现一个列表中的元素或组件的插入、移除和顺序改变的动画效果。
 *
 * 他和Transition的区别
 * 默认情况下，它不会渲染一个包装器元素。但你可以通过传入 tag prop 来指定一个元素作为包装器元素来渲染。
 * 过渡模式在这里不可用，因为我们不再是在互斥的元素之间进行切换。
 * 其中的元素总是必须有一个独一无二的 key attribute。
 * CSS 过渡类会被应用在其中的每一个元素上，而不是这个组的容器上。
 *
 */

import { ref } from "@vue/reactivity";

const isTrue = ref(true);
</script>

<style>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>