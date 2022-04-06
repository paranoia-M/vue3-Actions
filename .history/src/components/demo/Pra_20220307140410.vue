<script>
import { reactive, ref } from '@vue/reactivity'
import MyComponent from '../Component.vue'
import { computed, nextTick, onMounted } from '@vue/runtime-core'
export default {
  setup() {
    const state = reactive({ count: 0 })
    const msg = ref('ref的数据')
    const className = ref('hello')
    const firstName = ref('zzs')
    const lastName = ref('zwb')
    const myRef = ref(null)


    onMounted(() => {
      console.log(myRef.value);
    })

    const calculateComputed = computed(() => {
      return msg.value.length > 6 ? msg.value : '计算属性'
    })
    // 这个计算属性永远不会更新，因为Date.now()并不是一个响应式
    const nowComputed = computed(() => {
      return Date.now()
    })
    // 可写计算属性
    const writableComputed = computed(() => {
      get: () => {
        return firstName.value + lastName.value
      }
      get: () => { }

    })
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
      myRef,
      calculateComputed,
      nowComputed,
      increment
    }
  },
}

</script>
<template>
  <div ref="myRef" value="myRefValue"> {{state.count}} {{calculateComputed}}{{nowComputed}} </div>
  <h1 :class="className"></h1>
  <button @click="increment">Vue3 响应式</button>
</template>
