<template>
  <div class="page-layout">

   <!-- Fridge container -->
    <div class="fridge-container">
      <div class="fridge">
        <Fridge/>
      </div>
    </div>


   <!-- Menu container -->
    <div class="book-container">
      <div class="book">
        <Book/>
      </div>
    </div>

  </div>
</template>
<script>
import Fridge from "./Fridge.vue";
import Book from "./book.vue";

export default {
  components:{
    Fridge,
    Book,
  },
  
};
</script>

<style scoped>
.page-layout {
  width: 95%;
  height: 100vh;
  max-width: 800px;
  min-width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.fridge-container {
  position: relative;
  width: 70%;
  max-width: 700px;
  height: 45vh;
  overflow: hidden;
}

.fridge {
  position: relative;
  width: 100%;
  height: 100%;
}

.book-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 30vh;
}

.book {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Scale the inner content */
:deep(.scale-content) {
  transform: scale(0.8);
  transform-origin: center center;
}

/* Further scale down on larger screens */
@media (min-width: 600px) {
  .book,
  .fridge{
    width: 60%;
  }
  :deep(.scale-content) {
    transform: scale(0.6);
  }

}

/* Responsive adjustments for mobile */
@media (max-width: 568px) {
  .page-layout {
    gap: 0.25rem;
  }

  .fridge-container {
    width: 90%;
    height: 500px;
    margin-bottom: -5rem;
  }

  .book-container {
    width: 100%;
    height: 400px;
  }

  :deep(.scale-content) {
    transform: scale(1); /* Reset scale on mobile */
  }
}
</style>