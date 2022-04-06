
<script setup>
// import MyComponent from './components/Component.vue'

export default {
  // components: {
  //   MyComponent
  // }
  data() {
    return {
      name: 'aaa'
    }
  }
}
</script>

<template>
  <div>
    {{name}}
    <my-component></my-component>
  </div>
</template>


