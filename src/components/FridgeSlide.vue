<template>
    <div class="fridge-slide">
         <!-- Fridge container -->
        <div class="fridge">
          <Fridge />
        </div>
         <!-- Menu container -->
        <div>
          <Book/>
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
.fridge-slide {
  position: relative;
  width: 70%;
  max-width: 700px;
  height: 700px;
  overflow: hidden;
  margin:0 auto;
}
.fridge {
  position: relative;
  width: 100%;
  height: 100%;
}

.book{
  position: relative;
}
</style>