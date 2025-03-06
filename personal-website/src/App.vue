<script setup>
import Guestbook from './components/Guestbook.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view />
  <main>
    <Guestbook />
  </main>
</template>

<style scoped>
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
