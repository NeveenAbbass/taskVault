<template>
  <div class="bg-white rounded-lg px-4 py-5 w-72">
  <img src="../assets/imgs/tryal.png" alt="the task representantive image" width="280" height="100" class="mx-auto rounded-lg">
  <p class="text-lg font-semibold pt-3">Creating Mobile app design</p>
  <p class="text-dark_text pb-4">UI/UX Design</p>
  <span class="text-lg font-medium">Progress</span>
  <span class="float-right">70%</span>
  
  <!-- ----------progress bar---------- -->
<div class="w-full bg-lighter_dark rounded-full h-1.5">
  <div class="bg-primary_color h-1.5 rounded-full" style="width: 45%"></div>
</div>
<div class="flex mt-4 gap-2">
  <img src="../assets/imgs/timecircle.svg" alt="clock photo">
  <p>5 days left</p>
</div>

  </div>
</template>

<script>
export default {
  name : 'TaskCard',
}
</script>

<style>

</style>