import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  // Check if the env variables are defined
  return config.SUPABASE_URL && config.SUPABASE_KEY
    ? createClient(config.SUPABASE_URL, config.SUPABASE_KEY)
    : {}
})
