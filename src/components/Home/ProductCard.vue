<script setup lang="ts">
defineProps<{
  product: {
    id: string
    product_img: string
    title: string
    rating: string
    cost: string
    ratingModel: number
  }
}>()

</script>

<template>
  <div :class="$style.product_card">
    <img :src="product.product_img" alt="Product Image" />
    <h2>{{ product.title }}</h2>
    <div :class="$style.product_rating">
      <div :class="$style.product_rating">
          <q-rating
            v-model="product.ratingModel"
            size="25px"
            color='yellow-8'
            readonly
          />
      </div>
      <!-- <img src="/src/assets/img/stars.png" alt="Rating Stars" /> -->
      <p>{{ product.rating }}</p>
    </div>
    <p>{{ product.cost }}</p>
  </div>
</template>

<style module>
.product_rating p {
  margin: 10px;
}
.product_card {
  font-family: 'Satoshi';
  margin: 0 5px;
  text-align: left;
}
.product_card img {
  max-width: 198px;
}
.product_card h2 {
  line-height: 1;
  font-size: 16px;
  font-weight: 800;
  padding-top: 10px;
}
.product_rating img {
  width: 87px;
}
.product_rating {
  padding: 4px 0;
  display: flex;
  align-items: center;
}

.product_rating img {
  margin-right: 5px;
}
.product_card p {
  font-size: 20px;
  font-weight: 900;
}
.product_rating p {
  font-size: 12px;
  font-weight: 100;
  padding: 0;
}

@media (min-width: 1024px) {
  .product_card img {
    width: 297px;
  }
  .product_rating img {
    max-width: 104px;
  }
  .product_card h2 {
    font-size: 20px;
  }
  .product_card p {
    font-size: 24px;
  }
  .product_rating p {
    font-size: 12px;
    font-weight: 100;
  }
}
</style>
