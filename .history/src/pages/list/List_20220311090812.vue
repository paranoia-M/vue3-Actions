<template>
  <div>
    组件相关
    {{title}}
  </div>
</template>

<script setup>
const props = defineProps(['title'])
console.log(props.title);

</script>

<style>
</style>