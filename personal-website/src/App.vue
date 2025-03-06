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
header {
  line-height: 1.5;
}

</style>
