<template>
  <div class="fridge-container">
    <div class="fridge-background">
      <svg 
        class="fridge-svg" 
        viewBox="0 0 500 800"
      >
        <g v-for="(shelf, index) in shelves" :key="index">
          <rect 
            v-for="slot in shelf.slots"
            :key="slot.id"
            :x="slot.x" :y="slot.y" 
            width="80" height="50"
            fill="rgba(255,255,255,0.2)"
            stroke="gray"
          />
        </g>
        <g v-for="(item, index) in groceries" :key="index">
          <image 
            :x="item.x" :y="item.y" 
            width="40" height="40"
            :href="item.image"
            @click="removeGrocery(index)"
            style="cursor: pointer;"
          />
        </g>
      </svg>
    </div>
    <GroceryMenu class="grocery-menu" @select="addGrocery" />
  </div>
</template>

<script>
import GroceryMenu from './GroceryMenu.vue';


export default {
  components: {
    GroceryMenu
  },
  data() {
    return {
      menuOpen: false,
      shelves: [
        { slots: this.generateSlots(50, 100) },
        { slots: this.generateSlots(50, 200) },
        { slots: this.generateSlots(50, 300) },
      ],
      groceries: []
    };
  },
  methods: {
    generateSlots(startX, startY) {
      return Array.from({ length: 5 }, (_, i) => ({
        id: i, x: startX + i * 80, y: startY
      }));
    },
    addGrocery(item) {
      console.log("Adding grocery:", item);
      const totalSlots = this.shelves.reduce((acc, shelf) => acc + shelf.slots.length, 0);
      if (this.groceries.length < totalSlots) {
        for (let shelf of this.shelves) {
          for (let slot of shelf.slots) {
            const isOccupied = this.groceries.some(g => g.x === slot.x && g.y === slot.y);
            if (!isOccupied) {
              this.groceries.push({ ...item, x: slot.x, y: slot.y });
              return;
            }
          }
        }
      }
    },
    removeGrocery(index) {
      this.groceries.splice(index, 1);
    }
  }
};
</script>

<style>
.fridge-container { 
  display: flex; 
  align-items: flex-start; 
}

.fridge-background {
  background-image: url('/fridge.svg');
  background-size: cover;
  width: 500px; /* Adjust width as needed */
  height: 800px; /* Adjust height as needed */
  position: relative;
}

.fridge-svg { 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: default; 
}

.grocery-menu {
  margin-left: 20px; /* Adjust as needed for spacing */
}
</style>
