<template>
  <div class="home-container">
    <swiper 
    :navigation="true" 
    :modules="modules" 
    :cssMode="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    class="mySwiper"
    @slideChange="onSlideChange">

      <swiper-slide>Home<router-view/></swiper-slide>
      <SwiperSlide>kitchen<router-view/></SwiperSlide>
      <swiper-slide>Fridge<router-view/></swiper-slide>
      <swiper-slide>Bulletin<router-view/></swiper-slide>
    </swiper>
    <CatMenu class="cat-menu-overlay"/>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import '../style.css';
  import CatMenu from './cat-menu.vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      CatMenu

    },
    setup() {
      return {
        modules: [Navigation,Pagination, Mousewheel, Keyboard],
      };
    },

    methods:{
      onSlideChange(event){
        const activeIndex = event.activeIndex;
        const routes = ['/','/kitchenslide', '/fridgeslide', '/bulletinslide'];
        if(routes[activeIndex]){
          this.$router.push(routes[activeIndex]);

        }
        
      },
    },
  };
</script>

<style>
.home-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.cat-menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10; /* This ensures the menu stays above the swiper */
  pointer-events: none; /* This allows clicks to pass through to the swiper underneath */
}

/* If you need specific elements in cat-menu to be clickable, 
   add this to your cat-menu.vue component */
.cat-menu-overlay :deep(.clickable-elements) {
  pointer-events: auto;
}
</style>
