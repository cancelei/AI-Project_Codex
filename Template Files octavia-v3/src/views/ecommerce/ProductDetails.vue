<script setup>
import { ref } from "@vue/reactivity";

const toggle_exclusive = ref(undefined);
</script>

<template>
  <v-container>
    <div class="d-flex align-center mb-7">
      <div class="bg-primary-lighten-5 px-3 py-2 rounded me-3">
        <i class="tio- text-primary text-18">shopping</i>
      </div>
      <div class="text-subtitle-2 f-600">E-commerce</div>
    </div>
    <v-row class="align-center">
      <v-col cols="12">
        <base-card>
          <v-row>
            <v-col cols="12" lg="6">
              <img class="mw-100" src="/src/assets/images/shoe/nike-4.png" />
            </v-col>

            <v-col cols="12" lg="6">
              <div
                class="bg-success-lighten-5 px-3 rounded py-1 d-inline-block mb-4"
              >
                <div class="text-success text-10 f-600">In stock</div>
              </div>
              <div class="text-subtitle text-secondary">NIKE</div>
              <div class="text-h5 f-600 mb-4">Air Jordan 270</div>
              <div class="text-h5 f-600 mb-4 text-primary mb-5">$350</div>
              <div class="d-flex align-center mb-8">
                <div class="text-subtitle me-3 f-600">Colors:</div>
                <div class="d-flex align-center">
                  <div class="bg-primary pa-2 rounded-circle me-2"></div>
                  <div class="bg-error pa-2 rounded-circle me-2"></div>
                  <div class="bg-success pa-2 rounded-circle me-2"></div>
                </div>
              </div>
              <div class="d-flex align-center mb-8">
                <div class="text-subtitle me-3 f-600">Select Size:</div>
              </div>

              <div class="d-flex align-center flex-wrap mb-8">
                <div class="text-subtitle me-3 f-600">Quantity:</div>
                <v-btn-toggle class="product-btn-group me-2" mandatory>
                  <v-btn class="p-3" flat>
                    <i class="tio-">remove</i>
                  </v-btn>
                  <span class="mx-3 d-flex align-center">1</span>
                  <v-btn class="p-3" flat>
                    <i class="tio-">add</i>
                  </v-btn>
                </v-btn-toggle>
                <div class="text-caption text-secondary">available : 12</div>
              </div>
              <div class="d-flex align-center mb-10 flex-wrap">
                <v-btn color="primary" flat class="me-3 text-capitalize mb-3">
                  <i class="tio- me-2">shopping_cart</i> Add to Cart</v-btn
                >
                <v-btn
                  color="success"
                  flat
                  class="text-white text-capitalize mb-3"
                  >Buy Now</v-btn
                >
              </div>
              <div class="d-flex align-center flex-wrap">
                <v-btn icon flat>
                  <i class="text-24 text-secondary tio-">facebook</i>
                </v-btn>
                <v-btn icon flat>
                  <i class="text-24 text-secondary tio-">instagram</i>
                </v-btn>
                <v-btn icon flat>
                  <i class="text-24 text-secondary tio-">twitter</i>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </base-card>
      </v-col>
      <v-col cols="12">
        <base-card>
          <div class="text-caption f-600 mb-3">Specification:</div>
          <div class="text-caption mb-10">
            You can't go wrong with a pair of Jordan sneakers. Crafted from
            black and white leather, these Air Jordan 1 Mid SE sneakers are a
            timeless Easy as that.
          </div>
          <div class="text-caption f-600 mb-3">
            MATERIAL AND WASHING INSTRUCTIONS:
          </div>
          <div class="text-caption mb-10">
            Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65%
            polyester,35% cotton. Insole: 100% polyurethane. Sole: 100%
            thermoplastic. Fixing sole: 100% glued
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.mw-100 {
  max-width: 100%;
}
</style>
