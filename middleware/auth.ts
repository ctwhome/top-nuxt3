import useAuth from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn()) {
    process.client && alert('This page requires authentication.')
    return navigateTo('/')
  }
})
