<template>
  <div class="container mx-auto mt-10 flex flex-col justify-center">
    <!--    <tutorial class="mt-20" />-->
    <!--    <blog-list :posts="posts" :more="true" />-->

    <div class="w-[32rem] bg-base-300 p-4">
      <h1>{{ $t("welcome") }} Top Nuxt 3</h1>
      <ul class="styled">
        <li>Nuxt 3</li>
        <li>TailwindCSS 3</li>
        <li>DaisyUI</li>
      </ul>
      <h3>Development experience DX</h3>
      <ul class="styled">
        <li>Ultra Fast HMR changes</li>
        <li>Eslint</li>
        <li>Typescript</li>
        <li>Vue `script setup` and Composition API</li>
      </ul>

    </div>

    <div class="mt-4">
      <p>All icons from iconify</p>
      <div class="flex gap-3 mt-3">
        <Icon icon="mdi-light:home" width="48"/>
        <Icon icon="ion:ios-cart" width="48"/>
        <Icon icon="noto:anchor" width="48"/>
        <Icon icon="fxemoji:alien" width="48"/>
      </div>
    </div>
    <!--    <nuxt-img src="large.jpg" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />-->
  </div>
</template>

<script setup lang="ts">

import {Icon} from '@iconify/vue'
// async asyncData ({ $content, params }) {
//   // blog list
//   const posts = await $content('posts')
//     .limit(4)
//     .sortBy('date', 'asc')
//     .fetch()
//
//   return {
//     posts
//   }
// }
</script>
