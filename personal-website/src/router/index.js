import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/home.vue';
import About from '../view/about.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;