<script setup>
const experiences = [
  {
    company_name: 'Proweaver Inc.',
    company_logo: 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png',
    company_logo_alt: 'Company Logo',
    position: 'Fullstack Web Developer',
    start_date: 'February 2024',
    end_date: 'Ongoing',
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    company_name: 'KYOCERA Document Solutions Inc.',
    company_logo: 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png',
    company_logo_alt: 'Company Logo',
    position: 'Software Engineer Intern',
    start_date: 'February 2023',
    end_date: 'November 2023',
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    skills: ['HTML', 'CSS', 'JavaScript']
  }
]

const certificates = [
  {
    name: 'Certificate Name',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, illum!',
    date: 'January 2023',
    number: '123456789',
    link: 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png'
  }
]
</script>

<template>
  <section class="container mx-auto p-4 md:p-8 wrapper">
    <h2 class="font-bold mb-4">Experience</h2>
    <div class="grid grid-cols-1 gap-4">
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"> -->
      <!-- <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="bg-white shadow-md rounded-2xl overflow-hidden border-2 border-black"
      >
        <div class="flex justify-start items-center p-4 gap-4">
          <img :src="experience.company_logo" class="size-12 object-cover rounded-full" />
          <h4 class="text-lg font-semibold">{{ experience.company_name }}</h4>
        </div>
        <img
          class="w-full h-80 object-cover"
          src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
          alt="Image"
        />
        <div class="p-4">
          <h4 class="text-lg font-semibold">{{ experience.position }}</h4>
          <p class="font-medium">{{ experience.start_date }} - {{ experience.end_date }}</p>
          <p>{{ experience.description }}</p>
          <p>
            <span></span>
          </p>
        </div>
      </div> -->
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="bg-white overflow-hidden p-4 flex even:flex-row-reverse"
      >
        <!-- <div class="flex justify-start items-center p-4 gap-4">
          <img :src="experience.company_logo" class="size-12 object-cover rounded-full" />
          <h4 class="text-lg font-semibold">{{ experience.company_name }}</h4>
        </div> -->
        <img
          class="w-full h-80 object-cover border-2 border-black rounded-lg"
          src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
          alt="Image"
        />
        <div class="p-4 flex justify-center items-start flex-col">
          <h4 class="text-lg font-semibold">{{ experience.position }}</h4>
          <p class="font-medium">{{ experience.start_date }} - {{ experience.end_date }}</p>
          <p>{{ experience.description }}</p>
          <p>
            <span></span>
          </p>
        </div>
      </div>
    </div>
    <div class="py-4">
      <h3 class="font-bold mb-4">Certificates</h3>
      <div v-for="(certificate, index) in certificates" :key="index">
        <div
          class="flex items-center justify-between p-4 bg-white shadow-md rounded-2xl border-2 border-black"
        >
          <div>
            <h2 class="text-xl font-bold mb-2">{{ certificate.name }}</h2>
            <p class="mb-0">
              {{ certificate.description }}
            </p>
            <div class="flex items-center gap-4">
              <p class="font-bold">
                <span>{{ certificate.date }}</span>
              </p>
              •
              <p class="flex items-center gap-2">
                <span class="font-bold">Certificate Number: </span>
                <span>{{ certificate.number }}</span>
                <span>
                  <a :href="certificate.link" class="text-blue-600 hover:underline"
                    >Download</a
                  ></span
                >
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <span
              class="material-symbols-outlined hidden md:block md:text-4xl xl:text-5xl text-gray-600"
            >
              license
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
