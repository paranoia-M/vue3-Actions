<template>
  <div>
    {{msg}}
  </div>
  <button @click='increment'></button>
</template>

<script>
export default {
  data() {
    return {
      msg: 'vue2的相关',
      someObject: {},
      count: 1
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

  }

}
</script>

<style>
</style>