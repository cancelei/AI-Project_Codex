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
        <div class="text-body-2 f-600 me-2 mb-2">My Documents</div>
        <span class="text-secondary text-caption font-weight-medium"
          >(100+ Resources)</span
        >
      </div>
      <v-btn class="text-capitalize" color="primary" flat> File Manager</v-btn>
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
        <base-card class="text-center">
          <v-avatar class="rounded-0" size="46">
            <img src="@/assets/images/svg/folder.svg" alt="" />
          </v-avatar>
          <div class="text-caption f-600">Customer</div>
          <div class="text-secondary text-caption">7 Files</div>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
