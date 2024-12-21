<template>
  <div
    class="flex items-center justify-center fixed inset-0 bg-gray-600 bg-opacity-50"
  >
    <div
      class="bg-bg_color shadow-lg rounded-xl px-10 py-10 w-full max-w-xl mx-3 md:mx-0 text-center"
    >
      <div class="flex justify-end">
        <span
          class="text-3xl cursor-pointer font-bold text-primary_color"
          @click="closeModal"
          >X</span
        >
      </div>
      <h2 class="text-4xl font-semibold text-primary_text text-center mb-8">
        Welcome back
      </h2>
      <h3 class="text-lg font-medium text-paragraph_text mb-8">
        Login to your account
      </h3>

      <form @submit.prevent="login">
        <!-- Email Input -->
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-paragraph_text text-start ps-2"
            >Email</label
          >
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
          <label
            for="password"
            class="block text-sm font-medium text-paragraph_text text-start ps-2"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            class="mt-1 block w-full px-4 py-2 outline-none border border-paragraph_text rounded-lg shadow-sm focus:border-primary_color"
            placeholder="Enter your password"
            required
          />
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
      <div class="text-center">or</div>
      <div
        class="flex justify-center cursor-pointer bg-white px-4 text-sm mx-auto w-3/4 py-2 my-2 rounded-lg shadow-md hover:bg-gray-100"
        @click="loginWithGoogle"
      >
        <img src="../assets/imgs/google.svg" alt="google" class="w-4 h-4" />
        <span class="ps-5"> Sign in with Google </span>
      </div>


      <!-- ---------------login with facebook----------------------- -->

      <!-- <div
        class="flex justify-center bg-white px-4 mx-auto w-3/4 text-sm py-2 mt-2 mb-4 rounded-lg shadow-md hover:bg-gray-100"
      >
        <img src="../assets/imgs/facebook.svg" alt="google" class="w-4 h-4" />
        <span class="ps-5"> Sign in with Facebook </span>
      </div> -->

      <div class="text-center">
        <span
          class="text-sm mt-4 cursor-pointer text-paragraph_text hover:text-primary_color underline underline-offset-4"
          @click="openSignup"
          >Don't have an account? Sign up here</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";


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
    openSignup() {
      this.$store.dispatch("openSignup");
    },
    login() {
      // Handle the login logic
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("successfully signed in");
          this.$router.push('/dash/:userName');
          this.closeModal();

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },

    loginWithGoogle(){
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result.user);
          this.$router.push('/dash/:userName');
          this.closeModal();


        })
        .catch((error) => {
          console.log(error)
        })
      
    },

    closeModal(){
      this.$store.dispatch("closeModal");
    },
  },
};
</script>

<style scoped>
/* Optional custom styling */
</style>
