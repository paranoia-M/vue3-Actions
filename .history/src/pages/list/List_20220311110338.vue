<template>
  <div>
    组件相关
    <h1>父组件</h1>
    <list-item
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :style="{ color: postFontColor }"
      @click="changeColor"
    >
      我是slot里面的内容
    </list-item>
  </div>
</template>
<script setup>
/**
 *
 * 父组件向子组件传递事件处理函数
 * 现在父组件里面定义事件处理函数，然后在子组件里面用 @click = "$emit('changeColor')"接收
 *
 * 声明触发的事件:
 * const emit = defineEmits(['inFocus', 'submit'])
 *
 *
 * props传递的细节
 * defineProps({
 *    props1: Number,
 *    props2: String
 * })
 *
 * props在父组件里面还可以动态传递
 * 传递的类型可以包括，number，string，boolean，object，array
 * 也可以时使用一个对象绑定多个prop
 *
 * 单向数据流
 * 所有的 prop 都遵循着单向绑定原则，prop 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递
 * 每次父组件更新后，所有的子组件中的props都会被更新到最新值，这意味着不能在子组件中去更新props，更新会报错
 *
 *
 * 想要更改prop一般符合以下两种场景
 * 1. prop被用于传入初始值，而子组件想在之后将其作为一个局部数据属性，这时可以定义一个局部数据属性用来保存从props上取到的值
 * const newProps = ref(props.initialCounter)
 * 2. prop以原始的形式传入，但还需作转换，这时，最好基于该prop值定义一个计算属性
 * const newProps = computed(() => props.size.trim().toLowerCase())
 *
 * 更改对象/数组类型的prop
 *当对象或数组作为prop传入时，虽然子组件无法更改prop绑定，但仍然可以更改对象或数组内部的值，这是因为js对象或数组是按引用传递
 *
 *  prop校验
 * 组件可以更细致的指定对其props的需求，比如上面的类型限制，如果没有指定要求Vue 会在浏览器的 JavaScript 控制台中抛出警告来提醒你
 *
 * 所有 props 默认都是可选的，除非声明了 required: true
 * 未传递的 prop 会有一个缺省值 undefined。
 * 如果声明了 default 值，那么在 prop 的值被解析为 undefined 时，无论 prop 是未被传递还是显式指明的 undefined，都会改为 default 值。
 *
 * 穿透attribut
 */
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import listItem from "./listItem/ListItem.vue";

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);

const changeColor = () => {
  postFontColor.value = "lightblue";
};
const postFontColor = ref("red");
</script>

<style>
</style>