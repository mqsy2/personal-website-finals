<template>
    <div class="gallery">
      <h2>Gallery</h2>
      <div class="image-grid">
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          class="image-container"
          @click="openLightbox(image)"
        >
          <img :src="image" alt="Gallery Image" />
        </div>
      </div>
  
      <!-- Lightbox for Fullscreen View -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <img :src="lightboxImage" alt="Expanded View" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Sample gallery images (replace with real ones)
  const images = ref([
    "https://github.com/mqsy2/personal-website-finals/blob/main/images/Screenshot%202024-12-27%20161929.png",
    "https://github.com/mqsy2/personal-website-finals/blob/main/images/472067468_1142773223985589_5416666476238467940_n.jpg",
    "https://github.com/mqsy2/personal-website-finals/blob/main/images/462548964_923083979293465_8359046881417788200_n.jpg",
    "https://github.com/mqsy2/personal-website-finals/blob/main/images/462548552_1217492629360108_4695080992433292870_n.jpg",
  ]);
  
  const lightboxOpen = ref(false);
  const lightboxImage = ref("");
  
  const openLightbox = (image) => {
    lightboxImage.value = image;
    lightboxOpen.value = true;
  };
  
  const closeLightbox = () => {
    lightboxOpen.value = false;
  };
  </script>
  
  <style scoped>
  /* Overall Gallery Styles */
  .gallery {
    text-align: center;
    padding: 30px;
    background: #121212;
    min-height: 100vh;
  }
  
  h2 {
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  
  /* Image Grid */
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .image-container {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .image-container:hover {
    transform: scale(1.05);
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }
  
  /* Lightbox */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .lightbox img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.2);
  }
  </style>