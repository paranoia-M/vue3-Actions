<template>
  <div>
    <h3>pinia状态管理</h3>
    {{ count }}
    {{ newObj }}
  </div>
</template>

<script setup>
/**
 *
 * state：
 * 从store中读取state，
 *    const store = PublicStore(),之后可以通过store.count获取到具体的数值
 *    也可以使用const { count, handleAdd } = storeToRefs(PublicStore()); 来获取响应式状态
 * 改变state
 *    store.$patch({}),这样修改的话在遇到任何集合的修改(例如从数组中新增，删除，修改元素)都需要船舰一个新的集合，因此$patch也可以接受一个函数来批量修改集合内部对象的属性。(总结，上面的方法适合修改将基本数据类型)
 * 改变state的对象类型
 *    store.$patch((state) => {})
 * 替换state
 *    store.$state = { counter: 666, name: 'pin' }
 * 订阅状态
 *    store.$subscribe((mutation,state) => {}),与watch相比，使用$subscribe的有点是subscribes只会在更改state对象之后触发一次
 */
import { storeToRefs } from "pinia";
import PublicStore from "../../store/Public";
const store = PublicStore();

// 为了从store中提取属性同时保持其响应式，应该使用storeToRefs()，当仅使用store里面的数据而不进行任何操作时非常有用
const { count, handleAdd, newObj } = storeToRefs(PublicStore());

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
  console.log(222, mutation);
  console.log(33338888888899999, state);
});
console.log(111, store);
console.log(store.handleFetch());
console.log(store.handleLog());
console.log(handleAdd.value);
</script>

<style>
</style>