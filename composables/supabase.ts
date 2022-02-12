import { createClient } from '@supabase/supabase-js'
import useAuth from '~/composables/useAuth'

const SUPABASE_URL: string = process.env?.supabaseUrl
const SUPABASE_KEY: string = process.env?.supabaseKey
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuth()
  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
