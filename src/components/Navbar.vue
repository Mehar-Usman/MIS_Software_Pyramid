<template>
  <nav class="bg-gray-100 py-3">
    <div class="flex justify-between px-4 items-center relative">
      <router-link to="/">
        <img src="src/photos/softPyramid.png" alt="Logo" class="h-6 lg:h-10" />
      </router-link>
      <div class="hidden sm:flex">
        <ul class="flex space-x-2 lg:space-x-5 text-white whitespace-nowrap">
          <li>
            <router-link  to="/" :class="{ active: activeItem === 'Home' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Home</router-link>
          </li>
          <li>
            <router-link to="/" :class="{ active: activeItem === 'Salary' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Salary</router-link>
          </li>
          <li>
            <router-link to="/" :class="{ active: activeItem === 'Increments' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Increments</router-link>
          </li> 
          <li class="flex items-center gap-2">
      <router-link to="#" :class="{ active: activeItem === 'Payroll' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Payroll  </router-link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 items-center flex mt-1 text-gray-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

          </li>
          <li>
            <router-link to="/" :class="{ active: activeItem === 'Daily Status' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Daily Status</router-link>
          </li>
          <li>
            <router-link to="/" :class="{ active: activeItem === 'Leaves' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Leaves</router-link>
          </li>
          <li>
            <router-link to="/" :class="{ active: activeItem === 'Assets' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Assets</router-link>
          </li>
          <li>
            <router-link to="/" :class="{ active: activeItem === 'Entertainment' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Entertainment</router-link>
          </li>
          <li class="">
            <router-link to="/" class="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500 " >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p  :class="{ active: activeItem === 'Abu Usman' }" class="text-gray-400 hover:text-gray-700 text-[13px] lg:text-[14px]">Abu Usman</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mt-1 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </router-link>
          </li>
        </ul>
      </div>
      <div class="sm:hidden">
        <button @click="toggleMenu" class="text-white">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          v-if="isMenuOpen"
          class=" inset-0 z-20 pt-10 flex items-center justify-center"
          @click="closeMenu"
        >
          <div ref="menu" class="bg-white p-4 rounded-lg shadow-md menu-popup block">
            <ul class="text-gray-700 space-y-2">
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Home</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Salary</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Increments</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Payroll</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Daily Status</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Leaves</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Assets</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Entertainment</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Increments</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-blue-200 rounded">Abu Usman</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      activeItem: null
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  
  },
  watch:{
    closeMenu() {
      this.isMenuOpen = false;
    },
  }
};
</script>

<style scoped>
/* Increase the width of the popup */
.menu-popup {
  width: 600px; /* Adjust the width as needed */
}
.active {
  color: black;
}
/* Tailwind classes can be used here if needed */
</style>
