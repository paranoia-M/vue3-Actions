<template>
  <div>
    <h2 class="header">插槽子元素header</h2>
    <slot name="header-top"></slot>
    <slot name="header-middle"></slot>
    <slot name="header-bottom"></slot>
  </div>
</template>

<script setup>
const blueColor = "lightBlue";
</script>

<style lang='css' scope vars="blueColor">
/* .header {
  color: v-bind(blueColor);
} */
:root {
  /* --main-bg-col: v-bind(blueColor); */
  --main-bg-col: blueColor;
}
.header {
  color: var(--main-bg-col, green);
}
</style>