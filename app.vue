<template>
  <NuxtLayout/>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
defineOptions({
  name: 'App'
})
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
onMounted(() => {
  console.log({runtimeConfig, appConfig})
})
</script>
<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>