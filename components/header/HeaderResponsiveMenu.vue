<template>
  <div class="fixed top-0 left-0 z-10">
    <!--Open button-->
    <div class="sm:hidden mt-4 ml-4 " @click="isOpen = !isOpen">
      <!-- Trigger-->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>

    <transition name="menu">
      <div v-if="isOpen" class="fixed top-0 z-10">
        <!-- Outside layer -->
        <div class="fixed top-0 w-screen h-screen bg-gray-800 bg-opacity-70 z-10" @click="isOpen = !isOpen" />
        <!-- menu content -->
        <div class="fixed top-0 relative top-0 max-w-sm h-screen bg-base-100 shadow-2xl z-20" style="min-width: 340px">
          <!--Close button-->
          <div class="absolute right-0 m-4 cursor-pointer" @click="isOpen = !isOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <div class="overflow-auto overscroll-contain bg-base-200 h-full ">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () { return { isOpen: false } },
  methods: {
    close () { this.isOpen = false }
  }

}
</script>
<style>

.menu-enter,
.menu-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  /*transform: translate3d(-100%, 0, 0);*/
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s;
}
</style>
