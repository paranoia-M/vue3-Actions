<template>
  <div>
    <h3>pinia状态管理</h3>
    <!-- <button @click="readInterface()">读取接口</button> -->
    {{ count }}
    {{ handleAdd }}
    {{ arr }}
    {{ newObj }}
  </div>
</template>

<script setup>
/**
 *
 * 1.state：
 * 从store中读取state，
 *    const store = PublicStore(),之后可以通过store.count获取到具体的数值
 *    也可以使用const { count, handleAdd } = storeToRefs(PublicStore()); 来获取响应式状态
 * 改变state
 *    store.$patch({}),这样修改的话在遇到任何集合的修改(例如从数组中新增，删除，修改元素)都需要船舰一个新的集合，因此$patch也可以接受一个函数来批量修改集合内部对象的属性。(总结，上面的方法适合修改将基本数据类型)那么当组件被卸载时，他们将自动删除，如果要保留请将 { detached: true } 作为第二个参数传递给 detach 当前组件的 state subscription：
 * 改变state的对象类型
 *    store.$patch((state) => {})
 * 替换state
 *    store.$state = { counter: 666, name: 'pin' }
 * 订阅状态
 *    store.$subscribe((mutation,state) => {}),与watch相比，使用$subscribe的有点是subscribes只会在更改state对象之后触发一次,默认情况下，state subscriptions 绑定到添加它们的组件(在setup中)
 *
 * 2. getters
 *  类似于计算属性
 *    大多数情况下getter只需要依赖state，但是他们可能需要使用其他的getter，正因为如此，在定义常规函数时通过this访问到整个this实例,在getter里面可以通过this访问到相同store里面的getter
 *    在使用getter时可以传递参数，return { getUserById: store.getUserById }，这样在定义getter是，通过接收到的参数来进行使用
 *    当在getter里面使用一些方法时(例如push filter)那么这时getter将不在缓存，他们只是调用你得函数
 *    还可以在getter里面访问其他的store里面的getter，只需要引入对应的store就可以
 * 3. actions 相当于组件中的methods，
 *    在actions里面可以直接使用this来访问state里面的变量，
 *    订阅action  store.$onAction()，传递给他的回调在action之前执行，after处理promise并允许你在action完成后执行函数
 *
 */
import { onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import PublicStore from "../../store/Public";
const store = PublicStore();

// 为了从store中提取属性同时保持其响应式，应该使用storeToRefs()，当仅使用store里面的数据而不进行任何操作时非常有用
const { count, handleAdd, newObj, arr } = storeToRefs(PublicStore());

const readInterface = async () => {
  const fetchRes = await store.handleFetch();
  console.log(47, fetchRes);
};

onMounted(() => {
  readInterface();
}),
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
store.$subscribe(
  (mutation, state) => {
    console.log(222, mutation);
    console.log(333, state);
  },
  { detached: true }
);
console.log(111, store);
console.log(store.changeAdd);
console.log(22, store.handleArr());
</script>

<style>
</style>