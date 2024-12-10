<template>
  <div>
    <q-btn flat>
      <q-icon name="menu" />
      <q-menu :class="$style.navigation_container">
        <a href="#">
          <q-btn flat label="Shop" :class="$style.navigation_item">
            <q-icon name="keyboard_arrow_right" />
            <q-menu :class="$style.navigation_submenu">
              <q-list dense>
                <q-item clickable v-close-popup>
                  <a href="/assortment"><q-item-section>Casual</q-item-section></a>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <a href="/assortment"><q-item-section>Formal</q-item-section></a>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <a href="/assortment"><q-item-section>Party</q-item-section></a>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <a href="/assortment"><q-item-section>Gym</q-item-section></a>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </a>
        <a href="#" v-scroll-to="'#products'">
          <q-btn flat label="New Arrivals" :class="$style.navigation_item" />
        </a>
        <a href="#" v-scroll-to="'#reviews'">
          <q-btn flat label="Reviews" :class="$style.navigation_item" />
        </a>
        <a href="#" v-scroll-to="'#offer'">
          <q-btn flat label="Offer" :class="$style.navigation_item" />
        </a>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts"></script>

<style module>
.navigation_container {
  width: 99vw;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 20px;
}
.navigation_submenu {
  width: 100%;
  border-radius: 20px;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 20px;
  margin-right: -200px;
}
</style>
