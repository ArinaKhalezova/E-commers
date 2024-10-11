<script setup lang="ts"></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <img alt="SHOP.CO logo" class="logo" src="@/assets/img/logo.png" width="126" height="18" />
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/category">Category</RouterLink> -->
      </nav>
      <div class="menu">
        <img alt="Search button" src="@/assets/img/search.png" width="24" height="24" />
        <img alt="Search button" src="@/assets/img/cart.png" width="24" height="24" />
        <img alt="Search button" src="@/assets/img/account.png" width="24" height="24" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  background-color: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu > * {
  margin: 0 6px;
}
</style>
