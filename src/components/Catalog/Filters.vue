<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from '../Home/Button.vue'
const step = ref({
  min: 10,
  max: 300
})

const syze = ref({
  XX_Small: false,
  X_Small: false,
  Small: false,
  Medium: false,
  Large: false,
  X_Large: false,
  XX_Large: false,
  XXX_Large: false,
  XXXX_Large: false
})

const t_shirts = ref(false)
const shorts = ref(false)
const shirts = ref(false)
const hoodie = ref(false)
const jeans = ref(false)

const casual = ref(false)
const formal = ref(false)
const party = ref(false)
const gym = ref(false)

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

<template>
  <div :class="$style.filters_container">
    <div class="q-pa-md" style="width: 295px; border-radius: 50px;">
      <q-list bordered style="border-radius: 20px;">
        <h2 :class="$style.filter_header">Filters</h2>
        <div class="q-pa-md" :class="$style.filters_category">
          <div class="q-gutter-sm" :class="$style.category_items">
            <q-checkbox dense v-model="t_shirts" label="T-shirts" color="black" />
            <q-checkbox dense v-model="shorts" label="Shorts" color="black" />
            <q-checkbox dense v-model="shirts" label="Shirts" color="black" />
            <q-checkbox dense v-model="hoodie" label="Hoodie" color="black" />
            <q-checkbox dense v-model="jeans" label="Jeans" color="black" />
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
                  v-model="step"
                  :min="10"
                  :max="300"
                  label
                  color="black"
                  label-always
                  :left-label-value="step.min + '$'"
                  :right-label-value="step.max + '$'"
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
                <q-chip v-model:selected="syze.XX_Small" color="gray"> XX-Small </q-chip>
                <q-chip v-model:selected="syze.X_Small" color="gray"> X-Small </q-chip>
                <q-chip v-model:selected="syze.Small" color="gray"> Small </q-chip>
                <q-chip v-model:selected="syze.Medium" color="gray"> Medium </q-chip>
                <q-chip v-model:selected="syze.Large" color="gray"> Large </q-chip>
                <q-chip v-model:selected="syze.X_Large" color="gray"> X-Large </q-chip>
                <q-chip v-model:selected="syze.XX_Large" color="gray"> XX-Large </q-chip>
                <q-chip v-model:selected="syze.XXX_Large" color="gray"> 3X-Large </q-chip>
                <q-chip v-model:selected="syze.XXXX_Large" color="gray"> 4X-Large </q-chip>
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

        <div :class="$style.filters_button">
          <Button></Button>
        </div>
      </q-list>
    </div>
  </div>
</template>

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

.colors_items > *{
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
</style>
