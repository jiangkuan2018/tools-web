<template>
  <div>
    post id => {{ route.params.id }}
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toNumber } from 'lodash-es'

definePageMeta({
  middleware: 'post',
  validate: (routeData) => {
    return toNumber(routeData.params.id) <= 10
  }
})

useSeoMeta({
  title: '123123'
})

useHead({
  title: 'asdsdjf'
})

const route = useRoute()

</script>