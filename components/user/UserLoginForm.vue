<template>
  <div>
    <form class="px-5 py-7">
      <h1 class="font-bold text-center text-2xl mb-5">
        Top Nuxt 3 Login
      </h1>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Access with email (no password)</span>
        </label>
        <input v-model="email" type="email" placeholder="Type your email"
               class="input input-bordered">
      </div>

      <label for="login-modal" class="btn btn-primary w-full mt-3" @click="accessWithEmail">
        <icon class="mr-2 w-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#1362d6">
            <path
                d="M 2.5371094 6 L 13.810547 16.521484 C 14.477547 17.145484 15.523453 17.145484 16.189453 16.521484 L 27.462891 6 L 2.5371094 6 z M 1 7.3007812 L 1 24 L 29 24 L 29 7.3007812 L 17.554688 17.982422 C 16.837688 18.651422 15.919 18.986328 15 18.986328 C 14.081 18.986328 13.162312 18.651422 12.445312 17.982422 L 1 7.3007812 z"
                fill="currentColor"/>
          </svg>
        </icon>
        Access with email
      </label>

    </form>
    <div class="p-5">
      <label class="label">
        <span class="label-text">Or access with a provider</span>
      </label>
      <div class="flex flex-col gap-3">

        <button type="button" class="btn" @click="loginWithSocialProvider('google')">
          <icon class="mr-2 w-4 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  fill="currentColor"/>
            </svg>
          </icon>
          Google
        </button>

        <button type="button" class="btn btn-disabled" @click="loginWithSocialProvider('microsoft')">
          <icon class="mr-2 w-4 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path
                  d="M 5 4 C 4.448 4 4 4.447 4 5 L 4 24 L 24 24 L 24 4 L 5 4 z M 26 4 L 26 24 L 46 24 L 46 5 C 46 4.447 45.552 4 45 4 L 26 4 z M 4 26 L 4 45 C 4 45.553 4.448 46 5 46 L 24 46 L 24 26 L 4 26 z M 26 26 L 26 46 L 45 46 C 45.552 46 46 45.553 46 45 L 46 26 L 26 26 z"
                  fill="currentColor"/>
            </svg>
          </icon>
          Microsoft
        </button>

        <button type="button" class="btn btn-disabled" @click="loginWithSocialProvider('github')">
          <icon class="mr-2 w-4 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#1362d6">
              <path
                  d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                  fill="currentColor"/>
            </svg>
          </icon>
          Github
        </button>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {user, isLoggedIn, loginWithEmail, loginWithSocialProvider} = useAuth();
const email = ref('')

function accessWithEmail() {
  loginWithEmail(email.value)
  console.log('🎹 login with email:', email.value)
}
</script>
