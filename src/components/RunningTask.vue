<template>
    <div class="rounded-lg px-7 pt-7 bg-primary_text text-white">
    <h3>Running Task</h3>
    <p class="text-4xl my-6">65</p>
    <div class="flex">
      <svg
  width="100" height="100" viewBox="0 0 250 250"
  class="circular-progress" style="--progress: 45"
>
  <circle class="bg"></circle>
  <circle class="fg"></circle>
  <text fill="#ffffff" font-size="48" font-family="Verdana" x="45" y="120">45%</text>
</svg>

<div>
  <p class="text-3xl pt-3">100</p>
  <p class="text-lighter_dark">Task</p>
</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RunningTask',

}
</script>

<style>
.circular-progress {
  --size: 200px;
  --half-size: calc(var(--size) / 2);
  --stroke-width: 10px;
  --radius: calc((var(--size) - var(--stroke-width)) / 2);
  --circumference: calc(var(--radius) * pi * 2);
  --dash: calc((var(--progress) * var(--circumference)) / 100);
}

.circular-progress circle {
  cx: var(--half-size);
  cy: var(--half-size);
  r: var(--radius);
  stroke-width: var(--stroke-width);
  fill: none;
  stroke-linecap: round;
}

.circular-progress circle.bg {
  stroke: #ddd;
}

.circular-progress circle.fg {
  transform: rotate(-90deg);
  transform-origin: var(--half-size) var(--half-size);
  stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: #5394fd;
}
</style>