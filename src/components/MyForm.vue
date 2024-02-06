<template>
  <Card class="mb-4">
    <template #content>
      <div class="flex gap-4 mb-8">
        <div class="flex flex-column gap-3">
          <div
            v-for="category in categoriesRadio"
            :key="category.key"
            class="align-items-center"
          >
            <RadioButton
              v-model="selectedCategoryRadio"
              :inputId="category.key"
              name="dynamic"
              :value="category.name"
            />
            <label :for="category.key" class="ml-2">{{ category.name }}</label>
          </div>
        </div>

        <div class="flex flex-column gap-3">
          <div
            v-for="category of categoriesCheckbox"
            :key="category.key"
            class="flex align-items-center"
          >
            <Checkbox
              v-model="selectedCategoriesCheckbox"
              :inputId="category.key"
              name="category"
              :value="category.name"
            />
            <label class="ml-2" :for="category.key">{{ category.name }}</label>
          </div>
        </div>
      </div>

      <div class="flex justify-content-between">
        <Dropdown
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Select a City"
          class="md:w-14rem h-2rem"
        />
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="valueInputText" placeholder="Search" />
        </span>
        <InputNumber
          v-model="inputNumberValue"
          inputId="currency-us"
          mode="currency"
          currency="USD"
          locale="en-US"
        />
        <InputSwitch v-model="checked" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";

// Dropdown
const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
// Radiobutton
const selectedCategoryRadio = ref("Production");
const categoriesRadio = ref([
  { name: "Accounting", key: "A" },
  { name: "Marketing", key: "M" },
  { name: "Production", key: "P" },
  { name: "Research", key: "R" },
]);
// Checkboxes
const categoriesCheckbox = ref([
  { name: "Accounting", key: "A" },
  { name: "Marketing", key: "M" },
  { name: "Production", key: "P" },
  { name: "Research", key: "R" },
]);
const selectedCategoriesCheckbox = ref(["Marketing"]);

// Input text
const valueInputText = ref(null);
// Iput number
const inputNumberValue = ref(1500);
// Input switch
const checked = ref(false);
</script>
