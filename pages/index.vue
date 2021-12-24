<template>
  <div class="container mx-auto">
<!--    <tutorial class="mt-20" />-->
<!--    <blog-list :posts="posts" :more="true" />-->
    Optimized image
    <nuxt-link to="about" class="btn">About page</nuxt-link>

    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>

    <div class="w-[32rem] bg-amber-500">
      <h1>Welcome to Top Nuxt 3</h1>
      <ul>
        <li>Nuxt 3</li>
        <li>TailwindCSS 3</li>
        <li>DaisyUI</li>
      </ul>
      <h3>Development experience DX</h3>
      <ul>
        <li>Ultra Fast HMR changes</li>
        <li>Eslint</li>
        <li>Typescript</li>
        <li>Vue `script setup` and Composition API</li>
      </ul>

    </div>

<!--    <nuxt-img src="large.jpg" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />-->
  </div>
</template>

<script setup lang="ts">
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
