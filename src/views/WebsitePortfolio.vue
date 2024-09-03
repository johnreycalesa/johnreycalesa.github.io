<script setup>
import HeaderPage from '../components/HeaderPage.vue'
import SkillsPage from '../components/SkillsPage.vue'
import ExperiencePage from '../components/ExperiencePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import FooterPage from '../components/FooterPage.vue'

function toggleNav() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('hidden')
}
</script>

<template>
  <nav class="bg-gray-500 text-white p-4 sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between">
      <a class="flex items-center" href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          width="32"
          height="32"
          class="mr-2"
        />
        <span class="text-lg font-semibold">Brand</span>
      </a>
      <button
        class="text-gray-600 focus:outline-none md:hidden"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div id="nav" class="hidden md:flex flex-grow items-center justify-between">
        <ul class="flex space-x-4">
          <li><a class="text-gray-700 hover:text-gray-900" href="#">First Item</a></li>
          <li><a class="text-gray-700 hover:text-gray-900" href="#">Second Item</a></li>
          <li><a class="text-gray-700 hover:text-gray-900" href="#">Third Item</a></li>
        </ul>
        <a class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="#">Button</a>
      </div>
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
