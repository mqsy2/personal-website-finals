<template>
  <nav>
    <div class="nav-container">
      <div class="logo">My Website</div>
      <div class="dropdown">
        <button class="dropdown-btn" @click="toggleDropdown">☰</button>
        <ul v-show="isDropdownOpen" class="dropdown-menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Me</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
/* Navbar Container */
nav {
  background: #222;
  padding: 12px 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 10px auto;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  font-size: 22px;
  font-weight: bold;
  color: white;
}

/* Dropdown Button (Right Side) */
.dropdown {
  position: relative;
}

.dropdown-btn {
  background: #444;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;
}

.dropdown-btn:hover {
  background: #555;
}

/* Dropdown Menu (Slides Down) */
.dropdown-menu {
  position: absolute;
  top: 40px;
  right: 0;
  background: #333;
  list-style: none;
  padding: 10px;
  margin: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Show the dropdown */
.dropdown-menu[style*="display: block"] {
  opacity: 1;
  transform: translateY(0);
}

/* Dropdown Links */
.dropdown-menu li {
  margin: 8px 0;
}

.dropdown-menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  display: block;
  border-radius: 6px;
  transition: background 0.3s;
}

.dropdown-menu a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Mobile Styles */
@media (max-width: 600px) {
  .nav-container {
    padding: 10px;
  }
}
</style>