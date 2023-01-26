<script setup>
import AccountCover from "@/components/AccountCover.vue";
import { ref } from "@vue/reactivity";
const connectionLitst = ref([
  {
    img: "/src/assets/images/faces/1.jpg",
    name: "Miphoshka",
  },
  {
    img: "/src/assets/images/faces/2.jpg",
    name: "Angelina",
  },
  {
    img: "/src/assets/images/faces/3.jpg",
    name: "Jeniffer",
  },
  {
    img: "/src/assets/images/faces/4.jpg",
    name: "Edward Norton",
  },
  {
    img: "/src/assets/images/faces/2.jpg",
    name: "Miphoshka",
  },
  {
    img: "/src/assets/images/faces/1.jpg",
    name: "Angelina",
  },
  {
    img: "/src/assets/images/faces/4.jpg",
    name: "Jeniffer",
  },
  {
    img: "/src/assets/images/faces/3.jpg",
    name: "Edward Norton",
  },
]);
</script>
<template>
  <v-container>
    <AccountCover />
    <div class="d-flex justify-space-between flex-wrap align-center mb-5">
      <div class="d-flex">
        <div class="text-body-2 f-600 me-2 mb-2">My Collections</div>
        <span class="text-secondary text-caption font-weight-medium"
          >(100+ Resources)</span
        >
      </div>
      <v-btn class="text-capitalize" color="primary" flat> File Manager</v-btn>
    </div>
    <v-row>
      <v-col
        v-for="(item, index) in connectionLitst"
        :key="index"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <base-card>
          <div class="d-flex flex-column justify-center align-center">
            <div>
              <v-badge
                bordered
                location="bottom-right"
                class="success mb-2"
                color="success"
                dot
                offset-x="2"
                offset-y="4"
              >
                <v-avatar size="46">
                  <img :src="item.img" />
                </v-avatar>
              </v-badge>
            </div>
            <div class="text-caption f-600 mb-1">{{ item.name }}</div>
            <div class="text-secondary text-caption mb-4">
              Visual Designerasd
            </div>
          </div>
          <v-row>
            <v-col cols="12" lg="6">
              <div class="border-secondary rounded-lg text-center py-4">
                <i class="tio- text-secondary text-20 mb-1">dollar_outlined</i>
                <div class="text-caption text-secondary-darken-2 f-600 mb-1">
                  $14,500
                </div>
                <div class="text-caption">avg Income</div>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="border-secondary rounded-lg text-center py-4">
                <i class="tio- text-secondary text-20 mb-1">chart_bar_4</i>
                <div class="text-caption text-secondary-darken-2 f-600 mb-1">
                  $14,500
                </div>
                <div class="text-caption">avg Income</div>
              </div>
            </v-col>
          </v-row>
          <v-btn
            flat
            class="mt-4 border-secondary text-secondary-darken-3 f-600"
            block
          >
            <i class="tio- text-20 me-2">add</i>
            Connect
          </v-btn>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
