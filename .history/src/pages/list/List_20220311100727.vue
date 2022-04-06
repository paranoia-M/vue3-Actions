<template>
  <div>
    组件相关
    <h1>父组件</h1>
    <list-item
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :style="{ color: postFontColor }"
      @click="changeColor"
    >
      我是slot里面的内容
    </list-item>
  </div>
</template>
<script setup>
/**
 *
 * 父组件向子组件传递事件处理函数
 * 现在父组件里面定义事件处理函数，然后在子组件里面用 @click = "$emit('changeColor')"接收
 *
 * props传递的细节
 * defineProps({
 *    props1: Number,
 *    props2: String
 * })
 *
 * props在父组件里面还可以动态传递
 * 传递的类型可以包括，number，string，boolean，object，array
 * 也可以时使用一个对象绑定多个prop
 *
 * 单项数据流
 *
 */
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import listItem from "./listItem/ListItem.vue";

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);

const changeColor = () => {
  postFontColor.value = "lightblue";
};
const postFontColor = ref("red");
</script>

<style>
</style>