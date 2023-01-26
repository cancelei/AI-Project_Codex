<script setup>
import { crmOne, crmTwo, tasks } from "@/data/crm.js";
import ProductGridCard from "@/components/ProductGridCard.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="product-list-card px-0">
        <div
          class="d-flex justify-space-between align-center mb-4 bb-secondary pb-3 px-4 flex-wrap"
        >
          <div class="d-flex align-center mb-3">
            <div class="bg-primary-lighten-5 px-3 py-2 rounded me-3">
              <i class="tio- text-primary text-18">shopping</i>
            </div>
            <div class="text-subtitle-2 f-600">Iphone</div>
          </div>
          <div class="d-flex mb-3">
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
            Save Product</v-btn
          >
        </div>
        <v-row class="px-4">
          <v-col cols="12" lg="8">
            <base-card class="pa-10">
              <label
                for="file"
                class="d-flex flex-column align-center cursor-pointer"
              >
                <i class="text-40 text-secondary tio- mb-2">upload_on_cloud</i>
                <div class="text-caption text-secondary mb-2">
                  Drop your images here or
                </div>
                <div class="text-primary text-caption font-weight-medium">
                  select click to browser
                </div>
              </label>
            </base-card>
            <input type="file" name="file" id="file" class="inputfile d-none" />
          </v-col>
          <v-col cols="12" lg="4">
            <base-card class="pa-10">
              <label
                for="file"
                class="d-flex flex-column align-center cursor-pointer"
              >
                <i class="text-40 text-secondary tio- mb-2">link</i>
                <div class="text-caption text-secondary mb-2">
                  Upload file by link
                </div>
                <div class="text-primary text-caption font-weight-medium">
                  Add URL
                </div>
              </label>
            </base-card>
            <input type="file" name="file" id="file" class="inputfile d-none" />
          </v-col>
          <v-col cols="12" lg="3" md="6">
            <v-img
              wdith="100%"
              height="300px"
              class="rounded"
              src="/src/assets/images/products/headphone-2.jpg"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="3" md="6">
            <v-img
              wdith="100%"
              height="300px"
              class="rounded"
              src="/src/assets/images/products/ps5.png"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="3" md="6">
            <v-img
              wdith="100%"
              height="300px"
              class="rounded"
              src="/src/assets/images/products/headphone-2.jpg"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="3" md="6">
            <v-img
              wdith="100%"
              height="300px"
              class="rounded"
              src="/src/assets/images/products/ps5.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
.mw-200 {
  max-width: 200px;
}
.text-40 {
  font-size: 40px;
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
</style>
