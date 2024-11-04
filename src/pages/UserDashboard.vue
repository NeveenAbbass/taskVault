<template>
    <div>

      <!-- -----------------------navbar----------------- -->
    <nav 
    class="sidebar-container"
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
        <span class="ps-5 text-paragraphtext" v-if="!fold">Settings</span>
      </div>

      <div class="pt-64 ps-36" v-if="!fold" @click="fold = true">
      <img src="../assets/imgs/arrow-left.svg" alt="fold">
     </div>

     <div class="pt-64 ps-12" v-else @click="fold = false">
       <img src="../assets/imgs/arrow-right.svg" alt="unfold">
     </div>

    </nav> 

    <main 
    :class="fold ? 'ps-24' : 'ps-52'"
    class="flex justify-start">
       <Overview/>
    </main>
    </div>
</template>

<script>
import TaskCard from '../components/TaskCard.vue';
import Settings from '../components/Settings.vue';
import Overview from '../components/Overview.vue';
import SingleTask from '../components/SingleTask.vue';

export default {
  name : 'UserDashboard',
  components: { TaskCard, Settings, Overview, SingleTask },
  data(){
    return{
     fold: true,
    }
  }
}
</script>

<style>

.sidebar-container {
    display: block;
    position: fixed; /* Stick to the left */
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    background-color: white;
}

</style>