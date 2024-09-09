<script setup>
const skills = [
  {
    name: 'HTML',
    image: '',
    borderColor: '#E44D26',
    backgroundColor: '#F16529'
  },
  {
    name: 'CSS',
    image: ''
  },
  {
    name: 'JavaScript',
    image: '',
    borderColor: '#FFCA28',
    backgroundColor: '#3E3E3E'
  },
  {
    name: 'C#',
    image: ''
  },
  {
    name: 'Python',
    image: '',
    borderColor: '#327EBD',
    backgroundColor: '#FFDA4B'
  },
  {
    name: 'Java',
    image: ''
  },
  {
    name: 'TypeScript',
    image: ''
  },
  {
    name: 'Angular',
    image: ''
  },
  {
    name: 'ReactJs',
    image: '',
    borderColor: '#53C1DE',
    backgroundColor: '#53C1DE'
  },
  {
    name: 'VueJs',
    image: ''
  },
  {
    name: 'TailwindCSS',
    image: ''
  },
  {
    name: 'Laravel',
    image: ''
  },
  {
    name: '.NET',
    image: ''
  },
  {
    name: 'MySQL',
    image: ''
  },
  {
    name: 'MongoDB',
    image: ''
  },
  {
    name: 'XAMPP',
    image: ''
  },
  {
    name: 'Firebase',
    image: ''
  },
  {
    name: 'Mapbox',
    image: ''
  },
  {
    name: 'jQuery',
    image: ''
  },
  {
    name: 'Springboot',
    image: ''
  },
  {
    name: 'CodeIgniter',
    image: ''
  }
]
</script>

<template>
  <section class="container mx-auto p-4 md:p-8 wrapper soft-background md:rounded-lg">
    <h2 class="font-bold mb-4">Skills</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-stretch"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="bg-white shadow-md rounded-2xl border-2 m-2"
        :style="`border-color: ${skill.borderColor}`"
      >
        <div
          v-html="skill.image"
          class="w-full flex justify-center items-center h-40 object-cover rounded-t-2xl"
          :style="`background-color: ${skill.backgroundColor}`"
        ></div>
        <h4 class="text-lg font-semibold w-full flex justify-center py-4">{{ skill.name }}</h4>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
