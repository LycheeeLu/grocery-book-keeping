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

            <div class="book-pagebutton">
                <img src="/menu/menu-pageup.png" />
                <img src="/menu/menu-pagedown.png" />
            </div>

        </div>
    </div>

   <!-- menu left page grid-->
        <div class="page left-page">
             <div class="grid">
                    <div 
                            v-for="(item, index) in menuItems.slice(0, 6)" 
                            :key="index" 
                            class="menu-item" 
                            @click="selectItem(item)">
                            <img :src="item.image" :alt="item.name" width="128" />
                           
                        </div>
                    </div>
        </div>

     <!-- menu right page grid-->
        <div class="page right-page">
                    <div class="grid">
                        <div v-for="(item, index) in menuItems.slice(6, 12)" 
                        :key="index + 6" 
                        class="menu-item" 
                        @click="selectItem(item)">
                        <img :src="item.image" :alt="item.name" width="128" />
                    
                        </div>
                    </div>
                    </div>
</template>
<script>
export default{
    data(){
        return{
            menuItems: [
                { name: "coffee", image: "/menu/drink-coffee.png" },
                { name: "milk", image: "/menu/drink-milk.png" },
                { name: "fillet", image: "/menu/meat-fillet.png" },
                { name: "fish", image: "/menu/meat-fish.png" },
                { name: "chicken", image: "/menu/meat-chicken.png" },
                { name: "grape", image: "/menu/fruit-grape.png" },
                { name: "pear", image: "/menu/fruit-pear.png" },
                { name: "watermelon", image: "/menu/fruit-watermelon.png" },
                { name: "carrot", image: "/menu/veg-carrot.png" },
                { name: "cheese", image: "/menu/processed-cheese.png" },
                { name: "loaf", image: "/menu/processed-loaf.png" },
            ],
        };
    },
    methods: {
        selectItem(item){
            console.log(`${item.name} selected`);
            this. $emit("select", item);
        }
    }
};
</script>

<style>
.book-itself,
.book-index,
.book-pagebutton {
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


.book-pagebutton{
    z-index: 4;
}


.book-index{
    z-index: 1;
}

.book-itself{
    z-index: 2;
}

.page {
    position: absolute;
    top: 21%;
    width: 40%; /* Each page takes half of the book */
    height: 65%;
}

/* Left page grid */
.left-page {
    left: 8%; /* Expanding from the middle */
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-page .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    width: 80%; /* 80% of the left page */
    height: 66%;
}

/* Right page grid */
.right-page {
    right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right-page .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    width: 80%;
    height: 66%;
}


/* Grid items */
.menu-item {
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(249, 235, 235, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.menu-item:hover {
  background-color: #d52525;
}

.menu-item img {
 width: 34%;
 height:auto;

}

</style>
