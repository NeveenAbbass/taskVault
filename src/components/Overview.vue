<template>
  <div class="flex gap-5 ">
    <!-- -------------------------main section------------------------- -->
    <main class="pt-10 text-start md:w-1/2 lg:w-2/3 z-10 mx-0">
      <h1 class="font-semibold text-3xl text-primary_text">Hi, Dennis</h1>
      <h2 class="font-semibold text-m text-dark_text">
        let's finish your task today!
      </h2>
      <div class="flex gap-10">
        <section class="mt-8">
          <RunningTask />
        </section>

        <!-- ---------------------------------chart----------------------------- -->
      <div class="px-4 pb-4 bg-gray_bg rounded-lg overflow-hidden">
        <div class="mt-8 bg-white rounded-lg">
          <apexchart
            type="area"
            height="200"
            width="500"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
       </div>
      </div>
      <!-- ---------------------------------upcoming tasks------------------------------ -->
      <section class="my-8 w-[800px] overflow-hidden">
        <h3 class="text-2xl font-medium text-primary_text mb-8">
          Upcoming Tasks
        </h3>
        <swiper-container
          slides-per-view="2"
          speed="500"
          autoplay="true"
          loop="true"
          navigation="true"
          class="overflow-hidden"
        >
          <swiper-slide><TaskCard /></swiper-slide>
          <swiper-slide><TaskCard /></swiper-slide>
          <swiper-slide><TaskCard /></swiper-slide>
          <swiper-slide><TaskCard /></swiper-slide>
        </swiper-container>
      </section>
    </main>
    <aside class="bg-gray_bg w-full md:w-1/2 lg:w-1/3 overflow-hidden flex-shrink-0 mx-0">
      <TaskToday class="mt-10"/>
    </aside>
  </div>
</template>

<script>
import RunningTask from "./RunningTask.vue";
import TaskCard from "./TaskCard.vue";
import TaskToday from "./TaskToday.vue";

export default {
  name: "Overview",
  components: { RunningTask, TaskCard, TaskToday },
  data() {
    return {
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
