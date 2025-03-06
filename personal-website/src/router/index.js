import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Gallery from '../views/Gallery.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/gallery', name: 'Gallery', component: Gallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;