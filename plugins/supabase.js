import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  return createClient(config.SUPABASE_URL, config.SUPABASE_KEY)
})
