<script setup>
import AccountCover from "@/components/AccountCover.vue";
import { ref } from "@vue/reactivity";

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>
<template>
  <v-container>
    <AccountCover />
    <div class="d-flex justify-space-between flex-wrap align-center mb-5">
      <div class="d-flex">
        <div class="text-body-2 f-600 me-2 mb-3">My Campaign</div>
        <span class="text-secondary text-caption font-weight-medium"
          >(30 Days)</span
        >
      </div>
      <v-btn class="text-capitalize" color="primary" flat>
        <i class="tio-">add</i>
        Add Campaign</v-btn
      >
    </div>
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
          <div class="d-flex justify-space-between mb-4">
            <div class="d-flex align-center">
              <div class="bg-secondary-lighten-5 pa-1 rounded me-1">
                <i class="text-20 text-primary tio-">twitch</i>
              </div>
              <div class="text-caption text-secondary f-600">Twitch Post</div>
            </div>
            <v-menu offset-y>
              <template v-slot:activator="{ props }">
                <v-btn class="text-capitalize" icon flat v-bind="props">
                  <i class="tio- text-20 text-secondary">more_horizontal</i>
                </v-btn>
              </template>
              <v-list class="bg-white">
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div class="d-flex justify-space-between align-center flex-wrap mb-4">
            <div class="text-h5 f-600">$5,000</div>
            <div class="d-flex align-center">
              <span class="text-error f-600 me-1">-40.5</span>
              <span class="font-weight-medium text-secondary-darken-2"
                >subscriber growth</span
              >
            </div>
          </div>
          <div class="d-flex align-center">
            <v-progress-linear
              value="15"
              color="primary"
              class="me-2"
            ></v-progress-linear>
            <span class="text-caption">50%</span>
          </div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
