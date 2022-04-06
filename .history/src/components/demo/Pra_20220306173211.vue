<script>
import { reactive, ref } from '@vue/reactivity'
import MyComponent from '../Component.vue'
export default {
  setup() {
    const count = reactive({ count: 0 })
    const className = ref('hello')

    const increment = () => {
      state.count++
      console.log(111);
    }
    return {
      count,
      className,
      increment
    }
  },
}

</script>
<template>
  <div> {{count}} </div>
  <h1 :class="className"></h1>
  <button @click="increment">Vue3 响应式</button>
</template>
