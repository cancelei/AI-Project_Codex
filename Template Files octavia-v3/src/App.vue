<script setup>
import { ref } from "vue";
</script>

<template>
  <v-app class="main-app" :theme="$store.state.theme">
    <router-view />
  </v-app>
</template>

<style lang="scss" scoped>
.main-app {
  height: 100%;
}
</style>
