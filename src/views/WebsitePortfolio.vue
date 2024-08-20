<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import ContentComponent from '../components/ContentComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

const buttonOne = 'Home'
const buttonTwo = 'About'
const buttonThree = 'Contact'
</script>

<template>
  <HeaderComponent :button1="buttonOne" :button2="buttonTwo" :button3="buttonThree" />
  <ContentComponent />
  <FooterComponent />
</template>
