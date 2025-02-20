<template>
    <div class="cat-page-overlay" @click="toggleCatMenu">
        <img 
            src="/cat-icon-tail.gif"
                alt ="cat icon"
                class="cat-icon pixelart"
        />
        <div v-if="menuOpen && VisibleMenuOptions.length > 0" class="menu-options">
            <ul>
            <li
                 v-for="(option, index) in VisibleMenuOptions"
                :key="index"
                 @click="option.action"
            >
                {{ option.label}}
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
        setup(){
            const route = useRoute();
            const menuOpen = ref(false);
            //make menu visible
            const toggleCatMenu = () => {
                menuOpen.value = !menuOpen.value;
            };

            //example menu functions
            const emptyFridge = () => {
            console.log('Fridge emptied!');
            // Add empty fridge logic here
            };
            const emptyExpired = () => {
            console.log('Expired items thrown out!');
            // Add throw out expired logic here
                };

            const menuOptions = computed(() => {
                if (route.path === '/fridgeslide') {
                    return [
                        { label: 'Empty Fridge', action: emptyFridge },
                        { label: 'Throw out Expired items', action: emptyExpired }
                    ];
                } else if (route.path === '/bulletinslide') {
                     return [
                            { label: 'Throw out Expired items', action: emptyExpired }
                        ];
                }
                return []; 
            });

                // Only show valid, non-empty menu options
            const VisibleMenuOptions = computed(() => 
            (menuOptions.value).filter(option => option?.label?.trim()));

            return{
                menuOpen,
                toggleCatMenu,
                VisibleMenuOptions,
            };
        },
};
</script>

<style scoped>
.pixelart {
  image-rendering: pixelated;
}
.cat-page-overlay{ 
 position: fixed;
  bottom: 15px;
  left:50%;
  transform: translateX(-50%);
  z-index: 1000;
  cursor: pointer;
}
.cat-icon{
    width: 120px;
    height: 120px;

}
.menu-options{
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(241, 219, 183);
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    min-width: 150px;
    white-space: nowrap;
}

.menu-options ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-options li {
  padding: 8px 12px;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 5px;
}

.menu-options li:hover {
  background-color: #f3b263;
}
</style>