<script setup>
import { ref, onMounted } from 'vue'

const skills = [
  { name: 'HTML', image: 'logos/html.png', color: '#E44D26' },
  { name: 'CSS', image: 'logos/css.png', color: '#1172B8' },
  { name: 'JavaScript', image: 'logos/javascript.png', color: '#FFCA28' },
  { name: 'C#', image: 'logos/csharp.png', color: '#662579' },
  { name: 'Python', image: 'logos/python.png', color: '#1565A7' },
  { name: 'Java', image: 'logos/java.png', color: '#E76F00' },
  { name: 'TypeScript', image: 'logos/typescript.png', color: '#007ACC' },
  { name: 'Angular', image: 'logos/angular.png', color: '#C3002F' },
  { name: 'ReactJs', image: 'logos/react.png', color: '#53C1DE' },
  { name: 'VueJs', image: 'logos/vue.png', color: '#41B883' },
  { name: 'TailwindCSS', image: 'logos/tailwind.png', color: '#2298BD' },
  { name: 'Laravel', image: 'logos/laravel.png', color: '#FF2D20' },
  { name: '.NET', image: 'logos/dotnet.png', color: '#5027d5' },
  { name: 'MySQL', image: 'logos/mysql.png', color: '#00546B' },
  { name: 'MongoDB', image: 'logos/mongodb.png', color: '#499D4A' },
  { name: 'XAMPP', image: 'logos/xampp.png', color: '#FB7A24' },
  { name: 'Firebase', image: 'logos/firebase.png', color: '#FFA712' },
  { name: 'Mapbox', image: 'logos/mapbox.png', color: '#485160' },
  { name: 'jQuery', image: 'logos/jquery.png', color: '#0769AD' },
  { name: 'Springboot', image: 'logos/springboot.png', color: '#6db53d' },
  { name: 'CodeIgniter', image: 'logos/codeigniter.png', color: '#EE4323' }
]

const isSkillVisible = ref(false)
const selectedSkill = ref('')

function showSkill(skillName) {
  selectedSkill.value = skillName
  isSkillVisible.value = true
}

function hideSkill() {
  isSkillVisible.value = false
  selectedSkill.value = ''
}

onMounted(() => {
  const elements = document.querySelectorAll('.skill-item')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('slide-up')
        } else {
          entry.target.classList.remove('slide-up')
        }
      })
    },
    { threshold: 0.5 }
  )

  elements.forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <section class="container mx-auto p-4 md:p-8 wrapper soft-background md:rounded-lg">
    <h2 class="font-bold mb-4">Skills</h2>
    <div class="flex justify-around items-center w-full flex-wrap gap-3 sm:gap-10 border">
      <div v-for="(skill, index) in skills" :key="index"
        class="skill-item relative size-[100px] sm:size-[150px] md:size-[200px] bg-white border-2 border-opacity-60 rounded-lg flex justify-center items-center p-2 sm:p-6 hover:scale-105 hover:shadow-normal transition-all duration-300 opacity-0 translate-y-10"
        :style="{ borderColor: skill.color }" @mouseover="showSkill(skill.name)" @mouseleave="hideSkill">
        <img class="w-full object-contain" :src="skill.image" :alt="`${skill.name} icon`" />

        <div v-if="isSkillVisible && selectedSkill === skill.name"
          class="absolute inset-x-0 -top-10 sm:-top-12 md:-top-15 flex items-center justify-center text-white text-xs sm:text-sm md:text-2xl font-bold transition-opacity duration-300 rounded-xl shadow-normal p-2"
          :style="{ background: skill.color }">
          {{ skill.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.5s ease forwards;
}

.skill-item {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
</style>
