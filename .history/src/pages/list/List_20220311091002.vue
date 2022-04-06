<template>
  <div>
    组件相关
    {{title}}
  </div>
</template>

<script >
export default {
  props: [title],
  setup(props) {
    console.log(props.title);
  }
}

</script>

<style>
</style>