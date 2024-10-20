<template>
      <component v-bind:is="modalVal">
    </component>
</template>

<script>
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import { mapState} from 'vuex';
export default {
  name: "LogSignModal",
  components: {
    Login,
    Signup
  },

  computed:{
    ...mapState(["modalVal"]),
  }

}
</script>

<style>

</style>