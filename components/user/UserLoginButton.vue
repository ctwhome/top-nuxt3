<template>
  <div>
    <!-- Logged in -->
    <nuxt-link v-if="isLoggedIn()" to="/profile" class="hover:bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">
      <img
        class="cursor-pointer h-8 w-8 rounded-full"
        :src=" user && user.user_metadata && user.user_metadata.avatar_url || '/img/avatar.svg'"
        referrerpolicy="no-referrer"
        @click="toProfile"
      >
    </nuxt-link>
    <!-- Not logged in-->
    <div v-else>
      <div>
        <label for="login-modal" class="btn btn-primary btn-md modal-button">
          Login access
        </label>
        <input id="login-modal" type="checkbox" class="modal-toggle">
        <div class="modal">
          <div class="modal-box">
            <user-login-form />

            <div class="modal-action">
              <label for="login-modal" class="btn">Close</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const  { user, isLoggedIn } = useAuth()

const router = useRouter()
function toProfile () {
  router.push('')
}

</script>
