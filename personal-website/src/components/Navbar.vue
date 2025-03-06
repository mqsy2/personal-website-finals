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
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center; /* Centers items inside */
  align-items: center;

}
li {
  margin-right: 20px;
}
a {
  color: white;
  text-decoration: none;
}
</style>