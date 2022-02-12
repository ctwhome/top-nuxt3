// import { isLoggedIn } from '~/api/auth'
//
// export default function ({ redirect }) {
//   if (!isLoggedIn.value) {
//     console.error('Protected Route')
//     return redirect('/')
//   }
// }

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn()) {
    process.client && alert('This page requires authentication.')
    return navigateTo('/')
  }
})
