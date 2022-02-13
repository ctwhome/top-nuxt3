import {Provider} from '@supabase/gotrue-js'
import useSupabase from '~/composables/useSupabase'

const user = ref(null)
const {supabase} = useSupabase()

/**
   * Listen for login state changes
   */
supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuth()
  user.value = session?.user || null
})

export default function useAuth() {
  /**
   * Login with email and password
   */
  const login = async ({email, password}) => {
    const {user, error} = await supabase.auth.signIn({email, password})
    if (error) throw error
    return user
  }

  /**
   * Login with email (magic)
   */
  const loginWithEmail = async ({email}) => {
    const {user, error} = await supabase.auth.signIn({email})
    if (error) throw error
    return user
  }


  /**
   * Login with google, github, etc
   */

  const loginWithSocialProvider = async (provider: Provider) => {
    const {user, error} = await supabase.auth.signIn({provider}, {
      // redirect to localhost if you are running on dev mode
      redirectTo:  process.dev ? 'http://localhost:3000': undefined
    })
    if (error) throw error
    return user
  }

  /**
   * Logout
   */
  const logout = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) throw error
  }

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = () => {
    return !!user.value
  }

  /**
   * Register
   */
  const register = async ({email, password, ...meta}) => {
    const {user, error} = await supabase.auth.signUp(
      {email, password},
      {
        // arbitrary meta data is passed as the second argument under a data key
        // to the Supabase signUp method
        data: meta,
        // the to redirect to after the user confirms their email
        // window.location wouldn't be available if we were rendering server side
        // but since we're all on the client it will work fine
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation"`
      })
    if (error) throw error
    return user
  }

  /**
   * Update user email, password, or meta data
   */
  const update = async (data) => {
    const {user, error} = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  /**
   * Send user an email to reset their password
   * (ie. support "Forgot Password?")
   */
  const sendPasswordRestEmail = async (email) => {
    const {data, error} = await supabase.auth.api.resetPasswordForEmail(email)
    if (error) throw error
    return data
  }

  const resetPassword = async (accessToken, newPassword) => {
    const {user, error} = await supabase.auth.api.updateUser(
      accessToken,
      {password: newPassword}
    )
    if (error) throw error
    return user
  }

  return {
    user,
    login,
    loginWithEmail,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
    resetPassword
    // maybeHandleEmailConfirmation,
  }
}
