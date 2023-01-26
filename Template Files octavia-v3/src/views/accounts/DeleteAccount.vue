<script setup>
import Account from "@/components/Account.vue";
</script>

<template>
  <v-container>
    <Account>
      <base-card class="pa-0">
        <div class="p-card">
          <v-card-title class="pa-0 me-4 text-subtitle-2 f-600"
            >Delete Your Account
          </v-card-title>
          <div class="text-caption text-secondary">
            When you delete your account, you lose access to Front account
            services, and we permanently delete your personal data.You can
            cancel the deletion for 14 days.
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="p-card">
          <v-checkbox
            color="primary"
            label="Confirm that I want to delete my account."
            hide-details
            class="mb-8"
          ></v-checkbox>
          <div class="d-flex">
            <v-btn color="error" class="me-3 text-capitalize" flat
              >Delete</v-btn
            >
            <v-btn class="text-capitalize border-secondary" flat>Cancel</v-btn>
          </div>
        </div>
      </base-card>
    </Account>
  </v-container>
</template>
