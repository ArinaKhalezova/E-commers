<script setup lang="ts">
const props = defineProps({
  breadcrumbs: {
    type: Array as () => { label: string; to: string }[],
    required: true
  }
})
</script>

<template>
  <div :class="$style.breadcrumbs_container">
    <q-breadcrumbs class="text-black" active-color="grey-6">
      <template v-slot:separator>
        <q-icon
          size="20px"
          name="chevron_right"
          color="grey-6"
        />
      </template>

      <q-breadcrumbs-el v-for="breadcrumb in breadcrumbs" :key="breadcrumb.to" :label="breadcrumb.label" :to="breadcrumb.to" />
    </q-breadcrumbs>
  </div>
</template>

<style module>
  .breadcrumbs_container {
    margin: 0 16px 20px 16px;
    font-size: 14px;
    font-family: 'Satoshi';
  }

@media (min-width: 1024px) {
  .breadcrumbs_container {
    margin: 0 0 36px 100px
  }

}

</style>
