<script>
import { ref } from '@vue/reactivity'
import MyComponent from '../Component.vue'
export default {
  setup() {
    const count = ref(0)
  }
}
</script>
<template>
  <div> {{count}} </div>
</template>
