<template>
  <div class="menu-container">
    <div 
      v-for="(item, index) in menuItems" 
      :key="index"
      class="menu-item"
      @click="selectItem(item)"
    >
      <img :src="item.image" :alt="item.name" width="40" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Apple", image: "/groceries/apple.png" },
        { name: "Banana", image: "/groceries/banana.svg" },
        { name: "Grape", image: "/groceries/grape.svg" }
      ]
    };
  },
  methods: {
    selectItem(item) {
      this.$emit("select", item);
    }
  }
};
</script>

<style>
.menu-container {
  position: relative;
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

.menu-item img {
  margin-right: 8px;
}
</style>
  