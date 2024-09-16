<script setup>
import { ref } from 'vue'
const skills = [
  {
    name: 'HTML',
    image: 'logos/html.png',
    borderColor: '#E44D26',
  },
  {
    name: 'CSS',
    image: 'logos/css.png',
    borderColor: '#1172B8',
  },
  {
    name: 'JavaScript',
    image: 'logos/javascript.png',
    borderColor: '#FFCA28',
  },
  {
    name: 'C#',
    image: 'logos/csharp.png',
    borderColor: '#662579',
  },
  {
    name: 'Python',
    image: 'logos/python.png',
    borderColor: '#1565A7',
  },
  {
    name: 'Java',
    image: 'logos/java.png',
    borderColor: '#E76F00',
  },
  {
    name: 'TypeScript',
    image: 'logos/typescript.png',
    borderColor: '#007ACC',
  },
  {
    name: 'Angular',
    image: 'logos/angular.png',
    borderColor: '#C3002F',
  },
  {
    name: 'ReactJs',
    image: 'logos/react.png',
    borderColor: '#53C1DE',
  },
  {
    name: 'VueJs',
    image: 'logos/vue.png',
    borderColor: '#41B883',
  },
  {
    name: 'TailwindCSS',
    image: 'logos/tailwind.png',
    borderColor: '#2298BD',
  },
  {
    name: 'Laravel',
    image: 'logos/laravel.png',
    borderColor: '#FF2D20',
  },
  {
    name: '.NET',
    image: 'logos/dotnet.png',
    borderColor: '#5027d5',
  },
  {
    name: 'MySQL',
    image: 'logos/mysql.png',
    borderColor: '#00546B',
  },
  {
    name: 'MongoDB',
    image: 'logos/mongodb.png',
    borderColor: '#499D4A',
  },
  {
    name: 'XAMPP',
    image: 'logos/xampp.png',
    borderColor: '#FB7A24',
  },
  {
    name: 'Firebase',
    image: 'logos/firebase.png',
    borderColor: '#FFA712',
  },
  {
    name: 'Mapbox',
    image: 'logos/mapbox.png',
    borderColor: '#485160',
  },
  {
    name: 'jQuery',
    image: 'logos/jquery.png',
    borderColor: '#0769AD',
  },
  {
    name: 'Springboot',
    image: 'logos/springboot.png',
    borderColor: '#6db53d',
  },
  {
    name: 'CodeIgniter',
    image: 'logos/codeigniter.png',
    borderColor: '#EE4323',
  }
]

const hover = ref('');
function onHover(index) {
  hover.value = index;
  console.log(hover.value)
}

function onLeave() {
  hover.value = '';
}

</script>

<template>
  <section class="container mx-auto p-4 md:p-8 wrapper soft-background md:rounded-lg">
    <h2 class="font-bold mb-4">Skills</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-stretch">
      <div v-for="(skill, index) in skills" :key="index" class="bg-white shadow-md rounded-2xl border-2 m-2"
        :style="`border-color: ${skill.borderColor}`" @mouseover="onHover(index)" @mouseleave="onLeave">
        <div class="h-48 w-full flex justify-center items-center">
          <img class="size-40 object-cover rounded-t-xl bg-white p-4" :src="skill.image" :alt="skill.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
