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
 * 可组合函数始终返回一个ref对象的原因是
 *
 */
import { useMouse } from "./common/mouse";

const { x, y } = useMouse();
</script>

<style>
</style>
