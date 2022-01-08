<script setup>
import { defineAsyncComponent } from 'vue'
const ClientReloadPrompt = typeof window !== 'undefined'
    ? defineAsyncComponent(() => import('../components/ReloadPrompt.vue'))
    : null

</script>
<template>
  <div class="flex flex-col h-screen bg-base-200">
    <header-main />
    <div class="flex-1 px-3" >
      <slot/>
    </div>
    <footer-main />
    <template v-if='ClientReloadPrompt'>
      <ClientReloadPrompt />
    </template>
  </div>
</template>
