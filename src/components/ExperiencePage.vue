<script setup>
import { onMounted } from 'vue'

const experiences = [
  {
    company_name: 'Proweaver Inc.',
    company_logo: 'photos/experience_1.png',
    company_logo_alt: 'Company Logo',
    position: 'Fullstack Web Developer',
    start_date: 'January 2024',
    end_date: 'Ongoing',
    description:
      'I developed responsive web applications using Vue.js, CodeIgniter, and Tailwind CSS, collaborating with designers to implement user-friendly interfaces. I built scalable backend solutions with MySQL and Firebase, integrated secure APIs, and enhanced WordPress functionality. Additionally, I created dynamic GPS mapping features with Mapbox and developed cross-platform mobile apps using Ionic for Android and iOS.',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    company_name: 'KYOCERA Document Solutions Inc.',
    company_logo: 'photos/experience_2.png',
    company_logo_alt: 'Company Logo',
    position: 'Software Engineer Intern',
    start_date: 'February 2023',
    end_date: 'December 2023',
    description:
      'I developed automation release applications using C#, .NET, and React, streamlining processes and reducing manual input by 40%. By applying Agile and Scrum methodologies, I collaborated with cross-functional teams to ensure high-quality software through thorough requirement gathering and rigorous testing. Additionally, I conducted hands-on manual testing, cutting testing time by 30%, and delivering reliable, user-friendly applications for multi-functional printers.',
    skills: ['HTML', 'CSS', 'JavaScript']
  }
]

const certificates = [
  {
    name: 'Foundational C# with Microsoft ',
    description:
      'This certification program provided a solid foundation in C# programming, covering key concepts such as object-oriented programming, data structures, and basic software development principles. Through practical exercises and hands-on coding projects, I gained proficiency in writing, debugging, and optimizing C# applications. The certification, recognized by Microsoft, enhanced my ability to build robust, scalable solutions and reinforced my understanding of software development best practices in the C# environment.',
    date: 'November 2024',
    number: 'calesajohnrey-fcswm',
    link: 'https://www.freecodecamp.org/certification/calesajohnrey/foundational-c-sharp-with-microsoft'
  },
  {
    name: 'Certificate in Computer Technology',
    description:
      'This certificate program provided a comprehensive foundation in computer systems, software development, and IT infrastructure. It covered key topics such as programming languages, database management, network security, hardware, and troubleshooting. Through hands-on projects and coursework, I gained practical skills in technology implementation and problem-solving, preparing me for a career in the rapidly evolving field of computer science and technology.',
    date: 'December 2023',
    number: '—',
    link: 'https://www.linkedin.com/in/calesajohnrey/details/certifications/'
  }
]

onMounted(() => {
  const experienceElements = document.querySelectorAll('.experience-item')
  const certificateElements = document.querySelectorAll('.certificate-item')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index
          if (index % 2 === 0) {
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
  experienceElements.forEach((el) => observer.observe(el))
  certificateElements.forEach((el) => {
    observer.observe(el)
    el.classList.add('slide-left')
  })
})
</script>

<template>
  <section class="container mx-auto p-4 md:p-8 wrapper">
    <h2 class="font-bold mb-4">Experience</h2>
    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        :data-index="index"
        class="experience-item bg-white overflow-hidden p-4 flex flex-col md:flex-row even:md:flex-row-reverse opacity-0 translate-x-10"
      >
        <img
          class="w-full h-80 object-cover border-2 border-gray-300 rounded-lg"
          :src="experience.company_logo"
          :alt="experience.company_logo_alt"
        />
        <div class="p-4 flex justify-center items-start flex-col">
          <h4 class="text-lg font-semibold">{{ experience.position }}</h4>
          <p class="font-medium">{{ experience.start_date }} - {{ experience.end_date }}</p>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>

    <div class="py-4">
      <h3 class="font-bold mb-4">Certificates</h3>
      <div
        v-for="(certificate, index) in certificates"
        :key="index"
        class="certificate-item flex items-center my-4 justify-between p-4 bg-white shadow-md rounded-2xl border-2 border-black opacity-0 translate-x-10"
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
              •
              <span>
                <a :href="certificate.link" class="text-blue-600 hover:underline">Download</a>
              </span>
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

.experience-item,
.certificate-item {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
</style>
