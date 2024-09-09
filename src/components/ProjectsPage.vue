<script setup>
const projects = [
  {
    name: 'Speedy Delivery and Repair',
    year: 'February 2024 - Ongoing',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, illum!',
    link: 'https://speedyrepairanddelivery.com/',
    image: 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png',
    alt: 'Speedy Delivery and Repair`s Icon'
  },
  {
    name: 'Victoria`s Paintings',
    year: 'June 2023 - July 2023',
    description:
      'Developed a full-stack responsive website for a painting business based in New Jersey, USA',
    link: 'https://victoriaspainting.com/',
    image: 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png',
    alt: 'Victoria`s Paintings`s Icon'
  },
  {
    name: 'Favio Jasso',
    year: 'February 2023 - September 2023',
    description:
      'Developed an inventory system for an analytics and marketing consultancy in New Jersey, USA',
    link: 'faviojasso.com',
    image: 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png',
    alt: 'Favio Jasso`s Icon'
  }
]
</script>

<template>
  <section class="container mx-auto xl:mb-4 p-4 md:p-8 wrapper soft-background md:rounded-lg">
    <h2 class="font-bold mb-4">Projects</h2>
    <div
      class="space-y-5 flex items-center w-full justify-around my-4 odd:flex-row-reverse"
      v-for="(project, index) in projects"
      :key="index"
    >
      <div class="border-2 rounded-xl border-black bg-white">
        <img
          class="w-full h-80 object-cover rounded-t-xl"
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
        class="border-2 size-64 flex justify-center items-center p-4 rounded-xl border-black bg-white"
      >
        <p class="text-center font-semibold">
          {{ project.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
