<template>
    <div>

      <!-- -----------------------navbar----------------- -->
    <nav 
    class="bg-white h-[100vh] sticky top-0 left-0 "
    :class="fold ? 'custom-shadow pt-8 ps-8 w-32 rounded-2xl transition-all' : 'custom-shadow pt-8 ps-8 w-64 rounded-2xl transition-all'">
      <div>
        <img src="../assets/imgs/Logo.svg" alt="logo" v-if="!fold">
        <img src="../assets/imgs/tilte-icon.svg" alt="logo" v-else>
      </div>

      <div class="flex pt-16 ps-2">
        <img src="../assets/imgs/overview.png" alt="logo" @click="fold = false">
        <span class="ps-5" v-if="!fold">Overview</span>
      </div>

      <div class="flex pt-8 ps-2">
        <img src="../assets/imgs/task.png" alt="logo" @click="fold = false">
        <span class="ps-5 text-paragraphtext" v-if="!fold">Task</span>
      </div>

      <div class="flex pt-8 ps-2">
        <img src="../assets/imgs/settings.png" alt="logo" @click="fold = false">
        <span class="ps-5 text-paragraphtext" v-if="!fold">Task</span>
      </div>

      <div class="sticky bottom-0">
      <img src="../assets/imgs/arrow-left.svg" alt="">
     </div>

    </nav> 
    </div>
</template>

<script>
import TaskCard from './TaskCard.vue';
export default {
  name : 'UserDashboard',
  components: { TaskCard },
  data(){
    return{
     fold: false,
    }
  }
}
</script>

<style>

</style>