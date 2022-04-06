<template>
  <div>
    {{msg}}
    {{count}}
  </div>
  <button @click='increment()'>加一</button>
</template>

<script>
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
    }
  },
  mounted() {
    const newObjData = {}
    this.someObject = newObjData
    console.log(this.someObject == newObjData);
    console.log(this.count);

  }

}
</script>

<style>
</style>