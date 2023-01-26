<script setup>
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <v-container>
    <div class="d-flex justify-space-between mb-7">
      <div class="d-flex align-center">
        <div class="bg-primary-lighten-5 px-3 py-2 rounded me-3">
          <i class="tio- text-primary text-18">shopping</i>
        </div>
        <div class="text-subtitle-2 f-600">E-commerce</div>
      </div>
    </div>
    <v-row>
      <v-col v-for="(item, index) in 9" :key="index" cols="12" lg="4">
        <ProductCard />
      </v-col>
    </v-row>
  </v-container>
</template>
