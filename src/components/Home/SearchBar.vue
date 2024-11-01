<script setup lang="ts">
import { ref, computed } from "vue";

const input = ref<string>("");
const products = [
  "T-shirt with Tape Details",
  "Skinny Fit Jeans",
  "Checkered Shirt",
  "Sleeve Striped T-Shirt",
  "Vertical Striped Shirt",
  "Courage Graphic T-shirt",
  "Loose Fit Bermuda Shorts",
  "Faded Skinny Jeans"
];

const filteredList = computed(() => {
  return products.filter((product) =>
    product.toLowerCase().includes(input.value.toLowerCase())
  );
});
</script>

<template>
  <div :class="$style.search_container">
    <input type="text" v-model="input" placeholder="Search for products..." :class="$style.search_bar"/>
    <div v-if="input" :class="$style.search_items">
      <div class="item product" v-for="product in filteredList" :key="product">
        <a href="/category">{{ product }}</a>
      </div>
      <div class="item error" v-if="input && !filteredList.length">
        <p>No results found!</p>
      </div>
    </div>
  </div>
</template>

<style module>
.search_container {
  position: relative;
  width: 100%;
}

.search_bar {
  width: 100%;
  outline: none;
  background-color: var(--light-background-color);
  color: var(--subtitle-color);
  border: 0 solid;
  border-radius: 25px;
  padding: 12px 18px;
}

.search_items {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--light-background-color);
  border: 1px solid #e6e3e3;
  border-radius: 25px;
  padding: 12px 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>