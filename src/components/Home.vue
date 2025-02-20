<template>
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
    <swiper-slide>Kitchen<router-view/></swiper-slide>
    <swiper-slide>Fridge<router-view/></swiper-slide>
    <swiper-slide>Bulletin<router-view/></swiper-slide>
  </swiper>

  <CatMenu />

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style.css';
import CatMenu from './cat-menu.vue';


export default {
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
      const routes = ['/', '/kitchenslide', '/fridgeslide', '/bulletinslide'];
      if (routes[activeIndex]) {
        this.$router.push(routes[activeIndex]);
      }
    },
  },
};
</script>
