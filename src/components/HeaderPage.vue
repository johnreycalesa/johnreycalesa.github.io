<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const sectionElement = document.querySelector('.section-animate')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-down')
        } else {
          entry.target.classList.remove('slide-down')
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(sectionElement)
})
</script>

<template>
  <section class="p-4 md:p-8 section-animate opacity-0 translate-y-10">
    <div class="container mx-auto wrapper">
      <div class="bg-gray-800 shadow-md rounded-2xl border-2 border-black overflow-hidden">
        <div class="flex flex-col-reverse md:flex-row">
          <div class="p-4 text-white md:w-1/2 md:px-16 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-3">John Rey Calesa</h2>
            <p class="mb-4">Software Engineer</p>
            <div class="my-3 flex items-center">
              <a class="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600" href="#"
                >Resume</a
              >
              <p href="#" class="flex justify-center items-center gap-2 mx-4">
                1+ years
                <span class="material-symbols-outlined"> verified </span>
              </p>
            </div>
          </div>
          <div class="md:w-1/2">
            <img class="w-full h-full object-cover" src="../assets/id.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideFromTop {
  from {
    opacity: 0;
    transform: translateY(-75px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-down {
  animation: slideFromTop 0.5s ease forwards;
}

.section-animate {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
</style>
