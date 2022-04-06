export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener("mousemove", update));
  onUnmounted(() => target.removeEventListener("mousemove", update));
}
