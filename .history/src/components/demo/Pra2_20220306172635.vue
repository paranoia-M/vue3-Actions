<template>
  <div>
    {{msg}}
    {{count}}
  </div>

  <button ref="test" @click='increment()'>加一{{test}}</button>
</template>

<script>
import { nextTick } from '@vue/runtime-core';
export default {
  data() {
    return {
      msg: 'vue2的相关',
      someObject: {},
      count: 1,
      test: 'begin'
    }
  },
  methods: {
    increment() {
      this.count++

      nextTick((e) => {
        console.log(e);
        this.test = 'end';
      })
    }
  },
  mounted() {
    const newObjData = {}
    this.someObject = newObjData
    console.log(this.someObject == newObjData);

  }

}
</script>

<style>
</style>