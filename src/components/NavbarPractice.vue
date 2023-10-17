<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white text-xl font-semibold">Your Logo</div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
          </button>
        </div>
        <div
          :class="{ 'hidden': !showMenu || !isMobile, 'md:flex': true }"
          class="md:flex space-x-4"
        >
          <router-link class="text-white" to="/">Home</router-link>
          <router-link class="text-white" to="/about">About</router-link>
          <router-link class="text-white" to="/services">Services</router-link>
          <router-link class="text-white" to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false,
        isMobile: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      checkScreenWidth() {
        this.isMobile = window.innerWidth < 768;
      },
    },
    created() {
      this.checkScreenWidth();
      window.addEventListener("resize", this.checkScreenWidth);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkScreenWidth);
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  