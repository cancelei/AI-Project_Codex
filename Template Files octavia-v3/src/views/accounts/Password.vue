<script setup>
import Account from "@/components/Account.vue";
</script>

<template>
  <v-container>
    <Account>
      <base-card class="pa-0" card-title="Password">
        <div class="p-card">
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                class="mb-2"
                label="Current Password"
                color="primary"
                variant="outlined"
                hide-details
              ></v-text-field>
              <v-text-field
                class="mb-2"
                label="New Password"
                color="primary"
                variant="outlined"
                hide-details
              ></v-text-field>
              <v-text-field
                class="mb-2"
                label="Confirm Password"
                color="primary"
                variant="outlined"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="text-caprion f-600">Password requirements:</div>
              <div class="text-secondary text-caption font-weight-regular mb-4">
                Ensure that these requirements are met:
              </div>
              <div class="d-flex align-center mb-3">
                <div class="pa-1 bg-primary rounded-circle me-2"></div>
                <div class="text-caption font-weight-medium">
                  Minimum 8 characters long - the more, the better
                </div>
              </div>
              <div class="d-flex align-center mb-3">
                <div class="pa-1 bg-primary rounded-circle me-2"></div>
                <div class="text-caption font-weight-medium">
                  At least one lowercase character
                </div>
              </div>
              <div class="d-flex align-center mb-3">
                <div class="pa-1 bg-primary rounded-circle me-2"></div>
                <div class="text-caption font-weight-medium">
                  At least one uppercase character
                </div>
              </div>
              <div class="d-flex align-center mb-3">
                <div class="pa-1 bg-primary rounded-circle me-2"></div>
                <div class="text-caption font-weight-medium">
                  At least one number, symbol, or whitespace character
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="d-flex flex-wrap">
                <v-btn flat class="text-capitalize me-4 mb-3" color="primary"
                  >Save Changes</v-btn
                >
                <v-btn flat class="border-secondary text-capitalize me-2 mb-3"
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
