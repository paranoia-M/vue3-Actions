<script>
import { reactive, ref } from '@vue/reactivity'
import MyComponent from '../Component.vue'
export default {
  setup() {
    const state = reactive({ count: 0 })
    const className = ref('hello')

    const increment = () => {
      state.count++
      console.log(111);
    }
    return {
      state,
      className,
      increment
    }
  },
}

</script>
<template>
  <div> {{state.count}} </div>
  <h1 :class="className"></h1>
  <button @click="increment">Vue3 响应式</button>
</template>
