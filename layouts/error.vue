<template>
  <div class="h-screen">
    <div v-if="!!error" class="mt-60 p-20 bg-base-300 prose">
      <h3>
        Page not found
        <div class="btn btn-ghost btn-primary" @click="$router.push('/')">
          ← Go back
        </div>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
