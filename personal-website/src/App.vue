<script setup>
import Guestbook from './components/Guestbook.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view />
  <Guestbook />
</template>

<style scoped>

</style>
