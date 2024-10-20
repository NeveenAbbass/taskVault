<template>
  <div class="bg-bg_color my-0 mx:6 lg:mx-16">
    <nav class="flex justify-between items-center">
      <div class="hidden md:block">
        <img src="../assets/imgs/Logo.svg" alt="logo">
      </div>


      <ul class="md:flex gap-8 bg-bg_color hidden">
        <li class="py-5 cursor-pointer"><router-link to="/" active-class="border-b border-b-primary_color">Home</router-link></li>
        <li class="py-5 cursor-pointer"><router-link to="/pricing" active-class="border-b border-b-primary_color">Pricing</router-link></li>
        <li class="py-5 cursor-pointer"><router-link to="/about" active-class="border-b border-b-primary_color">About</router-link></li>
        <li class="py-5 cursor-pointer"><router-link to="/blog" active-class="border-b border-b-primary_color">Blog</router-link></li>
      </ul>

      <div class="gap-4 items-center hidden md:flex">
        <span class="underline underline-offset-8 underline-primary_color py-0 border-primary_color cursor-pointer hover:underline-gray-900 hover:text-primary_color" @click="openLogin">login</span>
        <span class="bg-primary_color text-white px-6 py-2 rounded-full cursor-pointer hover:text-primary_color hover:bg-white border hover:border-primary_color" @click="openSignup">sign up</span>
      </div>

    </nav>


    <!-- ------------------------burger menu--------------------------------- -->
     <div class="md:hidden flex items-center justify-between">
      <div class="pb-3">
        <img src="../assets/imgs/Logo.svg" alt="logo">
      </div>

      <img src="../assets/imgs/burger-icon.svg" alt="nav menu" class="pb-3 cursor-pointer w-16 h-16" @click="toggleMenu">
     </div>

      <ul class="md:hidden gap-8 bg-white opacity-90 w-full text-start py-4 px-20 rounded-2xl absolute start-0 top-15" v-if="showMenu">
        <li class="py-3 cursor-pointer"><router-link to="/" active-class="border-b border-b-primary_color">Home</router-link></li>
        <li class="py-3 cursor-pointer"><router-link to="/pricing" active-class="border-b border-b-primary_color">Pricing</router-link></li>
        <li class="py-3 cursor-pointer"><router-link to="/about" active-class="border-b border-b-primary_color">About</router-link></li>
        <li class="py-3 cursor-pointer"><router-link to="/blog" active-class="border-b border-b-primary_color">Blog</router-link></li>
        <li class="py-3 cursor-pointer font-medium hover:text-primary_color md:hidden" @click="openLogin">Login</li>
      </ul>

    <main class="flex flex-col items-center">
      <h1 class="text-primary_text text-6xl mt-44 md:mt-64 mb-10 text-center font-medium">Regain control over your time</h1>
      <span class="bg-primary_color text-white md:px-10 px-5 py-2 rounded-full w-fit cursor-pointer hover:text-primary_color hover:bg-white border hover:border-primary_color" @click="openSignup">start free now!</span>
    </main>

  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data(){
    return{
      showMenu: false,
    }
  },

  created(){
    this.showMenu = false;
  },

  methods:{
    toggleMenu(){
      this.showMenu = !this.showMenu
    },
    openLogin(){
      this.$store.dispatch('openLogin');
    },
    openSignup(){
      this.$store.dispatch('openSignup');
    },
  }
}
</script>

<style>

</style>