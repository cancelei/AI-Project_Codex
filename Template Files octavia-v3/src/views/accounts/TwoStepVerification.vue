<script setup>
import Account from "@/components/Account.vue";
import { reactive } from "@vue/reactivity";

const switch1 = reactive(true);
</script>
<template>
  <v-container>
    <Account>
      <base-card class="pa-0">
        <div class="p-card">
          <div class="d-flex align-center">
            <v-card-title class="pa-0 me-4 text-subtitle-2 f-600"
              >Two-step verification
            </v-card-title>
            <v-switch v-model="switch1"></v-switch>
          </div>
          <div class="text-caption text-secondary">
            Start by entering your password so that we know it's you. Then we'll
            walk you through two more simple steps.
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="p-card">
          <v-row>
            <v-col cols="12" lg="4"
              ><v-text-field
                outlined
                hide-details
                variant="outlined"
                label="Account Password"
                type="password"
              ></v-text-field>
              <div class="text-caption text-secondary font-weight-normal">
                This is the password you use to log in to your Front account.
              </div>
            </v-col>
            <v-col cols="12">
              <div class="d-flex flex-wrap">
                <v-btn class="text-capitalize me-3 mb-3" color="primary" flat
                  >Set Up</v-btn
                >
                <v-btn class="text-capitalize me-3 mb-3 border-secondary" flat
                  >Cancel</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
      </base-card>
    </Account>
  </v-container>
</template>
