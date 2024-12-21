<template>
  <div class="px-2 bg-white rounded-lg my-5 py-3 w-64">
    <header
      class=" relative text-xs text-center pb-4
      before:content-['<'] before:absolute before:left-[-5px] 
      after:content-['>'] after:absolute after:right-[-5px]"
    >
      November 2024
    </header>
    <ol class="flex pt-2">
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </ol>

    <ol class="flex pt-2">
      <li>1</li>
      <li>2</li>
      <li class="current-date">3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "WeeklyCalender",
};
</script>

<style>

li{
  flex: 1;
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 2;
}


div.rounded-lg.my-5.py-3 > ol:nth-of-type(2) li::after{
  content: '';
  display: block;
  padding-bottom: 100%;
  width: 25px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  bottom: -4px;
  z-index: 1;
}

div.rounded-lg.my-5.py-3 > ol:nth-of-type(2) li::after{
  background-color: #e5e5e567;
}

.current-date{
  color: #fff;
}

.current-date::after{
  background-color: #546FFF !important;
}


</style>
