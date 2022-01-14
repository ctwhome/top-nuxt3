<template>
  <div class="flex justify-between gap-10">
    <NuxtLink
      v-if="next"
      :to="next.slug"
      class="font-bold hover:underline"
    >
      ← {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="prev"
      :to="prev.slug"
      class="font-bold hover:underline"
    >
      {{ prev.title }} →
    </NuxtLink>

    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: { type: Object, default: () => null },
    next: { type: Object, default: () => null }
  }
}
</script>
