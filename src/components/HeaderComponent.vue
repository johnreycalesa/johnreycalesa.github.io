<script setup>
import { defineProps } from 'vue'

const props = defineProps(['button1', 'button2', 'button3'])

console.log(props)
</script>

<template>
  <nav class="bg-gray-300 w-full flex justify-end p-4">
    <ul class="flex gap-4">
      <li v-for="item in props" :key="item">{{ item }}</li>
    </ul>
  </nav>
</template>
