import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import FridgeSlide from '../components/Fridge.vue';
import KitchenSlide from '../components/KitchenSlide.vue';
import BulletinSlide from '../components/BulletinSlide.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fridgeslide',
    name: 'FridgeSlide',
    component: FridgeSlide,
  },
  {
    path:'/kitchenslide',
    name: 'KitchenSlide',
    component: KitchenSlide,

  },
  {
    path:'/bulletinslide',
    name: 'BulletinSlide',
    component: BulletinSlide,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router; 