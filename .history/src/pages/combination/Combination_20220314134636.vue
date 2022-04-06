<template>
  <div>
    <p>可组合函数，鼠标跟踪功能 {{ x }},{{ y }}</p>
  </div>
</template>

<script setup>
/**
 *
 * 可组合函数
 *
 * 可组合函数是一个利用vue组合式api来封装和复用有逻辑状态的函数
 *
 * useMouse也可以传递参数，如果要传递参数，应该注意传递的参数是否为ref对象，如果是ref，那么他的value会被返回，如果不是ref，会原样返回，因此可以使用 unref ; const value = unref(maybeRef)  这里(maybeRef是参数)
 *
 * 可组合函数始终返回一个ref对象的原因是能够解构出来可组合函数的返回值
 *
 * 也可以将可组合函数用reactive包装  const mouse = reactive(useMouse())  这样可以通过property的方式拿到想要的数据
 *
 * 在可组合函数中执行副作用
 *在可组合函数中的确可以执行副作用 (例如：添加 DOM 事件监听器或者请求数据)，但请注意以下规则：
 1. 如果你在一个应用中使用了服务器端渲染 (SSR)，请确保在后置加载的声明钩子上执行 DOM 相关的副作用，例如：onMounted()。这些钩子仅会在浏览器中使用，因此可以确保能访问到 DOM。
 2. 确保在 onUnmounted() 时清理副作用。举个例子，如果一个可组合函数设置了一个事件监听器，它就应该在 onUnmounted() 中被移除 (就像我们在 useMouse() 示例中看到的一样)。当然也可以像之前的useEventListener() 示例那样，使用一个可组合函数来自动帮你做这些事。
 * 
 * 使用限制
 * 可组合函数在 <script setup> 或 setup() 钩子中，应始终被同步地调用。在某些场景下，你也可以在像 onMounted() 这样的生命周期钩子中使用他们。
 * 可以在可组合函数中注册生命周期钩子
 * 
 * 
 * 
 */
import { useMouse } from "./common/mouse";

const { x, y } = useMouse();
</script>

<style>
</style>
