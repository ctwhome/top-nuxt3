<template>
  <div class="container mx-auto pt-4">
    <h1> {{ $t('about') }}</h1>

    <h2>{{myVar}}</h2>

    <PostComponent class="prose mt-4"/>
  </div>
</template>
<script setup>
import PostComponent, {myVar} from '~/content/about.md'
</script>
