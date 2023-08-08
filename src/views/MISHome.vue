<template>
    <div>
      <Navbar />
    </div>
    <div>
      <UserPerfomacePart/>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
import UserPerfomacePart from '../components/UserPerfomacePart.vue';
  
  export default {
    components: {
    Navbar,
    UserPerfomacePart
},
    
  };
  </script>
  
  <style scoped>
  /* Your styles if needed */
  </style>
  