<script setup>
import { crmOne, crmTwo, tasks } from "@/data/crm.js";
import ProductGridCard from "@/components/ProductGridCard.vue";

const productGridItems = [
  {
    img: "@/assets/images/products/smart-watch.png",
    title: "Apple Watch",
    price: "$200",
  },
  {
    img: "@/assets/images/products/old-camera.png",
    title: "Vintage Camera",
    price: "$300",
  },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="product-grid-card px-0">
        <div
          class="d-flex justify-space-between align-center mb-4 bb-secondary pb-3 px-4 flex-wrap"
        >
          <div class="d-flex align-center mb-3">
            <div class="bg-primary-lighten-5 px-3 py-2 rounded me-3">
              <i class="tio- text-primary text-18">shopping</i>
            </div>
            <div class="text-subtitle-2 f-600">E-commerce</div>
          </div>
          <div class="d-flex my-3">
            <router-link
              to="#"
              class="text-decoration-none product-link active me-8 f-600"
              >Active</router-link
            >
            <router-link
              to="#"
              class="text-decoration-none product-link me-8 f-600"
              >Draft</router-link
            >
            <router-link
              to="#"
              class="text-decoration-none product-link me-8 f-600"
              >Assembly</router-link
            >
          </div>
          <v-btn color="primary" flat class="text-capitalize">
            <i class="tio- me-2">add</i>
            Add Products</v-btn
          >
        </div>
        <div
          class="d-flex flex-wrap px-4 justify-space-between align-center flex-wrap mb-4"
        >
          <v-text-field
            class="mw-200"
            label="Search"
            variant="outlined"
            hide-details=""
          ></v-text-field>
        </div>
        <v-row class="px-4">
          <v-col
            v-for="(item, index) in 12"
            :key="index"
            cols="12"
            lg="3"
            md="4"
          >
            <ProductGridCard />
          </v-col>
        </v-row>
        <div class="text-center mt-5">
          <v-btn flat class="bg-white text-capitalize"
            >Load More Products</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.mw-200 {
  max-width: 200px;
}
.product-list-card {
  box-shadow: 0px 12px 50px 2px rgba(19, 80, 124, 0.14);
  border-radius: 8px;
}
.product-link {
  color: #647283;
  padding-bottom: 12px;
  border-bottom: 2px solid transparent;
  &.active {
    color: #0a68ff;
    border-bottom: 2px solid #0a68ff;
  }
}

.product-grid-card {
  position: relative;
}
</style>
