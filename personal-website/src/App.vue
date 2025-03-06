<script setup>
import Guestbook from './components/Guestbook.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view />
  <div class="guestbook-container">
    <Guestbook />
  </div>
</template>

<style scoped>
.guestbook-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically if needed */
  width: 100%;
  margin-top: 20px; /* Adjust spacing */
}
</style>