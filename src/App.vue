<template>
  <MainLayout />
</template>

<script>
import MainLayout from "@/components/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout
  }
};
</script>

<style>
/* Общие стили для всего приложения */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
