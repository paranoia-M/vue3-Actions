<template>
  <div>
    <h1>插槽父元</h1>

    <!-- 具名插槽 -->
    <slot-header>
      <template #header-top>
        <div>slot header-top插槽内容</div>
      </template>
      <template #header-middle>
        <div>slot header-middle插槽内容</div>
      </template>
      <!-- 动态插槽名 -->
      <template #[headerBottom]>
        <div>slot header-bottom插槽内容</div>
      </template>
    </slot-header>
    <!-- 默认插槽 -->
    <slot-item>slot插槽内容</slot-item>
    <!-- 作用域插槽 -->
    <slot-footer>
      <template #footerItem="text">
        <div>
          slot footer插槽内容
          {{ text }}
        </div>
      </template>
    </slot-footer>
  </div>
</template>

<script setup>
/**
 * 插槽内容可以访问到父组件的数据，无法发访问到子组件的数据，
 * 任何父组件模板中的东西都是被编译到父组件的作用域中，而任何子组件模板中的东西都只被编译到子组件的作用域中
 *
 * 具名插槽
 * 如果子组件里面有多个插槽就要给他们都命名，在父组件里面可以通过<template #slotName></template>来确定各个插槽内的具体值
 *
 * 动态插槽名
 *
 * 作用域插槽
 * 在某些情况下，插槽的内容可能同时想要访问父作用域内和子作用域内的数据，因此需要将子组件的一部分数据在渲染时提* 供给插槽
 *
 *
 *
 */
import { ref } from "@vue/reactivity";
import SlotFooter from "./SlotFooter.vue";
import SlotHeader from "./SlotHeader.vue";
import SlotItem from "./SlotItem.vue";

const headerBottom = ref("header-bottom");
</script>

<style>
</style>