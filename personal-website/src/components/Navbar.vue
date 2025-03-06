<template>
  <nav>
    <div class="logo">My Website</div>
    <button class="menu-btn" @click="toggleMenu">☰</button>
    <ul :class="{ open: isMenuOpen }">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Me</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Navbar Container */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 12px 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 10px auto;
  overflow: hidden;
}

/* Logo */
.logo {
  font-size: 22px;
  font-weight: bold;
  color: white;
}

/* Menu Button (Mobile) */
.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
}

/* Navigation Links */
ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease-in-out;
}

li {
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.3s;
}

a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Mobile Styles: Sliding Menu */
@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .menu-btn {
    display: block;
  }

  ul {
    position: absolute;
    top: 60px;
    left: 0;
    background: #333;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
  }

  ul.open {
    transform: translateX(0);
  }
}
</style>