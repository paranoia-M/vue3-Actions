<script>
import { ref } from '@vue/reactivity'
import MyComponent from '../Component.vue'
export default {
  setup() {
    const count = ref(0)
    const className = ref('hello')

    return {
      count,
      className
    }
  },
  methods: {

  },
}

</script>
<template>
  <div> {{count}} </div>
  <h1 :class="className"></h1>
</template>
