<template>
  <div class="min-h-screen flex items-center justify-center bg-bg_color">
    <div class="bg-white shadow-lg rounded-xl px-10 py-16 w-full max-w-xl">
      <h2 class="text-4xl font-semibold text-primary_text text-center mb-2">Create an account</h2>
      
      <form @submit.prevent="signup">
        <!-- Username Input -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-paragraph_text text-start ps-2">Name</label>
          <input
            type="text"
            v-model="username"
            id="username"
            class="mt-1 block w-full px-4 py-2 outline-none border border-paragraph_text rounded-lg shadow-sm focus:border-primary_color"
            placeholder="Enter your username"
            required
          />
        </div>

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

       <!-- confirm password -->
       <div class="mb-4">
          <label for="Confirmpassword" class="block text-sm font-medium text-paragraph_text text-start ps-2">Confirm Password</label>
          <input
            type="password"
            id="password"
            class="mt-1 block w-full px-4 py-2 outline-none border border-paragraph_text rounded-lg shadow-sm focus:border-primary_color "
            placeholder="Re-enter your password"
            required
          />
        </div>

        <!-- Agreement Checkbox -->
        <div class="flex items-center mb-4">
          <input
            id="agreement"
            name="agreement"
            type="checkbox"
            class="h-4 w-4 text-primary_color border border-paragraph_text rounded focus:ring-primary_color accent-primary_color"
          />
          <label for="agreement" class="ml-2 block text-sm text-paragraph_text">I agree to the <a href="#" class="text-primary_color hover:text-primary_hover underline underline-offset-4">terms & conditions</a></label>
        </div>

        <!-- Signup Button -->
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-primary_color text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary_hover"
          >
            Sign up
          </button>
        </div>
      </form>

      <!-- login -->
      <div class="text-center">
        <router-link to="/signup" class="text-sm text-paragraph_text hover:text-primary_color underline underline-offset-4">Already have an account? Login here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
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
