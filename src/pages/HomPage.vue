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
        <span class="underline underline-offset-8 underline-primary_color py-0 border-primary_color">login</span>
        <span class="bg-primary_color text-white px-6 py-2 rounded-full">sign up</span>
      </div>

    </nav>

    <main class="flex flex-col items-center">
      <h1 class="text-primary_text text-6xl mt-64 mb-10 text-center font-medium">Regain control over your time</h1>
      <span class="bg-primary_color text-white px-10 py-2 rounded-full w-fit">start free now!</span>
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