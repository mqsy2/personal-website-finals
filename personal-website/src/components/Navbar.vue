<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Me</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
  border-radius: 15px; /* Soft edges */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Optional: Adds a soft shadow */
  max-width: 500px; /* Optional: Keeps navbar compact */
  margin: 10px auto; /* Centers the navbar */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin-right: 20px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px; /* Optional: Adds some spacing */
  border-radius: 8px; /* Rounds the links slightly */
  transition: background 0.3s; /* Smooth hover effect */
}

a:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>