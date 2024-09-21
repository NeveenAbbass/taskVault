<template>
  <div class="bg-bg_color my-0 mx:6 lg:mx-16">
    <nav class="flex justify-between items-center">
      <div>
        <img src="../assets/imgs/Logo.svg" alt="logo">
      </div>
      <ul class="flex gap-8 ">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/pricing">Pricing</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>

      </ul>

      <div class="flex gap-4 items-center">
        <router-link class="underline underline-offset-8 underline-primary_color py-0 border-primary_color" to="/login">sign in</router-link>
        <router-link class="bg-primary_color text-white px-6 py-2 rounded-full" to="/signup">sign up</router-link>
      </div>

    </nav>

    <main class="flex flex-col items-center">
      <h1 class="text-primary_text text-6xl mt-64 mb-10 text-center font-medium">Regain control over your time</h1>
      <router-link class="bg-primary_color text-white px-10 py-2 rounded-full w-fit" to="/signup">start free now!</router-link>
    </main>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>

</style>