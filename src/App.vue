<template>
  <div class="text-blue-500"> this is the blue div</div>

  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>

import NavBar from './components/NavBar.vue'
export default {
  name: 'App'
}

document.body.classList.add("light");

</script>

<style scoped>

</style>
