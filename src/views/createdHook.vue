<template>
    <div>
      <h1>Welcome, {{ user.name }}</h1>
      <p>Email: {{ user.email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
      };
    },
    created() {
      // Simulate fetching user data from an API
      this.fetchUserData();
    },
    methods: {
      fetchUserData() {
        // Simulate an API call delay
        setTimeout(() => {
          // Replace this with your actual API call
          const responseData = {
            name: 'John Doe',
            email: 'john@example.com',
          };
          this.user = responseData;
        }, 1000); // Simulating a 1-second delay
      },
    },
  };
  </script>
  