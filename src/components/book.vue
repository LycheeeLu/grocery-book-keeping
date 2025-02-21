<template>
     <!-- Book container -->
    <div class="book-container">
        <div class="book">


            <div class="book-itself">
                <img src="/menu/menu-book.png" />
            </div>

            <div class="book-index">
                <img src="/menu/menu-drink.png" class="drink" />
                <img src="/menu/menu-meat.png" class="meat" />
                <img src="/menu/menu-vegfruit.png" class="vegfruit"/>
                <img src="/menu/menu-processed.png" class="processed"/>
            </div>

            <div class="book-flip">
                <img src="/menu/menu-pageup.png" />
                <img src="/menu/menu-pagedown.png" />
            </div>

            <div class="item">
                <img src="/menu/drink-coffee.png" class="drink"/>
                <img src="/menu/drink-milk.png" class="drink" />
                
                <img src="/menu/meat-fillet.png" class="meant"/>
                <img src="/menu/meat-fish.png" class="meat"/>
                <img src="/menu/meat-chicken.png" class="meat"/>


                <img src="/menu/fruit-grape.png" class="vegfruit"/>
                <img src="/menu/fruit-pear.png" class="vegfruit"/>
                <img src="/menu/fruit-watermelon.png" class="vegfruit"/>
                <img src="/menu/veg-carrot.png" class="vegfruit"/>


                <img src="/menu/processed-cheese.png" class="processed"/>
                <img src="/menu/processed-loaf.png" class="processed"/>
          
            </div>
        </div>
    </div>
</template>
<script>
export default{

}
</script>

<style>
.book-itself,
.book-index,
.book-flip {
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Add these img rules to preserve PNG dimensions */
img {
  position: absolute;  
  max-width: 100%;    /* Prevents overflow */
  height: auto;       /* Maintains aspect ratio */
}

.book-flip{
    z-index: 4;
}
.book-itself{
    z-index: 2;
}
.book-index{
    z-index: 1;
}

.item{
    z-index: 5;
}
</style>
