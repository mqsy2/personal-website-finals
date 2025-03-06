<script setup>
import Guestbook from './components/Guestbook.vue'
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>Home</li>
        <li>About Me</li>
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
