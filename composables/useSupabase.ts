import { createClient } from '@supabase/supabase-js'
import useAuth from '~/composables/useAuth'

const SUPABASE_URL: string = process.env?.supabaseUrl || 'https://uduilifzyiujjrzlwyby.supabase.co'
const SUPABASE_KEY: string = process.env?.supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzNzkyMywiZXhwIjoxOTMwODEzOTIzfQ.morp5e9629xzWqRwcy1d6J3FbGbQKSwOyOAoK1URv1I'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuth()
  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
