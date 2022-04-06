<template>
  <div>
    {{ msg }}
    <p>{{ newAttr }}</p>
    <el-button @click="addAttr">添加属性</el-button>
    <el-card>
      <parent-child></parent-child>
    </el-card>
    <el-card>
      <attrs-parent></attrs-parent>
    </el-card>
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
      console.log();
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