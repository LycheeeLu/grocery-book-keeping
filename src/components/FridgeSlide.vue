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
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


}
.fridge-container {
  position: relative;
  width: 70%;
  max-width: 600px;
  height: 650px;
  overflow: hidden;
  margin-bottom: 0rem;
}
.fridge {
  position: relative;
  width: 100%;
  height: 100%;
}

.book-container {
  position: relative;
  max-width: 700px;
  width: 100%;
  aspect-ratio: 8/5;
  overflow: hidden;
  margin-bottom: 5rem;
}
.book {
  position: relative;
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {


  .fridge-container {
    width: 85%;
    height: 500px;
    margin-bottom: -10rem; /* Adjusted for mobile */
  }

  .book-container {
    width: 100%;
  }
}

</style>