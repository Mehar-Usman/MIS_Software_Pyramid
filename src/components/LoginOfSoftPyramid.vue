<template>
    <div class="set-bg-img flex justify-center items-center px-48 py-36">
      <div class="grid grid-cols-12 justify-center">
        <div class="col-span-6">
          <div class="">
            <img src="src/photos/login.png" alt="" class="shadow-2xl rounded-l-lg py-6">
          </div>
        </div>
        <div class="col-span-6 bg-white px-6 py-8">
          <h2 class="text-center font-semibold text-2xl">Login</h2>
          <div class="mt-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              v-model="email"
              id="email"
              @input="validateEmail"
              class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none"
              placeholder="Email"
              required
            />
            <p class="text-red-500 text-xs mt-1">{{ emailErrorMessage }}</p>
          </div>
          <div class="mt-4">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Password
            </label>
            <div class="relative">
              <input
                :type="passwordVisible ? 'text' : 'password'"
                id="password"
                v-model="password"
                @input="validatePassword"
                class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none"
                placeholder="Password"
                required
              />
              <span @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-blue-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

              </span>
            </div>
            <p class="text-red-500 text-xs mt-1">{{ passwordErrorMessage }}</p>
          </div>
          <div class="mt-6">
            <button @click="ForNextPage" class="set-btn-bg text-white py-1 w-full rounded">Login</button>
          </div>
        </div>
      </div>
    </div>
   <div>
    <Footer/>
   </div>
  </template>
  
  <script>
  import Footer from '../components/Footer.vue'
  export default {
    components:{
        Footer,
    },
    data() {
      return {
        email: '',
        password: '',
        emailErrorMessage: '',
        passwordErrorMessage: '',
        passwordVisible: false,
      };
    },
    methods: {
      ForNextPage() {
        if (this.email !== '' && this.password !== '' && this.emailErrorMessage === '' && this.passwordErrorMessage === '') {
          // Correct input
          this.$router.push("/home");
        } else if (this.email === '' || this.password === '') {
          // Empty input fields
          alert('Please fill in the input fields.');
        } else {
          // Incorrect input
          alert('Please enter correct email and password.');
        }
      },
      validateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.emailErrorMessage = '';
        } else {
          this.emailErrorMessage = 'Invalid Email';
        }
      },
      validatePassword() {
        if (this.password.length >= 8 && /\d/.test(this.password) && /[!@#$%^&*]/.test(this.password)) {
          this.passwordErrorMessage = '';
        } else {
          this.passwordErrorMessage = 'Password must be at least 8 characters and contain a number and a special character.';
        }
      },
      togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  .set-bg-img {
    background-image: url("https://mis.softpyramid.com/login-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: auto;
  }
  
  .set-btn-bg {
    background-color: #007bff;
  }
  </style>
  