<template>
  <div class="flex items-center justify-center fixed inset-0 bg-gray-600 bg-opacity-50">
    <div class="bg-white shadow-lg rounded-xl px-10 py-16 w-full max-w-xl">
      <h2 class="text-4xl font-semibold text-primary_text text-center mb-2">Welcome Back</h2>
      <h3 class="text-lg font-medium text-paragraph_text mb-8">Login to your account</h3>
      
      <form @submit.prevent="login">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-paragraph_text text-start ps-2">Email</label>
          <input
            type="email"
            v-model="email"
            id="email"
            class="mt-1 block w-full px-4 py-2 outline-none border border-paragraph_text rounded-lg shadow-sm focus:border-primary_color"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-paragraph_text text-start ps-2">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            class="mt-1 block w-full px-4 py-2 outline-none border border-paragraph_text rounded-lg shadow-sm focus:border-primary_color "
            placeholder="Enter your password"
            required
          />
        </div>

        <!-- Remember Me Checkbox -->
        <div class="flex items-center mb-4">
          <input
            type="checkbox"
            v-model="rememberMe"
            id="rememberMe"
            class="h-4 w-4 text-primary_color border border-paragraph_text rounded focus:ring-primary_color accent-primary_color"
          />
          <label for="rememberMe" class="ml-2 block text-sm text-paragraph_text">Remember Me</label>
        </div>

        <!-- Login Button -->
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-primary_color text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary_hover"
          >
            Login
          </button>
        </div>
      </form>

      <!-- Forgot Password Link -->
      <div class="text-center">
        <router-link to="/signup" class="text-sm text-paragraph_text hover:text-primary_color underline underline-offset-4">Don't have an account? Sign up here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login() {
      // Handle the login logic
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Remember Me:", this.rememberMe);
    },
  },
};
</script>

<style scoped>
/* Optional custom styling */
</style>
