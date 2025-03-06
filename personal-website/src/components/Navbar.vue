<template>
  <nav>
    <div class="logo">My Website</div>
    <button class="menu-btn" @click="toggleMenu">☰</button>
    <ul :class="{ open: isMenuOpen }">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Me</router-link></li>
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

/* Mobile Styles */
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
    flex-direction: column;
    width: 100%;
    text-align: center;
    display: none;
  }

  ul.open {
    display: flex;
    margin-top: 10px;
  }

  li {
    margin-bottom: 10px;
  }
}
</style>