<template>
  <div>
    <h2 class="header" :style="{ '--main-bg-col': blueColor }">
      插槽子元素header
    </h2>
    <slot name="header-top"></slot>
    <slot name="header-middle"></slot>
    <slot name="header-bottom"></slot>
  </div>
</template>

<script setup>
const blueColor = "lightBlue";
</script>

<style lang='css' scope>
/* .header {
  color: v-bind(blueColor);
} */
:root {
  --main-bg-col: v-bind(blueColor);
  /* --main-bg-col: blue; */
}
.header {
  color: var(--main-bg-col, green);
}
</style>