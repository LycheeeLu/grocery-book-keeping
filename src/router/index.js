import { createRouter, createWebHistory } from 'vue-router';
import HomeSlide from '../components/Home.vue';
import FridgeSlide from '../components/FridgeSlide.vue';
import WishlistSlide from '../components/WishlistSlide.vue';

const routes = [
  {
    path: '/',
    redirect: '/homeslide'
  },

  {
    path: '/homeslide',
    name: 'HomeSlide',
    component: HomeSlide,
  },
  {
    path: '/fridgeslide',
    name: 'FridgeSlide',
    component: FridgeSlide,
  },
  {
    path:'/wishlistslide',
    name: 'WishlistSlide',
    component: WishlistSlide,
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router; 