<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import Navigation from './Navigation.vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.header_logo">
      <a href="/">
        <img
          alt="SHOP.CO logo"
          :class="$style.logo"
          src="@/assets/img/logo.png"
          width="126"
          height="18"
        />
      </a>
    </div>
    <div :class="$style.header_navigation">
      <a href="#">
        <q-btn flat label="Shop" :class="$style.navigation_item">
          <q-icon name="keyboard_arrow_right" />
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <a href="/category"><q-item-section>Casual</q-item-section></a>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <a href="/category"><q-item-section>Formal</q-item-section></a>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <a href="/category"><q-item-section>Party</q-item-section></a>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <a href="/category"><q-item-section>Gym</q-item-section></a>
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
    </div>
    <div :class="$style.header_search">
      <SearchBar />
    </div>
    <div :class="$style.menu">
      <a href="/category">
        <img alt="Search button" src="@/assets/img/cart.png" width="24" height="24" />
      </a>
      <a href="/category">
        <img alt="Search button" src="@/assets/img/account.png" width="24" height="24" />
      </a>
    </div>
    <div>
      <q-btn flat :class="$style.burger_menu">
        <q-icon name="menu" />
        <q-menu>
          <a href="#">
            <q-btn flat label="Shop" :class="$style.navigation_item">
              <q-icon name="keyboard_arrow_right" />
              <q-menu>
                <q-list dense style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <a href="/category"><q-item-section>Casual</q-item-section></a>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <a href="/category"><q-item-section>Formal</q-item-section></a>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <a href="/category"><q-item-section>Party</q-item-section></a>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <a href="/category"><q-item-section>Gym</q-item-section></a>
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
  </div>
</template>

<style module>
.header {
  padding: 24px 100px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 0.4fr;
  align-items: center;
  gap: 40px;
  position: relative;
}

.header_wrap {
  display: flex;
  align-items: center;
}

.navigation_item {
  text-transform: none;
  font-size: 16px;
  font-family: 'Satoshi';
  color: black;
  background-color: transparent;
  padding: 8px 12px;
}

.navigation_item:hover {
  color: rgb(6, 37, 78);
  background-color: transparent;
}

.burger_menu {
  display: none;
}

@media (max-width: 1024px) {
  .header_navigation {
    display: none;
  }

  .burger_menu {
    display: block;
  }

  .header {
    padding: 20px 16px;
    grid-template-columns: 1fr 5fr 1fr 1fr;
    gap: 10px;
    justify-items: center;
  }
  .header_search {
    width: 100%;
  }
}
@media (max-width: 630px) {
  .header {
    grid-template-columns: 5fr 1fr 0fr;
    gap: 10px;
    justify-items: left;
  }
  .header_search {
    display: none;
  }
}
@media (max-width: 466px) {
  .header {
    grid-template-columns: 9fr 2fr 0fr;
  }
}
</style>
