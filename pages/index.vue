<template>
  <div class="container flex flex-col justify-center mx-auto mt-10">
    <!--    <tutorial class="mt-20" />-->
    <!--    <blog-list :posts="posts" :more="true" />-->

    <div class="flex">

      <div class="w-full bg-base-300 p-4">
        <h1>{{ $t("welcome") }} Top Nuxt 3</h1>
        <ul class="styled">
          <li>Nuxt 3</li>
          <li>Supabase</li>
          <li>TailwindCSS 3 with DaisyUI</li>
        </ul>
        <h3>Development experience DX</h3>
        <ul class="styled">
          <li>Ultra Fast HMR changes</li>
          <li>Eslint</li>
          <li>Typescript</li>
          <li>Vue `script setup` and Composition API</li>
        </ul>
      </div>
      <div class="w-full p-4 flex flex-col gap-2">
        <strong>Composables</strong>

        <div class="flex">
          <p>is user loggedIn: {{ isLoggedIn() }}</p>
        </div>
        <div class="flex">

          <div class="btn btn-sm" @click="color = 'red'">change</div>
          <p>Current color: {{ color }}</p>
        </div>
        <div class="flex">
          <div class="btn btn-sm" @click="counter++">plus</div>
          <p>Current counter: {{ counter }}</p>

        </div>
      </div>
    </div>

<div class="flex gap-8 my-8">
    <div class="card text-center shadow-2xl max-w-[300px]">
      <div class="card-body">
        <h2 class="card-title">Iconify Icons</h2>
        <p class="text-primary">More than 100.000 vector icons</p>

        <div class="justify-center card-actions">
          <div class="flex gap-3 mt-3">
            <Icon icon="mdi-light:home" width="48"/>
            <Icon icon="ion:ios-cart" width="48"/>
            <Icon icon="noto:anchor" width="48"/>
            <Icon icon="fxemoji:alien" width="48"/>
          </div>
        </div>
      </div>
    </div>

    <!--    <nuxt-img src="large.jpg" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />-->

    <!-- Vue Use Demo-->
    <div class="card text-center shadow-2xl max-w-[300px]">
      <div class="card-body">
        <h2 class="card-title">Vue Use Demo</h2>
        <p class="text-primary">Memory usage</p>

        <div class="justify-center card-actions">
           <client-only>
	           <memory-usage-demo/>
           </client-only>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue'

const {user, isLoggedIn, loginWithSocialProvider} = useAuth();
const color = useColor()
const counter = useCounter()
</script>
