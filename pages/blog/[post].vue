<template>
  <div class="container mx-auto pt-4">
    <div class="flex gap-2">
      <nuxt-link class="btn btn-outline btn-sm" to="/blog/post1">Post 1</nuxt-link>
      <nuxt-link class="btn btn-outline btn-sm" to="/blog/post2">Post 2</nuxt-link>
    </div>
    <div v-html="content"></div>
  </div>
</template>
<script setup>
// import Markdown from 'vue3-markdown-it'
const route = useRoute()
let rendered = ref("");
const content = ref()
const { data } = await useAsyncData('count', () => $fetch(`../../content/blog/${route.params.post}.md`))

if (typeof data.value === 'string') {
  content.value = useNuxtApp().$mdit.render(data.value);
}
</script>




