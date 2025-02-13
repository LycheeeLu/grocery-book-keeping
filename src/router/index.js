import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Fridge from '../components/Fridge.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fridge',
    name: 'Fridge',
    component: Fridge,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router; 