import { useRuntimeConfig } from '#app'
import { createClient } from '@supabase/supabase-js'

// const SUPABASE_URL = 'https://uduilifzyiujjrzlwyby.supabase.co'
// const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzNzkyMywiZXhwIjoxOTMwODEzOTIzfQ.morp5e9629xzWqRwcy1d6J3FbGbQKSwOyOAoK1URv1I'

let supabase
export default function useSupabase () {
  // supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
  console.log('🎹 useRuntimeConfig()', useRuntimeConfig())

  supabase = supabase || createClient(useRuntimeConfig().SUPABASE_URL, useRuntimeConfig().SUPABASE_PUBLIC_KEY)
  return { supabase }
}
