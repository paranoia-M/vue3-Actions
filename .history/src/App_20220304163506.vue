
<script >
import { ref } from '@vue/reactivity'
import MyComponent from './components/Component.vue'
export default {
  setup(props) {
    const data = ref('张志')

    return {
      data
    }
  }
}
</script>

<template>
  <div>
    <my-component></my-component>
  </div>
</template>


