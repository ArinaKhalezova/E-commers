<script setup lang="ts">

</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs class="text-yellow-9" active-color="black">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="black"
        />
      </template>

      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Assortment" to="/assortment" />

    </q-breadcrumbs>
  </div>

</template>

<style module>
.button {
  display: flex;
  margin: 30px auto 54px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  background-color: rgb(255, 255, 255);
  border-radius: 62px;
  width: calc(100% - 32px);
  height: 52px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 14px;
  justify-content: center;
}

@media (min-width: 1024px) {
  .button {
    font-size: 16px;
    display: block;
    width: 218px;
    margin: 30px auto 54px;
    padding: 15px 80px;
  }
}

</style>
