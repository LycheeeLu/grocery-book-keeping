<template>
  <div id="app">
    <swiper 
      :navigation="true" 
      :modules="modules" 
      :cssMode="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      class="mySwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Home<router-view/></swiper-slide>
      <swiper-slide>Fridge<router-view/></swiper-slide>
      <swiper-slide>WishList<router-view/></swiper-slide>
    </swiper>

    <div class="cat-menu">
    <CatMenu />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import CatMenu from './components/cat-menu.vue';


export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    CatMenu,

  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
  methods: {
    onSlideChange(event) {
      const activeIndex = event.activeIndex;
      const routes = ['/homeslide', '/fridgeslide', '/wishlistslide'];
      if (routes[activeIndex]) {
        this.$router.push(routes[activeIndex]);
      }
    },
  },
};
</script>
