<template>
  <div class="flex justify-between items-center gap-7">
    <div class="flex flex-col space-y-2">
      <div class="flex items-center space-x-2">
        <font-awesome-icon :icon="['fas', 'phone']" class="highlight w-[11px] h-[11px]" />
        <a href="tel:+351919999999" class="text-[12px]">+380 93 317 5650</a>
      </div>
      <div class="flex items-center space-x-2">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="highlight w-[11px] h-[11px]" />
        <span class="text-[12px]">Kyiv, Ukraine</span>
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <div class="flex items-center space-x-2">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="highlight w-[11px] h-[11px]" />
        <a href="https://www.linkedin.com/in/lena-pilipenko/" target="_blank" class="text-[12px]">https://www.linkedin.com/in/lena-pilipenko/</a>
      </div>
      <div class="flex items-center space-x-2">
        <font-awesome-icon :icon="['fab', 'github']" class="highlight w-[11px] h-[11px]" />
        <a href="https://github.com/lena-kononchuk" target="_blank" class="text-[12px]">https://github.com/lena-kononchuk</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faMapMarkerAlt, faLinkedin, faGithub)
</script>
