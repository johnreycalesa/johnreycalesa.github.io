<script setup></script>

<template>
  <footer class="text-black p-4 md:py-28 bg-gray-300 dark:bg-primary">
    <div class="container mx-auto wrapper">
      <div class="flex flex-wrap justify-center items-center md:justify-around">
        <div
          class="w-full md:w-1/2 p-4 mb-4 md:mb-0 border-2 rounded-2xl border-black bg-white dark:border-quaternary"
        >
          <h2 class="text-xl font-bold mb-4 dark:text-quaternary">Contact us</h2>
          <form method="post" class="flex flex-col gap-4">
            <div class="">
              <label class="block mb-2 text-sm font-bold dark:text-quaternary">Name</label>
              <input
                class="form-input w-full px-2 border-2 border-black h-12 rounded-xl bg-gray-200 dark:border-quaternary"
                type="text"
                name="name"
              />
            </div>
            <div class="">
              <label class="block mb-2 text-sm font-bold dark:text-quaternary">Email</label>
              <input
                class="form-input w-full px-2 border-2 border-black h-12 rounded-xl bg-gray-200 dark:border-quaternary"
                type="email"
                name="email"
              />
            </div>
            <div class="">
              <label class="block mb-2 text-sm font-bold dark:text-quaternary">Message</label>
              <textarea
                class="form-input w-full px-2 border-2 border-black rounded-xl bg-gray-200 dark:border-quaternary"
                name="message"
                rows="6"
              ></textarea>
            </div>
            <button
              class="bg-secondary text-black px-4 py-2 rounded w-full border-2 hover:bg-blue-600 dark:bg-primary dark:text-quaternary dark:border-quaternary"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div class="w-full md:w-1/2 px-4 flex flex-col justify-center items-start gap-4">
          <h3 class="text-center text-black font-bold dark:text-quaternary">Reach me!</h3>
          <ul class="list-none flex flex-col flex-wrap justify-center md:justify-start mb-4">
            <li class="">
              <p class="text-black small-text dark:text-quaternary">
                <span class="font-extrabold">Phone: </span> +1 123 456 7890
              </p>
            </li>
            <li class="mr-4">
              <p class="text-black small-text dark:text-quaternary">
                <span class="font-extrabold">Email: </span> 6kGtA@example.com
              </p>
            </li>
          </ul>
          <ul class="list-none flex justify-center gap-4">
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                width="32"
                height="32"
                alt="Icon"
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                width="32"
                height="32"
                alt="Icon"
              />
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                width="32"
                height="32"
                alt="Icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
