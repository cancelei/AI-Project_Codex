<script setup>
import { ref } from "@vue/reactivity";
const switch1 = ref(true);
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center d-flex flex-column align-center">
        <div class="text-h5 f-600">Pricing Plans</div>
        <div class="d-flex align-center">
          <span class="text-subtitle-2 f-600">Monthly</span>
          <v-switch
            v-model="switch1"
            color="primary"
            hide-details
            class="mx-4"
          ></v-switch>
          <span class="f-600">Annually</span>
        </div>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="pricing-card">
          <span
            class="px-3 py-2 bg-warning-lighten-4 rounded my-3 d-inline-block"
          >
            <i class="text-18 text-warning tio-">layers</i></span
          >
          <div class="text-h5 f-600 mb-6 mt-3 d-flex align-center">
            $49<span
              class="text-secondary font-weight-regular text-subtitle-2 ms-1"
              >/ month</span
            >
          </div>

          <div class="text-h5 f-600 mb-1">Basic</div>
          <div class="text-caption mb-8 f-600 text-secondary-lighten-1">
            Perfect plan for starters
          </div>
          <div class="d-flex flex-column mh-200">
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">One Project</div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Share it with 5 team members
              </div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Sync across device
              </div>
            </div>
          </div>

          <v-btn
            variant="outlined"
            color="primary"
            class="text-capitalize"
            rounded="pill"
            block
            flat
            size="x-large"
            >Get Started</v-btn
          >
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="pricing-card standard-card">
          <span
            class="px-3 py-2 bg-primary-lighten-5 rounded my-3 d-inline-block"
          >
            <i class="text-18 text-primary tio-">folder_special</i></span
          >
          <div class="text-h5 f-600 mb-6 mt-3 d-flex align-center">
            $99<span
              class="text-secondary font-weight-regular text-subtitle-2 ms-1"
              >/ month</span
            >
          </div>

          <div class="text-h5 f-600 mb-1">Standard</div>
          <div class="text-caption mb-8 f-600 text-secondary-lighten-1">
            For users who want to do more
          </div>
          <div class="d-flex flex-column mh-200">
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">Two Project</div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Share it with 5 team members
              </div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Sync across device
              </div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Components included
              </div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                30 day version history
              </div>
            </div>
          </div>

          <v-btn
            class="text-capitalize"
            color="primary"
            rounded="pill"
            block
            size="x-large"
            >Get Started</v-btn
          >
        </base-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-card class="pricing-card">
          <span
            class="px-3 py-2 bg-success-lighten-5 rounded my-3 d-inline-block"
          >
            <i class="text-18 text-success tio-">premium</i></span
          >
          <div class="text-h5 f-600 mb-6 mt-3 d-flex align-center">
            $99<span
              class="text-secondary font-weight-regular text-subtitle-2 ms-1"
              >/ month</span
            >
          </div>

          <div class="text-h5 f-600 mb-1">Premium</div>
          <div class="text-caption mb-8 f-600 text-secondary-lighten-1">
            Advance features for pros
          </div>
          <div class="d-flex flex-column mh-200">
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Unlimited Project
              </div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Unlimited team members
              </div>
            </div>
            <div class="d-flex align-center mb-4">
              <i class="tio-done text-18 me-2 text-success"></i>
              <div class="text-caption font-weight-medium">
                Sync across device
              </div>
            </div>
          </div>

          <v-btn
            variant="outlined"
            class="text-capitalize"
            color="primary"
            rounded="pill"
            block
            size="x-large"
            >Get Started</v-btn
          >
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.pricing-card {
  border-radius: 48px;
  &.standard-card {
    border: 5px solid #0a68ff;
  }
}
.mh-200 {
  min-height: 200px;
}
.p-card {
  padding: 1.25rem;
}
</style>
