<template>
  <div>
    组件相关
    {{title}}
  </div>
</template>

<script setup>
// defineProps(['defineProps: "title"'])
const props = defineProps(["title"])
console.log(props);
</script>

<style>
</style>