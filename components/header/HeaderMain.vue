<template>
  <header class="flex relative items-center">
    <nuxt-link class="hidden sm:block flex " to="/">
      <Logo class="mx-3 mt-1" />
    </nuxt-link>

    <!-- menu-->
    <div
        class="hidden sm:flex sm:mx-auto sm:items-center sm:space-x-6"
    >

      <div v-for="item in menu" :key="item.path">
        <nuxt-link class="menu-link font-bold text-sm hover:text-primary" :to="item.path">
          {{ $t(item.title) }}
        </nuxt-link>
      </div>
    </div>
<!--    <header-responsive-menu ref="menu" class="relative">-->
<!--      <div class="p-6">-->
<!--        <NuxtLink to="/" @click.native="$refs.menu.close">-->
<!--          <Logo class="mx-3 mt-1" />-->
<!--        </NuxtLink>-->
<!--        <div class="mt-10">-->
<!--          <div v-for="item in menu" :key="item.path" class="mt-3">-->
<!--            <nuxt-link class="menu-link text-sm" :to="item.path" @click.native="$refs.menu.close" @click="$refs.menu.close()">-->
<!--              {{item.title}}-->
<!--            </nuxt-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </header-responsive-menu>-->

    <switch-locale class="ml-auto"/>
    <daisyui-theme-switcher class="ml-auto" />
<!--    <user-login-button class="mt-2 pr-4" />-->
  </header>
</template>

<script setup>
const menu = [
  { title: 'about', path: '/about'}
]
</script>

<style scoped>
.menu-link.active{
  @apply underline
}
</style>
