<template>
  <h1>Welcome to vue3 Electron template!</h1>
  <button @click="onClickOpenDialog">Open dialog</button>
</template>

<script setup lang="ts">
import { showMessageBox } from "@/electronRenderer";
async function onClickOpenDialog() {
  const response = await showMessageBox({
    message: "Hello, this is the message content",
    title: "Title",
    textWidth: 400,
    buttons: ["Ok", "Cancel"],
    type: "info",
  });
  console.log(response);
}
</script>

<style scoped></style>
