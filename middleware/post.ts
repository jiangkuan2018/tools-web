import { toNumber, isNaN } from 'lodash-es'
export default defineNuxtRouteMiddleware((to, from) => {
  if (isNaN(toNumber(to.params.id))) {
    return navigateTo('/')
  }
})