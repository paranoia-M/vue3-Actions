<template>
  <div>
    <h3>子组件B:展示组件</h3>
    <div>我是子组件B的内容</div>
    <div>
      <button @click="open = true">打开模态框</button>
      <!-- <div v-if="open" class="modal">
        <p>我是模态框的内容</p>
        <button @click="open = false">关闭模态框</button>
      </div> -->
      <Teleport to="body">
        <div v-if="open" class="modal">
          <p>Hello from the modal!</p>
          <button @click="open = false">Close</button>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
/***
 *
 *<Teleport> 是一个内置组件，使我们可以将一个组件的一部分模板“传送”到该组件的 DOM 层次结构之外的 DOM 节点中。
 * teleport会改变dom渲染的结构，如果用teleport包装一个组件，则它会把这个组件渲染到指定的dom结构下
 */
import { onActivated, onDeactivated, ref } from "@vue/runtime-core";

const open = ref(false);

onActivated(() => {
  console.log("组件B挂载");
});
onDeactivated(() => {
  console.log("组件B卸载");
});
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>