<template>
  <div :class="$style.filters_container">
    <div class="q-pa-md" style="width: 295px; border-radius: 50px">
      <q-list bordered style="border-radius: 20px">
        <h2 :class="$style.filter_header">Filters</h2>
        <div class="q-pa-md" :class="$style.filters_category">
          <div class="q-gutter-sm" :class="$style.category_items">
            <q-checkbox
              dense
              v-model="localFilters.category.t_shirts"
              label="T-shirts"
              color="black"
            />
            <q-checkbox dense v-model="localFilters.category.shorts" label="Shorts" color="black" />
            <q-checkbox dense v-model="localFilters.category.shirts" label="Shirts" color="black" />
            <q-checkbox dense v-model="localFilters.category.jeans" label="Jeans" color="black" />
          </div>
        </div>
        <q-expansion-item
          expand-separator
          label="Price"
          :class="$style.filters_price"
          default-opened
          :header-class="$style.filter_header"
        >
          <q-card>
            <q-card-section>
              <div class="q-pa-md">
                <q-range
                  v-model="localFilters.price"
                  :min="10"
                  :max="300"
                  label
                  color="black"
                  label-always
                  :left-label-value="localFilters.price.min + '$'"
                  :right-label-value="localFilters.price.max + '$'"
                />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Colors"
          :class="$style.filters_colors"
          default-opened
          :header-class="$style.filter_header"
        >
          <q-card>
            <q-card-section>
              <div id="q-app">
                <div class="q-pa-md">
                  <div class="q-gutter-xs" :class="$style.colors_items">
                    <q-chip v-model:selected="color.Green" color="green" text-color="white">
                    </q-chip>
                    <q-chip v-model:selected="color.Red" color="red" text-color="white"> </q-chip>
                    <q-chip v-model:selected="color.Yellow" color="yellow" text-color="white">
                    </q-chip>
                    <q-chip v-model:selected="color.Orange" color="orange" text-color="white">
                    </q-chip>
                    <q-chip v-model:selected="color.Blue_light" color="blue-4" text-color="white">
                    </q-chip>
                    <q-chip v-model:selected="color.Blue" color="blue-9" text-color="white">
                    </q-chip>
                    <q-chip v-model:selected="color.Purple" color="purple" text-color="white">
                    </q-chip>
                    <q-chip v-model:selected="color.Pink" color="pink" text-color="white"> </q-chip>
                    <q-chip v-model:selected="color.White" outline color="grey" text-color="white">
                    </q-chip>
                    <q-chip v-model:selected="color.Black" color="black" text-color="white">
                    </q-chip>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Size"
          :class="$style.filters_size"
          default-opened
          :header-class="$style.filter_header"
        >
          <q-card>
            <q-card-section>
              <div class="q-gutter-xs" :class="$style.size_items">
                <q-chip v-model:selected="syze.X_Small" color="gray"> X-Small </q-chip>
                <q-chip v-model:selected="syze.Small" color="gray"> Small </q-chip>
                <q-chip v-model:selected="syze.Medium" color="gray"> Medium </q-chip>
                <q-chip v-model:selected="syze.Large" color="gray"> Large </q-chip>
                <q-chip v-model:selected="syze.X_Large" color="gray"> X-Large </q-chip>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Dress Style"
          :class="$style.filters_style"
          default-opened
          :header-class="$style.filter_header"
        >
          <q-card>
            <q-card-section>
              <div class="q-pa-md">
                <div class="q-gutter-sm" :class="$style.style_items">
                  <q-checkbox dense v-model="casual" label="Casual" color="black" />
                  <q-checkbox dense v-model="formal" label="Formal" color="black" />
                  <q-checkbox dense v-model="party" label="Party" color="black" />
                  <q-checkbox dense v-model="gym" label="Gym" color="black" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <ButtonDark text="Apply" :class="$style.filters_button" @click="applyFilters" />
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonDark from '../Home/ButtonDark.vue'

const localFilters = ref({
  price: { min: 10, max: 300 },
  category: {
    t_shirts: false,
    shorts: false,
    shirts: false,
    jeans: false
  },
  color: {
    Green: false,
    Red: false,
    Yellow: false,
    Orange: false,
    Blue_light: false,
    Blue: false,
    Purple: false,
    Pink: false,
    White: false,
    Black: false
  },
  size: {
    X_Small: false,
    Small: false,
    Medium: false,
    Large: false,
    X_Large: false
  },
  style: {
    casual: false,
    formal: false,
    party: false,
    gym: false
  }
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: typeof localFilters.value): void
}>()

const applyFilters = () => {
  emit('update:modelValue', localFilters.value)
}

const syze = ref({
  X_Small: false,
  Small: false,
  Medium: false,
  Large: false,
  X_Large: false
})

const color = ref({
  Green: false,
  Red: false,
  Yellow: false,
  Orange: false,
  Blue_light: false,
  Blue: false,
  Purple: false,
  Pink: false,
  White: false,
  Black: false
})
</script>

<style module>
.filter_header {
  padding: 24px;
  font-size: 18px;
  font-family: 'Satoshi';
  font-weight: 900;
  color: var(--title-color);
}
.category_items {
  display: flex;
  flex-direction: column;
}

.colors_items > * {
  margin-right: 9px;
  width: 37px;
  height: 37px;
  border-radius: 50px;
  border: 1px solid var(--subtitle-color);
}
.size_items {
  display: flex;
  flex-wrap: wrap;
}
.size_items > * {
  width: auto;
  height: 39px;
  border-radius: 20px;
  background-color: var(--placeholder-color);
  color: var(--subtitle-color);
  font-size: 14px;
  font-family: 'Satoshi';
}
.style_items {
  display: flex;
  flex-direction: column;
}
.filters_button {
  margin: 10px auto;
  line-height: 1;
}
</style>
