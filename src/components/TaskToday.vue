<template>
  <div class="p-5 bg-white rounded-lg w-full">
    <p class="text-xl font-semibold text-start">Task Today</p>
    <img src="../assets/imgs/tryal.png" alt="the task representantive image" width="400" height="100" class="mx-auto rounded-lg my-5">
    <p class="text-lg font-semibold text-start">Creating UI/UX project</p>
    <p class="text-dark_text pb-4 text-start">UI/UX Design</p>
    <div class="w-full bg-lighter_dark rounded-full h-1.5">
  <div class="bg-primary_color h-1.5 rounded-full" style="width: 45%"></div>
</div>
<div class="flex mb-6 mt-2 gap-2">
  <img src="../assets/imgs/timecircle.svg" alt="clock photo">
  <p>4 hours</p>
</div>

<hr class="pb-5">


<article>
  <div class="flex justify-between items-center pb-5">
    <p class="text-xl font-semibold text-start">Task Today</p>
    <p class="text-dark_text pb-4 text-start">UI/UX Design</p>
  </div>

  <div class="flex gap-4 items-center pb-5">
    <span class="bg-gray_bg py-2 px-4 rounded-lg text-primary_text">1</span>
    <p class="text-primary_text text-start">Understanding the problem</p>
  </div>

  <div class="flex gap-4 items-center pb-5">
    <span class="bg-gray_bg py-2 px-4 rounded-lg text-primary_text">1</span>
    <p class="text-primary_text text-start">Understanding the problem</p>
  </div>

  <div class="flex gap-4 items-center pb-5">
    <span class="bg-gray_bg py-2 px-4 rounded-lg text-primary_text">1</span>
    <p class="text-primary_text text-start">Understanding the problem</p>
  </div>
</article>

<button class="bg-primary_color text-white md:px-10 px-5 py-2 rounded-lg w-full cursor-pointer text-[12px] md:text-base hover:text-primary_color hover:bg-white border hover:border-primary_color">View details</button>



  </div>
</template>

<script>
export default {
  name: 'TaskToday',

}
</script>

<style>

</style>