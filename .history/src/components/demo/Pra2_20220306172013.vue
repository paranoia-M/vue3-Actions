<template>
  <div>
    {{msg}}
    {{count}}
  </div>

  <button ref="test" @click='increment()'>加一{{test}}</button>
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
      this.test = 'end';
      console.log(this.$refs.test.innerHtml);
      console.log(this.test);
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