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
 * 单向数据流
 * 所有的 prop 都遵循着单向绑定原则，prop 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递
 * 每次父组件更新后，所有的子组件中的props都会被更新到最新值，这意味着不能在子组件中去更新props，更新会报错
 *
 *
 * 想要更改prop一般符合以下两种场景
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