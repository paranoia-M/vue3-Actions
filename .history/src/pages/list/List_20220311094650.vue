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
    </list-item>
  </div>
</template>

<script setup>
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