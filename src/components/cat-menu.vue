<template>
    <div class="cat-menu" @click="toggleCatMenu">

            this is the cat menu PNG

    </div>
    <div v-if="showCatMenuFridge && $route.path === '/fridgeslide'" class="cat-menu-fridge">
        <ul>
            <li @click="emptyFridge">
                Empty Fridge
            </li>
            <li @click="emptyExpired">
                Throw out Expired items
            </li>
        </ul>
    </div>
</template>
<script>

    export default {
        data(){
            return{
                showCatMenuFridge: false,
            };

        },
        methods: {
            toggleCatMenu() {
                this.showCatContextMenu = !this.showCatContextMenu;
            },
            emptyFridge() {
                console.log("fridge is emptied");
                this.showCatMenuFridge = false;
                
            },
            emptyExpired(){
                console.log("Expired is emptied");
                this.showCatMenuFridge = false;
            },

        },

       
    };
</script>

<style>
.cat-menu {
  position: fixed;
  bottom: 20px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;
  background-size: contain;
  background-image: url('/path/to/your/pixel-cat.png'); /* Replace with your cat PNG */
}

.cat-menu-fridge {
  position: fixed;
  bottom: 80px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
}

.cat-menu-fridge ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cat-context-menu li {
  padding: 8px 12px;
  cursor: pointer;
}

.cat-context-menu li:hover {
  background-color: #f0f0f0;
}
</style>