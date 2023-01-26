<script setup>
import AccountCover from "@/components/AccountCover.vue";
</script>
<template>
  <v-container>
    <AccountCover />
    <v-row>
      <v-col
        v-for="(item, index) in 9"
        :key="index"
        cols="12"
        lg="4"
        md="6"
        sm="6"
      >
        <base-card>
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="bg-primary-lighten-5 px-3 py-1 rounded">
              <i class="text-24 text-primary tio-">behance </i>
            </div>
            <div
              class="font-weight-medium pa-2 bg-primary-lighten-5 text-secondary-darken-2 rounded text-10"
            >
              Pending
            </div>
          </div>
          <div class="text-body-2 mb-4">Create Minimal Logo</div>
          <div class="text-caption text-secondary">
            Minimalistic logo for fitness appk, the project will get brand
            identity when the get recognized...
          </div>
          <div class="d-flex align-center mb-4">
            <v-progress-linear
              value="15"
              color="primary"
              class="me-2"
            ></v-progress-linear>
            <span class="text-caption">50%</span>
          </div>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-row mb-2">
              <v-avatar size="24">
                <img class="w-full" src="@/assets/images/faces/4.jpg" />
              </v-avatar>
              <v-avatar size="24">
                <img
                  class="ml--6 rounded-circle avatar-24"
                  src="@/assets/images/faces/16.jpg"
                />
              </v-avatar>
            </div>
            <div class="text-secondary text-caption f-600">Due In 2 Days</div>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
