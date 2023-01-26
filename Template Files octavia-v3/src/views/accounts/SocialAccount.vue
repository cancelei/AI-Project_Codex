<script setup>
import Account from "@/components/Account.vue";
</script>
<template>
  <v-container>
    <Account>
      <base-card class="pa-0" card-title="Social Account">
        <div
          class="p-card d-flex justify-space-between align-center py-4 flex-wrap"
        >
          <div class="d-flex align-center">
            <i class="text-20 me-3 text-secondary tio-">facebook</i>
            <div>
              <div class="text-caption f-600">Facebook</div>
              <div class="text-caption text-secondary">
                www.facebook.com/ui-lib
              </div>
            </div>
          </div>
          <v-btn class="text-capitalize" color="primary" variant="outlined"
            >Disconnect</v-btn
          >
        </div>
        <v-divider class="line-color"></v-divider>
        <div
          class="p-card d-flex justify-space-between align-center py-4 flex-wrap"
        >
          <div class="d-flex align-center">
            <i class="text-20 me-3 text-secondary tio-">twitter</i>
            <div>
              <div class="text-caption f-600">Twitter</div>
              <div class="text-caption text-secondary">
                www.twitter.com/htmlstream
              </div>
            </div>
          </div>
          <v-btn class="text-capitalize" color="primary" variant="outlined"
            >Disconnect</v-btn
          >
        </div>
        <v-divider class="line-color"></v-divider>
        <div
          class="p-card d-flex justify-space-between align-center py-4 flex-wrap"
        >
          <div class="d-flex align-center">
            <i class="text-20 me-3 text-secondary tio-">linkedin</i>
            <div>
              <div class="text-caption f-600">Linkedin</div>
              <div class="text-caption text-secondary">
                www.linkedin.com/htmlstream
              </div>
            </div>
          </div>
          <v-btn class="text-capitalize" color="primary" variant="outlined"
            >Disconnect</v-btn
          >
        </div>
        <v-divider class="line-color"></v-divider>
        <div
          class="p-card d-flex justify-space-between align-center py-4 flex-wrap"
        >
          <div class="d-flex align-center">
            <i class="text-20 me-3 text-secondary tio-">behance</i>
            <div>
              <div class="text-caption f-600">Behance</div>
              <div class="text-caption text-secondary">Not Connected</div>
            </div>
          </div>
          <v-btn flat class="text-capitalize" color="primary">Connect</v-btn>
        </div>
      </base-card>
    </Account>
  </v-container>
</template>
