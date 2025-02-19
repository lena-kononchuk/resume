
<template>
    <div>
        <div class="text-gray-400 uppercase tracking-[.2em] border-b-1 border-gray-300">Experience</div>
        <div class="pt-3 font-bold text-sm">Junior Frontend Developer</div>
        <div class="highlight">Rocking Tech</div>
        <div class="text-gray-400 text-[11px]">Dec 2023 – Jan 2025, London, Greater London</div>      
        <div class="pt-2 text-gray-700">
        Worked on six projects closely collaborating with a backend team lead.  
        Focused on frontend development, bug fixing, feature implementation, and migrating projects from WordPress to Vue.js & Laravel.
      </div>
      <div>
        <!-- Bug Fixing & Feature Enhancements -->
        <div class="pt-2">
          <h4 class="font-semibold text-gray-700">Bug Resolution & Feature Development (4 Projects)</h4>
          <ul class="list-disc list-inside text-gray-600">
            <li>Implemented forms, filters, sliders, blogs, and database population.</li>
            <li>Migrated multiple projects from WordPress to Vue.js & Laravel.</li>
            <li>Set up routing between Laravel & Vue.js for seamless navigation.</li>
          </ul>
          <p class="text-gray-500 pt-1 ">Tech Stack: <span class="underline">Vue.js (Options API), Less, Vite, Webpack, Laravel, MySQL (SequelAce), Docker.</span></p>
        </div>
  
        <!-- Project 1 -->
        <div class="pt-2">
          <h4 class="font-semibold text-gray-700">Project 1: Company Services Website</h4>
          <ul class="list-disc list-inside text-gray-600">
            <li>Developed dynamic pages with an admin panel (Nova) for content management.</li>
            <li>Built custom components: sliders, forms, podcasts, blogs, and services.</li>
          </ul>
          <p class="text-gray-500 pt-1">Tech Stack: <span class="underline">Vue.js (Composition API), Vue Router, Less, Vite, Laravel, MySQL.</span></p>
        </div>
  
        <!-- Project 2 -->
        <div class="pt-2">
          <h4 class="font-semibold text-gray-700">Project 2: Project & Task Management Platform</h4>
          <ul class="list-disc list-inside text-gray-600">
            <li>Developed a full-featured project management tool with task tracking, deadlines, and collaboration features.</li>
            <li>Built UI based on an existing CSS (BEM) framework and UI-kit.</li>
            <li>Developed interactive Vue.js components with API integrations.</li>
            <li>Implemented form validation, error handling, and notifications.</li>
            <li>Ensured responsiveness, cross-browser compatibility, and adaptive design.</li>
          </ul>
          <p class="text-gray-500 pt-1">Tech Stack: <span class="underline">Vue.js (Composition API), Blade, BEM, Laravel, MySQL.</span></p>
        </div>
      </div>
      <Education />
    </div>
  </template>
  
<script setup>
import Education from '../components/Education.vue'
</script>