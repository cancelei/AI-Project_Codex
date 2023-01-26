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
    <v-row>
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
              <div class="d-flex flex-wrap align-center mb-8">
                <div class="text-subtitle me-3 f-600">Quantity:</div>
                <v-btn-toggle
                  class="product-btn-group me-2 d-flex"
                  v-model="toggle_exclusive"
                  mandatory
                >
                  <v-btn flat>
                    <i class="tio-">remove</i>
                  </v-btn>
                  <span class="mx-3 d-flex align-center">1</span>
                  <v-btn flat>
                    <i class="tio-">add</i>
                  </v-btn>
                </v-btn-toggle>
                <div class="text-caption text-secondary">available : 12</div>
              </div>
              <div class="d-flex flex-wrap align-center mb-10">
                <v-btn flat color="primary" class="me-3 mb-3 text-capitalize">
                  <i class="tio- me-2">shopping_cart</i> Add to Cart</v-btn
                >
                <v-btn flat class="text-capitalize mb-3" color="success"
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
          <v-row>
            <v-col cols="12" lg="6" class="border-right-secondary">
              <v-row align="center">
                <v-col cols="12" lg="4" class="mb-4">
                  <div class="text-center">
                    <v-avatar size="64" class="mb-4">
                      <img
                        class="w-full"
                        src="@/assets/images/faces/1.jpg"
                        alt=""
                      />
                    </v-avatar>
                    <div class="text-subtitle-2 f-600 mb-1">
                      Chirstina Perry
                    </div>
                    <div class="text-caption font-weight-medium text-secondary">
                      14 Nov, 2021
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" lg="8" class="text-center text-md-left">
                  <div
                    class="d-flex justify-center justify-md-content-start mb-3"
                  >
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                  </div>
                  <div class="text-caption font-weight-medium">
                    Thank you very fast shipping from Poland only 3days. Very
                    Greateful. Was this review helpful to you? <br />
                    <span class="text-primary d-block mt-3 mt-md-0">
                      <i class="tio-">thumbs_up</i> Thank(234)</span
                    >
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12" lg="4" class="mb-4">
                  <div class="text-center">
                    <v-avatar size="64" class="mb-4">
                      <img
                        class="w-full"
                        src="@/assets/images/faces/2.jpg"
                        alt=""
                      />
                    </v-avatar>
                    <div class="text-subtitle-2 f-600 mb-1">Jhon Wick</div>
                    <div class="text-caption font-weight-medium text-secondary">
                      14 Nov, 2021
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" lg="8" class="text-center text-md-left">
                  <div
                    class="d-flex justify-center justify-md-content-start mb-3"
                  >
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-secondary-lighten-4 text-18 tio- me-1"
                      >star</i
                    >
                  </div>
                  <div class="text-caption font-weight-medium">
                    Thank you very fast shipping from Poland only 3days. Very
                    Greateful. Was this review helpful to you? <br />
                    <span class="text-primary d-block mt-3 mt-md-0">
                      <i class="tio-">thumbs_up</i> Thank(234)</span
                    >
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12" lg="4" class="mb-4">
                  <div class="text-center">
                    <v-avatar size="64" class="mb-4">
                      <img
                        class="w-full"
                        src="@/assets/images/faces/3.jpg"
                        alt=""
                      />
                    </v-avatar>
                    <div class="text-subtitle-2 f-600 mb-1">Trovalto Wick</div>
                    <div class="text-caption font-weight-medium text-secondary">
                      14 Nov, 2021
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" lg="8" class="text-center text-md-left">
                  <div
                    class="d-flex justify-center justify-md-content-start mb-3"
                  >
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-warning-lighten-1 text-18 tio- me-1">star</i>
                    <i class="text-secondary-lighten-4 text-18 tio- me-1"
                      >star</i
                    >
                  </div>
                  <div class="text-caption font-weight-medium">
                    Thank you very fast shipping from Poland only 3days. Very
                    Greateful. Was this review helpful to you? <br />
                    <span class="text-primary d-block mt-3 mt-md-0">
                      <i class="tio-">thumbs_up</i> Thank(234)</span
                    >
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6" class="text-center">
              <div class="text-subtitle-2 f-600 mb-2">Average rating</div>
              <div class="text-primary text-h5 f-600 mb-2">4/5</div>
              <div class="d-flex justify-center mb-1">
                <i class="text-warning-lighten-1 text-20 tio-">star</i>
                <i class="text-warning-lighten-1 text-20 tio-">star</i>
                <i class="text-warning-lighten-1 text-20 tio-">star</i>
                <i class="text-warning-lighten-1 text-20 tio-">star</i>
                <i class="text-secondary-lighten-1 text-20 tio-">star</i>
              </div>
              <div class="text-secondary font-weight-medium mb-10">
                (8.24kreviews)
              </div>
              <div
                v-for="item in 4"
                :key="item"
                class="d-flex justify-space-between align-center mb-6"
              >
                <div class="text-caption f-600 flex-1">5 star</div>
                <v-progress-linear
                  value="15"
                  color="success"
                  class="mx-4 flex-1"
                  height="7"
                ></v-progress-linear>
                <div class="text-caption flex-1">32K</div>
              </div>
              <v-btn outlined class="text-captialize border-primary" flat>
                <i class="tio- text-primary me-2">edit</i>
                <span class="text-primary text-capitalize"
                  >Write Your Review</span
                >
              </v-btn>
            </v-col>
            <v-col cols="12">
              <div class="p-card bg-secondary-lighten-5">
                <div class="text-caption f-600 mb-3">Add Review</div>
                <div class="d-flex align-center mb-6">
                  <div class="text-caption me-2 font-weight-medium">
                    Your review about this product:
                  </div>
                  <div class="d-flex">
                    <i class="text-warning-lighten-2 text-18 me-1 tio-">star</i>
                    <i class="text-warning-lighten-2 text-18 me-1 tio-">star</i>
                    <i class="text-warning-lighten-2 text-18 me-1 tio-">star</i>
                    <i class="text-warning-lighten-2 text-18 me-1 tio-">star</i>
                    <i class="text-warning-lighten-2 text-18 me-1 tio-">star</i>
                  </div>
                </div>
                <v-textarea
                  label="Review*"
                  hide-details
                  variant="outlined"
                  color="primary"
                  class="mb-4"
                ></v-textarea>
                <v-text-field
                  label="Name*"
                  hide-details
                  variant="outlined"
                  color="primary"
                  class="mb-4"
                ></v-text-field>
                <v-text-field
                  label="Email*"
                  hide-details
                  variant="outlined"
                  color="primary"
                  class="mb-4"
                ></v-text-field>
                <div class="d-flex flex-wrap justify-end">
                  <v-btn
                    flat
                    class="border-primary text-primary text-capitalize me-3 mb-3"
                    >Cancel</v-btn
                  >
                  <v-btn flat class="text-capitalize mb-3" color="primary"
                    >Post Review</v-btn
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.border-right-secondary {
  border-right: 1px solid #dbe9f2;
}
.mw-100 {
  max-width: 100%;
}
</style>
