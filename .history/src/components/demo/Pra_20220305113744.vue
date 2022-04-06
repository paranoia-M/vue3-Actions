<script>
import { ref } from '@vue/reactivity'
import MyComponent from '../Component.vue'
export default {
  setup() {
    const count = ref(0)

    return {
      count
    }
  }
}

</script>
<template>
  <div> {{count}} </div>
  <h1 :class=></h1>
</template>
