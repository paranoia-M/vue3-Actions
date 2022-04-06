
<script setup>
import { defineComponent } from '@vue/runtime-core'
import MyComponent from './components/Component.vue'

export default defineComponent({
  components: {
    MyComponent
  }
})
</script>

<template>
  <div>
    <Component></Component>
  </div>
</template>


