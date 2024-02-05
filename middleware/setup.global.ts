import { set } from "lodash-es"

export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('global',{to, from})
  set(to.meta, 'pageTransition.name', +to.params.id > +from.params.id ? 'slide-left' : 'slide-right')
})
