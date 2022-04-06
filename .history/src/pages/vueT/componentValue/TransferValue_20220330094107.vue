<template>
  <div>
    {{ msg }}
    <p>{{ newAttr }}</p>
    <button @click="addAttr">添加属性</button>
    <div class="box">
      <parent-child></parent-child>
    </div>
    <div class="box">
      <attrs-parent></attrs-parent>
    </div>
  </div>
</template>

<script>
import AttrsParent from "./attrs/AttrsParent.vue";
import parentChild from "./parentChild/index.vue";
export default {
  data() {
    return {
      msg: "我是vue2里面的组件传值",
      newAttr: {
        name: "zzs",
      },
    };
  },
  components: {
    parentChild,
    AttrsParent,
  },
  methods: {
    addAttr() {
      this.newAttr.age = 12;
      console.log(this);
    },
  },
};
</script>

<style scoped>
.box {
  border: red solid 1px;
  border-bottom: none;
}
</style>