<template>
  <div class="container mx-auto pt-4">
    <h1> {{ $t('blog') }}</h1>
    <nuxt-link :to="/blog/+post.slug" v-for="post in posts" :key="post.slug">
      <div  class="transition mt-3 p-3 hover:bg-gray-200">
      <p>{{ post.myVar }}</p>
      <component :is="post.default"/>
      </div>
    </nuxt-link>

  </div>
</template>
<script setup>

const posts = Object.values(import.meta.globEager('../../content/blog/*.md'))

// Todo add dynamic imports when available in Vite
// const markdown = ()=>import('../../content/blog/post1.md')
// const ml = ref()
//
// markdown().then(result=> {
//   console.log('🎹 result', result)
//   ml.value = result
// })

</script>




