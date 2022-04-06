<script>
import { reactive, ref } from '@vue/reactivity'
import MyComponent from '../Component.vue'
import { nextTick } from '@vue/runtime-core'
export default {
  setup() {
    const state = reactive({ count: 0 })
    const msg = ref('ref的数据')
    const className = ref('hello')

    const increment = () => {
      state.count++
      msg.value = 'ref的数据改变之后'
      console.log("methods里面的数据", state);
      nextTick(() => {
        console.log("nextTick里面的数据", state);
      })
      console.log(111);
    }
    return {
      state,
      className,
      msg,
      increment
    }
  },
}

</script>
<template>
  <div> {{state.count}} {{msg}} </div>
  <h1 :class="className"></h1>
  <button @click="increment">Vue3 响应式</button>
</template>
