<template>
    <img 
      :src="currentFrame" 
      alt="Walking Cat" 
      class="cat-walk-animation"
    />
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
  
      // Array of cat walking PNG frames
      const catFrames = [
        '/cat-icon.jpg',
      ];
  
      const currentFrame = ref(catFrames[0]);
      let frameIndex = 0;
      let animationInterval = null;
  
      // Function to start the walking animation
      const startWalkingAnimation = () => {
        frameIndex = 0;
        if (animationInterval) clearInterval(animationInterval);
        animationInterval = setInterval(() => {
          frameIndex = (frameIndex + 1) % catFrames.length;
          currentFrame.value = catFrames[frameIndex];
        }, 100); // Adjust speed of animation
      };
  
      // Watch for route changes
      watch(() => route.path, () => {
        startWalkingAnimation();
      });
  
      return {
        currentFrame,
      };
    },
  };
  </script>
  
  <style scoped>
  .cat-walk-animation {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
  }
  </style>
  