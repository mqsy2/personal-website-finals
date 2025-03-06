<script setup>
import Guestbook from './components/Guestbook.vue'
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Me</router-link></li>
      </ul>
    </nav>
  </header>
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
