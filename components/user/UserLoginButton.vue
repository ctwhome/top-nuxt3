<template>
  <div>
    <div v-if="isLoggedIn" class="hover:bg-gray-100 rounded-full  h-12 w-12 flex items-center justify-center">
      <img class="cursor-pointer h-8 w-8 rounded-full" :src="userSession.user.user_metadata.avatar_url" @click="toProfile">
    </div>
    <div v-else>
      <!--      <button-->
      <!--        class="inline-block no-underline py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"-->
      <!--      >-->
      <!--        Login<span class="hidden-xs-only">/Signup</span>-->
      <!--      </button>-->
      <!--      <button-->
      <!--        class="inline-flex items-center no-underline py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"-->
      <!--        @click="signInWithMicrosoft"-->
      <!--      >-->
      <!--        <svg-->
      <!--          class="w-4 h-4 mr-2"-->
      <!--          width="22"-->
      <!--          height="22"-->
      <!--          viewBox="0 0 42 42"-->
      <!--          fill="none"-->
      <!--          xmlns="http://www.w3.org/2000/svg"-->
      <!--        >-->
      <!--          <path-->
      <!--            d="M1 0C0.448 0 0 0.447 0 1V20H20V0H1ZM22 0V20H42V1C42 0.447 41.552 0 41 0H22ZM0 22V41C0 41.553 0.448 42 1 42H20V22H0ZM22 22V42H41C41.552 42 42 41.553 42 41V22H22Z"-->
      <!--            fill="currentColor"-->
      <!--          />-->
      <!--        </svg>-->
      <!--        <span>Login with Microsoft</span>-->
      <!--      </button>-->

      <button
        class="w-full inline-flex items-center no-underline py-2 px-4 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-white font-bold rounded"
        @click="loginWithProvider('google', $nuxt.context.isDev)"
      >
        <svg
          class="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0039 0C5.37491 0 0 5.373 0 12C0 18.627 5.37491 24 12.0039 24C22.0139 24 24.2691 14.707 23.3301 10H22H19.7324H12V14H19.7383C18.8487 17.4483 15.726 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C14.009 4 15.8391 4.74575 17.2441 5.96875L20.0859 3.12891C17.9519 1.18491 15.1169 0 12.0039 0Z"
            fill="currentColor"
          />
        </svg>

        <div class="whitespace-nowrap">
          Login <span class="hidden sm:inline"> with Google</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { userSession, loginWithProvider, isLoggedIn } from '~/api/auth'
export default {
  setup () {
    return { userSession, loginWithProvider, isLoggedIn }
  },
  data () {
    return {
      activeTab: 0,
      loginDialog: false
    }
  },
  methods: {
    toProfile () {
      this.$router.push({ name: 'profile' })
    }
  }
}
</script>
