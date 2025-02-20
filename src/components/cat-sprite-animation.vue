<template>
    <div class="cat-sprite-container">
      <!-- Cat sprite walking animation -->
      <div class="cat-sprite" :class="{ 'is-walking': isWalking }"></div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const isWalking = ref(false);
      const route = useRoute();
      // Watch for route changes to trigger walking animation
      watch(
        () => route.path,
        () => {
          isWalking.value = true;
          // Stop walking after 2 seconds (adjust based on your animation length)
          setTimeout(() => {
            isWalking.value = false;
          }, 2000);
        }
      );
  
      return {
        isWalking,
      };
    },
  };
  </script>
  
  <style scoped>
  .cat-sprite-container {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 100px; /* Set width based on individual frame size */
    height: 100px; /* Set height based on individual frame size */
    overflow: hidden;
    z-index: 1000;
  }
  
  .cat-sprite {
    width: 800px; /* Total width of the sprite sheet (frameWidth * numberOfFrames) */
    height: 100px; /* Frame height */
    background-image: url('/public/cat-sprite-sheet.png');
    background-size: 800px 100px; /* Total sprite sheet size */
    background-position: 0 0;
    animation: none;
  }
  
  .is-walking {
    animation: walkAnimation 1s steps(8) infinite;
  }
  
  @keyframes walkAnimation {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -800px 0; /* Move through each frame of the sprite sheet */
    }
  }
  </style>
  