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
              @click="applyFilters"
            />
            <q-checkbox dense v-model="localFilters.category.shorts" label="Shorts" color="black" @click="applyFilters"/>
            <q-checkbox dense v-model="localFilters.category.shirts" label="Shirts" color="black" @click="applyFilters"/>
            <q-checkbox dense v-model="localFilters.category.jeans" label="Jeans" color="black" @click="applyFilters"/>
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
                  @update:model-value="applyFilters"
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
                  <div class="q-gutter-xs" :class="$style.colors_items" @click="applyFilters">
                    <q-chip
                      v-for="(value, color) in localFilters.color"
                      :key="color"
                      :color="getColor(color)"
                      :outline="getOutline(color)"
                      :text-color="getTextColor(color)"
                      :selected="value"
                      @click="localFilters.color[color] = !localFilters.color[color]; applyFilters()"
                    >
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
                <q-chip
                  v-for="(value, size) in localFilters.size"
                  :key="size"
                  :size="size"
                  :selected="value"
                  color="gray"
                  @click="localFilters.size[size] = !localFilters.size[size]; applyFilters()"
                >
                  {{ size }}
                </q-chip>
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
                  <q-checkbox
                    dense
                    v-model="localFilters.style.casual"
                    label="Casual"
                    color="black"
                    @click="applyFilters"
                  />
                  <q-checkbox
                    dense
                    v-model="localFilters.style.formal"
                    label="Formal"
                    color="black"
                    @click="applyFilters"
                  />
                  <q-checkbox
                    dense
                    v-model="localFilters.style.party"
                    label="Party"
                    color="black"
                    @click="applyFilters"
                  />
                  <q-checkbox dense v-model="localFilters.style.gym" label="Gym" color="black" @click="applyFilters"/>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- <ButtonDark text="Apply" :class="$style.filters_button" @click="applyFilters" /> -->
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import ButtonDark from '../Home/ButtonDark.vue'

const localFilters = ref({
  category: {
    t_shirts: false,
    shorts: false,
    shirts: false,
    jeans: false
  },
  price: { min: 10, max: 300 },
  color: {
    green: false,
    red: false,
    yellow: false,
    orange: false,
    lightBlue: false,
    blue: false,
    purple: false,
    pink: false,
    white: false,
    black: false
  },
  size: {
    xsmall: false,
    small: false,
    medium: false,
    large: false,
    xlarge: false
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

const getColor = (color: string): string => {
  switch (color) {
    case 'lightBlue':
      return 'blue-4'
    case 'blue':
      return 'blue-9'
    case 'white':
      return 'grey'
    default:
      return color
  }
}
const getTextColor = (color: string): string => {
  switch (color) {
    case 'white':
    case 'yellow':
      return 'black'
    default:
      return 'white'
  }
}
const getOutline = (color: string): boolean => {
  switch (color) {
    case 'white':
      return true
    default:
      return false
  }
}
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
