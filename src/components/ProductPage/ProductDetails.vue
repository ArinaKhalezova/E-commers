<script setup lang="ts"></script>

<template>
  <div :class="$style.details_container">
    <div :class="$style.details_items">
      <div :class="$style.details_property">
        <ul>
          <li>Composition</li>
          <li>Color</li>
          <li>Country of manufacture</li>
          <li>Features of the model</li>
          <li>Decorative elements</li>
          <li>Type of pockets</li>
          <li>The neckline</li>
          <li>Care of things</li>
          <li>Washing</li>
        </ul>
      </div>
      <div :class="$style.details_description">
        <ul>
          <li>100% cotton</li>
          <li>Black</li>
          <li>Russia</li>
          <li>free oversize model</li>
          <li>without pockets</li>
          <li>is round</li>
          <li>Iron the product from the wrong side</li>
          <li>at t no more than 40 °C</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style module>
.details_container {
  margin: 0 100px;
}
.details_items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
.details_items > * {
  font-family: 'Satoshi';
  font-size: 16px;
  padding: 20px;
  background-color: var(--light-background-color);
}
.details_property {
  border-radius: 20px 0px 0px 20px;
}
.details_description {
  border-radius: 0px 20px 20px 0px;
}
</style>
