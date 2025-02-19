<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper" @slideChange="onSlideChange">
    <swiper-slide >Kitchen</swiper-slide>
    <swiper-slide>Fridge<router-view/></swiper-slide>
    <swiper-slide>Bulletin<router-view/></swiper-slide>
    <cat-menu/>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import '../style.css';
  import swiperCore from "swiper";
  swiperCore.use([/* default global options */])


  // import required modules
  import { Navigation } from 'swiper/modules';
  import CatMenu from './cat-menu.vue';
  import KitchenSlide from './KitchenSlide.vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      CatMenu

    },
    setup() {
      return {
        modules: [Navigation],
      };
    },

    methods:{
      onSlideChange(event){
        const activeIndex = event.activeIndex;
        const routes = ['/kitchenslide', '/fridgeslide', '/bulletinslide'];
        if(routes[activeIndex]){
          this.$router.push(routes[activeIndex]);

        }
        
      },
    },
  };
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
}
</style>