<script setup>
import Guestbook from './components/Guestbook.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container">
    <Navbar />
    <main>
      <router-view />
      <Guestbook />
    </main>
  </div>
</template>

<style>
/* Center everything */
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically if needed */
  min-height: 100vh; /* Full height */
  text-align: center; /* Ensure text is centered */
}

main {
  max-width: 800px; /* Keep content readable */
  width: 100%;
  padding: 20px;
}
</style>