<template>
      <component v-bind:is="modalVal">
    </component>
</template>

<script>
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
export default {
  name: "LogSignModal",
  components: {
    Login,
    Signup
  },

  data(){
    return{
      modalVal: "Signup",
    }
  }

}
</script>

<style>

</style>