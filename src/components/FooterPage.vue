<script setup></script>

<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center md:justify-between">
        <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <h2 class="text-xl font-bold mb-4">Contact us</h2>
          <form method="post">
            <div class="mb-3">
              <input class="form-input w-full" type="text" name="name" placeholder="Name" />
            </div>
            <div class="mb-3">
              <input class="form-input w-full" type="email" name="email" placeholder="Email" />
            </div>
            <div class="mb-3">
              <textarea
                class="form-input w-full"
                name="message"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div class="w-full md:w-1/2 px-4">
          <ul class="list-none flex flex-wrap justify-center md:justify-start mb-4">
            <li class="mr-4"><a class="text-gray-400 hover:text-white" href="#">Web design</a></li>
            <li class="mr-4"><a class="text-gray-400 hover:text-white" href="#">Development</a></li>
            <li><a class="text-gray-400 hover:text-white" href="#">Hosting</a></li>
          </ul>
          <ul class="list-none flex justify-center mb-4">
            <li class="mr-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                width="32"
                height="32"
                alt="Icon"
              />
            </li>
            <li class="mr-4">
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
          <p class="text-center text-gray-400">© 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
