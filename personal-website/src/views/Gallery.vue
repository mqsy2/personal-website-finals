<template>
    <div class="gallery">
      <h2>Gallery</h2>
      <div class="image-grid">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Gallery Image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Sample gallery images (replace with real ones)
  const images = ref([
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200/222",
    "https://via.placeholder.com/200/333",
    "https://via.placeholder.com/200/444",
    "https://via.placeholder.com/200/555",
    "https://via.placeholder.com/200/666",
  ]);
  </script>
  
  <style scoped>
  .gallery {
    text-align: center;
    padding: 20px;
  }
  
  h2 {
    color: white;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .image-grid img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .image-grid img:hover {
    transform: scale(1.05);
  }
  </style>