<template>
  <div class="flex w-full flex-wrap">
    <!-- -------------------------main section------------------------- -->
    <main class="text-start w-full lg:w-2/3 mx-0 pt-10 ps-6">
      <h1 class="font-semibold text-3xl text-primary_text">Hi, Dennis</h1>
      <h2 class="font-semibold text-m text-dark_text">
        let's finish your task today!
      </h2>

        <!-- ---------------------------------chart and calender----------------------------- -->
      <section class="flex gap-4 mt-6">

      <!-- ---------------------chart------------------------------- -->
        <div class="px-4 pb-4 bg-gray_bg rounded-lg overflow-hidden">
        <div class="mt-5 bg-white rounded-lg">
          <apexchart
            type="area"
            height="130"
            width="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
       </div>

       <!-- ---------------------------calender------------------------------ -->
       <div class="px-4 bg-gray_bg rounded-lg overflow-hidden flex items-ceter">
          <WeeklyCalender />
        </div>
    </section>
      <!-- ---------------------------------upcoming tasks------------------------------ -->
      <section class="my-8 w-[800px] overflow-hidden">
        <h3 class="text-2xl font-medium text-primary_text mb-8">
          Upcoming Projects
        </h3>
        <swiper-container
          slides-per-view="2"
          speed="500"
          autoplay="true"
          loop="true"
          navigation="true"
          class="overflow-hidden"
        >
          <swiper-slide 
          v-for="project in projects"
          :key="project.id"
          ><TaskCard :project="project" /></swiper-slide>
        </swiper-container>
      </section>
    </main>
    <aside class="lg:bg-gray_bg w-full lg:w-1/3 overflow-hidden mx-0 px-6">
      <TaskToday class="mt-10"/>
    </aside>
  </div>
</template>

<script>
import RunningTask from "./RunningTask.vue";
import TaskCard from "./TaskCard.vue";
import TaskToday from "./TaskToday.vue";
import CrudMixins from "../mixins/CrudMixins";
import WeeklyCalender from "./WeeklyCalender.vue";

export default {
  name: "Overview",
  components: { RunningTask, TaskCard, TaskToday, WeeklyCalender },
  mixins: [CrudMixins],

  created(){
    this.getProjects();
  },
  data() {
    return {
      projects: [],
      series: [
        {
          name: "Complete Tasks",
          data: [2, 4, 8, 5, 4, 9, 10],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  },
};
</script>

<style></style>
