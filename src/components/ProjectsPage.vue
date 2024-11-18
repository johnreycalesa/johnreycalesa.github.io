<script setup>
import { onMounted } from 'vue'

const projects = [
  {
    name: 'Speedy Delivery and Repair',
    year: 'February 2024 - Ongoing',
    description:
<<<<<<< Updated upstream
      'Developed a full-stack responsive website for a delivery and repair business based in South Carolina, USA',
=======
      'Developed a full-stack responsive website for a delivery and repair business based in the United States',
>>>>>>> Stashed changes
    link: 'https://speedyrepairanddelivery.com/',
    image: 'photos/project_1.jpeg',
    alt: 'Speedy Delivery and Repair`s Icon'
  },
  {
    name: 'Victoria`s Paintings',
    year: 'June 2023 - July 2023',
    description:
      'Developed a full-stack responsive website for a painting business based in New Jersey, USA',
    link: 'https://victoriaspainting.com/',
    image: 'photos/project_2.png',
    alt: 'Victoria`s Paintings`s Icon'
  },
  {
    name: 'Favio Jasso',
    year: 'February 2023 - September 2023',
    description:
      'Developed an inventory system for an analytics and marketing consultancy in New Jersey, USA',
    link: 'https://www.faviojasso.com/',
    image: 'photos/project_3.png',
    alt: 'Favio Jasso`s Icon'
  }
]

onMounted(() => {
  const elements = document.querySelectorAll('.project-item')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          if (entry.target.dataset.index % 2 === 0) {
            entry.target.classList.add('slide-right')
          } else {
            entry.target.classList.add('slide-left')
          }
        } else {
          entry.target.classList.remove('slide-left', 'slide-right')
        }
      })
    },
    { threshold: 0.3 }
  )

  elements.forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <section class="container mx-auto xl:mb-4 p-4 md:p-8 wrapper soft-background md:rounded-lg">
    <h2 class="font-bold mb-4">Projects</h2>
    <div
      class="project-item space-y-5 flex items-center w-full justify-around my-4 odd:flex-row-reverse opacity-0 translate-x-10"
      v-for="(project, index) in projects"
      :key="index"
      :data-index="index"
    >
      <div class="border-2 rounded-xl border-black bg-white">
        <img
          class="w-[650px] h-80 object-cover rounded-t-xl"
          :src="project.image"
          :alt="project.alt"
        />
        <div class="flex justify-between p-4 items-center">
          <div>
            <h4 class="text-lg font-semibold">{{ project.name }}</h4>
            <p>{{ project.year }}</p>
          </div>
          <a
            class="border-2 flex justify-center items-center h-min px-2 py-1 rounded-lg border-black"
            :href="project.link"
            >Learn More <span class="material-symbols-outlined"> north_east </span></a
          >
        </div>
      </div>
      <div
        class="border-2 size-64 justify-center items-center p-4 m-4 rounded-xl border-black bg-white hidden md:flex"
      >
        <p class="text-center font-semibold">
          {{ project.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-32px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(32px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-left {
  animation: slideFromLeft 0.5s ease forwards;
}

.slide-right {
  animation: slideFromRight 0.5s ease forwards;
}

.project-item {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
</style>
