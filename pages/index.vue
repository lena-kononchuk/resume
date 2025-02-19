<template>
    <div class="container bg-white w-[800px] mx-auto px-11 py-4">
        <div class="flex justify-between items-center pb-7">
            <div>
                <div class="text-2xl pb-1">Olena Kononchuk</div>
                <div class="text-xl highlight pb-3">Front-End Developer</div>
                <Contacts />
            </div>
            <img :src="avatar" class="w-[130px] h-[130px] rounded-full object-cover" alt="Avatar image">
        </div>
        <MainContent />
    </div>
  </template>
  <script setup>
  import { faHome } from '@fortawesome/free-solid-svg-icons'
  import avatar from '~/assets/images/forGithub.jpeg';
  import Contacts from '../components/Contacts.vue'
  import MainContent from '../components/MainContent.vue'
  </script>
