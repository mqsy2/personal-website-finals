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

<style>
/* Dark background for the whole website */
.app-container {
  background-color: #121212; /* Dark gray/black */
  color: #ffffff; /* Light text for contrast */
  min-height: 100vh; /* Ensures full height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.guestbook-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically if needed */
  width: 100%;
  margin-top: 20px; /* Adjust spacing */
}
</style>