<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const footerElement = document.querySelector('.footer-animate')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up')
        } else {
          entry.target.classList.remove('slide-up')
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(footerElement)
})
</script>

<template>
  <footer
    class="text-black p-4 md:pt-24 md:pb-12 bg-gray-300 dark:bg-[var(--vt-c-primary)] footer-animate opacity-0 translate-y-10">
    <div class="container mx-auto wrapper">
      <div class="flex flex-wrap justify-center items-center md:justify-around">
        <div class="w-full md:w-1/2 p-4 mb-4 md:mb-0 border-2 rounded-2xl border-black bg-white dark:border-quaternary">
          <h2 class="text-xl font-bold mb-4 dark:text-black">Contact us</h2>
          <form method="post" class="flex flex-col gap-4">
            <div class="">
              <label class="block mb-2 text-sm font-bold dark:text-black">Name</label>
              <input
                class="form-input w-full px-2 border-2 border-black h-12 rounded-xl bg-gray-200 dark:border-quaternary"
                type="text" name="name" />
            </div>
            <div class="">
              <label class="block mb-2 text-sm font-bold dark:text-black">Email</label>
              <input
                class="form-input w-full px-2 border-2 border-black h-12 rounded-xl bg-gray-200 dark:border-quaternary"
                type="email" name="email" />
            </div>
            <div class="">
              <label class="block mb-2 text-sm font-bold dark:text-black">Message</label>
              <textarea
                class="form-input w-full px-2 border-2 border-black rounded-xl bg-gray-200 dark:border-quaternary"
                name="message" rows="6"></textarea>
            </div>
            <button
              class="bg-secondary text-black px-4 py-2 rounded w-full border-2 hover:bg-blue-600 dark:bg-[var(--vt-c-primary)] dark:text-white dark:border-quaternary"
              type="submit">
              Send
            </button>
          </form>
        </div>
        <div class="w-full md:w-1/2 px-4 flex flex-col justify-center items-start gap-4">
          <h3 class="text-center text-black font-bold dark:text-white">Reach me!</h3>
          <ul class="list-none flex flex-col flex-wrap justify-center md:justify-start mb-4">
            <li class="">
              <p class="text-black small-text dark:text-white">
                <span class="font-extrabold">Phone: </span> +63 977 214 3141
              </p>
            </li>
            <li class="mr-4">
              <p class="text-black small-text dark:text-white">
                <span class="font-extrabold">Email: </span> calesajohnrey@gmail.com
              </p>
            </li>
          </ul>
          <ul class="list-none flex justify-center gap-4">
            <li class="icons">
              <a href="mailto:calesajohnrey@gmail.com" target="_blank" rel="noopener noreferrer">
                <ion-icon name="mail-outline" class="text-4xl text-white"></ion-icon>
              </a>
            </li>
            <li class="icons">
              <a href="https://github.com/johnreycalesa" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-github" class="text-4xl text-white"></ion-icon>
              </a>
            </li>
            <li class="icons">
              <a href="https://medium.com/@johnreycalesa" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-medium" class="text-4xl text-white"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-4 w-full flex justify-end">
      <a href='https://ko-fi.com/U6U0124XJF' target='_blank'><img height='55' style='border:0px;height:55px;'
          src='/photos/kofi.gif' border='0' alt='Buy Me a Coffee at ko-fi.com'
          class="icons bg-white rounded-full p-2" /></a>
    </div>
  </footer>
</template>

<style scoped>
@keyframes slideFromBottom {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideFromBottom 0.5s ease forwards;
}

.footer-animate {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

li.icons:hover {
  transform: scale(1.25);
}

a:hover {
  transform: scale(1.25);
}
</style>
