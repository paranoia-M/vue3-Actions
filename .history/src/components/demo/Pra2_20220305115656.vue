<template>
  <div>
    {{msg}}
  </div>
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
  methods() {
    increment() {
      this.count++
    }
  },
  mounted() {
    const newObjData = {}
    this.someObject = newObjData
    console.log(newObjData);
    console.log(this.someObject);
    console.log(this.someObject == newObjData);

  }

}
</script>

<style>
</style>