<template>
  <Card class="mb-4">
    <template #content>
      <div class="flex justify-content-between">
        <div class="flex flex-column">
          <Knob
            v-model="valueKnob"
            :min="0"
            :max="100"
            valueColor="SlateGray"
            rangeColor="MediumTurquoise"
          />
          <div class="ml-3">
            <Button
              class="mr-2"
              icon="pi pi-minus"
              @click="valueKnob--"
              :disabled="valueKnob <= 0"
            />
            <Button
              icon="pi pi-plus"
              @click="valueKnob++"
              :disabled="valueKnob >= 100"
            />
          </div>
        </div>
        <div class="w-14rem">
          <InputText v-model.number="sliderValue" class="w-full" />
          <Slider v-model="sliderValue" class="w-full" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";
// Knob
const valueKnob = ref(50);
// Slider
const sliderValue = ref(50);
</script>
