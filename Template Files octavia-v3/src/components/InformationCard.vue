<script setup>
import { ref } from "@vue/reactivity";

const aboutInformation = [
  {
    icon: "birthday",
    title: "June 3, 1996",
  },
  {
    icon: "user",
    title: "Female",
  },
  {
    icon: "city",
    title: "New Company  L.T.D.",
  },
  {
    icon: "email",
    title: "carrie-page@gmail.com",
  },
  {
    icon: "call",
    title: "(01) 4563 4556",
  },
  {
    icon: "call",
    title: "Female",
  },
  {
    icon: "share_vs",
    title: "http://carriepage.com",
  },
  {
    icon: "flag",
    title: "6956 Henderson Park",
  },
];
const aboutInformationTwo = [
  {
    icon: "messenger",
    title: "+1 (345) 556-2248",
  },
  {
    icon: "facebook",
    title: "facebook-carrie-page",
  },
  {
    icon: "skype",
    title: "carrie-page",
  },
  {
    icon: "whatsapp",
    title: "+1 (345) 556-2248",
  },
];
</script>
<template>
  <div class="p-card bg-primary-lighten-5 br-8 h-100">
    <v-btn block color="primary" class="text-capitalize mb-6" flat>
      <i class="text-18 me-2 tio-">add</i>
      Add Contacts</v-btn
    >
    <!-- dialog problem  -->
    <!-- <v-col cols="12">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
        </template>

        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col> -->
    <div class="d-flex justify-space-between">
      <v-btn icon flat class="bg-secondary-lighten-5">
        <i class="text-secondary text-20 tio-">edit</i>
      </v-btn>
      <v-btn icon flat class="bg-secondary-lighten-5">
        <i class="text-secondary text-20 tio-">more_horizontal</i>
      </v-btn>
    </div>
    <div class="text-center mb-5">
      <v-avatar size="124" class="mb-4">
        <img class="w-full" src="@/assets/images/faces/2.jpg" alt="" />
      </v-avatar>
      <div class="text-subtitle-2 f-600 mb-2">Carrie Page</div>
      <div class="text-subtitle-2 text-secondary">Designer</div>
    </div>
    <div v-for="(item, index) in aboutInformation" :key="index">
      <div class="d-flex align-center mb-4">
        <i class="text-secondary text-20 tio- me-4">{{ item.icon }}</i>
        <div class="text-caption">{{ item.title }}</div>
      </div>
    </div>
    <div class="mb-10"></div>
    <div v-for="(item, index) in aboutInformationTwo" :key="index">
      <div class="d-flex align-center mb-4">
        <i class="text-secondary text-20 tio- me-4">{{ item.icon }}</i>
        <div class="text-caption">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.br-8 {
  border-radius: 8px;
}
</style>
