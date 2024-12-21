<template>
  <div
    class="flex items-center justify-center fixed inset-0 bg-gray-600 bg-opacity-50"
  >
    <div
      class="bg-bg_color shadow-lg rounded-xl px-10 py-2 w-full max-w-xl mx-3 md:mx-0"
    >
      <div class="flex justify-between">
        <h2 class="text-4xl font-semibold text-primary_text text-center mb-4">
          Create an account
        </h2>
        <span
          class="text-3xl cursor-pointer font-bold text-primary_color"
          @click="closeModal"
          >X</span
        >
      </div>

      <form @submit.prevent="register">
        <!-- Username Input -->
        <div class="mb-4">
          <label
            for="username"
            class="block text-sm font-medium text-paragraph_text text-start ps-2"
            >Name</label
          >
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

        <!-- confirm password -->
        <div class="mb-4">
          <label
            for="Confirmpassword"
            class="block text-sm font-medium text-paragraph_text text-start ps-2"
            >Confirm Password</label
          >
          <input
            type="password"
            id="password"
            class="mt-1 block w-full px-4 py-2 outline-none border border-paragraph_text rounded-lg shadow-sm focus:border-primary_color"
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
            required
            class="h-4 w-4 text-primary_color border border-paragraph_text rounded focus:ring-primary_color accent-primary_color"
          />
          <label for="agreement" class="ml-2 block text-sm text-paragraph_text"
            >I agree to the
            <a
              href="#"
              class="text-primary_color hover:text-primary_hover underline underline-offset-4"
              >terms & conditions</a
            ></label
          >
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

      <div class="text-center">or</div>

      <!-- --------------------google registeration-------------- -->

      <div
        class="flex justify-center bg-white px-4 text-sm mx-auto w-3/4 py-2 my-2 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
        @click="googleRegister"
        >
        <img src="../assets/imgs/google.svg" alt="google" class="w-4 h-4" />
        <span class="ps-5"> Sign up with Google </span>
      </div>

      <!-- ---------------facebook registeration ----------------------------->
<!--
      <div
        class="flex justify-center bg-white px-4 mx-auto w-3/4 text-sm py-2 mt-2 mb-4 rounded-lg shadow-md hover:bg-gray-100"
        @click="facebookRegister"
        >
        <img src="../assets/imgs/facebook.svg" alt="google" class="w-4 h-4" />
        <span class="ps-5"> Sign up with Facebook </span>
      </div>

    -->

      <!-- login -->
      <div class="text-center">
        <span
          class="text-sm text-paragraph_text hover:text-primary_color underline cursor-pointer underline-offset-4"
          @click="openLogin"
          >Already have an account? Login here</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: "Signup",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    closeModal() {
      this.$store.dispatch("closeModal");
    },

    openLogin() {
      this.$store.dispatch("openLogin");
    },

    register() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("successfully registered");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },

    //* google registeration
    googleRegister(){
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      })
    },

    //? facebook registeration to be added

    // facebookRegister(){
    //   const provider = new FacebookAuthProvider();

    //   signInWithPopup(auth, provider)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }
    
  },
};
</script>

<style scoped>
/* Optional custom styling */
</style>
