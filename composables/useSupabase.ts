import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://uduilifzyiujjrzlwyby.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzNzkyMywiZXhwIjoxOTMwODEzOTIzfQ.morp5e9629xzWqRwcy1d6J3FbGbQKSwOyOAoK1URv1I'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


export default function useSupabase () {
  return { supabase }
}
