<template>
    <div class="wishlist-slide">
        
        <div class="header" >
            <img src="/wishlist/shop-icon.png" class="shop-icon"/>
            <img src="/wishlist/grassland.jpg" class="grassland"/>

        </div>

 

        <div class="wish-list ">

            <span class="timestamp">{{ currentTime }}</span>

            <div class="list-container">
                <div class="input-area">
                    <input v-model="newItem" 
                            type="text"
                            placeholder="Add items to wish list.."
                            @keyup.enter="addItem" />
                    <button @click="addItem"> + </button>
                </div>


                <ul>
                    <li v-for="(item, index) in items" :key="index">
                        <input type="checkbox"
                                v-model="item.checked" />
                        <span :class="{ checked: item.checked}">{{ item.text }}</span>
                        <div class="actions button-container">
                            <button @click="editItem(index)"> edit </button>
                            <button @click="deleteItem(index)"> delete </button> 
                        </div>
                    </li>
                </ul>

            </div>

             <!-- Save / Edit / Delete Icons -->
             <div class="action-buttons">
                <button @click="saveList">💾 Save this list</button>
                <button @click="clearList">🗑️ Clear this list</button>
            </div>
        </div>

    </div>
</template>


<script>
export default {
  data() {
    return {
      newItem: "",
      items: [],
      currentTime: "",
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== "") {
        this.items.push({ text: this.newItem, checked: false });
        this.newItem = "";
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    editItem(index) {
      const updatedText = prompt("Edit item:", this.items[index].text);
      if (updatedText !== null) {
        this.items[index].text = updatedText;
      }
    },
    saveList() {
      localStorage.setItem("shoppingList", JSON.stringify(this.items));
    },
    clearList() {
      this.items = [];
      localStorage.removeItem("shoppingList");
    },
    updateTime() {
      this.currentTime = new Date().toLocaleString();
    },
    loadSavedList() {
      const saved = JSON.parse(localStorage.getItem("shoppingList"));
      if (saved) {
        this.items = saved;
      }
    },
  },
  created() {
    this.updateTime();
    this.loadSavedList();
    setInterval(this.updateTime, 1000);
  },
};
</script>

<style>
.wishlist-slide {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;

}
.header img {
  position: relative;
}
.shop-icon{
    width: 500px;
    height: auto;
    z-index: 2;
    margin-top: 18%;

}
.grassland{
    z-index: 1;
    margin-top: -120%;
}
.grassland img{
    width: 60%
}

.timestamp {
  position: relative;
  right: 10px;
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
  color: #ffffff;
}

.wish-list {
    margin-top: 3%;
    position: relative;
  background: rgba(245, 207, 66, 0.705);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
  height: 500px;
  text-align: center;
  z-index: 5;
}

/* Input & List */
.input-area {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  
}   
.input-area input {
  flex: 1;
  padding: 8px;
}
.input-area button {
  padding: 8px;
  cursor: pointer;
}

/* Shopping List Items */
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items:center;
  justify-content: flex-start;
  padding: 8px;
  border-bottom: 1px solid #f9eded;
}
li span {
  margin-left: -30%; /* Optional: adds some space between checkbox and text */
  flex: 1; /* Allows text to take up remaining space */
}
.checked {
  text-decoration: line-through;
  color: rgb(248, 123, 45);
}
.button-container {
  display: flex;
  gap: 10px; /* Adds space between the buttons */
}

.button-container button {
  padding: 10px;
  font-size: 14px;
}

/* Action Buttons */
.action-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
button {
  background: #ea7a03e9;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  opacity: 0.8;
}

</style>