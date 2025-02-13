<template>
  <div class="fridge">
    <h2>Fridge</h2>
    <img src="../assets/fridge.png" alt="Fridge" class="fridge-image" />
    <div>
      <button @click="addGrocery('Banana', 3)">Add Banana (3 days)</button>
      <button @click="addGrocery('Milk', 7)">Add Milk (7 days)</button>
    </div>
    <draggable v-model="groceries">
      <ul>
        <li v-for="(grocery, index) in groceries" :key="index">
          {{ grocery.name }} - Expires in {{ daysLeft(grocery.expirationDate) }} days
          <button @click="removeGrocery(index)">Remove</button>
        </li>
      </ul>
    </draggable>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable';
import { ref, onMounted, watch } from "vue";

const groceries = ref([]);

onMounted(() => {
  const savedGroceries = JSON.parse(localStorage.getItem("groceries")) || [];
  groceries.value = savedGroceries;
});

watch(groceries, (newGroceries) => {
  localStorage.setItem("groceries", JSON.stringify(newGroceries));
}, { deep: true });

const addGrocery = (name, daysToExpire) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);
  groceries.value.push({
    name,
    expirationDate: expirationDate.toISOString(),
  });
};

const removeGrocery = (index) => {
  groceries.value.splice(index, 1);
};

const daysLeft = (date) => {
  return Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 * 24));
};
</script>

<style scoped>
.fridge-image {
  width: 300px;
  cursor: pointer;
}
</style>
