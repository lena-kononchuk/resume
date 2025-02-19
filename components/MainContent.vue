<template>
  <div class="flex justify-between  gap-6 align-middle">
    <Experience class="basis-7/10" />
    <div class="basis-3/10" >
      <div class="text-gray-400 uppercase tracking-[.2em] border-b-1 border-gray-300">Summary</div>
      <div class="pt-3">I’m a responsible, active, and open person. I enjoy what I do and am eager to continuously learn and improve my skills. In my work, I strive to be decisive and goal-oriented, always focusing on the result. My goal is to grow as a professional by solving increasingly complex tasks and learning new technologies to become an even better developer.</div>
      <Skills />
    </div>
  </div>
</template>

<script setup>
import Experience from '../components/Experience.vue'
import Skills from '../components/Skills.vue'
</script>
