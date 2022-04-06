<template>
  <div>
    <h3>pinia状态管理状态管理</h3>
  </div>
</template>

<script setup>
import PublicStore from "../../store/Public";
const store = PublicStore();
// 重置状态
// store.$reset();

// 允许您同时更改多个state
store.$patch({
  count: store.count + 1,
  name: "王俊宇",
});

store.$patch((state) => {
  state.newObj.push({ name: "shoes", quantity: 1 });
  state.hasChanged = true;
});
console.log(store);
console.log(store.count);
console.log(store.name);
console.log(store.quantity);
</script>

<style>
</style>