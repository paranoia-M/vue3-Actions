<template>
  <div>
    组件相关
    <h1>父组件</h1>
    <list-item title=posts></list-item>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import listItem from './listItem/ListItem.vue';


const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

</script>

<style>
</style>