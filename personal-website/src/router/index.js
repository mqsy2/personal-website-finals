import { createRouter, createWebHistory } from 'vue-router';
import Home from '/workspaces/personal-website-finals/personal-website/src/view/home.vue';
import About from '/workspaces/personal-website-finals/personal-website/src/view/aboutus.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;