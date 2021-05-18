<template>
  <div class="p-8">
    <h1 class="mb-6">Suitability Test</h1>
    <router-view />
  </div>
</template>

<script>
import "@/assets/tailwind.css"

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getData');
  },
};
</script>
