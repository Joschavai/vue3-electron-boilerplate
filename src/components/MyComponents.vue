<template>
  <Card class="m-4">
    <template #header>
      <div class="p-2 surface-300 flex justify-content-center">
        <div class="text-6xl font-medium">My components</div>
      </div>
    </template>
    <template #content>
      <div class="card">
        <TabMenu :model="items" />
      </div>

      <div class="p-4">
        <MyExperiments />
        <MyForm v-if="selectedTab === 'MyForm'" />
        <MyConfirmDialog v-if="selectedTab === 'MyConfirmDialog'" />
        <MySliders v-if="selectedTab === 'MySliders'" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import MyExperiments from "@/components/MyExperiments.vue";
import MyForm from "@/components/MyForm.vue";
import MyConfirmDialog from "@/components/MyConfirmDialog.vue";
import MySliders from "@/components/MySliders.vue";
import { ref } from "vue";

const items = ref([
  { label: "MyForm", icon: "pi pi-home" },
  { label: "MyConfirmDialog", icon: "pi pi-chart-line" },
  { label: "MySliders", icon: "pi pi-list" },
  { label: "Messages", icon: "pi pi-inbox" },
]);

const selectedTab = ref("MyForm");
</script>
