<template>
  <div>
    <!-- <p>可组合函数，鼠标跟踪功能 {{ x }},{{ y }}</p> -->
    抽出去的mouse组件
  </div>
</template>

<script >
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

export function useMouse {
  setup() {
    const x = ref(0);
    const y = ref(0);

    const update = (event) => {
      x.value = event.pageX;
      y.value = event.pageY;
    };

    onMounted(() => window.addEventListener("mousemove", update));
    onUnmounted(() => window.removeEventListener("mousemove", update));

    return { x, y };
  },
};
</script>

<style>
</style>
