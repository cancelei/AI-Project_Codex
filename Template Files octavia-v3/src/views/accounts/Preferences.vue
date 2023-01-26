<script setup>
import Account from "@/components/Account.vue";
import { ref } from "@vue/reactivity";
const { switch1, switch2 } = ref(true);

const { checkbox, checkbox2, checkbox3, checkbox4 } = ref(false);
</script>

<template>
  <v-container>
    <Account>
      <base-card class="pa-0" card-title="General Preferences">
        <div class="p-card">
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                class="mb-4"
                label="Language"
                color="primary"
                variant="outlined"
                hide-details=""
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                class="mb-4"
                label="Time Zone"
                color="primary"
                variant="outlined"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="d-flex justify-space-between align-center mb-4">
                <div>
                  <div class="text-caption f-600">Early Release</div>
                  <div class="text-caption text-secondary">
                    Get included on new Nitro features
                  </div>
                </div>
                <div>
                  <v-switch
                    v-model="switch1"
                    color="primary"
                    hide-details
                  ></v-switch>
                </div>
              </div>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="text-caption f-600">
                    See info about people who view my profile
                  </div>

                  <router-link to="#" class="text-caption text-decoration-none"
                    >More about viewer info.</router-link
                  >
                </div>
                <div>
                  <v-switch
                    v-model="switch2"
                    color="primary"
                    hide-details
                  ></v-switch>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-card-title class="mb-4 border-bottom text-body-2 font-weight-medium"
          >Email Preferences</v-card-title
        >
        <v-divider class="line-color"></v-divider>
        <div class="p-card">
          <div class="d-flex align-center mb-4">
            <div class="me-2">
              <v-checkbox
                hide-details
                v-model="checkbox"
                color="primary"
              ></v-checkbox>
            </div>
            <div>
              <div class="text-caption f-600">Successful Payments</div>
              <div class="text-caption text-secondary">
                Receive a notification for every successful payment.
              </div>
            </div>
          </div>
          <div class="d-flex align-center mb-4">
            <div class="me-2">
              <v-checkbox
                hide-details
                v-model="checkbox2"
                color="primary"
              ></v-checkbox>
            </div>
            <div>
              <div class="text-caption f-600">Payouts</div>
              <div class="text-caption text-secondary">
                Receive a notification for every initiated payout.
              </div>
            </div>
          </div>
          <div class="d-flex align-center mb-4">
            <div class="me-2">
              <v-checkbox
                hide-details
                v-model="checkbox3"
                color="primary"
              ></v-checkbox>
            </div>
            <div>
              <div class="text-caption f-600">Fee Collection</div>
              <div class="text-caption text-secondary">
                Receive a notification each time you collect a fee from sales
              </div>
            </div>
          </div>
          <div class="d-flex align-center mb-4">
            <div class="me-2">
              <v-checkbox
                hide-details
                v-model="checkbox4"
                color="primary"
              ></v-checkbox>
            </div>
            <div>
              <div class="text-caption f-600">Invoice Payments</div>
              <div class="text-caption text-secondary">
                Receive a notification if a customer sends an incorrect amount
                to pay their invoice.
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <v-btn flat class="text-capitalize me-3 mb-3" color="primary"
              >Save Changes</v-btn
            >
            <v-btn flat class="text-capitalize border-secondary me-3 mb-3"
              >Cancel</v-btn
            >
          </div>
        </div>
      </base-card>
    </Account>
  </v-container>
</template>
