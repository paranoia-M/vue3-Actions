<template>
  <div>
    <h3>pinia状态管理</h3>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import PublicStore from "../../store/Public";
const store = PublicStore();

// 为了从store中提取属性同时保持其响应式，应该使用storeToRefs()，当仅使用store里面的数据而不进行任何操作时非常有用
const { count, handleAdd } = storeToRefs(PublicStore());

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

// 替换state
store.$state = { count: 999 };

//订阅状态
store.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
});
console.log(store);
console.log("count", count.value);
console.log(store.count);
console.log(store.name);
console.log(store.newObj[0].name);
console.log(store.handleFetch());
console.log(store.handleLog());
console.log(handleAdd.value);
</script>

<style>
</style>