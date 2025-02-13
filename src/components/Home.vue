<template>
  <div class="home">
    <h1>Pixel Kitchen</h1>
    <div class="image-container">
      <img ref="kitchenImage" src="../assets/images/kitchen.png" alt="Kitchen" class="kitchen-image" @click="handleImageClick" />
      <div v-if="showMessage" class="message">Opening the fridge...</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const kitchenImage = ref(null);
const showMessage = ref(false);

const handleImageClick = (event) => {
  const imageElement = kitchenImage.value;
  const clickX = event.offsetX;
  const imageWidth = imageElement.clientWidth;

  // Check if the click is within the left 1/3 of the image
  if (clickX <= imageWidth / 3) {
    console.log("Clicked on the left 1/3 of the image");
    showMessage.value = true;
    
    setTimeout(() => {
      showMessage.value = false;
      router.push("/fridge");
    }, 1000); // Show message for 1 second before redirecting
  } else {
    console.log("Clicked outside the left 1/3 of the image");
  }
};
</script>

<style scoped>
.image-container {
  position: relative;
}

.kitchen-image {
  cursor: pointer;
  display: block;
}

.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  color: #461818;
  pointer-events: none; /* Ensure clicks pass through to the image */
}
</style>
