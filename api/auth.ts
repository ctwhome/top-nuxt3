import { ref, computed } from 'vue'
import { Provider, Session } from '@supabase/supabase-js'
import supabase from '~/plugins/supabase'

// state
const userSession = ref()

// Getter
const isLoggedIn = computed(
  () => userSession.value?.user?.aud === 'authenticated'
)

// Actions
function loginWithProvider (provider:Provider = 'google', isDev:boolean) {
  supabase.auth.signIn({ provider }, {
    redirectTo: isDev ? 'http://localhost:3000' : undefined
  })
}

async function loginWithEmail (email:string) {
  console.log('✉️ requesting email...')
  const { user, session, error } = await supabase.auth.signIn({
    email
  })
  console.log('🙋‍♂️', user, session)
  if (error) {
    console.log('🎹', error)
  }
}

async function logout () {
  await supabase.auth.signOut()
}

const setUserSession = (session: Session) => {
  userSession.value = session
}

// Handle Auth user changes
supabase?.auth?.onAuthStateChange((event, session) => {
  console.log('Event', event)
  console.log('User ', session)
  userSession.value = session
})
export { userSession, isLoggedIn, setUserSession, loginWithProvider, logout, loginWithEmail }
