import { ref, onMounted, onUnmounted } from "vue";
import { useEventListener } from "./event";
export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  // function update(event) {
  //   x.value = event.pageX;
  //   y.value = event.pageY;
  // }

  // onMounted(() => window.addEventListener("mousemove", update));
  // onUnmounted(() => window.removeEventListener("mousemove", update));
  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  return { x, y };
}

// console.log(useMouse());
