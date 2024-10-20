<template>
  <div class="bg-bg_color px-0 py-0">
    <router-view></router-view>
    <LogSignModal v-if="isModalOpen"/>

  </div>
</template>

<script>

import LogSignModal from './pages/LogSignModal.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',

  components:{
    LogSignModal,
  },

  computed:{
    ...mapState(["isModalOpen", "modalVal"]),
  },
  mounted(){
    document.body.classList.add("light")
  },
}

</script>

<style>
</style>
