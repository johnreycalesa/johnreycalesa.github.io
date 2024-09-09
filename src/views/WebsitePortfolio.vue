<script setup>
import { ref } from 'vue'
import HeaderPage from '../components/HeaderPage.vue'
import SkillsPage from '../components/SkillsPage.vue'
import ExperiencePage from '../components/ExperiencePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import FooterPage from '../components/FooterPage.vue'

const isNavOpen = ref(false)
function toggleNav() {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <nav class="p-4 sticky top-0 z-10 primary-background">
    <div class="container mx-auto flex items-center justify-between wrapper">
      <a class="flex items-center" href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          width="32"
          height="32"
          class="mr-2"
        />
        <!-- <span class="text-lg font-semibold">John Rey Calesa</span> -->
      </a>
      <button
        class="text-gray-600 focus:outline-none md:hidden"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <ion-icon name="menu" color="light"></ion-icon>
      </button>
      <div id="nav" class="hidden md:flex flex-grow items-center justify-end">
        <ul class="flex space-x-4">
          <li><a class="text-white hover:text-gray-300" href="#skills">Skills</a></li>
          <li><a class="text-white hover:text-gray-300" href="#experience">Experience</a></li>
          <li><a class="text-white hover:text-gray-300" href="#project">Projects</a></li>
        </ul>
        <a
          class="bg-white text-black border-2 border-black px-4 py-2 mx-4 rounded hover:bg-gray-300 flex items-center gap-2"
          href="#footer"
        >
          <span>Contacts</span>
          <span class="material-symbols-outlined"> north_east </span>
        </a>
      </div>
    </div>

    <!-- Sidebar on the Right -->
    <div
      class="fixed top-0 right-0 h-full w-1/2 sm:w-1/3 bg-gray-500 text-white flex-col justify-between p-4 z-10 transition-all duration-300 ease-in-out md:hidden"
      :class="isNavOpen ? 'flex' : 'hidden'"
    >
      <div class="flex flex-col items-start">
        <ul class="space-y-4 w-full">
          <li><a class="block hover:text-gray-300" href="#skills">Skills</a></li>
          <li><a class="block hover:text-gray-300" href="#experience">Experience</a></li>
          <li><a class="block hover:text-gray-300" href="#project">Projects</a></li>
        </ul>
        <a
          class="bg-white text-black border-2 border-black px-4 py-2 mt-4 rounded hover:bg-gray-300 w-full text-center flex items-center justify-center gap-2"
          href="#footer"
        >
          <span>Contacts</span>
          <span class="material-symbols-outlined"> north_east </span>
        </a>
      </div>

      <button
        class="text-gray-800 focus:outline-none bg-white w-min p-2 sm:p-4 rounded-md border-2 border-black"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <ion-icon name="close"></ion-icon>
      </button>
    </div>
  </nav>

  <div id="header">
    <HeaderPage />
  </div>
  <div id="skills">
    <SkillsPage />
  </div>
  <div id="experience">
    <ExperiencePage />
  </div>
  <div id="project">
    <ProjectsPage />
  </div>
  <div id="footer">
    <FooterPage />
  </div>
</template>

<style scoped>
ion-icon {
  font-size: 32px;
  color: #000000;
}
</style>
